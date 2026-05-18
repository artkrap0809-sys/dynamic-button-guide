import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { I as InfoPage } from "./InfoPage-CVgw8qu5.js";
import { C as CircleCheck } from "./circle-check-DXvrh7uD.js";
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
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoPage, { title: "Confirmar pago", intro: "Estás a punto de pagar 449,49 € por MacBook Pro 14. Wallapop retendrá el dinero hasta que confirmes la recepción.", cta: {
  label: "Pagar 449,49 €",
  to: "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A"
}, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-2xl p-4 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-wallapop-dark" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Pago seguro garantizado por Wallapop" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Producto", value: "445,00 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Protección Wallapop", value: "0 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Envío", value: "4,49 €" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t-2 border-gray-200 pt-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Total" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "449,49 €" })
  ] })
] });
export {
  SplitComponent as component
};
