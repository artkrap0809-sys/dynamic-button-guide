import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { I as InfoPage } from "./InfoPage-CVgw8qu5.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D80unHli.js";
import "./PhoneShell-CtxupxdS.js";
function Q({
  q,
  a
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-2xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: q }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-gray-600 text-sm", children: a })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoPage, { title: "¿Dudas?", intro: "Te ayudamos con cualquier pregunta sobre tu pago o tu compra.", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Q, { q: "¿Cuándo se cobra el pago?", a: "El cargo se realiza al confirmar la compra, pero el dinero queda retenido por Wallapop hasta que confirmes la recepción del producto." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Q, { q: "¿Qué métodos de pago acepta Wallapop?", a: "Tarjeta bancaria (Visa, Mastercard), Klarna y PayPal." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Q, { q: "¿Y si el producto no llega?", a: "Si no recibes el producto o no coincide con la descripción, te devolvemos el 100% del importe." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Q, { q: "Contacto", a: "Puedes escribirnos a soporte@wallapop.com las 24 horas." })
] });
export {
  SplitComponent as component
};
