import { T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { b as useCycle, a as usePregnancy, A as AppShell, P as PHASE_META, S as Sparkles } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
function generate(phase, week, isPregnant) {
  if (isPregnant) {
    if (week <= 13) return ["Which prenatal vitamin do you recommend?", "Are my current medications safe in pregnancy?", "What lifestyle changes should I prioritize this trimester?", "When should I schedule my NT scan?", "What symptoms warrant calling immediately?"];
    if (week <= 27) return ["Is my baby's growth on track?", "When should I start counting kicks?", "Should I be screened for gestational diabetes?", "What exercises are best for the second trimester?", "When should we discuss the birth plan?"];
    return ["Is the baby in a good position?", "What's my GBS status?", "When should I start perineal massage?", "What signs should make me come to the hospital?", "What's your policy on inductions and cesareans?"];
  }
  const map = {
    menstrual: ["Is my flow within a normal range?", "Could my cramps suggest endometriosis?", "Are over-the-counter pain meds the best option?", "When should I be concerned about clotting?"],
    follicular: ["Should I track ovulation differently?", "How does my cycle length compare to typical ranges?", "Are there habits to support the follicular phase?", "Is my AMH or hormone level worth checking?"],
    ovulatory: ["How can I confirm ovulation each month?", "What's the best timing if we're trying to conceive?", "Is mid-cycle spotting normal for me?"],
    luteal: ["Could my mood symptoms be PMDD vs PMS?", "What helps with luteal-phase fatigue?", "Should I screen for PCOS or thyroid issues?", "Are my breast tenderness levels normal?"]
  };
  return map[phase];
}
function QPage() {
  const {
    today
  } = useCycle();
  const {
    active,
    week
  } = usePregnancy();
  const qs = generate(today.phase, week, active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Questions to ask", subtitle: active ? `Tailored to week ${week}` : `Tailored to ${PHASE_META[today.phase].label} phase`, back: "/care" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm", children: "For your next visit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: qs.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-primary shrink-0", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: q })
      ] }, i)) })
    ] })
  ] });
}
export {
  QPage as component
};
