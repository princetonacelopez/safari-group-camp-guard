import { ref } from 'vue'

export const useCamera = () => {
    const stream = ref<MediaStream | null>(null)
    const videoElement = ref<HTMLVideoElement | null>(null)
    const currentFacingMode = ref<'user' | 'environment'>('environment')
    const hasPermission = ref<boolean>(false)
    const error = ref<string | null>(null)

    const startCamera = async (facingMode: 'user' | 'environment' = 'environment') => {
        try {
            error.value = null

            // Stop existing stream if any
            if (stream.value) {
                stopCamera()
            }

            const constraints: MediaStreamConstraints = {
                video: {
                    facingMode: { ideal: facingMode },
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            }

            const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
            stream.value = mediaStream
            currentFacingMode.value = facingMode
            hasPermission.value = true

            // Attach to video element if available
            if (videoElement.value) {
                videoElement.value.srcObject = mediaStream
            }

            return { success: true, stream: mediaStream }
        } catch (err: any) {
            error.value = err.message || 'Failed to access camera'
            hasPermission.value = false
            console.error('Camera error:', err)
            return { success: false, error: error.value }
        }
    }

    const stopCamera = () => {
        if (stream.value) {
            stream.value.getTracks().forEach(track => track.stop())
            stream.value = null
        }

        if (videoElement.value) {
            videoElement.value.srcObject = null
        }
    }

    const toggleCamera = async () => {
        const newFacingMode = currentFacingMode.value === 'user' ? 'environment' : 'user'
        return await startCamera(newFacingMode)
    }

    const attachVideoElement = (element: HTMLVideoElement) => {
        videoElement.value = element
        if (stream.value) {
            element.srcObject = stream.value
        }
    }

    const checkCameraPermission = async (): Promise<boolean> => {
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                error.value = 'Camera API not supported'
                return false
            }

            const result = await navigator.permissions.query({ name: 'camera' as PermissionName })
            hasPermission.value = result.state === 'granted'
            return hasPermission.value
        } catch (err) {
            console.error('Permission check error:', err)
            return false
        }
    }

    return {
        stream,
        videoElement,
        currentFacingMode,
        hasPermission,
        error,
        startCamera,
        stopCamera,
        toggleCamera,
        attachVideoElement,
        checkCameraPermission
    }
}
