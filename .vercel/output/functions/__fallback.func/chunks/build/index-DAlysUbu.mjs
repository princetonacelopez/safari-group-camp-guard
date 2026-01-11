import { i as useRouter, b as _sfc_main$8, e as _sfc_main$b, d as useAppConfig, t as tv, c as _sfc_main$d, g as get, f as useLocale, h as usePortal } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Input-DP7q2rqs.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, isRef, createBlock, createCommentVNode, openBlock, withModifiers, useSlots, computed, renderSlot, Fragment, renderList, mergeModels, useModel, useTemplateRef, toRef, toHandlers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent, useForwardProps, Primitive, DialogRoot, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogPortal, DialogOverlay } from 'reka-ui';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { _ as _sfc_main$4 } from './Badge-xuDy56o5.mjs';
import { J as upperFirst, o as defu } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { u as useAuth } from './useAuth-BA_ZK-6_.mjs';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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

const theme$2 = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate",
    "trailingBadge": "shrink-0",
    "trailingBadgeSize": "sm",
    "content": "focus:outline-none w-full"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-elevated rounded-lg",
        "trigger": "grow",
        "indicator": "rounded-md shadow-xs"
      },
      "link": {
        "list": "border-default",
        "indicator": "rounded-full",
        "trigger": "focus:outline-none"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-primary",
        "trigger": "data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-secondary",
        "trigger": "data-[state=active]:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-success",
        "trigger": "data-[state=active]:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-info",
        "trigger": "data-[state=active]:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-warning",
        "trigger": "data-[state=active]:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-error",
        "trigger": "data-[state=active]:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-inverted",
        "trigger": "data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};
const _sfc_main$3 = {
  __name: "UTabs",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    content: { type: Boolean, required: false, default: true },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultValue: { type: null, required: false, default: "0" },
    modelValue: { type: null, required: false },
    activationMode: { type: String, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "unmountOnHide"), emits);
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.tabs || {} })({
      color: props.color,
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    const triggersRef = ref([]);
    __expose({
      triggersRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        orientation: __props.orientation,
        "activation-mode": __props.activationMode,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              "data-slot": "list",
              class: ui.value.list({ class: props.ui?.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.items, (item, index) => {
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      ref_for: true,
                      ref: (el) => triggersRef.value[index] = el,
                      value: item.value ?? String(index),
                      disabled: item.disabled,
                      "data-slot": "trigger",
                      class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            ui: ui.value
                          }, () => {
                            if (item.icon) {
                              _push4(ssrRenderComponent(_sfc_main$d, {
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item.ui?.leadingIcon] })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$b, mergeProps({
                                size: item.ui?.leadingAvatarSize || props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "leadingAvatar",
                                class: ui.value.leadingAvatar({ class: [props.ui?.leadingAvatar, item.ui?.leadingAvatar] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [props.ui?.label, item.ui?.label] }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            ui: ui.value
                          }, () => {
                            if (item.badge || item.badge === 0) {
                              _push4(ssrRenderComponent(_sfc_main$4, mergeProps({
                                color: "neutral",
                                variant: "outline",
                                size: item.ui?.trailingBadgeSize || props.ui?.trailingBadgeSize || ui.value.trailingBadgeSize()
                              }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                "data-slot": "trailingBadge",
                                class: ui.value.trailingBadge({ class: [props.ui?.trailingBadge, item.ui?.trailingBadge] })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              ui: ui.value
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item.ui?.leadingIcon] })
                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                key: 1,
                                size: item.ui?.leadingAvatarSize || props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "leadingAvatar",
                                class: ui.value.leadingAvatar({ class: [props.ui?.leadingAvatar, item.ui?.leadingAvatar] })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              ui: ui.value
                            }, () => [
                              item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
                                key: 0,
                                color: "neutral",
                                variant: "outline",
                                size: item.ui?.trailingBadgeSize || props.ui?.trailingBadgeSize || ui.value.trailingBadgeSize()
                              }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                                "data-slot": "trailingBadge",
                                class: ui.value.trailingBadge({ class: [props.ui?.trailingBadge, item.ui?.trailingBadge] })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, null, 8, ["class"]),
                    renderSlot(_ctx.$slots, "list-leading"),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        ref_for: true,
                        ref: (el) => triggersRef.value[index] = el,
                        value: item.value ?? String(index),
                        disabled: item.disabled,
                        "data-slot": "trigger",
                        class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            ui: ui.value
                          }, () => [
                            item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                              key: 0,
                              name: item.icon,
                              "data-slot": "leadingIcon",
                              class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item.ui?.leadingIcon] })
                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                              key: 1,
                              size: item.ui?.leadingAvatarSize || props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                            }, { ref_for: true }, item.avatar, {
                              "data-slot": "leadingAvatar",
                              class: ui.value.leadingAvatar({ class: [props.ui?.leadingAvatar, item.ui?.leadingAvatar] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                          ]),
                          unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "label",
                            class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                          }, [
                            renderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => [
                              createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            ui: ui.value
                          }, () => [
                            item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
                              key: 0,
                              color: "neutral",
                              variant: "outline",
                              size: item.ui?.trailingBadgeSize || props.ui?.trailingBadgeSize || ui.value.trailingBadgeSize()
                            }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                              "data-slot": "trailingBadge",
                              class: ui.value.trailingBadge({ class: [props.ui?.trailingBadge, item.ui?.trailingBadge] })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128)),
                    renderSlot(_ctx.$slots, "list-trailing")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!__props.content) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, index) => {
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value ?? String(index),
                  "data-slot": "content",
                  class: ui.value.content({ class: [props.ui?.content, item.ui?.content, item.class] })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index,
                        ui: ui.value
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList), {
                "data-slot": "list",
                class: ui.value.list({ class: props.ui?.list })
              }, {
                default: withCtx(() => [
                  createVNode(unref(TabsIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, null, 8, ["class"]),
                  renderSlot(_ctx.$slots, "list-leading"),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock(unref(TabsTrigger), {
                      key: index,
                      ref_for: true,
                      ref: (el) => triggersRef.value[index] = el,
                      value: item.value ?? String(index),
                      disabled: item.disabled,
                      "data-slot": "trigger",
                      class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "leading", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                            key: 0,
                            name: item.icon,
                            "data-slot": "leadingIcon",
                            class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item.ui?.leadingIcon] })
                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                            key: 1,
                            size: item.ui?.leadingAvatarSize || props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                          }, { ref_for: true }, item.avatar, {
                            "data-slot": "leadingAvatar",
                            class: ui.value.leadingAvatar({ class: [props.ui?.leadingAvatar, item.ui?.leadingAvatar] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ]),
                        unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                          key: 0,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index
                          }, () => [
                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "trailing", {
                          item,
                          index,
                          ui: ui.value
                        }, () => [
                          item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "outline",
                            size: item.ui?.trailingBadgeSize || props.ui?.trailingBadgeSize || ui.value.trailingBadgeSize()
                          }, { ref_for: true }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            "data-slot": "trailingBadge",
                            class: ui.value.trailingBadge({ class: [props.ui?.trailingBadge, item.ui?.trailingBadge] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled", "class"]);
                  }), 128)),
                  renderSlot(_ctx.$slots, "list-trailing")
                ]),
                _: 3
              }, 8, ["class"]),
              !!__props.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value ?? String(index),
                  "data-slot": "content",
                  class: ui.value.content({ class: [props.ui?.content, item.ui?.content, item.class] })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index,
                      ui: ui.value
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative overflow-auto",
    "base": "min-w-full",
    "caption": "sr-only",
    "thead": "relative",
    "tbody": "isolate [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary",
    "tfoot": "relative",
    "tr": "data-[selected=true]:bg-elevated/50",
    "th": "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
    "td": "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0",
    "separator": "absolute z-1 left-0 w-full h-px bg-(--ui-border-accented)",
    "empty": "py-6 text-center text-sm text-muted",
    "loading": "py-6 text-center"
  },
  "variants": {
    "virtualize": {
      "false": {
        "base": "overflow-clip",
        "tbody": "divide-y divide-default"
      }
    },
    "pinned": {
      "true": {
        "th": "sticky bg-default/75 z-1",
        "td": "sticky bg-default/75 z-1"
      }
    },
    "sticky": {
      "true": {
        "thead": "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1",
        "tfoot": "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1"
      },
      "header": {
        "thead": "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1"
      },
      "footer": {
        "tfoot": "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1"
      }
    },
    "loading": {
      "true": {
        "thead": "after:absolute after:z-1 after:h-px"
      }
    },
    "loadingAnimation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "loadingColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "loading": true,
      "loadingColor": "primary",
      "class": {
        "thead": "after:bg-primary"
      }
    },
    {
      "loading": true,
      "loadingColor": "secondary",
      "class": {
        "thead": "after:bg-secondary"
      }
    },
    {
      "loading": true,
      "loadingColor": "success",
      "class": {
        "thead": "after:bg-success"
      }
    },
    {
      "loading": true,
      "loadingColor": "info",
      "class": {
        "thead": "after:bg-info"
      }
    },
    {
      "loading": true,
      "loadingColor": "warning",
      "class": {
        "thead": "after:bg-warning"
      }
    },
    {
      "loading": true,
      "loadingColor": "error",
      "class": {
        "thead": "after:bg-error"
      }
    },
    {
      "loading": true,
      "loadingColor": "neutral",
      "class": {
        "thead": "after:bg-inverted"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel",
      "class": {
        "thead": "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "carousel-inverse",
      "class": {
        "thead": "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "swing",
      "class": {
        "thead": "after:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "loading": true,
      "loadingAnimation": "elastic",
      "class": {
        "thead": "after:animate-[elastic_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "loadingColor": "primary",
    "loadingAnimation": "carousel"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UTable",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    data: { type: Array, required: false },
    columns: { type: Array, required: false },
    caption: { type: String, required: false },
    meta: { type: Object, required: false },
    virtualize: { type: [Boolean, Object], required: false, default: false },
    empty: { type: String, required: false },
    sticky: { type: [Boolean, String], required: false },
    loading: { type: Boolean, required: false },
    loadingColor: { type: null, required: false },
    loadingAnimation: { type: null, required: false },
    watchOptions: { type: Object, required: false, default: () => ({
      deep: true
    }) },
    globalFilterOptions: { type: Object, required: false },
    columnFiltersOptions: { type: Object, required: false },
    columnPinningOptions: { type: Object, required: false },
    columnSizingOptions: { type: Object, required: false },
    visibilityOptions: { type: Object, required: false },
    sortingOptions: { type: Object, required: false },
    groupingOptions: { type: Object, required: false },
    expandedOptions: { type: Object, required: false },
    rowSelectionOptions: { type: Object, required: false },
    rowPinningOptions: { type: Object, required: false },
    paginationOptions: { type: Object, required: false },
    facetedOptions: { type: Object, required: false },
    onSelect: { type: Function, required: false },
    onHover: { type: Function, required: false },
    onContextmenu: { type: [Function, Array], required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    state: { type: Object, required: false },
    onStateChange: { type: Function, required: false },
    renderFallbackValue: { type: null, required: false },
    _features: { type: Array, required: false },
    autoResetAll: { type: Boolean, required: false },
    debugAll: { type: Boolean, required: false },
    debugCells: { type: Boolean, required: false },
    debugColumns: { type: Boolean, required: false },
    debugHeaders: { type: Boolean, required: false },
    debugRows: { type: Boolean, required: false },
    debugTable: { type: Boolean, required: false },
    defaultColumn: { type: Object, required: false },
    getRowId: { type: Function, required: false },
    getSubRows: { type: Function, required: false },
    initialState: { type: Object, required: false },
    mergeOptions: { type: Function, required: false }
  }, {
    "globalFilter": { type: String },
    "globalFilterModifiers": {},
    "columnFilters": { type: Array },
    "columnFiltersModifiers": {},
    "columnOrder": { type: Array },
    "columnOrderModifiers": {},
    "columnVisibility": { type: Object },
    "columnVisibilityModifiers": {},
    "columnPinning": { type: Object },
    "columnPinningModifiers": {},
    "columnSizing": { type: Object },
    "columnSizingModifiers": {},
    "columnSizingInfo": { type: Object },
    "columnSizingInfoModifiers": {},
    "rowSelection": { type: Object },
    "rowSelectionModifiers": {},
    "rowPinning": { type: Object },
    "rowPinningModifiers": {},
    "sorting": { type: Array },
    "sortingModifiers": {},
    "grouping": { type: Array },
    "groupingModifiers": {},
    "expanded": { type: [Boolean, Object] },
    "expandedModifiers": {},
    "pagination": { type: Object },
    "paginationModifiers": {}
  }),
  emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const data = ref(props.data ?? []);
    const meta = computed(() => props.meta ?? {});
    const columns = computed(() => processColumns(props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) }))));
    function processColumns(columns2) {
      return columns2.map((column) => {
        const col = { ...column };
        if ("columns" in col && col.columns) {
          col.columns = processColumns(col.columns);
        }
        if (!col.cell) {
          col.cell = ({ getValue }) => {
            const value = getValue();
            if (value === "" || value === null || value === void 0) {
              return " ";
            }
            return String(value);
          };
        }
        return col;
      });
    }
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.table || {} })({
      sticky: props.virtualize ? false : props.sticky,
      loading: props.loading,
      loadingColor: props.loadingColor,
      loadingAnimation: props.loadingAnimation,
      virtualize: !!props.virtualize
    }));
    const [DefineTableTemplate, ReuseTableTemplate] = createReusableTemplate();
    const [DefineRowTemplate, ReuseRowTemplate] = createReusableTemplate({
      props: {
        row: {
          type: Object,
          required: true
        },
        style: {
          type: Object,
          required: false
        }
      }
    });
    const hasFooter = computed(() => {
      function hasFooterRecursive(columns2) {
        for (const column of columns2) {
          if ("footer" in column) {
            return true;
          }
          if ("columns" in column && hasFooterRecursive(column.columns)) {
            return true;
          }
        }
        return false;
      }
      return hasFooterRecursive(columns.value);
    });
    const globalFilterState = useModel(__props, "globalFilter");
    const columnFiltersState = useModel(__props, "columnFilters");
    const columnOrderState = useModel(__props, "columnOrder");
    const columnVisibilityState = useModel(__props, "columnVisibility");
    const columnPinningState = useModel(__props, "columnPinning");
    const columnSizingState = useModel(__props, "columnSizing");
    const columnSizingInfoState = useModel(__props, "columnSizingInfo");
    const rowSelectionState = useModel(__props, "rowSelection");
    const rowPinningState = useModel(__props, "rowPinning");
    const sortingState = useModel(__props, "sorting");
    const groupingState = useModel(__props, "grouping");
    const expandedState = useModel(__props, "expanded");
    const paginationState = useModel(__props, "pagination");
    const rootRef = useTemplateRef("rootRef");
    const tableRef = useTemplateRef("tableRef");
    const tableProps = useForwardProps(reactivePick(props, "_features", "autoResetAll", "debugAll", "debugCells", "debugColumns", "debugHeaders", "debugRows", "debugTable", "defaultColumn", "getRowId", "getSubRows", "initialState", "mergeOptions", "renderFallbackValue"));
    const tableApi = useVueTable({
      ...tableProps.value,
      get data() {
        return data.value;
      },
      get columns() {
        return columns.value;
      },
      meta: meta.value,
      getCoreRowModel: getCoreRowModel(),
      ...props.globalFilterOptions || {},
      ...globalFilterState.value !== void 0 && { onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState) },
      ...props.columnFiltersOptions || {},
      getFilteredRowModel: getFilteredRowModel(),
      ...columnFiltersState.value !== void 0 && { onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState) },
      ...columnOrderState.value !== void 0 && { onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState) },
      ...props.visibilityOptions || {},
      ...columnVisibilityState.value !== void 0 && { onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState) },
      ...props.columnPinningOptions || {},
      ...columnPinningState.value !== void 0 && { onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState) },
      ...props.columnSizingOptions || {},
      ...columnSizingState.value !== void 0 && { onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState) },
      ...columnSizingInfoState.value !== void 0 && { onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState) },
      ...props.rowSelectionOptions || {},
      ...rowSelectionState.value !== void 0 && { onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState) },
      ...props.rowPinningOptions || {},
      ...rowPinningState.value !== void 0 && { onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState) },
      ...props.sortingOptions || {},
      getSortedRowModel: getSortedRowModel(),
      ...sortingState.value !== void 0 && { onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState) },
      ...props.groupingOptions || {},
      ...groupingState.value !== void 0 && { onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState) },
      ...props.expandedOptions || {},
      getExpandedRowModel: getExpandedRowModel(),
      ...expandedState.value !== void 0 && { onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState) },
      ...props.paginationOptions || {},
      ...paginationState.value !== void 0 && { onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState) },
      ...props.facetedOptions || {},
      state: {
        get globalFilter() {
          return globalFilterState.value;
        },
        get columnFilters() {
          return columnFiltersState.value;
        },
        get columnOrder() {
          return columnOrderState.value;
        },
        get columnVisibility() {
          return columnVisibilityState.value;
        },
        get columnPinning() {
          return columnPinningState.value;
        },
        get expanded() {
          return expandedState.value;
        },
        get rowSelection() {
          return rowSelectionState.value;
        },
        get sorting() {
          return sortingState.value;
        },
        get grouping() {
          return groupingState.value;
        },
        get rowPinning() {
          return rowPinningState.value;
        },
        get columnSizing() {
          return columnSizingState.value;
        },
        get columnSizingInfo() {
          return columnSizingInfoState.value;
        },
        get pagination() {
          return paginationState.value;
        }
      }
    });
    const rows = computed(() => tableApi.getRowModel().rows);
    const virtualizerProps = toRef(() => defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, {
      estimateSize: 65,
      overscan: 12
    }));
    const virtualizer = !!props.virtualize && useVirtualizer({
      ...virtualizerProps.value,
      get count() {
        return rows.value.length;
      },
      getScrollElement: () => rootRef.value?.$el,
      estimateSize: (index) => {
        const estimate = virtualizerProps.value.estimateSize;
        return typeof estimate === "function" ? estimate(index) : estimate;
      }
    });
    const renderedSize = computed(() => {
      if (!virtualizer) {
        return 0;
      }
      const virtualItems = virtualizer.value.getVirtualItems();
      if (!virtualItems?.length) {
        return 0;
      }
      return virtualItems.reduce((sum, item) => sum + item.size, 0);
    });
    function valueUpdater(updaterOrValue, ref2) {
      ref2.value = typeof updaterOrValue === "function" ? updaterOrValue(ref2.value) : updaterOrValue;
    }
    function onRowSelect(e, row) {
      if (!props.onSelect) {
        return;
      }
      const target = e.target;
      const isInteractive = target.closest("button") || target.closest("a");
      if (isInteractive) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      props.onSelect(e, row);
    }
    function onRowHover(e, row) {
      if (!props.onHover) {
        return;
      }
      props.onHover(e, row);
    }
    function onRowContextmenu(e, row) {
      if (!props.onContextmenu) {
        return;
      }
      if (Array.isArray(props.onContextmenu)) {
        props.onContextmenu.forEach((fn) => fn(e, row));
      } else {
        props.onContextmenu(e, row);
      }
    }
    function resolveValue(prop, arg) {
      if (typeof prop === "function") {
        return prop(arg);
      }
      return prop;
    }
    function getColumnStyles(column) {
      const styles = {};
      const pinned = column.getIsPinned();
      if (pinned === "left") {
        styles.left = `${column.getStart("left")}px`;
      } else if (pinned === "right") {
        styles.right = `${column.getAfter("right")}px`;
      }
      return styles;
    }
    watch(() => props.data, () => {
      data.value = props.data ? [...props.data] : [];
    }, props.watchOptions);
    __expose({
      get $el() {
        return rootRef.value?.$el;
      },
      tableRef,
      tableApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineRowTemplate), null, {
        default: withCtx(({ row, style }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<tr${ssrRenderAttr("data-selected", row.getIsSelected())}${ssrRenderAttr("data-selectable", !!props.onSelect || !!props.onHover || !!props.onContextmenu)}${ssrRenderAttr("data-expanded", row.getIsExpanded())}${ssrRenderAttr("role", props.onSelect ? "button" : void 0)}${ssrRenderAttr("tabindex", props.onSelect ? 0 : void 0)} data-slot="tr" class="${ssrRenderClass(ui.value.tr({
              class: [
                props.ui?.tr,
                resolveValue(unref(tableApi).options.meta?.class?.tr, row)
              ]
            }))}" style="${ssrRenderStyle([resolveValue(unref(tableApi).options.meta?.style?.tr, row), style])}"${_scopeId}><!--[-->`);
            ssrRenderList(row.getVisibleCells(), (cell) => {
              _push2(`<td${ssrRenderAttr("data-pinned", cell.column.getIsPinned())}${ssrRenderAttr("colspan", resolveValue(cell.column.columnDef.meta?.colspan?.td, cell))}${ssrRenderAttr("rowspan", resolveValue(cell.column.columnDef.meta?.rowspan?.td, cell))} data-slot="td" class="${ssrRenderClass(ui.value.td({
                class: [
                  props.ui?.td,
                  resolveValue(cell.column.columnDef.meta?.class?.td, cell)
                ],
                pinned: !!cell.column.getIsPinned()
              }))}" style="${ssrRenderStyle([
                getColumnStyles(cell.column),
                resolveValue(cell.column.columnDef.meta?.style?.td, cell)
              ])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => {
                _push2(ssrRenderComponent(unref(FlexRender), {
                  render: cell.column.columnDef.cell,
                  props: cell.getContext()
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</td>`);
            });
            _push2(`<!--]--></tr>`);
            if (row.getIsExpanded()) {
              _push2(`<tr data-slot="tr" class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><td${ssrRenderAttr("colspan", row.getAllCells().length)} data-slot="td" class="${ssrRenderClass(ui.value.td({ class: [props.ui?.td] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "expanded", { row }, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("tr", {
                "data-selected": row.getIsSelected(),
                "data-selectable": !!props.onSelect || !!props.onHover || !!props.onContextmenu,
                "data-expanded": row.getIsExpanded(),
                role: props.onSelect ? "button" : void 0,
                tabindex: props.onSelect ? 0 : void 0,
                "data-slot": "tr",
                class: ui.value.tr({
                  class: [
                    props.ui?.tr,
                    resolveValue(unref(tableApi).options.meta?.class?.tr, row)
                  ]
                }),
                style: [resolveValue(unref(tableApi).options.meta?.style?.tr, row), style],
                onClick: ($event) => onRowSelect($event, row),
                onPointerenter: ($event) => onRowHover($event, row),
                onPointerleave: ($event) => onRowHover($event, null),
                onContextmenu: ($event) => onRowContextmenu($event, row)
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                  return openBlock(), createBlock("td", {
                    key: cell.id,
                    "data-pinned": cell.column.getIsPinned(),
                    colspan: resolveValue(cell.column.columnDef.meta?.colspan?.td, cell),
                    rowspan: resolveValue(cell.column.columnDef.meta?.rowspan?.td, cell),
                    "data-slot": "td",
                    class: ui.value.td({
                      class: [
                        props.ui?.td,
                        resolveValue(cell.column.columnDef.meta?.class?.td, cell)
                      ],
                      pinned: !!cell.column.getIsPinned()
                    }),
                    style: [
                      getColumnStyles(cell.column),
                      resolveValue(cell.column.columnDef.meta?.style?.td, cell)
                    ]
                  }, [
                    renderSlot(_ctx.$slots, `${cell.column.id}-cell`, mergeProps({ ref_for: true }, cell.getContext()), () => [
                      createVNode(unref(FlexRender), {
                        render: cell.column.columnDef.cell,
                        props: cell.getContext()
                      }, null, 8, ["render", "props"])
                    ])
                  ], 14, ["data-pinned", "colspan", "rowspan"]);
                }), 128))
              ], 46, ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick", "onPointerenter", "onPointerleave", "onContextmenu"]),
              row.getIsExpanded() ? (openBlock(), createBlock("tr", {
                key: 0,
                "data-slot": "tr",
                class: ui.value.tr({ class: [props.ui?.tr] })
              }, [
                createVNode("td", {
                  colspan: row.getAllCells().length,
                  "data-slot": "td",
                  class: ui.value.td({ class: [props.ui?.td] })
                }, [
                  renderSlot(_ctx.$slots, "expanded", { row })
                ], 10, ["colspan"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineTableTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table data-slot="base" class="${ssrRenderClass(ui.value.base({ class: [props.ui?.base] }))}"${_scopeId}>`);
            if (__props.caption || !!slots.caption) {
              _push2(`<caption data-slot="caption" class="${ssrRenderClass(ui.value.caption({ class: [props.ui?.caption] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
                _push2(`${ssrInterpolate(__props.caption)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</caption>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<thead data-slot="thead" class="${ssrRenderClass(ui.value.thead({ class: [props.ui?.thead] }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
              _push2(`<tr data-slot="tr" class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><!--[-->`);
              ssrRenderList(headerGroup.headers, (header) => {
                _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())}${ssrRenderAttr("scope", header.colSpan > 1 ? "colgroup" : "col")}${ssrRenderAttr("colspan", header.colSpan > 1 ? header.colSpan : void 0)}${ssrRenderAttr("rowspan", header.rowSpan > 1 ? header.rowSpan : void 0)} data-slot="th" class="${ssrRenderClass(ui.value.th({
                  class: [
                    props.ui?.th,
                    resolveValue(header.column.columnDef.meta?.class?.th, header)
                  ],
                  pinned: !!header.column.getIsPinned()
                }))}" style="${ssrRenderStyle([
                  getColumnStyles(header.column),
                  resolveValue(header.column.columnDef.meta?.style?.th, header)
                ])}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => {
                  if (!header.isPlaceholder) {
                    _push2(ssrRenderComponent(unref(FlexRender), {
                      render: header.column.columnDef.header,
                      props: header.getContext()
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--><tr data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator] }))}"${_scopeId}></tr></thead><tbody data-slot="tbody" class="${ssrRenderClass(ui.value.tbody({ class: [props.ui?.tbody] }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "body-top", {}, null, _push2, _parent2, _scopeId);
            if (rows.value.length) {
              _push2(`<!--[-->`);
              if (unref(virtualizer)) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(virtualizer).getVirtualItems(), (virtualRow, index) => {
                  _push2(ssrRenderComponent(unref(ReuseRowTemplate), {
                    row: rows.value[virtualRow.index],
                    style: {
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`
                    }
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(rows.value, (row) => {
                  _push2(ssrRenderComponent(unref(ReuseRowTemplate), {
                    key: row.id,
                    row
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }
              _push2(`<!--]-->`);
            } else if (__props.loading && !!slots["loading"]) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", unref(tableApi).getAllLeafColumns().length)} data-slot="loading" class="${ssrRenderClass(ui.value.loading({ class: props.ui?.loading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", unref(tableApi).getAllLeafColumns().length)} data-slot="empty" class="${ssrRenderClass(ui.value.empty({ class: props.ui?.empty }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
                _push2(`${ssrInterpolate(__props.empty || unref(t)("table.noData"))}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            }
            ssrRenderSlot(_ctx.$slots, "body-bottom", {}, null, _push2, _parent2, _scopeId);
            _push2(`</tbody>`);
            if (hasFooter.value) {
              _push2(`<tfoot data-slot="tfoot" class="${ssrRenderClass(ui.value.tfoot({ class: [props.ui?.tfoot] }))}" style="${ssrRenderStyle(unref(virtualizer) ? {
                transform: `translateY(${unref(virtualizer).getTotalSize() - renderedSize.value}px)`
              } : void 0)}"${_scopeId}><tr data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator] }))}"${_scopeId}></tr><!--[-->`);
              ssrRenderList(unref(tableApi).getFooterGroups(), (footerGroup) => {
                _push2(`<tr data-slot="tr" class="${ssrRenderClass(ui.value.tr({ class: [props.ui?.tr] }))}"${_scopeId}><!--[-->`);
                ssrRenderList(footerGroup.headers, (header) => {
                  _push2(`<th${ssrRenderAttr("data-pinned", header.column.getIsPinned())}${ssrRenderAttr("colspan", header.colSpan > 1 ? header.colSpan : void 0)}${ssrRenderAttr("rowspan", header.rowSpan > 1 ? header.rowSpan : void 0)} data-slot="th" class="${ssrRenderClass(ui.value.th({
                    class: [
                      props.ui?.th,
                      resolveValue(header.column.columnDef.meta?.class?.th, header)
                    ],
                    pinned: !!header.column.getIsPinned()
                  }))}" style="${ssrRenderStyle([
                    getColumnStyles(header.column),
                    resolveValue(header.column.columnDef.meta?.style?.th, header)
                  ])}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, `${header.id}-footer`, mergeProps({ ref_for: true }, header.getContext()), () => {
                    if (!header.isPlaceholder) {
                      _push2(ssrRenderComponent(unref(FlexRender), {
                        render: header.column.columnDef.footer,
                        props: header.getContext()
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                  }, _push2, _parent2, _scopeId);
                  _push2(`</th>`);
                });
                _push2(`<!--]--></tr>`);
              });
              _push2(`<!--]--></tfoot>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</table>`);
          } else {
            return [
              createVNode("table", {
                ref_key: "tableRef",
                ref: tableRef,
                "data-slot": "base",
                class: ui.value.base({ class: [props.ui?.base] })
              }, [
                __props.caption || !!slots.caption ? (openBlock(), createBlock("caption", {
                  key: 0,
                  "data-slot": "caption",
                  class: ui.value.caption({ class: [props.ui?.caption] })
                }, [
                  renderSlot(_ctx.$slots, "caption", {}, () => [
                    createTextVNode(toDisplayString(__props.caption), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                createVNode("thead", {
                  "data-slot": "thead",
                  class: ui.value.thead({ class: [props.ui?.thead] })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock("tr", {
                      key: headerGroup.id,
                      "data-slot": "tr",
                      class: ui.value.tr({ class: [props.ui?.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          scope: header.colSpan > 1 ? "colgroup" : "col",
                          colspan: header.colSpan > 1 ? header.colSpan : void 0,
                          rowspan: header.rowSpan > 1 ? header.rowSpan : void 0,
                          "data-slot": "th",
                          class: ui.value.th({
                            class: [
                              props.ui?.th,
                              resolveValue(header.column.columnDef.meta?.class?.th, header)
                            ],
                            pinned: !!header.column.getIsPinned()
                          }),
                          style: [
                            getColumnStyles(header.column),
                            resolveValue(header.column.columnDef.meta?.style?.th, header)
                          ]
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-header`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.header,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 14, ["data-pinned", "scope", "colspan", "rowspan"]);
                      }), 128))
                    ], 2);
                  }), 128)),
                  createVNode("tr", {
                    "data-slot": "separator",
                    class: ui.value.separator({ class: [props.ui?.separator] })
                  }, null, 2)
                ], 2),
                createVNode("tbody", {
                  "data-slot": "tbody",
                  class: ui.value.tbody({ class: [props.ui?.tbody] })
                }, [
                  renderSlot(_ctx.$slots, "body-top"),
                  rows.value.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    unref(virtualizer) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(virtualizer).getVirtualItems(), (virtualRow, index) => {
                      return openBlock(), createBlock(unref(ReuseRowTemplate), {
                        key: rows.value[virtualRow.index]?.id,
                        row: rows.value[virtualRow.index],
                        style: {
                          height: `${virtualRow.size}px`,
                          transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`
                        }
                      }, null, 8, ["row", "style"]);
                    }), 128)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(rows.value, (row) => {
                      return openBlock(), createBlock(unref(ReuseRowTemplate), {
                        key: row.id,
                        row
                      }, null, 8, ["row"]);
                    }), 128))
                  ], 64)) : __props.loading && !!slots["loading"] ? (openBlock(), createBlock("tr", { key: 1 }, [
                    createVNode("td", {
                      colspan: unref(tableApi).getAllLeafColumns().length,
                      "data-slot": "loading",
                      class: ui.value.loading({ class: props.ui?.loading })
                    }, [
                      renderSlot(_ctx.$slots, "loading")
                    ], 10, ["colspan"])
                  ])) : (openBlock(), createBlock("tr", { key: 2 }, [
                    createVNode("td", {
                      colspan: unref(tableApi).getAllLeafColumns().length,
                      "data-slot": "empty",
                      class: ui.value.empty({ class: props.ui?.empty })
                    }, [
                      renderSlot(_ctx.$slots, "empty", {}, () => [
                        createTextVNode(toDisplayString(__props.empty || unref(t)("table.noData")), 1)
                      ])
                    ], 10, ["colspan"])
                  ])),
                  renderSlot(_ctx.$slots, "body-bottom")
                ], 2),
                hasFooter.value ? (openBlock(), createBlock("tfoot", {
                  key: 1,
                  "data-slot": "tfoot",
                  class: ui.value.tfoot({ class: [props.ui?.tfoot] }),
                  style: unref(virtualizer) ? {
                    transform: `translateY(${unref(virtualizer).getTotalSize() - renderedSize.value}px)`
                  } : void 0
                }, [
                  createVNode("tr", {
                    "data-slot": "separator",
                    class: ui.value.separator({ class: [props.ui?.separator] })
                  }, null, 2),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tableApi).getFooterGroups(), (footerGroup) => {
                    return openBlock(), createBlock("tr", {
                      key: footerGroup.id,
                      "data-slot": "tr",
                      class: ui.value.tr({ class: [props.ui?.tr] })
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(footerGroup.headers, (header) => {
                        return openBlock(), createBlock("th", {
                          key: header.id,
                          "data-pinned": header.column.getIsPinned(),
                          colspan: header.colSpan > 1 ? header.colSpan : void 0,
                          rowspan: header.rowSpan > 1 ? header.rowSpan : void 0,
                          "data-slot": "th",
                          class: ui.value.th({
                            class: [
                              props.ui?.th,
                              resolveValue(header.column.columnDef.meta?.class?.th, header)
                            ],
                            pinned: !!header.column.getIsPinned()
                          }),
                          style: [
                            getColumnStyles(header.column),
                            resolveValue(header.column.columnDef.meta?.style?.th, header)
                          ]
                        }, [
                          renderSlot(_ctx.$slots, `${header.id}-footer`, mergeProps({ ref_for: true }, header.getContext()), () => [
                            !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                              key: 0,
                              render: header.column.columnDef.footer,
                              props: header.getContext()
                            }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                          ])
                        ], 14, ["data-pinned", "colspan", "rowspan"]);
                      }), 128))
                    ], 2);
                  }), 128))
                ], 6)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "rootRef",
        ref: rootRef,
        as: __props.as
      }, _ctx.$attrs, {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(virtualizer)) {
              _push2(`<div style="${ssrRenderStyle({
                height: `${unref(virtualizer).getTotalSize()}px`
              })}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseTableTemplate), null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(unref(ReuseTableTemplate), null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(virtualizer) ? (openBlock(), createBlock("div", {
                key: 0,
                style: {
                  height: `${unref(virtualizer).getTotalSize()}px`
                }
              }, [
                createVNode(unref(ReuseTableTemplate))
              ], 4)) : (openBlock(), createBlock(unref(ReuseTableTemplate), { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "overlay": "fixed inset-0",
    "content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default"
      }
    },
    "overlay": {
      "true": {
        "overlay": "bg-elevated/75"
      }
    },
    "scrollable": {
      "true": {
        "overlay": "overflow-y-auto",
        "content": "relative"
      },
      "false": {
        "content": "fixed",
        "body": "overflow-y-auto"
      }
    }
  },
  "compoundVariants": [
    {
      "scrollable": true,
      "fullscreen": false,
      "class": {
        "overlay": "grid place-items-center p-4 sm:py-8"
      }
    },
    {
      "scrollable": false,
      "fullscreen": false,
      "class": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden"
      }
    }
  ]
};
const _sfc_main$1 = {
  __name: "UModal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    scrollable: { type: Boolean, required: false },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      if (props.scrollable) {
        return {
          // FIXME: This is a workaround to prevent the modal from closing when clicking on the scrollbar https://reka-ui.com/docs/components/dialog#scrollable-overlay but it's not working on Mac OS.
          pointerDownOutside: (e) => {
            const originalEvent = e.detail.originalEvent;
            const target = originalEvent.target;
            if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
              e.preventDefault();
            }
          }
        };
      }
      return {};
    });
    const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.modal || {} })({
      transition: props.transition,
      fullscreen: props.fullscreen,
      overlay: props.overlay,
      scrollable: props.scrollable
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DefineContentTemplate), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  "data-slot": "wrapper",
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("modal.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("modal.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      "data-slot": "close",
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.scrollable) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseContentTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    if (__props.overlay) {
                      _push3(ssrRenderComponent(unref(DialogOverlay), {
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseContentTemplate))
                      ]),
                      _: 1
                    }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                        key: 0,
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      createVNode(unref(ReuseContentTemplate))
                    ], 64))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DefineContentTemplate), null, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "header",
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              "data-slot": "wrapper",
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$8, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.body ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "body",
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2)) : createCommentVNode("", true),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 2,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1024),
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseContentTemplate))
                    ]),
                    _: 1
                  }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(ReuseContentTemplate))
                  ], 64))
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout, accessToken } = useAuth();
    const router = useRouter();
    const selectedTab = ref(0);
    ref(false);
    const showDetailsModal = ref(false);
    const showIDPreviewModal = ref(false);
    const showEditModal = ref(false);
    const showImportModal = ref(false);
    const selectedEmployee = ref(null);
    const editingEmployee = ref(null);
    const isSaving = ref(false);
    const isImporting = ref(false);
    const selectedFile = ref(null);
    const fileInput = ref(null);
    const importResult = ref(null);
    const employees = ref([]);
    const logs = ref([]);
    const employeesError = ref(null);
    const logsError = ref(null);
    const isLoadingData = ref(false);
    const refreshEmployees = async () => {
      if (!accessToken.value) return;
      isLoadingData.value = true;
      try {
        employeesError.value = null;
        const data = await $fetch("/api/employees", {
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          }
        });
        employees.value = data.employees || [];
      } catch (error) {
        console.error("Failed to fetch employees:", error);
        employeesError.value = error;
        if (error.statusCode === 401) {
          handleLogout();
        }
      } finally {
        isLoadingData.value = false;
      }
    };
    const refreshLogs = async () => {
      if (!accessToken.value) return;
      isLoadingData.value = true;
      try {
        logsError.value = null;
        const data = await $fetch("/api/verification-logs", {
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          }
        });
        logs.value = data;
      } catch (error) {
        console.error("Failed to fetch logs:", error);
        logsError.value = error;
        if (error.statusCode === 401) {
          handleLogout();
        }
      } finally {
        isLoadingData.value = false;
      }
    };
    const employeeColumns = [
      { key: "photoUrl", label: "Photo", accessorKey: "photoUrl" },
      { key: "employeeId", label: "ID", accessorKey: "employeeId" },
      { key: "fullName", label: "Employee", accessorKey: "fullName" },
      { key: "jobCategory", label: "Category", accessorKey: "jobCategory" },
      { key: "nationality", label: "Nationality", accessorKey: "nationality" },
      { key: "designation", label: "Designated Area", accessorKey: "designatedArea" },
      { key: "status", label: "Status", accessorKey: "employeeStatus" },
      { key: "actions", label: "Actions", accessorKey: "id" }
    ];
    const logsColumns = [
      { key: "scanTimestamp", label: "Time", accessorKey: "scanTimestamp" },
      { key: "employee", label: "Employee", accessorKey: "employee" },
      { key: "status", label: "Status", accessorKey: "status" },
      { key: "verifiedBy", label: "Verified By", accessorKey: "verifiedBy" }
    ];
    const tabs = [
      {
        key: "employees",
        label: "Employees",
        icon: "i-heroicons-users",
        slot: "employees"
      },
      {
        key: "logs",
        label: "Verification Logs",
        icon: "i-heroicons-document-text",
        slot: "logs"
      }
    ];
    const stats = ref({
      totalEmployees: 0,
      manningListCount: 0,
      authorizedToday: 0,
      unauthorizedToday: 0
    });
    watch(accessToken, (newToken) => {
      if (newToken && employees.value.length === 0) {
        loadStats();
      }
    });
    const loadStats = async () => {
      await Promise.all([refreshEmployees(), refreshLogs()]);
      try {
        if (employees.value) {
          stats.value.totalEmployees = employees.value.length;
          stats.value.manningListCount = employees.value.filter((emp) => emp.isInManningList).length;
        }
      } catch (e) {
        console.error("Failed to load stats", e);
      }
    };
    const handleLogout = async () => {
      await logout();
      router.push("/admin/login");
    };
    const getCategoryColor = (category) => {
      if (!category) return "gray";
      const colors = {
        "Mgmt": "purple",
        "Gen": "blue",
        "Admin": "green",
        "Housing": "orange",
        "Furnt": "yellow",
        "Tech": "cyan",
        "Maint": "red"
      };
      return colors[category] || "gray";
    };
    const viewEmployeeDetails = (employee) => {
      selectedEmployee.value = employee;
      showDetailsModal.value = true;
    };
    const previewEmployeeID = (employee) => {
      selectedEmployee.value = employee;
      showIDPreviewModal.value = true;
    };
    const editEmployee = (employee) => {
      editingEmployee.value = { ...employee };
      showEditModal.value = true;
    };
    const saveEmployee = async () => {
      if (!editingEmployee.value || !accessToken.value) return;
      isSaving.value = true;
      try {
        await $fetch(`/api/employees/${editingEmployee.value.id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          },
          body: editingEmployee.value
        });
        showEditModal.value = false;
        await refreshEmployees();
      } catch (error) {
        console.error("Failed to save employee:", error);
        alert("Failed to save employee changes");
      } finally {
        isSaving.value = false;
      }
    };
    const getQRCodeURL = (employeeId) => {
      return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${employeeId}`;
    };
    const printEmployeeID = () => {
      const printContent = (void 0).getElementById("employee-id-card");
      if (!printContent) return;
      const printWindow = (void 0).open("", "", "height=600,width=800");
      if (!printWindow) return;
      printWindow.document.write("<html><head><title>Employee ID Card</title>");
      printWindow.document.write("<style>body { margin: 0; padding: 20px; font-family: system-ui; } @media print { body { margin: 0; } }</style>");
      printWindow.document.write("</head><body>");
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
    const handleFileSelect = (event) => {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0] || null;
        importResult.value = null;
      }
    };
    const uploadCSV = async () => {
      if (!selectedFile.value || !accessToken.value) return;
      isImporting.value = true;
      importResult.value = null;
      try {
        const formData = new FormData();
        formData.append("file", selectedFile.value);
        const result = await $fetch("/api/manning-list/import", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          },
          body: formData
        });
        importResult.value = {
          success: true,
          message: "Import successful!",
          details: `Imported ${result.imported || 0} employees, skipped ${result.skipped || 0} rows`
        };
        selectedFile.value = null;
        if (fileInput.value) {
          fileInput.value.value = "";
        }
        await refreshEmployees();
      } catch (error) {
        console.error("Failed to import CSV:", error);
        importResult.value = {
          success: false,
          message: "Import failed",
          details: error.message || "An error occurred during import"
        };
      } finally {
        isImporting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UCard = _sfc_main$1$1;
      const _component_UTabs = _sfc_main$3;
      const _component_UTable = _sfc_main$2;
      const _component_UAvatar = _sfc_main$b;
      const _component_UBadge = _sfc_main$4;
      const _component_UModal = _sfc_main$1;
      const _component_UInput = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><div class="bg-emerald-600 text-white p-4"><div class="container mx-auto flex justify-between items-center"><div><h1 class="text-2xl font-bold">Admin Panel</h1><p class="text-sm text-emerald-100">Camp QR Code Scanner</p></div><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-arrow-left",
        color: "neutral",
        variant: "outline",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Scanner `);
          } else {
            return [
              createTextVNode(" Scanner ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-arrow-right-on-rectangle",
        color: "neutral",
        variant: "outline",
        onClick: handleLogout
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Logout `);
          } else {
            return [
              createTextVNode(" Logout ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="container mx-auto p-4 max-w-7xl"><div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><p class="text-3xl font-bold text-emerald-600"${_scopeId}>${ssrInterpolate(unref(stats).totalEmployees)}</p><p class="text-gray-600"${_scopeId}>Total Employees</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("p", { class: "text-3xl font-bold text-emerald-600" }, toDisplayString(unref(stats).totalEmployees), 1),
                createVNode("p", { class: "text-gray-600" }, "Total Employees")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><p class="text-3xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(unref(stats).manningListCount)}</p><p class="text-gray-600"${_scopeId}>In Manning List</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("p", { class: "text-3xl font-bold text-blue-600" }, toDisplayString(unref(stats).manningListCount), 1),
                createVNode("p", { class: "text-gray-600" }, "In Manning List")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><p class="text-3xl font-bold text-green-600"${_scopeId}>${ssrInterpolate(unref(stats).authorizedToday)}</p><p class="text-gray-600"${_scopeId}>Authorized Today</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("p", { class: "text-3xl font-bold text-green-600" }, toDisplayString(unref(stats).authorizedToday), 1),
                createVNode("p", { class: "text-gray-600" }, "Authorized Today")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><p class="text-3xl font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(stats).unauthorizedToday)}</p><p class="text-gray-600"${_scopeId}>Unauthorized Today</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("p", { class: "text-3xl font-bold text-red-600" }, toDisplayString(unref(stats).unauthorizedToday), 1),
                createVNode("p", { class: "text-gray-600" }, "Unauthorized Today")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        items: tabs,
        modelValue: unref(selectedTab),
        "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null
      }, {
        employees: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>All Employees (${ssrInterpolate(unref(employees)?.length || 0)})</h2><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-arrow-up-tray",
              color: "primary",
              variant: "outline",
              onClick: ($event) => showImportModal.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Import CSV `);
                } else {
                  return [
                    createTextVNode(" Import CSV ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-arrow-path",
              color: "neutral",
              variant: "ghost",
              onClick: refreshEmployees
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Refresh `);
                } else {
                  return [
                    createTextVNode(" Refresh ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTable, {
                    data: unref(employees),
                    columns: employeeColumns,
                    loading: unref(isLoadingData)
                  }, {
                    "photoUrl-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.original.photoUrl,
                          alt: row.original.fullName,
                          size: "sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAvatar, {
                            src: row.original.photoUrl,
                            alt: row.original.fullName,
                            size: "sm"
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    "fullName-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-medium"${_scopeId3}>${ssrInterpolate(row.original.fullName)}</div><div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.original.position)}</div>`);
                        if (row.original.grade) {
                          _push4(`<div class="text-xs text-gray-400"${_scopeId3}>Grade: ${ssrInterpolate(row.original.grade)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "font-medium" }, toDisplayString(row.original.fullName), 1),
                          createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.position), 1),
                          row.original.grade ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-400"
                          }, "Grade: " + toDisplayString(row.original.grade), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    "employeeId-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.original.employeeId)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.original.employeeId), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (row.original.mobile) {
                          _push4(`<div class="text-xs text-gray-500 mt-1"${_scopeId3}> 📱 ${ssrInterpolate(row.original.mobile)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "subtle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.original.employeeId), 1)
                            ]),
                            _: 2
                          }, 1024),
                          row.original.mobile ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500 mt-1"
                          }, " 📱 " + toDisplayString(row.original.mobile), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    "jobCategory-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: getCategoryColor(row.original.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.original.jobCategory || "N/A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.original.jobCategory || "N/A"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: getCategoryColor(row.original.jobCategory),
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.original.jobCategory || "N/A"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "nationality-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm"${_scopeId3}>${ssrInterpolate(row.original.nationality || "N/A")}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm" }, toDisplayString(row.original.nationality || "N/A"), 1)
                        ];
                      }
                    }),
                    "designation-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(row.original.designatedArea || "N/A")}</div>`);
                        if (row.original.foodCategory) {
                          _push4(`<div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.original.foodCategory)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("div", null, toDisplayString(row.original.designatedArea || "N/A"), 1),
                            row.original.foodCategory ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-xs text-gray-500"
                            }, toDisplayString(row.original.foodCategory), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    "status-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: row.original.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.original.employeeStatus || "N/A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.original.employeeStatus || "N/A"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: row.original.employeeStatus === "Actual" ? "success" : "warning",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.original.employeeStatus || "N/A"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "actions-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-heroicons-eye",
                          size: "xs",
                          color: "neutral",
                          variant: "ghost",
                          onClick: ($event) => viewEmployeeDetails(row.original),
                          title: "View Details"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-heroicons-identification",
                          size: "xs",
                          color: "primary",
                          variant: "ghost",
                          onClick: ($event) => previewEmployeeID(row.original),
                          title: "Preview ID"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-heroicons-pencil",
                          size: "xs",
                          color: "warning",
                          variant: "ghost",
                          onClick: ($event) => editEmployee(row.original),
                          title: "Edit"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-1" }, [
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-eye",
                              size: "xs",
                              color: "neutral",
                              variant: "ghost",
                              onClick: ($event) => viewEmployeeDetails(row.original),
                              title: "View Details"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-identification",
                              size: "xs",
                              color: "primary",
                              variant: "ghost",
                              onClick: ($event) => previewEmployeeID(row.original),
                              title: "Preview ID"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              icon: "i-heroicons-pencil",
                              size: "xs",
                              color: "warning",
                              variant: "ghost",
                              onClick: ($event) => editEmployee(row.original),
                              title: "Edit"
                            }, null, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTable, {
                      data: unref(employees),
                      columns: employeeColumns,
                      loading: unref(isLoadingData)
                    }, {
                      "photoUrl-cell": withCtx(({ row }) => [
                        createVNode(_component_UAvatar, {
                          src: row.original.photoUrl,
                          alt: row.original.fullName,
                          size: "sm"
                        }, null, 8, ["src", "alt"])
                      ]),
                      "fullName-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "font-medium" }, toDisplayString(row.original.fullName), 1),
                        createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.position), 1),
                        row.original.grade ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-400"
                        }, "Grade: " + toDisplayString(row.original.grade), 1)) : createCommentVNode("", true)
                      ]),
                      "employeeId-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.employeeId), 1)
                          ]),
                          _: 2
                        }, 1024),
                        row.original.mobile ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 mt-1"
                        }, " 📱 " + toDisplayString(row.original.mobile), 1)) : createCommentVNode("", true)
                      ]),
                      "jobCategory-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: getCategoryColor(row.original.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.jobCategory || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "nationality-cell": withCtx(({ row }) => [
                        createVNode("span", { class: "text-sm" }, toDisplayString(row.original.nationality || "N/A"), 1)
                      ]),
                      "designation-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("div", null, toDisplayString(row.original.designatedArea || "N/A"), 1),
                          row.original.foodCategory ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(row.original.foodCategory), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      "status-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.original.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.employeeStatus || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "actions-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-eye",
                            size: "xs",
                            color: "neutral",
                            variant: "ghost",
                            onClick: ($event) => viewEmployeeDetails(row.original),
                            title: "View Details"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-identification",
                            size: "xs",
                            color: "primary",
                            variant: "ghost",
                            onClick: ($event) => previewEmployeeID(row.original),
                            title: "Preview ID"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-pencil",
                            size: "xs",
                            color: "warning",
                            variant: "ghost",
                            onClick: ($event) => editEmployee(row.original),
                            title: "Edit"
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["data", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("h2", { class: "text-xl font-semibold" }, "All Employees (" + toDisplayString(unref(employees)?.length || 0) + ")", 1),
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_UButton, {
                      icon: "i-heroicons-arrow-up-tray",
                      color: "primary",
                      variant: "outline",
                      onClick: ($event) => showImportModal.value = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Import CSV ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      icon: "i-heroicons-arrow-path",
                      color: "neutral",
                      variant: "ghost",
                      onClick: refreshEmployees
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Refresh ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_UTable, {
                      data: unref(employees),
                      columns: employeeColumns,
                      loading: unref(isLoadingData)
                    }, {
                      "photoUrl-cell": withCtx(({ row }) => [
                        createVNode(_component_UAvatar, {
                          src: row.original.photoUrl,
                          alt: row.original.fullName,
                          size: "sm"
                        }, null, 8, ["src", "alt"])
                      ]),
                      "fullName-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "font-medium" }, toDisplayString(row.original.fullName), 1),
                        createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.position), 1),
                        row.original.grade ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-400"
                        }, "Grade: " + toDisplayString(row.original.grade), 1)) : createCommentVNode("", true)
                      ]),
                      "employeeId-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.employeeId), 1)
                          ]),
                          _: 2
                        }, 1024),
                        row.original.mobile ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 mt-1"
                        }, " 📱 " + toDisplayString(row.original.mobile), 1)) : createCommentVNode("", true)
                      ]),
                      "jobCategory-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: getCategoryColor(row.original.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.jobCategory || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "nationality-cell": withCtx(({ row }) => [
                        createVNode("span", { class: "text-sm" }, toDisplayString(row.original.nationality || "N/A"), 1)
                      ]),
                      "designation-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("div", null, toDisplayString(row.original.designatedArea || "N/A"), 1),
                          row.original.foodCategory ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(row.original.foodCategory), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      "status-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.original.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.employeeStatus || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "actions-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "flex gap-1" }, [
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-eye",
                            size: "xs",
                            color: "neutral",
                            variant: "ghost",
                            onClick: ($event) => viewEmployeeDetails(row.original),
                            title: "View Details"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-identification",
                            size: "xs",
                            color: "primary",
                            variant: "ghost",
                            onClick: ($event) => previewEmployeeID(row.original),
                            title: "Preview ID"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            icon: "i-heroicons-pencil",
                            size: "xs",
                            color: "warning",
                            variant: "ghost",
                            onClick: ($event) => editEmployee(row.original),
                            title: "Edit"
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["data", "loading"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        logs: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Verification Logs</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-arrow-path",
              color: "neutral",
              variant: "ghost",
              onClick: refreshLogs
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Refresh `);
                } else {
                  return [
                    createTextVNode(" Refresh ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTable, {
                    data: unref(logs) || [],
                    columns: logsColumns,
                    loading: unref(isLoadingData)
                  }, {
                    "scanTimestamp-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm"${_scopeId3}>${ssrInterpolate(new Date(row.original.scanTimestamp).toLocaleDateString())} <br${_scopeId3}><span class="text-gray-500"${_scopeId3}>${ssrInterpolate(new Date(row.original.scanTimestamp).toLocaleTimeString())}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm" }, [
                            createTextVNode(toDisplayString(new Date(row.original.scanTimestamp).toLocaleDateString()) + " ", 1),
                            createVNode("br"),
                            createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.original.scanTimestamp).toLocaleTimeString()), 1)
                          ])
                        ];
                      }
                    }),
                    "employee-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.original.employee?.photoUrl,
                          alt: row.original.employee?.fullName,
                          size: "xs"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><div class="font-medium text-sm"${_scopeId3}>${ssrInterpolate(row.original.employee?.fullName || "Unknown")}</div><div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.original.employeeId)}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UAvatar, {
                              src: row.original.employee?.photoUrl,
                              alt: row.original.employee?.fullName,
                              size: "xs"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.original.employee?.fullName || "Unknown"), 1),
                              createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.employeeId), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "status-cell": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: row.original.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.original.status.toUpperCase())}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.original.status.toUpperCase()), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: row.original.status === "authorized" ? "success" : "error",
                            variant: "subtle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.original.status.toUpperCase()), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTable, {
                      data: unref(logs) || [],
                      columns: logsColumns,
                      loading: unref(isLoadingData)
                    }, {
                      "scanTimestamp-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createTextVNode(toDisplayString(new Date(row.original.scanTimestamp).toLocaleDateString()) + " ", 1),
                          createVNode("br"),
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.original.scanTimestamp).toLocaleTimeString()), 1)
                        ])
                      ]),
                      "employee-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UAvatar, {
                            src: row.original.employee?.photoUrl,
                            alt: row.original.employee?.fullName,
                            size: "xs"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.original.employee?.fullName || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.employeeId), 1)
                          ])
                        ])
                      ]),
                      "status-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.original.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.status.toUpperCase()), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["data", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("h2", { class: "text-xl font-semibold" }, "Verification Logs"),
                  createVNode(_component_UButton, {
                    icon: "i-heroicons-arrow-path",
                    color: "neutral",
                    variant: "ghost",
                    onClick: refreshLogs
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Refresh ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode(_component_UTable, {
                      data: unref(logs) || [],
                      columns: logsColumns,
                      loading: unref(isLoadingData)
                    }, {
                      "scanTimestamp-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createTextVNode(toDisplayString(new Date(row.original.scanTimestamp).toLocaleDateString()) + " ", 1),
                          createVNode("br"),
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.original.scanTimestamp).toLocaleTimeString()), 1)
                        ])
                      ]),
                      "employee-cell": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UAvatar, {
                            src: row.original.employee?.photoUrl,
                            alt: row.original.employee?.fullName,
                            size: "xs"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.original.employee?.fullName || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.original.employeeId), 1)
                          ])
                        ])
                      ]),
                      "status-cell": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.original.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.original.status.toUpperCase()), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["data", "loading"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(showDetailsModal),
        "onUpdate:open": ($event) => isRef(showDetailsModal) ? showDetailsModal.value = $event : null,
        title: "Employee Details"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedEmployee)) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-start gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(selectedEmployee).photoUrl,
                alt: unref(selectedEmployee).fullName,
                size: "xl"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-1"${_scopeId}><h4 class="text-xl font-bold"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).fullName)}</h4><p class="text-gray-600"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).position)}</p>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getCategoryColor(unref(selectedEmployee).jobCategory),
                variant: "soft",
                class: "mt-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(selectedEmployee).jobCategory)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(selectedEmployee).jobCategory), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Employee ID</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).employeeId)}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Nationality</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).nationality || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Iqama Number</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).iqamaNumber || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Mobile</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).mobile || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Grade</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).grade || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Gender</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).gender || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Designated Area</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).designatedArea || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Food Category</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).foodCategory || "N/A")}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Building</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).building)}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Room Number</label><p class="text-gray-900"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).roomNumber)}</p></div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Status</label>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(selectedEmployee).employeeStatus === "Actual" ? "success" : "warning",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(selectedEmployee).employeeStatus || "N/A")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(selectedEmployee).employeeStatus || "N/A"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="text-sm font-medium text-gray-700"${_scopeId}>Active</label>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(selectedEmployee).isActive ? "success" : "error",
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(selectedEmployee).isActive ? "Yes" : "No")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(selectedEmployee).isActive ? "Yes" : "No"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedEmployee) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4"
              }, [
                createVNode("div", { class: "flex items-start gap-4" }, [
                  createVNode(_component_UAvatar, {
                    src: unref(selectedEmployee).photoUrl,
                    alt: unref(selectedEmployee).fullName,
                    size: "xl"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h4", { class: "text-xl font-bold" }, toDisplayString(unref(selectedEmployee).fullName), 1),
                    createVNode("p", { class: "text-gray-600" }, toDisplayString(unref(selectedEmployee).position), 1),
                    createVNode(_component_UBadge, {
                      color: getCategoryColor(unref(selectedEmployee).jobCategory),
                      variant: "soft",
                      class: "mt-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(selectedEmployee).jobCategory), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Employee ID"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).employeeId), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Nationality"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).nationality || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Iqama Number"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).iqamaNumber || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Mobile"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).mobile || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Grade"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).grade || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Gender"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).gender || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Designated Area"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).designatedArea || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Food Category"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).foodCategory || "N/A"), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Building"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).building), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Room Number"),
                    createVNode("p", { class: "text-gray-900" }, toDisplayString(unref(selectedEmployee).roomNumber), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Status"),
                    createVNode(_component_UBadge, {
                      color: unref(selectedEmployee).employeeStatus === "Actual" ? "success" : "warning",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(selectedEmployee).employeeStatus || "N/A"), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "text-sm font-medium text-gray-700" }, "Active"),
                    createVNode(_component_UBadge, {
                      color: unref(selectedEmployee).isActive ? "success" : "error",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(selectedEmployee).isActive ? "Yes" : "No"), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(showIDPreviewModal),
        "onUpdate:open": ($event) => isRef(showIDPreviewModal) ? showIDPreviewModal.value = $event : null,
        title: "Employee ID Card"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedEmployee)) {
              _push2(`<div id="employee-id-card" class="bg-white p-8"${_scopeId}><div class="border-4 border-emerald-600 rounded-lg p-6 max-w-md mx-auto"${_scopeId}><div class="text-center mb-4"${_scopeId}><h2 class="text-2xl font-bold text-emerald-600"${_scopeId}>SAFARI CAMP</h2><p class="text-sm text-gray-600"${_scopeId}>Employee Identification</p></div><div class="flex flex-col items-center mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                src: unref(selectedEmployee).photoUrl,
                alt: unref(selectedEmployee).fullName,
                size: "2xl",
                class: "mb-3"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-xl font-bold text-center"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).fullName)}</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(unref(selectedEmployee).position)}</p></div><div class="space-y-2 text-sm"${_scopeId}><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>ID:</span><span${_scopeId}>${ssrInterpolate(unref(selectedEmployee).employeeId)}</span></div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Nationality:</span><span${_scopeId}>${ssrInterpolate(unref(selectedEmployee).nationality)}</span></div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Category:</span><span${_scopeId}>${ssrInterpolate(unref(selectedEmployee).jobCategory)}</span></div><div class="flex justify-between"${_scopeId}><span class="font-semibold"${_scopeId}>Building:</span><span${_scopeId}>${ssrInterpolate(unref(selectedEmployee).building)} - ${ssrInterpolate(unref(selectedEmployee).roomNumber)}</span></div></div><div class="mt-6 flex justify-center"${_scopeId}><img${ssrRenderAttr("src", getQRCodeURL(unref(selectedEmployee).employeeId))} alt="QR Code" class="w-32 h-32"${_scopeId}></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedEmployee) ? (openBlock(), createBlock("div", {
                key: 0,
                id: "employee-id-card",
                class: "bg-white p-8"
              }, [
                createVNode("div", { class: "border-4 border-emerald-600 rounded-lg p-6 max-w-md mx-auto" }, [
                  createVNode("div", { class: "text-center mb-4" }, [
                    createVNode("h2", { class: "text-2xl font-bold text-emerald-600" }, "SAFARI CAMP"),
                    createVNode("p", { class: "text-sm text-gray-600" }, "Employee Identification")
                  ]),
                  createVNode("div", { class: "flex flex-col items-center mb-4" }, [
                    createVNode(_component_UAvatar, {
                      src: unref(selectedEmployee).photoUrl,
                      alt: unref(selectedEmployee).fullName,
                      size: "2xl",
                      class: "mb-3"
                    }, null, 8, ["src", "alt"]),
                    createVNode("h3", { class: "text-xl font-bold text-center" }, toDisplayString(unref(selectedEmployee).fullName), 1),
                    createVNode("p", { class: "text-gray-600" }, toDisplayString(unref(selectedEmployee).position), 1)
                  ]),
                  createVNode("div", { class: "space-y-2 text-sm" }, [
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("span", { class: "font-semibold" }, "ID:"),
                      createVNode("span", null, toDisplayString(unref(selectedEmployee).employeeId), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("span", { class: "font-semibold" }, "Nationality:"),
                      createVNode("span", null, toDisplayString(unref(selectedEmployee).nationality), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("span", { class: "font-semibold" }, "Category:"),
                      createVNode("span", null, toDisplayString(unref(selectedEmployee).jobCategory), 1)
                    ]),
                    createVNode("div", { class: "flex justify-between" }, [
                      createVNode("span", { class: "font-semibold" }, "Building:"),
                      createVNode("span", null, toDisplayString(unref(selectedEmployee).building) + " - " + toDisplayString(unref(selectedEmployee).roomNumber), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 flex justify-center" }, [
                    createVNode("img", {
                      src: getQRCodeURL(unref(selectedEmployee).employeeId),
                      alt: "QR Code",
                      class: "w-32 h-32"
                    }, null, 8, ["src"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              onClick: ($event) => showIDPreviewModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Close`);
                } else {
                  return [
                    createTextVNode("Close")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-printer",
              color: "primary",
              onClick: printEmployeeID
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Print`);
                } else {
                  return [
                    createTextVNode("Print")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => showIDPreviewModal.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("Close")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-printer",
                  color: "primary",
                  onClick: printEmployeeID
                }, {
                  default: withCtx(() => [
                    createTextVNode("Print")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(showEditModal),
        "onUpdate:open": ($event) => isRef(showEditModal) ? showEditModal.value = $event : null,
        title: "Edit Employee"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(editingEmployee)) {
              _push2(`<form class="space-y-4"${_scopeId}><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Full Name</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).fullName,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).fullName = $event,
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Position</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).position,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).position = $event,
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Job Category</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).jobCategory,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).jobCategory = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Nationality</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).nationality,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).nationality = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Iqama Number</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).iqamaNumber,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).iqamaNumber = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Mobile</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).mobile,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).mobile = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Grade</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).grade,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).grade = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Gender</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).gender,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).gender = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Building</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).building,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).building = $event,
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Room Number</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).roomNumber,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).roomNumber = $event,
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Designated Area</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).designatedArea,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).designatedArea = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Food Category</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).foodCategory,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).foodCategory = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Employee Status</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).employeeStatus,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).employeeStatus = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId}>Photo URL</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(editingEmployee).photoUrl,
                "onUpdate:modelValue": ($event) => unref(editingEmployee).photoUrl = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(editingEmployee) ? (openBlock(), createBlock("form", {
                key: 0,
                onSubmit: withModifiers(saveEmployee, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Full Name"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).fullName,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).fullName = $event,
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Position"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).position,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).position = $event,
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Job Category"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).jobCategory,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).jobCategory = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Nationality"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).nationality,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).nationality = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Iqama Number"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).iqamaNumber,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).iqamaNumber = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Mobile"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).mobile,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).mobile = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Grade"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).grade,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).grade = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gender"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).gender,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).gender = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Building"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).building,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).building = $event,
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Room Number"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).roomNumber,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).roomNumber = $event,
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Designated Area"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).designatedArea,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).designatedArea = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Food Category"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).foodCategory,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).foodCategory = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Employee Status"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).employeeStatus,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).employeeStatus = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Photo URL"),
                    createVNode(_component_UInput, {
                      modelValue: unref(editingEmployee).photoUrl,
                      "onUpdate:modelValue": ($event) => unref(editingEmployee).photoUrl = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ], 32)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              onClick: ($event) => showEditModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: unref(isSaving),
              onClick: saveEmployee
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save Changes`);
                } else {
                  return [
                    createTextVNode("Save Changes")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => showEditModal.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: unref(isSaving),
                  onClick: saveEmployee
                }, {
                  default: withCtx(() => [
                    createTextVNode("Save Changes")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(showImportModal),
        "onUpdate:open": ($event) => isRef(showImportModal) ? showImportModal.value = $event : null,
        title: "Import Employees from CSV"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Select CSV File</label><input type="file" accept=".csv" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"${_scopeId}></div>`);
            if (unref(importResult)) {
              _push2(`<div class="${ssrRenderClass([unref(importResult).success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800", "p-4 rounded-lg"])}"${_scopeId}><p class="font-medium"${_scopeId}>${ssrInterpolate(unref(importResult).message)}</p>`);
              if (unref(importResult).details) {
                _push2(`<p class="text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(importResult).details)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", null, [
                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Select CSV File"),
                  createVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    type: "file",
                    accept: ".csv",
                    onChange: handleFileSelect,
                    class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  }, null, 544)
                ]),
                unref(importResult) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["p-4 rounded-lg", unref(importResult).success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"]
                }, [
                  createVNode("p", { class: "font-medium" }, toDisplayString(unref(importResult).message), 1),
                  unref(importResult).details ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-sm mt-1"
                  }, toDisplayString(unref(importResult).details), 1)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              onClick: ($event) => showImportModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              onClick: uploadCSV,
              loading: unref(isImporting),
              disabled: !unref(selectedFile)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Import`);
                } else {
                  return [
                    createTextVNode("Import")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-2" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => showImportModal.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cancel")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  onClick: uploadCSV,
                  loading: unref(isImporting),
                  disabled: !unref(selectedFile)
                }, {
                  default: withCtx(() => [
                    createTextVNode("Import")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DAlysUbu.mjs.map
