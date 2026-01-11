import { computed } from 'vue';
import { o as useState } from './server.mjs';

const useAuth = () => {
  const user = useState("auth-user", () => null);
  const accessToken = useState("auth-token", () => null);
  const refreshToken = useState("auth-refresh-token", () => null);
  const isAuthenticated = computed(() => !!user.value && !!accessToken.value);
  const login = async (username, password) => {
    try {
      const response = await $fetch("/api/auth/login", {
        method: "POST",
        body: { username, password }
      });
      user.value = response.user;
      accessToken.value = response.accessToken;
      refreshToken.value = response.refreshToken;
      if (false) ;
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error.data?.message || "Login failed"
      };
    }
  };
  const logout = async () => {
    try {
      await $fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken.value}`
        }
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      user.value = null;
      accessToken.value = null;
      refreshToken.value = null;
    }
  };
  const refreshAccessToken = async () => {
    try {
      const response = await $fetch("/api/auth/refresh", {
        method: "POST",
        body: { refreshToken: refreshToken.value }
      });
      accessToken.value = response.accessToken;
      if (false) ;
      return true;
    } catch (error) {
      console.error("Token refresh error:", error);
      await logout();
      return false;
    }
  };
  const initAuth = () => {
  };
  return {
    user,
    accessToken,
    refreshToken,
    isAuthenticated,
    login,
    logout,
    refreshAccessToken,
    initAuth
  };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-C5b0AVUb.mjs.map
