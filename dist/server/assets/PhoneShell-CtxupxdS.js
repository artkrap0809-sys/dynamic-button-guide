import { N as reactExports, a1 as useRouter, G as jsxRuntimeExports } from "./server-DUxKx5xb.js";
import { L as Link } from "./router-D80unHli.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = createLucideIcon("ellipsis", __iconNode);
function PhoneShell({
  children,
  title,
  showHelp = true
}) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col max-w-md mx-auto relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-5 py-3 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/transacciones", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/brand-motion.png?fit=690%2C690&ssl=1",
          alt: "Wallapop",
          className: "w-15 h-15 rounded-2xl object-cover shadow-md hover:opacity-80 transition"
        }
      ) }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base font-semibold", children: title }),
      showHelp && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/dudas",
          className: "text-wallapop-dark font-semibold text-base hover:underline",
          children: "¿Dudas?"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 px-5 pb-24", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 flex items-center justify-between px-8 py-4 z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => router.history.back(),
          className: "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50",
          "aria-label": "Atrás",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-1 rounded-full bg-gray-200" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/menu",
          className: "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50",
          "aria-label": "Más",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "w-5 h-5" })
        }
      )
    ] })
  ] });
}
export {
  PhoneShell as P,
  createLucideIcon as c
};
