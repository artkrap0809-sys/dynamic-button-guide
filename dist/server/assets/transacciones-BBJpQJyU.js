import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { c as createLucideIcon, P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import { C as CircleCheck } from "./circle-check-DXvrh7uD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-D80unHli.js";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const deals = [{
  id: "WLP-298470",
  title: "iPhone 13 Pro 256GB",
  amount: "612,00 €",
  date: "Hoy"
}, {
  id: "WLP-298465",
  title: "Sony WH-1000XM5",
  amount: "245,90 €",
  date: "Ayer"
}, {
  id: "WLP-298440",
  title: "Nintendo Switch OLED",
  amount: "289,00 €",
  date: "12 mayo"
}, {
  id: "WLP-298401",
  title: "Bicicleta Orbea Alma",
  amount: "1.150,00 €",
  date: "10 mayo"
}, {
  id: "WLP-298377",
  title: "Cámara Fujifilm X-T4",
  amount: "899,00 €",
  date: "8 mayo"
}, {
  id: "WLP-298320",
  title: "Apple Watch Series 9",
  amount: "365,00 €",
  date: "5 mayo"
}];
function Transacciones() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mt-2", children: "Transacciones exitosas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Operaciones completadas con la garantía de Wallapop." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }), value: "12 847", label: "Ventas exitosas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }), value: "98,7%", label: "Tasa de éxito" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }), value: "4,9 / 5", label: "Valoración media" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5" }), value: "100%", label: "Pagos protegidos" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-lg font-semibold", children: "Últimas operaciones" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: deals.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 border border-gray-200 rounded-2xl p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium truncate", children: d.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
          d.id,
          " · ",
          d.date
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: d.amount })
    ] }, d.id)) })
  ] });
}
function Stat({
  icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-2xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-wallapop-soft text-wallapop-dark flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: label })
  ] });
}
export {
  Transacciones as component
};
