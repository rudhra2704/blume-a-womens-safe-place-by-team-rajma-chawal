import { T as jsxRuntimeExports, Z as Outlet, r as reactExports } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { c as createLucideIcon, u as useLocation, A as AppShell, d as useLocalStorage, e as cn, H as Heart } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { D as DOCTORS, S as SPECIALTIES, a as Star } from "./doctors-BZQygg9W.js";
import { V as Video } from "./video-BvtWVHai.js";
import { M as MapPin } from "./map-pin-efC_ZOw8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Layout() {
  const loc = useLocation();
  if (loc.pathname !== "/care") return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CareHub, {}) });
}
function CareHub() {
  const [favs, setFavs] = useLocalStorage("blume.favDoctors", []);
  const [q, setQ] = reactExports.useState("");
  const [spec, setSpec] = reactExports.useState("All");
  const [tele, setTele] = reactExports.useState(false);
  const [walkIn, setWalkIn] = reactExports.useState(false);
  const filtered = DOCTORS.filter((d) => {
    if (spec !== "All" && !d.specialties.includes(spec)) return false;
    if (tele && !d.teleconsult) return false;
    if (walkIn && !d.walkIns) return false;
    if (q) {
      const s = q.toLowerCase();
      return d.name.toLowerCase().includes(s) || d.city.toLowerCase().includes(s) || d.area.toLowerCase().includes(s) || d.subSpecialties.some((ss) => ss.toLowerCase().includes(s)) || d.specialties.some((ss) => ss.toLowerCase().includes(s));
    }
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Care Connection", subtitle: "Find the right specialist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "City, area, PIN, or condition…", className: "w-full rounded-2xl bg-card pl-10 pr-4 py-3 text-sm border border-border shadow-card focus:outline-none focus:ring-2 focus:ring-ring" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto -mx-5 px-5 mb-3 pb-1", children: SPECIALTIES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSpec(s), className: cn("shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-smooth", spec === s ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground"), children: s }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: tele, onClick: () => setTele(!tele), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "size-3" }), children: "Tele" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPill, { active: walkIn, onClick: () => setWalkIn(!walkIn), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "size-3" }), children: "Walk-ins" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/care/questions", className: "ml-auto text-xs text-primary font-medium underline-offset-2 hover:underline", children: "AI Q's to ask →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      filtered.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/care/$id", params: {
        id: d.id
      }, className: "block rounded-2xl bg-card p-4 border border-border shadow-card transition-smooth hover:shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-secondary flex items-center justify-center text-2xl shrink-0", children: d.image }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold leading-tight", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.preventDefault();
              setFavs(favs.includes(d.id) ? favs.filter((x) => x !== d.id) : [...favs, d.id]);
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: cn("size-4", favs.includes(d.id) ? "fill-primary text-primary" : "text-muted-foreground") }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: d.specialties.join(" · ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-primary text-primary" }),
              d.rating,
              " (",
              d.reviews,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3" }),
              d.area,
              " · ",
              d.distanceKm,
              "km"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-medium mt-1", children: [
            "Next: ",
            d.nextSlot
          ] })
        ] })
      ] }) }, d.id)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-8", children: "No doctors match your filters." })
    ] }),
    favs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/care/favourites", className: "block text-center text-xs text-primary mt-6 font-medium", children: [
      "View saved doctors (",
      favs.length,
      ") →"
    ] })
  ] });
}
function FilterPill({
  active,
  onClick,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: cn("flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border transition-smooth", active ? "bg-secondary border-primary text-foreground" : "bg-card border-border text-muted-foreground"), children: [
    icon,
    children
  ] });
}
export {
  Layout as component
};
