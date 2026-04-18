import { T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { d as useLocalStorage, A as AppShell } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { D as DOCTORS, a as Star } from "./doctors-BZQygg9W.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function FavPage() {
  const [favs] = useLocalStorage("blume.favDoctors", []);
  const list = DOCTORS.filter((d) => favs.includes(d.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Saved Doctors", back: "/care" }),
    list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-12", children: "You haven't saved any doctors yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: list.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/care/$id", params: {
      id: d.id
    }, className: "flex items-center gap-3 rounded-2xl bg-card p-4 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: d.image }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          d.area,
          " · ",
          d.specialties.join(", ")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-primary text-primary" }),
        " ",
        d.rating
      ] })
    ] }, d.id)) })
  ] });
}
export {
  FavPage as component
};
