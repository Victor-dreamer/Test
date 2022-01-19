import { defineComponent, shallowRef, reactive, openBlock, createElementBlock, toDisplayString } from "vue";
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "hello-world" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    msg: {
      type: String,
      default: "msg"
    }
  },
  setup(__props) {
    shallowRef();
    reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, " Hello, world! " + toDisplayString(__props.msg), 1);
    };
  }
});
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5f6cd34"]]);
const HelloWorldPlugin = {
  install(app) {
    app.component("HelloWorld", HelloWorld);
  }
};
const componentLibPlugin = {
  install(app) {
    var _a;
    (_a = HelloWorldPlugin.install) == null ? void 0 : _a.call(HelloWorldPlugin, app);
  }
};
export { HelloWorld, HelloWorldPlugin, componentLibPlugin as default };
