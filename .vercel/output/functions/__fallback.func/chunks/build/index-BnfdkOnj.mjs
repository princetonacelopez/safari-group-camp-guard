import { h as useRouter, b as _sfc_main$8, e as _sfc_main$b, c as _sfc_main$d, d as useAppConfig, t as tv, g as get, f as useLocale } from './server.mjs';
import { _ as _sfc_main$3 } from './Card-DusfjMFs.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, isRef, createBlock, createCommentVNode, openBlock, Fragment, useSlots, computed, renderSlot, renderList, mergeModels, useModel, useTemplateRef, toRef, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent, useForwardProps, Primitive } from 'reka-ui';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { _ as _sfc_main$4 } from './Badge-Q69SvwJ_.mjs';
import { J as upperFirst, o as defu } from '../nitro/nitro.mjs';
import { useVueTable, getExpandedRowModel, getSortedRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { u as useAuth } from './useAuth-C5b0AVUb.mjs';
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

const theme$1 = {
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
const _sfc_main$2 = {
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
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.tabs || {} })({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
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
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
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
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.table || {} })({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout, accessToken } = useAuth();
    const router = useRouter();
    const selectedTab = ref(0);
    const showAddEmployee = ref(false);
    const manningList = ref([]);
    const logs = ref([]);
    const manningError = ref(null);
    const logsError = ref(null);
    const isLoadingData = ref(false);
    const refreshManning = async () => {
      if (!accessToken.value) return;
      isLoadingData.value = true;
      try {
        manningError.value = null;
        const data = await $fetch("/api/manning-list", {
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          }
        });
        manningList.value = data;
      } catch (error) {
        console.error("Failed to fetch manning list:", error);
        manningError.value = error;
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
    const manningColumns = [
      { key: "photoUrl", label: "Photo" },
      { key: "employeeId", label: "ID" },
      { key: "fullName", label: "Employee" },
      { key: "jobCategory", label: "Category" },
      { key: "nationality", label: "Nationality" },
      { key: "designation", label: "Designated Area" },
      { key: "status", label: "Status" }
    ].map((c) => ({ ...c, id: c.key }));
    const logsColumns = [
      { key: "scanTimestamp", label: "Time" },
      { key: "employee", label: "Employee" },
      { key: "status", label: "Status" },
      { key: "verifiedBy", label: "Verified By" }
    ].map((c) => ({ ...c, id: c.key }));
    const fileInput = ref(null);
    const isImporting = ref(false);
    const importResult = ref(null);
    const tabs = [
      {
        key: "employees",
        label: "Employees",
        icon: "i-heroicons-users",
        slot: "employees"
      },
      {
        key: "manning-list",
        label: "Manning List",
        icon: "i-heroicons-clipboard-document-list",
        slot: "manning-list"
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
    const loadStats = async () => {
      await Promise.all([refreshManning(), refreshLogs()]);
      try {
        if (manningList.value) {
          stats.value.manningListCount = manningList.value.length;
        }
      } catch (e) {
        console.error("Failed to load stats", e);
      }
    };
    const handleLogout = async () => {
      await logout();
      router.push("/admin/login");
    };
    const handleImport = async () => {
      const file = fileInput.value?.files?.[0];
      if (!file) {
        alert("Please select a file first");
        return;
      }
      isImporting.value = true;
      importResult.value = null;
      try {
        const text = await file.text();
        const rows = text.split(/\r?\n/).map((row) => row.trim()).filter(Boolean);
        if (rows.length === 0) throw new Error("File is empty");
        const items = rows.map((row) => {
          const cleanRow = row.replace(/['"]/g, "");
          const cols = cleanRow.split(",");
          return { employeeId: cols[0]?.trim() || "" };
        });
        if (items.length > 0 && items[0] && (items[0].employeeId.toLowerCase().includes("id") || items[0].employeeId.toLowerCase().includes("employee"))) {
          items.shift();
        }
        const data = await $fetch("/api/manning-list/import", {
          method: "POST",
          body: { items },
          headers: {
            Authorization: `Bearer ${accessToken.value}`
          }
        });
        importResult.value = data;
        if (data.success) {
          loadStats();
          if (fileInput.value) fileInput.value.value = "";
        }
      } catch (e) {
        console.error("Import failed", e);
        importResult.value = {
          success: false,
          message: e.data?.message || e.message || "Import failed. Please check the file format."
        };
      } finally {
        isImporting.value = false;
      }
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UCard = _sfc_main$3;
      const _component_UTabs = _sfc_main$2;
      const _component_UIcon = _sfc_main$d;
      const _component_UTable = _sfc_main$1;
      const _component_UAvatar = _sfc_main$b;
      const _component_UBadge = _sfc_main$4;
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
            _push2(`<div class="text-center"${_scopeId}><p class="text-3xl font-bold text-blue-600"${_scopeId}>${ssrInterpolate(unref(stats).manningListCount)}</p><p class="text-gray-600"${_scopeId}>Manning List</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("p", { class: "text-3xl font-bold text-blue-600" }, toDisplayString(unref(stats).manningListCount), 1),
                createVNode("p", { class: "text-gray-600" }, "Manning List")
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
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Employees</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-plus",
              color: "primary",
              onClick: ($event) => showAddEmployee.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add Employee `);
                } else {
                  return [
                    createTextVNode(" Add Employee ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center py-8 text-gray-500"${_scopeId2}><p${_scopeId2}>Employee management coming soon</p><p class="text-sm"${_scopeId2}>Use API endpoints for now</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center py-8 text-gray-500" }, [
                      createVNode("p", null, "Employee management coming soon"),
                      createVNode("p", { class: "text-sm" }, "Use API endpoints for now")
                    ])
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
                  createVNode("h2", { class: "text-xl font-semibold" }, "Employees"),
                  createVNode(_component_UButton, {
                    icon: "i-heroicons-plus",
                    color: "primary",
                    onClick: ($event) => showAddEmployee.value = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Add Employee ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(_component_UCard, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center py-8 text-gray-500" }, [
                      createVNode("p", null, "Employee management coming soon"),
                      createVNode("p", { class: "text-sm" }, "Use API endpoints for now")
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        "manning-list": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Manning List</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-arrow-path",
              color: "neutral",
              variant: "ghost",
              onClick: loadStats
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
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="font-medium"${_scopeId2}>Import from CSV</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-medium" }, "Import from CSV")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><p class="text-sm text-gray-600"${_scopeId2}> Upload a CSV file containing Employee IDs. The file should have a header row or just lists of IDs in the first column. <br${_scopeId2}><strong${_scopeId2}>Warning:</strong> This will replace the current manning list. </p><div class="flex flex-col sm:flex-row items-start sm:items-center gap-4"${_scopeId2}><input type="file" accept=".csv,.txt" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    loading: unref(isImporting),
                    color: "primary",
                    icon: "i-heroicons-arrow-up-tray",
                    onClick: handleImport
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Import List `);
                      } else {
                        return [
                          createTextVNode(" Import List ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(importResult)) {
                    _push3(`<div class="${ssrRenderClass([unref(importResult).success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700", "mt-4 p-4 rounded-lg border"])}"${_scopeId2}><div class="flex items-start gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: unref(importResult).success ? "i-heroicons-check-circle" : "i-heroicons-exclamation-circle",
                      class: "text-xl shrink-0 mt-0.5"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><p class="font-bold"${_scopeId2}>${ssrInterpolate(unref(importResult).message)}</p>`);
                    if (unref(importResult).failed > 0) {
                      _push3(`<!--[--><p class="text-sm mt-1 font-semibold"${_scopeId2}>${ssrInterpolate(unref(importResult).failed)} IDs skipped (not found in database): </p><div class="mt-1 p-2 bg-white bg-opacity-50 rounded text-xs font-mono max-h-32 overflow-y-auto"${_scopeId2}>${ssrInterpolate(unref(importResult).errors.join(", "))}</div><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("p", { class: "text-sm text-gray-600" }, [
                        createTextVNode(" Upload a CSV file containing Employee IDs. The file should have a header row or just lists of IDs in the first column. "),
                        createVNode("br"),
                        createVNode("strong", null, "Warning:"),
                        createTextVNode(" This will replace the current manning list. ")
                      ]),
                      createVNode("div", { class: "flex flex-col sm:flex-row items-start sm:items-center gap-4" }, [
                        createVNode("input", {
                          type: "file",
                          ref_key: "fileInput",
                          ref: fileInput,
                          accept: ".csv,.txt",
                          class: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                        }, null, 512),
                        createVNode(_component_UButton, {
                          loading: unref(isImporting),
                          color: "primary",
                          icon: "i-heroicons-arrow-up-tray",
                          onClick: handleImport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Import List ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      unref(importResult) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["mt-4 p-4 rounded-lg border", unref(importResult).success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"]
                      }, [
                        createVNode("div", { class: "flex items-start gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: unref(importResult).success ? "i-heroicons-check-circle" : "i-heroicons-exclamation-circle",
                            class: "text-xl shrink-0 mt-0.5"
                          }, null, 8, ["name"]),
                          createVNode("div", null, [
                            createVNode("p", { class: "font-bold" }, toDisplayString(unref(importResult).message), 1),
                            unref(importResult).failed > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("p", { class: "text-sm mt-1 font-semibold" }, toDisplayString(unref(importResult).failed) + " IDs skipped (not found in database): ", 1),
                              createVNode("div", { class: "mt-1 p-2 bg-white bg-opacity-50 rounded text-xs font-mono max-h-32 overflow-y-auto" }, toDisplayString(unref(importResult).errors.join(", ")), 1)
                            ], 64)) : createCommentVNode("", true)
                          ])
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="font-medium"${_scopeId2}>Current Manning List (${ssrInterpolate(unref(manningList)?.length || 0)})</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "font-medium" }, "Current Manning List (" + toDisplayString(unref(manningList)?.length || 0) + ")", 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTable, {
                    rows: unref(manningList) || [],
                    columns: unref(manningColumns),
                    loading: unref(isLoadingData)
                  }, {
                    "photoUrl-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.employee?.photoUrl,
                          alt: row.employee?.fullName,
                          size: "sm"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UAvatar, {
                            src: row.employee?.photoUrl,
                            alt: row.employee?.fullName,
                            size: "sm"
                          }, null, 8, ["src", "alt"])
                        ];
                      }
                    }),
                    "fullName-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="font-medium"${_scopeId3}>${ssrInterpolate(row.employee?.fullName)}</div><div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.employee?.position)}</div>`);
                        if (row.employee?.grade) {
                          _push4(`<div class="text-xs text-gray-400"${_scopeId3}>Grade: ${ssrInterpolate(row.employee?.grade)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "font-medium" }, toDisplayString(row.employee?.fullName), 1),
                          createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employee?.position), 1),
                          row.employee?.grade ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-400"
                          }, "Grade: " + toDisplayString(row.employee?.grade), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    "employeeId-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.employeeId)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.employeeId), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (row.employee?.mobile) {
                          _push4(`<div class="text-xs text-gray-500 mt-1"${_scopeId3}> 📱 ${ssrInterpolate(row.employee?.mobile)}</div>`);
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
                              createTextVNode(toDisplayString(row.employeeId), 1)
                            ]),
                            _: 2
                          }, 1024),
                          row.employee?.mobile ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500 mt-1"
                          }, " 📱 " + toDisplayString(row.employee?.mobile), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    "jobCategory-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: getCategoryColor(row.employee?.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.employee?.jobCategory || "N/A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.employee?.jobCategory || "N/A"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: getCategoryColor(row.employee?.jobCategory),
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.employee?.jobCategory || "N/A"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    "nationality-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-sm"${_scopeId3}>${ssrInterpolate(row.employee?.nationality || "N/A")}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-sm" }, toDisplayString(row.employee?.nationality || "N/A"), 1)
                        ];
                      }
                    }),
                    "designation-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(row.employee?.designatedArea || "N/A")}</div>`);
                        if (row.employee?.foodCategory) {
                          _push4(`<div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.employee?.foodCategory)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("div", null, toDisplayString(row.employee?.designatedArea || "N/A"), 1),
                            row.employee?.foodCategory ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-xs text-gray-500"
                            }, toDisplayString(row.employee?.foodCategory), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: row.employee?.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.employee?.employeeStatus || "N/A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.employee?.employeeStatus || "N/A"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: row.employee?.employeeStatus === "Actual" ? "success" : "warning",
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.employee?.employeeStatus || "N/A"), 1)
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
                      rows: unref(manningList) || [],
                      columns: unref(manningColumns),
                      loading: unref(isLoadingData)
                    }, {
                      "photoUrl-data": withCtx(({ row }) => [
                        createVNode(_component_UAvatar, {
                          src: row.employee?.photoUrl,
                          alt: row.employee?.fullName,
                          size: "sm"
                        }, null, 8, ["src", "alt"])
                      ]),
                      "fullName-data": withCtx(({ row }) => [
                        createVNode("div", { class: "font-medium" }, toDisplayString(row.employee?.fullName), 1),
                        createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employee?.position), 1),
                        row.employee?.grade ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-400"
                        }, "Grade: " + toDisplayString(row.employee?.grade), 1)) : createCommentVNode("", true)
                      ]),
                      "employeeId-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employeeId), 1)
                          ]),
                          _: 2
                        }, 1024),
                        row.employee?.mobile ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 mt-1"
                        }, " 📱 " + toDisplayString(row.employee?.mobile), 1)) : createCommentVNode("", true)
                      ]),
                      "jobCategory-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: getCategoryColor(row.employee?.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employee?.jobCategory || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "nationality-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-sm" }, toDisplayString(row.employee?.nationality || "N/A"), 1)
                      ]),
                      "designation-data": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("div", null, toDisplayString(row.employee?.designatedArea || "N/A"), 1),
                          row.employee?.foodCategory ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(row.employee?.foodCategory), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.employee?.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employee?.employeeStatus || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["rows", "columns", "loading"])
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
                  createVNode("h2", { class: "text-xl font-semibold" }, "Manning List"),
                  createVNode(_component_UButton, {
                    icon: "i-heroicons-arrow-path",
                    color: "neutral",
                    variant: "ghost",
                    onClick: loadStats
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Refresh ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("h3", { class: "font-medium" }, "Import from CSV")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("p", { class: "text-sm text-gray-600" }, [
                        createTextVNode(" Upload a CSV file containing Employee IDs. The file should have a header row or just lists of IDs in the first column. "),
                        createVNode("br"),
                        createVNode("strong", null, "Warning:"),
                        createTextVNode(" This will replace the current manning list. ")
                      ]),
                      createVNode("div", { class: "flex flex-col sm:flex-row items-start sm:items-center gap-4" }, [
                        createVNode("input", {
                          type: "file",
                          ref_key: "fileInput",
                          ref: fileInput,
                          accept: ".csv,.txt",
                          class: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                        }, null, 512),
                        createVNode(_component_UButton, {
                          loading: unref(isImporting),
                          color: "primary",
                          icon: "i-heroicons-arrow-up-tray",
                          onClick: handleImport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Import List ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      unref(importResult) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["mt-4 p-4 rounded-lg border", unref(importResult).success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"]
                      }, [
                        createVNode("div", { class: "flex items-start gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: unref(importResult).success ? "i-heroicons-check-circle" : "i-heroicons-exclamation-circle",
                            class: "text-xl shrink-0 mt-0.5"
                          }, null, 8, ["name"]),
                          createVNode("div", null, [
                            createVNode("p", { class: "font-bold" }, toDisplayString(unref(importResult).message), 1),
                            unref(importResult).failed > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode("p", { class: "text-sm mt-1 font-semibold" }, toDisplayString(unref(importResult).failed) + " IDs skipped (not found in database): ", 1),
                              createVNode("div", { class: "mt-1 p-2 bg-white bg-opacity-50 rounded text-xs font-mono max-h-32 overflow-y-auto" }, toDisplayString(unref(importResult).errors.join(", ")), 1)
                            ], 64)) : createCommentVNode("", true)
                          ])
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UCard, null, {
                  header: withCtx(() => [
                    createVNode("h3", { class: "font-medium" }, "Current Manning List (" + toDisplayString(unref(manningList)?.length || 0) + ")", 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UTable, {
                      rows: unref(manningList) || [],
                      columns: unref(manningColumns),
                      loading: unref(isLoadingData)
                    }, {
                      "photoUrl-data": withCtx(({ row }) => [
                        createVNode(_component_UAvatar, {
                          src: row.employee?.photoUrl,
                          alt: row.employee?.fullName,
                          size: "sm"
                        }, null, 8, ["src", "alt"])
                      ]),
                      "fullName-data": withCtx(({ row }) => [
                        createVNode("div", { class: "font-medium" }, toDisplayString(row.employee?.fullName), 1),
                        createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employee?.position), 1),
                        row.employee?.grade ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-400"
                        }, "Grade: " + toDisplayString(row.employee?.grade), 1)) : createCommentVNode("", true)
                      ]),
                      "employeeId-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employeeId), 1)
                          ]),
                          _: 2
                        }, 1024),
                        row.employee?.mobile ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-500 mt-1"
                        }, " 📱 " + toDisplayString(row.employee?.mobile), 1)) : createCommentVNode("", true)
                      ]),
                      "jobCategory-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: getCategoryColor(row.employee?.jobCategory),
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employee?.jobCategory || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      "nationality-data": withCtx(({ row }) => [
                        createVNode("span", { class: "text-sm" }, toDisplayString(row.employee?.nationality || "N/A"), 1)
                      ]),
                      "designation-data": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createVNode("div", null, toDisplayString(row.employee?.designatedArea || "N/A"), 1),
                          row.employee?.foodCategory ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-500"
                          }, toDisplayString(row.employee?.foodCategory), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.employee?.employeeStatus === "Actual" ? "success" : "warning",
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.employee?.employeeStatus || "N/A"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["rows", "columns", "loading"])
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
                    rows: unref(logs) || [],
                    columns: unref(logsColumns),
                    loading: unref(isLoadingData)
                  }, {
                    "scanTimestamp-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm"${_scopeId3}>${ssrInterpolate(new Date(row.scanTimestamp).toLocaleDateString())} <br${_scopeId3}><span class="text-gray-500"${_scopeId3}>${ssrInterpolate(new Date(row.scanTimestamp).toLocaleTimeString())}</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm" }, [
                            createTextVNode(toDisplayString(new Date(row.scanTimestamp).toLocaleDateString()) + " ", 1),
                            createVNode("br"),
                            createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.scanTimestamp).toLocaleTimeString()), 1)
                          ])
                        ];
                      }
                    }),
                    "employee-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UAvatar, {
                          src: row.employee?.photoUrl,
                          alt: row.employee?.fullName,
                          size: "xs"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><div class="font-medium text-sm"${_scopeId3}>${ssrInterpolate(row.employee?.fullName || "Unknown")}</div><div class="text-xs text-gray-500"${_scopeId3}>${ssrInterpolate(row.employeeId)}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UAvatar, {
                              src: row.employee?.photoUrl,
                              alt: row.employee?.fullName,
                              size: "xs"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.employee?.fullName || "Unknown"), 1),
                              createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employeeId), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    "status-data": withCtx(({ row }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UBadge, {
                          color: row.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(row.status.toUpperCase())}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(row.status.toUpperCase()), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: row.status === "authorized" ? "success" : "error",
                            variant: "subtle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(row.status.toUpperCase()), 1)
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
                      rows: unref(logs) || [],
                      columns: unref(logsColumns),
                      loading: unref(isLoadingData)
                    }, {
                      "scanTimestamp-data": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createTextVNode(toDisplayString(new Date(row.scanTimestamp).toLocaleDateString()) + " ", 1),
                          createVNode("br"),
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.scanTimestamp).toLocaleTimeString()), 1)
                        ])
                      ]),
                      "employee-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UAvatar, {
                            src: row.employee?.photoUrl,
                            alt: row.employee?.fullName,
                            size: "xs"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.employee?.fullName || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employeeId), 1)
                          ])
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.status.toUpperCase()), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["rows", "columns", "loading"])
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
                      rows: unref(logs) || [],
                      columns: unref(logsColumns),
                      loading: unref(isLoadingData)
                    }, {
                      "scanTimestamp-data": withCtx(({ row }) => [
                        createVNode("div", { class: "text-sm" }, [
                          createTextVNode(toDisplayString(new Date(row.scanTimestamp).toLocaleDateString()) + " ", 1),
                          createVNode("br"),
                          createVNode("span", { class: "text-gray-500" }, toDisplayString(new Date(row.scanTimestamp).toLocaleTimeString()), 1)
                        ])
                      ]),
                      "employee-data": withCtx(({ row }) => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UAvatar, {
                            src: row.employee?.photoUrl,
                            alt: row.employee?.fullName,
                            size: "xs"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-medium text-sm" }, toDisplayString(row.employee?.fullName || "Unknown"), 1),
                            createVNode("div", { class: "text-xs text-gray-500" }, toDisplayString(row.employeeId), 1)
                          ])
                        ])
                      ]),
                      "status-data": withCtx(({ row }) => [
                        createVNode(_component_UBadge, {
                          color: row.status === "authorized" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(row.status.toUpperCase()), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      _: 1
                    }, 8, ["rows", "columns", "loading"])
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BnfdkOnj.mjs.map
