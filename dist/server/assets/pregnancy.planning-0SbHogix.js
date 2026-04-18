import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, A as AppShell, e as cn, d as useLocalStorage } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { S as ScrollText } from "./scroll-text-UgQifJ0o.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode);
function PlanningPage() {
  const [tab, setTab] = reactExports.useState("birthplan");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Birth Prep", subtitle: "Plan delivery & postpartum recovery", back: "/pregnancy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Your plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg mt-1", children: "📋 Birth plan & postpartum preferences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "Build your preferences now — share with your care team when ready" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "birthplan", onClick: () => setTab("birthplan"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollText, { className: "size-3.5" }), children: "Birth Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "postpartum", onClick: () => setTab("postpartum"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "size-3.5" }), children: "Postpartum Plan" })
    ] }),
    tab === "birthplan" && /* @__PURE__ */ jsxRuntimeExports.jsx(BirthPlanTab, {}),
    tab === "postpartum" && /* @__PURE__ */ jsxRuntimeExports.jsx(PostpartumTab, {})
  ] });
}
const DEFAULT_PLAN = {
  environment: "Calm, dim lights, soft music",
  painRelief: [],
  support: "",
  delivery: "Vaginal if possible",
  postpartum: [],
  feeding: "Breastfeeding preferred",
  notes: ""
};
const PAIN = ["Epidural", "Nitrous oxide", "IV meds", "Water immersion", "Movement & breathing", "Massage"];
const POST_PREFS = ["Skin-to-skin immediately", "Delayed cord clamping", "Partner cuts cord", "Vitamin K shot", "Eye ointment", "Private recovery time"];
function BirthPlanTab() {
  const [plan, setPlan] = useLocalStorage("blume.preg.birthplan", DEFAULT_PLAN);
  const toggle = (key, val) => {
    const list = plan[key];
    setPlan({
      ...plan,
      [key]: list.includes(val) ? list.filter((v) => v !== val) : [...list, val]
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Environment", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: plan.environment, onChange: (e) => setPlan({
      ...plan,
      environment: e.target.value
    }), rows: 2, className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm resize-none" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Support people", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: plan.support, onChange: (e) => setPlan({
      ...plan,
      support: e.target.value
    }), placeholder: "Partner, doula, mother…", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Pain relief preferences", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PAIN.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: p, active: plan.painRelief.includes(p), onClick: () => toggle("painRelief", p) }, p)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Delivery preference", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: plan.delivery, onChange: (e) => setPlan({
      ...plan,
      delivery: e.target.value
    }), className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Vaginal if possible" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Planned cesarean" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Open to provider's call" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Postpartum preferences", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: POST_PREFS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { label: p, active: plan.postpartum.includes(p), onClick: () => toggle("postpartum", p) }, p)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Feeding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: plan.feeding, onChange: (e) => setPlan({
      ...plan,
      feeding: e.target.value
    }), className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Breastfeeding preferred" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Combination feeding" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Formula feeding" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Undecided" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Notes for the team", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: plan.notes, onChange: (e) => setPlan({
      ...plan,
      notes: e.target.value
    }), rows: 3, placeholder: "Anything else…", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm resize-none" }) })
  ] });
}
const DEFAULT_POST = {
  feeding: "Breastfeeding with lactation consultant on call",
  visitors: "Family only for first week, by invitation",
  helpRotation: "Partner home for 2 weeks, mom week 3",
  recoveryNeeds: "Peri bottle, witch hazel pads, comfortable pjs",
  mentalHealth: "Therapist contact saved, partner watching for signs"
};
function PostpartumTab() {
  const [plan, setPlan] = useLocalStorage("blume.preg.post", DEFAULT_POST);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.keys(DEFAULT_POST).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 capitalize", children: k.replace(/([A-Z])/g, " $1") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: plan[k], onChange: (e) => setPlan({
      ...plan,
      [k]: e.target.value
    }), rows: 2, className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm resize-none" })
  ] }, k)) });
}
function Card({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3", children: title }),
    children
  ] });
}
function Chip({
  label,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: "px-3 py-1.5 rounded-full text-xs border-2 transition-smooth " + (active ? "border-primary bg-secondary" : "border-border bg-card text-muted-foreground"), children: label });
}
function TabPill({
  active,
  onClick,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: cn("flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-smooth shrink-0", active ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-card border-border text-muted-foreground hover:text-foreground"), children: [
    icon,
    children
  ] });
}
export {
  PlanningPage as component
};
