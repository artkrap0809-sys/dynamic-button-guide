import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { L as Link } from "./router-D80unHli.js";
import { P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mt-2", children: "Más opciones" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: [{
    to: "/producto",
    label: "Ver producto"
  }, {
    to: "/seguridad",
    label: "Seguridad del pago"
  }, {
    to: "/dudas",
    label: "Centro de ayuda"
  }, {
    to: "/monedero",
    label: "Mi monedero"
  }].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: i.to, className: "block border border-gray-200 rounded-2xl px-5 py-4 font-medium hover:bg-gray-50", children: i.label }) }, i.to)) })
] });
export {
  SplitComponent as component
};
