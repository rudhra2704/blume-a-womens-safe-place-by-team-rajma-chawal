import { T as jsxRuntimeExports, Z as Outlet } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { u as useLocation, A as AppShell, b as useCycle, P as PHASE_META, f as format, S as Sparkles, H as Heart } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { C as ChartColumn } from "./chart-column-7m9jS6Qc.js";
import { B as Brain } from "./brain-OKSpGtGv.js";
import { S as Settings } from "./settings-BxdmR84r.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CycleLayout() {
  const loc = useLocation();
  if (loc.pathname !== "/cycle") return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CycleHub, {}) });
}
const features = [{
  to: "/cycle/overview",
  icon: Sparkles,
  title: "Daily Overview",
  desc: "Today's briefing & phase calendar",
  detail: "See your current phase, daily vibe, task recommendations, and a full color-coded calendar view — all in one place."
}, {
  to: "/cycle/trackers",
  icon: Heart,
  title: "Body Trackers",
  desc: "Mood · Pain · Sleep & Stress",
  detail: "Log your energy & mood, map pain by type and location, and track sleep quality — correlate everything with your cycle."
}, {
  to: "/cycle/health",
  icon: ChartColumn,
  title: "Health Intelligence",
  desc: "Symptoms · Insights · Medication",
  detail: "PCOS/PMS symptom matching, historical energy patterns by phase, and a medication tracker — your health dashboard."
}, {
  to: "/cycle/plan",
  icon: Brain,
  title: "AI Weekly Plan",
  desc: "Phase-aware task scheduling",
  detail: "Paste your to-do list and get tasks intelligently distributed across the week based on your cycle phases."
}, {
  to: "/cycle/manage",
  icon: Settings,
  title: "Settings & Sharing",
  desc: "Alerts · Partner sharing · Config",
  detail: "Set cycle length & LMP, create custom reminders, and generate a shareable summary for your partner."
}];
function CycleHub() {
  const {
    today
  } = useCycle();
  const meta = PHASE_META[today.phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Cycle Intelligence", subtitle: "Your body, in rhythm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl mt-1", children: [
        meta.emoji,
        " Day ",
        today.cycleDay,
        " · ",
        meta.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 mt-2", children: [
        "Next period ",
        format(today.nextPeriod, "MMM d"),
        " · ovulation",
        " ",
        format(today.nextOvulation, "MMM d")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: f.to, className: "block rounded-2xl bg-card p-5 border border-border shadow-card transition-smooth hover:shadow-soft hover:-translate-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-base leading-tight", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mt-0.5", children: f.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: f.detail })
      ] })
    ] }) }, f.to)) })
  ] });
}
export {
  CycleLayout as component
};
