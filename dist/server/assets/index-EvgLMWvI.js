import { T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { L as Link } from "./router-C5moJc4w.js";
import { b as useCycle, A as AppShell, f as format, P as PHASE_META, C as Calendar, B as Baby, g as Stethoscope, S as Sparkles } from "./AppShell-D1GgmO_x.js";
import { C as ChevronRight } from "./chevron-right-8JTiZAqc.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Home() {
  const {
    today,
    settings
  } = useCycle();
  const meta = PHASE_META[today.phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: format(/* @__PURE__ */ new Date(), "EEEE, MMMM d") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-semibold mt-1", children: [
        "Hello, beautiful ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "·" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cycle", className: "block rounded-3xl gradient-hero p-6 shadow-soft transition-smooth hover:shadow-glow mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: meta.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium uppercase tracking-wider text-foreground/70", children: [
          "Day ",
          today.cycleDay,
          " · ",
          meta.label,
          " phase"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground leading-snug", children: meta.vibe }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70", children: [
          "Next period in ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
            today.daysUntilPeriod,
            " days"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleCard, { to: "/cycle", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-6" }), title: "Cycle Intelligence", desc: "Calendar, briefings, AI planning", tint: "oklch(0.94 0.04 30)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleCard, { to: "/pregnancy", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "size-6" }), title: "Pregnancy Companion", desc: "Weekly log, symptoms, birth plan", tint: "oklch(0.92 0.05 350)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleCard, { to: "/care", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "size-6" }), title: "Care Connection", desc: "Find specialists, save favourites", tint: "oklch(0.92 0.05 320)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cycle/plan", className: "flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card border border-border transition-smooth hover:shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "Plan your week with AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Phase-aware scheduling" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground text-center mt-8", children: [
      "Cycle starts ",
      format(new Date(settings.lastPeriodStart), "MMM d"),
      " · ",
      settings.cycleLength,
      "-day cycle"
    ] })
  ] });
}
function ModuleCard({
  to,
  icon,
  title,
  desc,
  tint
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "flex items-center gap-4 rounded-2xl bg-card p-4 shadow-card border border-border transition-smooth hover:shadow-soft hover:-translate-y-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl flex items-center justify-center text-foreground", style: {
      backgroundColor: tint
    }, children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 text-muted-foreground" })
  ] });
}
export {
  Home as component
};
