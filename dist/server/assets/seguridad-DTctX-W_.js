import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { I as InfoPage } from "./InfoPage-CVgw8qu5.js";
import { c as createLucideIcon } from "./PhoneShell-CtxupxdS.js";
import { C as CircleCheck } from "./circle-check-DXvrh7uD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D80unHli.js";
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function Item({
  icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 border border-gray-200 rounded-2xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center shrink-0", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-0.5", children: desc })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(InfoPage, { title: "Pago encriptado y seguro", intro: "Wallapop actúa como garante de la transacción. Tu dinero está protegido.", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5" }), title: "Cifrado SSL 256 bits", desc: "Tus datos viajan cifrados de extremo a extremo." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }), title: "Wallapop como garante", desc: "Retenemos el pago hasta que confirmes la recepción." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }), title: "Devolución asegurada", desc: "Si algo no encaja, te devolvemos el 100%." })
] });
export {
  SplitComponent as component
};
