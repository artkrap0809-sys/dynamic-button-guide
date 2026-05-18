import { G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { L as Link } from "./router-D80unHli.js";
import { P as PhoneShell } from "./PhoneShell-CtxupxdS.js";
function InfoPage({
  title,
  intro,
  children,
  cta = { label: "Volver al pago", to: "/" }
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PhoneShell, { showHelp: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mt-2", children: title }),
    intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-600 leading-relaxed", children: intro }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4 text-sm text-gray-700 leading-relaxed", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: cta.to,
        className: "block text-center w-full py-4 rounded-full bg-wallapop hover:bg-wallapop-dark transition text-white font-semibold",
        children: cta.label
      }
    ) })
  ] });
}
export {
  InfoPage as I
};
