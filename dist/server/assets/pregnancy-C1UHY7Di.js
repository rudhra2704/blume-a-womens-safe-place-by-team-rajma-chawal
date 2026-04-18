import { T as jsxRuntimeExports, Z as Outlet } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { u as useLocation, A as AppShell, a as usePregnancy, n as nearestWeekInfo, f as format, B as Baby } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { A as Activity } from "./activity-B1PRJ3gI.js";
import { A as Apple } from "./apple-BQzhcMS9.js";
import { S as ScrollText } from "./scroll-text-UgQifJ0o.js";
import { H as HeartHandshake } from "./heart-handshake-QlkIhktC.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Layout() {
  const loc = useLocation();
  if (loc.pathname !== "/pregnancy") return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hub, {}) });
}
const features = [{
  to: "/pregnancy/journey",
  icon: Baby,
  title: "Weekly Journey",
  desc: "Weekly log & appointments",
  detail: "Track baby development week by week, see size comparisons, milestones, and a full appointment timeline with estimated dates."
}, {
  to: "/pregnancy/trackers",
  icon: Activity,
  title: "Body & Symptoms",
  desc: "Symptoms · Weight · Contractions",
  detail: "Log trimester-specific symptoms with intensity, track weight against healthy ranges, and time contractions when labor begins."
}, {
  to: "/pregnancy/wellness",
  icon: Apple,
  title: "Wellness Guide",
  desc: "Nutrition · Exercise · Mental check-in",
  detail: "Phase-aware nutrition guidance with supplement recommendations, safe exercise routines, and a PHQ-2 mental health screener."
}, {
  to: "/pregnancy/planning",
  icon: ScrollText,
  title: "Birth Prep",
  desc: "Birth plan & postpartum plan",
  detail: "Build your birth preferences — environment, pain relief, delivery, feeding — plus a detailed postpartum recovery plan."
}, {
  to: "/pregnancy/support",
  icon: HeartHandshake,
  title: "Support Circle",
  desc: "Partner · Family · Q&A · Setup",
  detail: "Trimester-specific partner tips, family education, evidence-based Q&A, and pregnancy LMP setup — all for your support network."
}];
function Hub() {
  const {
    active,
    week,
    dueDate,
    trimester,
    daysToDue
  } = usePregnancy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Pregnancy Companion", subtitle: "Week by week, gently" }),
    active && dueDate ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-6 mb-6 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: [
        "Trimester ",
        trimester
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl mt-1", children: [
        nearestWeekInfo(week).emoji,
        " Week ",
        week
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 mt-2", children: [
        "Baby is the size of a ",
        nearestWeekInfo(week).size
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground/70 mt-3", children: [
        "Due ",
        format(dueDate, "MMM d, yyyy"),
        " · ",
        daysToDue,
        " days to go"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pregnancy/support", className: "block rounded-3xl gradient-hero p-6 mb-6 shadow-soft text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "Are you expecting?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 mt-2", children: "Set your last period date to unlock your weekly journey." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-4 text-primary font-medium text-sm", children: "Set up pregnancy →" })
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
  Layout as component
};
