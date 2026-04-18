import { T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { c as createLucideIcon } from "./AppShell-D1GgmO_x.js";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function SectionHeader({
  title,
  subtitle,
  back = "/"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: back,
        className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3 transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
          " Back"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold text-foreground", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: subtitle })
  ] });
}
export {
  SectionHeader as S
};
