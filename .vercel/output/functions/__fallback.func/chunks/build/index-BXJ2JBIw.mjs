import { _ as _sfc_main$1 } from './Badge-xuDy56o5.mjs';
import { b as _sfc_main$8, c as _sfc_main$d } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Input-DP7q2rqs.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createBlock, createCommentVNode, createVNode, openBlock, withKeys, Fragment, renderList, computed, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Html5Qrcode } from 'html5-qrcode';
import { u as useAuth } from './useAuth-BA_ZK-6_.mjs';
import 'reka-ui';
import '../nitro/nitro.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'jose';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const useIndexedDB = () => {
  const openDB = () => {
    return new Promise((resolve, reject) => {
      {
        reject(new Error("IndexedDB is only available in the browser"));
        return;
      }
    });
  };
  const saveEmployees = async (employees) => {
    const database = await openDB();
    const transaction = database.transaction(["employees"], "readwrite");
    const store = transaction.objectStore("employees");
    for (const employee of employees) {
      store.put(employee);
    }
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  };
  const getEmployee = async (employeeId) => {
    const database = await openDB();
    const transaction = database.transaction(["employees"], "readonly");
    const store = transaction.objectStore("employees");
    const request = store.get(employeeId);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  };
  const getAllEmployees = async () => {
    const database = await openDB();
    const transaction = database.transaction(["employees"], "readonly");
    const store = transaction.objectStore("employees");
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };
  const saveVerificationLog = async (log) => {
    const database = await openDB();
    const transaction = database.transaction(["verificationLogs"], "readwrite");
    const store = transaction.objectStore("verificationLogs");
    const request = store.add(log);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };
  const getUnsyncedLogs = async () => {
    const database = await openDB();
    const transaction = database.transaction(["verificationLogs"], "readonly");
    const store = transaction.objectStore("verificationLogs");
    const index = store.index("synced");
    const request = index.getAll(false);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  };
  const markLogsAsSynced = async (logIds) => {
    const database = await openDB();
    const transaction = database.transaction(["verificationLogs"], "readwrite");
    const store = transaction.objectStore("verificationLogs");
    for (const id of logIds) {
      const getRequest = store.get(id);
      getRequest.onsuccess = () => {
        const log = getRequest.result;
        if (log) {
          log.synced = true;
          store.put(log);
        }
      };
    }
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  };
  const saveManningList = async (manningList) => {
    const database = await openDB();
    const transaction = database.transaction(["manningList"], "readwrite");
    const store = transaction.objectStore("manningList");
    store.clear();
    for (const item of manningList) {
      store.put(item);
    }
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  };
  const isInManningList = async (employeeId) => {
    const database = await openDB();
    const transaction = database.transaction(["manningList"], "readonly");
    const store = transaction.objectStore("manningList");
    const request = store.get(employeeId);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const result = request.result;
        resolve(result ? result.isActive : false);
      };
      request.onerror = () => reject(request.error);
    });
  };
  const clearAllData = async () => {
    const database = await openDB();
    const transaction = database.transaction(
      ["employees", "verificationLogs", "manningList"],
      "readwrite"
    );
    transaction.objectStore("employees").clear();
    transaction.objectStore("verificationLogs").clear();
    transaction.objectStore("manningList").clear();
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  };
  return {
    openDB,
    saveEmployees,
    getEmployee,
    getAllEmployees,
    saveVerificationLog,
    getUnsyncedLogs,
    markLogsAsSynced,
    saveManningList,
    isInManningList,
    clearAllData
  };
};
const useSync = () => {
  const isOnline = ref(true);
  const isSyncing = ref(false);
  const lastSyncTime = ref(null);
  const syncError = ref(null);
  const { getUnsyncedLogs, markLogsAsSynced, saveEmployees, saveManningList } = useIndexedDB();
  const { accessToken } = useAuth();
  const checkOnlineStatus = () => {
  };
  const setupOnlineListener = () => {
  };
  const downloadData = async () => {
    try {
      if (!isOnline.value) {
        throw new Error("Cannot download data while offline");
      }
      const employeesResponse = await $fetch("/api/sync/download", {
        headers: {
          Authorization: `Bearer ${accessToken.value}`
        }
      });
      await saveEmployees(employeesResponse.employees);
      await saveManningList(employeesResponse.manningList);
      return { success: true };
    } catch (error) {
      console.error("Download error:", error);
      return { success: false, error: error.message };
    }
  };
  const uploadLogs = async () => {
    try {
      if (!isOnline.value) {
        throw new Error("Cannot upload logs while offline");
      }
      const unsyncedLogs = await getUnsyncedLogs();
      if (unsyncedLogs.length === 0) {
        return { success: true, uploaded: 0 };
      }
      const response = await $fetch("/api/sync/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken.value}`
        },
        body: { logs: unsyncedLogs }
      });
      const logIds = unsyncedLogs.map((log) => log.id).filter((id) => id !== void 0);
      await markLogsAsSynced(logIds);
      return { success: true, uploaded: unsyncedLogs.length };
    } catch (error) {
      console.error("Upload error:", error);
      return { success: false, error: error.message };
    }
  };
  const syncData = async () => {
    if (isSyncing.value || !isOnline.value) {
      return { success: false, error: "Already syncing or offline" };
    }
    isSyncing.value = true;
    syncError.value = null;
    try {
      const uploadResult = await uploadLogs();
      const downloadResult = await downloadData();
      if (uploadResult.success && downloadResult.success) {
        lastSyncTime.value = /* @__PURE__ */ new Date();
        return { success: true };
      } else {
        throw new Error(uploadResult.error || downloadResult.error || "Sync failed");
      }
    } catch (error) {
      syncError.value = error.message;
      return { success: false, error: error.message };
    } finally {
      isSyncing.value = false;
    }
  };
  const getPendingSyncCount = async () => {
    try {
      const unsyncedLogs = await getUnsyncedLogs();
      return unsyncedLogs.length;
    } catch (error) {
      console.error("Error getting pending sync count:", error);
      return 0;
    }
  };
  const needsSync = computed(() => {
    if (!lastSyncTime.value) return true;
    const hoursSinceSync = (Date.now() - lastSyncTime.value.getTime()) / (1e3 * 60 * 60);
    return hoursSinceSync > 24;
  });
  return {
    isOnline,
    isSyncing,
    lastSyncTime,
    syncError,
    needsSync,
    checkOnlineStatus,
    setupOnlineListener,
    downloadData,
    uploadLogs,
    syncData,
    getPendingSyncCount
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOnline, isSyncing, syncData } = useSync();
    const { getEmployee, saveVerificationLog, isInManningList } = useIndexedDB();
    const isCameraActive = ref(false);
    const isVerifying = ref(false);
    const manualId = ref("");
    const lastScan = ref(null);
    const scanHistory = ref([]);
    const html5QrCode = ref(null);
    const toggleCameraActive = async () => {
      if (isCameraActive.value) {
        await stopScanner();
      } else {
        await startScanner();
      }
    };
    const startScanner = async () => {
      try {
        isCameraActive.value = true;
        await nextTick();
        html5QrCode.value = new Html5Qrcode("qr-scanner");
        await html5QrCode.value.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 }
          },
          onScanSuccess,
          onScanError
        );
      } catch (error) {
        console.error("Scanner start error:", error);
        isCameraActive.value = false;
      }
    };
    const stopScanner = async () => {
      if (html5QrCode.value) {
        await html5QrCode.value.stop();
        html5QrCode.value = null;
      }
      isCameraActive.value = false;
    };
    const switchCamera = async () => {
      await stopScanner();
      await startScanner();
    };
    const onScanSuccess = async (decodedText) => {
      await verifyEmployee(decodedText);
    };
    const onScanError = (error) => {
    };
    const handleManualVerify = async () => {
      if (manualId.value.trim()) {
        await verifyEmployee(manualId.value.trim());
        manualId.value = "";
      }
    };
    const verifyEmployee = async (employeeId) => {
      if (isVerifying.value) return;
      isVerifying.value = true;
      try {
        let result;
        if (isOnline.value) {
          result = await $fetch(`/api/verify/${employeeId}`, {
            method: "POST",
            body: { verifiedBy: "scanner" }
          });
        } else {
          const employee = await getEmployee(employeeId);
          const inManningList = employee ? await isInManningList(employeeId) : false;
          result = {
            success: !!employee,
            status: employee && inManningList ? "authorized" : "unauthorized",
            employee: employee || null,
            message: employee ? void 0 : "Employee not found"
          };
          await saveVerificationLog({
            employeeId,
            scanTimestamp: /* @__PURE__ */ new Date(),
            verifiedBy: "scanner",
            status: result.status,
            synced: false
          });
        }
        lastScan.value = {
          ...result,
          timestamp: /* @__PURE__ */ new Date()
        };
        scanHistory.value.unshift(lastScan.value);
        if (scanHistory.value.length > 10) {
          scanHistory.value = scanHistory.value.slice(0, 10);
        }
        if (false) ;
        if (false) ;
      } catch (error) {
        console.error("Verification error:", error);
      } finally {
        isVerifying.value = false;
      }
    };
    const handleSync = async () => {
      await syncData();
    };
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleTimeString();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      const _component_UCard = _sfc_main$1$1;
      const _component_UInput = _sfc_main$2;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-emerald-600 text-white p-4"><div class="container mx-auto flex justify-between items-center"><div><h1 class="text-2xl font-bold">Camp QR Scanner</h1><p class="text-sm text-emerald-100">Employee Verification System</p></div><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: unref(isOnline) ? "success" : "error",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isOnline) ? "Online" : "Offline")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isOnline) ? "Online" : "Offline"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isOnline)) {
        _push(ssrRenderComponent(_component_UButton, {
          icon: "i-heroicons-arrow-path",
          color: "neutral",
          variant: "outline",
          loading: unref(isSyncing),
          onClick: handleSync
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sync `);
            } else {
              return [
                createTextVNode(" Sync ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="container mx-auto p-4 max-w-4xl">`);
      _push(ssrRenderComponent(_component_UCard, { class: "mb-6" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Scan QR Code</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-camera",
              color: "primary",
              onClick: toggleCameraActive
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isCameraActive) ? "Stop Camera" : "Start Camera")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isCameraActive) ? "Stop Camera" : "Start Camera"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "text-xl font-semibold" }, "Scan QR Code"),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-camera",
                  color: "primary",
                  onClick: toggleCameraActive
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(isCameraActive) ? "Stop Camera" : "Start Camera"), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isCameraActive)) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="relative bg-black rounded-lg overflow-hidden" style="${ssrRenderStyle({ "height": "400px" })}"${_scopeId}><div id="qr-scanner" class="w-full h-full"${_scopeId}></div></div><div class="flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                icon: "i-heroicons-arrow-path",
                color: "neutral",
                onClick: switchCamera
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Switch Camera `);
                  } else {
                    return [
                      createTextVNode(" Switch Camera ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-4"${_scopeId}><div class="space-y-1"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Or enter Employee ID manually</label><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(manualId),
              "onUpdate:modelValue": ($event) => isRef(manualId) ? manualId.value = $event : null,
              placeholder: "Enter Employee ID",
              class: "flex-1",
              onKeyup: handleManualVerify
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: unref(isVerifying),
              onClick: handleManualVerify
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Verify `);
                } else {
                  return [
                    createTextVNode(" Verify ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              unref(isCameraActive) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4"
              }, [
                createVNode("div", {
                  class: "relative bg-black rounded-lg overflow-hidden",
                  style: { "height": "400px" }
                }, [
                  createVNode("div", {
                    id: "qr-scanner",
                    class: "w-full h-full"
                  })
                ]),
                createVNode("div", { class: "flex justify-center" }, [
                  createVNode(_component_UButton, {
                    icon: "i-heroicons-arrow-path",
                    color: "neutral",
                    onClick: switchCamera
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Switch Camera ")
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", { class: "space-y-1" }, [
                  createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Or enter Employee ID manually"),
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_UInput, {
                      modelValue: unref(manualId),
                      "onUpdate:modelValue": ($event) => isRef(manualId) ? manualId.value = $event : null,
                      placeholder: "Enter Employee ID",
                      class: "flex-1",
                      onKeyup: withKeys(handleManualVerify, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      loading: unref(isVerifying),
                      onClick: handleManualVerify
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Verify ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(lastScan)) {
        _push(ssrRenderComponent(_component_UCard, {
          class: [{
            "border-2": true,
            "border-emerald-500": unref(lastScan).status === "authorized",
            "border-red-500": unref(lastScan).status === "unauthorized"
          }, "mb-6"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-start gap-4"${_scopeId}><div class="flex-shrink-0"${_scopeId}>`);
              if (unref(lastScan).employee?.photoUrl) {
                _push2(`<img${ssrRenderAttr("src", unref(lastScan).employee.photoUrl)} alt="Employee Photo" class="w-24 h-24 rounded-lg object-cover"${_scopeId}>`);
              } else {
                _push2(`<div class="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-user",
                  class: "text-4xl text-gray-400"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div><div class="flex-1"${_scopeId}><div class="flex items-center gap-2 mb-2"${_scopeId}><h3 class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(unref(lastScan).employee?.fullName || "Unknown Employee")}</h3>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(lastScan).status === "authorized" ? "success" : "error",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(lastScan).status === "authorized" ? "AUTHORIZED" : "UNAUTHORIZED")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(lastScan).status === "authorized" ? "AUTHORIZED" : "UNAUTHORIZED"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(lastScan).employee) {
                _push2(`<div class="space-y-1 text-gray-600"${_scopeId}><p${_scopeId}><strong${_scopeId}>ID:</strong> ${ssrInterpolate(unref(lastScan).employee.employeeId)}</p><p${_scopeId}><strong${_scopeId}>Position:</strong> ${ssrInterpolate(unref(lastScan).employee.position)}</p><p${_scopeId}><strong${_scopeId}>Building:</strong> ${ssrInterpolate(unref(lastScan).employee.building)}</p><p${_scopeId}><strong${_scopeId}>Room:</strong> ${ssrInterpolate(unref(lastScan).employee.roomNumber)}</p></div>`);
              } else {
                _push2(`<p class="text-red-600"${_scopeId}>${ssrInterpolate(unref(lastScan).message || "Employee not found in system")}</p>`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-start gap-4" }, [
                  createVNode("div", { class: "flex-shrink-0" }, [
                    unref(lastScan).employee?.photoUrl ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(lastScan).employee.photoUrl,
                      alt: "Employee Photo",
                      class: "w-24 h-24 rounded-lg object-cover"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-user",
                        class: "text-4xl text-gray-400"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                      createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(unref(lastScan).employee?.fullName || "Unknown Employee"), 1),
                      createVNode(_component_UBadge, {
                        color: unref(lastScan).status === "authorized" ? "success" : "error",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(lastScan).status === "authorized" ? "AUTHORIZED" : "UNAUTHORIZED"), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ]),
                    unref(lastScan).employee ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-1 text-gray-600"
                    }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "ID:"),
                        createTextVNode(" " + toDisplayString(unref(lastScan).employee.employeeId), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Position:"),
                        createTextVNode(" " + toDisplayString(unref(lastScan).employee.position), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Building:"),
                        createTextVNode(" " + toDisplayString(unref(lastScan).employee.building), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Room:"),
                        createTextVNode(" " + toDisplayString(unref(lastScan).employee.roomNumber), 1)
                      ])
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-red-600"
                    }, toDisplayString(unref(lastScan).message || "Employee not found in system"), 1))
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Recent Scans (Last 10)</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Recent Scans (Last 10)")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(scanHistory).length > 0) {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(scanHistory), (scan, index) => {
                _push2(`<div class="${ssrRenderClass([{
                  "bg-emerald-50": scan.status === "authorized",
                  "bg-red-50": scan.status === "unauthorized"
                }, "flex justify-between items-center p-3 rounded-lg"])}"${_scopeId}><div${_scopeId}><p class="font-medium"${_scopeId}>${ssrInterpolate(scan.employee?.fullName || "Unknown")}</p><p class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(scan.employee?.employeeId)}</p></div><div class="text-right"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: scan.status === "authorized" ? "success" : "error"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(scan.status)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(scan.status), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(formatTime(scan.timestamp))}</p></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<p class="text-gray-500 text-center py-4"${_scopeId}> No scans yet </p>`);
            }
          } else {
            return [
              unref(scanHistory).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-2"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(scanHistory), (scan, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: ["flex justify-between items-center p-3 rounded-lg", {
                      "bg-emerald-50": scan.status === "authorized",
                      "bg-red-50": scan.status === "unauthorized"
                    }]
                  }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "font-medium" }, toDisplayString(scan.employee?.fullName || "Unknown"), 1),
                      createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(scan.employee?.employeeId), 1)
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode(_component_UBadge, {
                        color: scan.status === "authorized" ? "success" : "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(scan.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(formatTime(scan.timestamp)), 1)
                    ])
                  ], 2);
                }), 128))
              ])) : (openBlock(), createBlock("p", {
                key: 1,
                class: "text-gray-500 text-center py-4"
              }, " No scans yet "))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BXJ2JBIw.mjs.map
