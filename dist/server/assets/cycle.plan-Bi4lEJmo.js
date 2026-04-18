import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { b as useCycle, A as AppShell, S as Sparkles, P as PHASE_META, h as addDays, i as getPhaseForDay, f as format } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const TASK_FIT = {
  menstrual: ["rest", "journal", "plan", "review", "reflect", "stretch"],
  follicular: ["learn", "brainstorm", "start", "create", "network", "cardio"],
  ovulatory: ["present", "pitch", "negotiate", "social", "deep work", "interview"],
  luteal: ["edit", "admin", "clean", "organize", "detail", "finish"]
};
function classify(task, phase) {
  const t = task.toLowerCase();
  if (TASK_FIT[phase]?.some((k) => t.includes(k))) return "good";
  for (const [p, kws] of Object.entries(TASK_FIT)) {
    if (p !== phase && kws.some((k) => t.includes(k))) return "warn";
  }
  return "okay";
}
function PlanPage() {
  const {
    settings
  } = useCycle();
  const [input, setInput] = reactExports.useState("Brainstorm Q3 ideas\nReview team feedback\nClient pitch\nDeep clean inbox\nGym session\nWrite blog post");
  const [plan, setPlan] = reactExports.useState([]);
  const generate = () => {
    const tasks = input.split("\n").map((t) => t.trim()).filter(Boolean);
    const days = Array.from({
      length: 7
    }, (_, i) => addDays(/* @__PURE__ */ new Date(), i));
    const slots = days.map((d) => ({
      date: d,
      phase: getPhaseForDay(d, settings),
      task: ""
    }));
    const scheduled = [];
    for (const task of tasks) {
      let best = -1;
      let bestScore = -1;
      slots.forEach((s, i) => {
        if (s.task) return;
        const fit = classify(task, s.phase);
        const score = fit === "good" ? 3 : fit === "okay" ? 1 : 0;
        if (score > bestScore) {
          best = i;
          bestScore = score;
        }
      });
      if (best === -1) best = slots.findIndex((s) => !s.task);
      if (best === -1) break;
      slots[best].task = task;
      scheduled.push({
        day: format(slots[best].date, "EEE, MMM d"),
        phase: slots[best].phase,
        task,
        fit: classify(task, slots[best].phase)
      });
    }
    setPlan(scheduled);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "AI Weekly Plan", subtitle: "Tasks scheduled to your phases", back: "/cycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: input, onChange: (e) => setInput(e.target.value), rows: 7, placeholder: "One task per line…", className: "w-full rounded-2xl bg-card p-4 border border-border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: generate, className: "w-full mt-3 gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft flex items-center justify-center gap-2 transition-smooth hover:shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }),
      " Generate phase-aware plan"
    ] }),
    plan.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: plan.map((p, i) => {
      const meta = PHASE_META[p.phase];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl flex items-center justify-center text-lg shrink-0", style: {
          backgroundColor: `color-mix(in oklch, ${meta.color} 25%, white)`
        }, children: meta.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            p.day,
            " · ",
            meta.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm mt-0.5 truncate", children: p.task })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium px-2 py-1 rounded-full " + (p.fit === "good" ? "bg-secondary text-foreground" : p.fit === "warn" ? "bg-destructive/15 text-destructive" : "bg-muted text-muted-foreground"), children: p.fit === "good" ? "great fit" : p.fit === "warn" ? "off-phase" : "neutral" })
      ] }, i);
    }) })
  ] });
}
export {
  PlanPage as component
};
