import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { I as InfoPage } from "./InfoPage-CVgw8qu5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D80unHli.js";
import "./PhoneShell-CtxupxdS.js";
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoPage, { title: "MacBook Pro 14 M1 Pro / 16GB RAM / SSD 512GB", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/83FBE021-0210-49A8-A577-757B394F3936.jpeg", alt: "MacBook", className: "w-100 h-55 rounded-lg object-cover shrink-0" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Precio", value: "445,00 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Protección Wallapop", value: "0 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Envío", value: "4,49 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t-2 border-gray-200 pt-3 mt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Total" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "449,49 €" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Vendedor verificado · Envío en 2-4 días laborables." })
] });
export {
  SplitComponent as component
};
