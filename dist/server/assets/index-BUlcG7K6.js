import { N as reactExports, G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { u as useNavigate, L as Link } from "./router-D80unHli.js";
import { c as createLucideIcon, P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import { P as PayPalLogo } from "./PayPalLogo-CVgvf5v7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
function Index() {
  const [method, setMethod] = reactExports.useState("card");
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/monedero", className: "block w-full border border-gray-200 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-7 h-7 shrink-0", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 leading-snug", children: "Cuando tengas saldo en el monedero, podrás pagar con él." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MethodRow, { selected: method === "card", onSelect: () => setMethod("card"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/EF2D2FC0-2C5A-4BDB-A6F5-690BE22D75B3_4_5005_c.jpeg", alt: "card", className: "w-20 h-15 object-contain" }), title: "Tarjeta bancaria", extra: method === "card" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 ml-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/editar-tarjeta", className: "inline-block px-6 py-2.5 rounded-full border border-wallapop text-wallapop-dark font-semibold text-sm hover:bg-wallapop-soft transition", children: "Editar tarjeta" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MethodRow, { selected: method === "klarna", onSelect: () => setMethod("klarna"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-7 rounded bg-pink-200 flex items-center justify-center text-[10px] font-bold text-black", children: "Klarna" }), title: "Klarna", subtitle: "Divide tu compra en 3 pagos sin intereses, TAE 0%", link: "/klarna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MethodRow, { selected: method === "paypal", onSelect: () => setMethod("paypal"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PayPalLogo, { className: "h-6" }), title: "PayPal", link: "/paypal" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-gray-700 leading-relaxed", children: [
      "Tu pago está",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/seguridad", className: "text-wallapop-dark font-medium hover:underline", children: "encriptado y seguro." }),
      " ",
      "El vendedor no recibirá el pago hasta que confirmes que el producto recibido está en buen estado."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/producto", className: "block bg-gray-100 rounded-xl p-3 flex gap-3 hover:bg-gray-200 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/83FBE021-0210-49A8-A577-757B394F3936.jpeg", alt: "MacBook", className: "w-20 h-20 rounded-lg object-cover shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-right text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-left", children: "MacBook Pro 14 M1 Pro / 16GB..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "445,00 €" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs mt-1", children: "Protección Wallapop: 0 €" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs", children: "Envío: 4,49 €" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Total: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-base", children: "449,49 €" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/continuar"
      }), className: "mt-3 w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold text-base shadow-sm", children: "Continuar" })
    ] })
  ] });
}
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 my-1" });
}
function MethodRow({
  selected,
  onSelect,
  icon,
  title,
  subtitle,
  link,
  extra
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSelect, className: "w-full flex items-center gap-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 flex justify-center", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: link ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link, className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: subtitle })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: subtitle })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${selected ? "border-wallapop bg-wallapop" : "border-gray-300"}`, children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white" }) })
    ] }),
    extra
  ] });
}
export {
  Index as component
};
