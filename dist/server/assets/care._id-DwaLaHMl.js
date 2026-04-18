import { T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { R as Route, L as Link } from "./router-C5moJc4w.js";
import { c as createLucideIcon, d as useLocalStorage, A as AppShell, H as Heart, e as cn, C as Calendar } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { D as DOCTORS, a as Star } from "./doctors-BZQygg9W.js";
import { M as MapPin } from "./map-pin-efC_ZOw8.js";
import { V as Video } from "./video-BvtWVHai.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
];
const Footprints = createLucideIcon("footprints", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
];
const Languages = createLucideIcon("languages", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function DoctorPage() {
  const {
    id
  } = Route.useParams();
  const d = DOCTORS.find((x) => x.id === id);
  const [favs, setFavs] = useLocalStorage("blume.favDoctors", []);
  const [followUps, setFollowUps] = useLocalStorage("blume.followups", []);
  if (!d) return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Doctor not found", back: "/care" }) });
  const isFav = favs.includes(d.id);
  const related = DOCTORS.filter((x) => x.id !== d.id && x.specialties.some((s) => d.specialties.includes(s))).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Specialist", back: "/care" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-6 shadow-soft text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 mx-auto rounded-3xl bg-card flex items-center justify-center text-4xl shadow-card", children: d.image }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold mt-4", children: d.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-1", children: d.specialties.join(" · ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 text-sm text-foreground/80 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-primary text-primary" }),
          d.rating
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }),
          d.area
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: d.bookingUrl, target: "_blank", rel: "noreferrer", className: "gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft text-center text-sm", children: "Book appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFavs(isFav ? favs.filter((x) => x !== d.id) : [...favs, d.id]), className: cn("rounded-2xl py-3 font-medium border-2 text-sm flex items-center justify-center gap-2 transition-smooth", isFav ? "border-primary bg-secondary text-primary" : "border-border bg-card"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: cn("size-4", isFav && "fill-primary") }),
        isFav ? "Saved" : "Save"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "About", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "size-4" }), label: `${d.experienceYears}y experience`, sub: d.education }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "size-4" }), label: d.languages.join(", ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }), label: d.hours, sub: `Avg wait ~${d.waitMinutes} min` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }), label: `${d.area}, ${d.city}`, sub: `${d.distanceKm}km away` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Services", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      [...d.specialties, ...d.subSpecialties].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full bg-secondary text-xs", children: s }, s)),
      d.teleconsult && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "size-3" }),
        " Teleconsult"
      ] }),
      d.walkIns && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "size-3" }),
        " Walk-ins"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Insurance accepted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: d.insurance.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 rounded-full bg-card border border-border text-xs flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-3" }),
      i
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Next available", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary p-3 text-sm font-medium flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4 text-primary" }),
        " ",
        d.nextSlot
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFollowUps([...followUps.filter((f) => f.id !== d.id), {
        id: d.id,
        date: d.nextSlot
      }]), className: "w-full mt-2 text-xs text-primary font-medium", children: "+ Add follow-up reminder" })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Related specialists", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/care/$id", params: {
      id: r.id
    }, className: "flex items-center gap-3 rounded-xl bg-card p-3 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: r.image }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.area })
      ] })
    ] }, r.id)) }) })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children })
  ] });
}
function Row({
  icon,
  label,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-card p-3 border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary mt-0.5", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: label }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: sub })
    ] })
  ] });
}
export {
  DoctorPage as component
};
