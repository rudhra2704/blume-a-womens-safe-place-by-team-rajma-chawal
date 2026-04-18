import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { a as usePregnancy, A as AppShell, e as cn } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { A as Apple } from "./apple-BQzhcMS9.js";
import { A as Activity } from "./activity-B1PRJ3gI.js";
import { B as Brain } from "./brain-OKSpGtGv.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
function WellnessPage() {
  const [tab, setTab] = reactExports.useState("nutrition");
  const {
    trimester,
    active
  } = usePregnancy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Wellness Guide", subtitle: "Nutrition, exercise & mental health", back: "/pregnancy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: [
        "Wellness for Trimester ",
        active ? trimester : "—"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg mt-1", children: "🍎 Nutrition · 🏃‍♀️ Exercise · 🧠 Mental check-in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "Phase-aware guidance for your body and mind" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "nutrition", onClick: () => setTab("nutrition"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Apple, { className: "size-3.5" }), children: "Nutrition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "exercise", onClick: () => setTab("exercise"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-3.5" }), children: "Exercise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "mental", onClick: () => setTab("mental"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "size-3.5" }), children: "Mental Check-in" })
    ] }),
    tab === "nutrition" && /* @__PURE__ */ jsxRuntimeExports.jsx(NutritionTab, {}),
    tab === "exercise" && /* @__PURE__ */ jsxRuntimeExports.jsx(ExerciseTab, {}),
    tab === "mental" && /* @__PURE__ */ jsxRuntimeExports.jsx(MentalTab, {})
  ] });
}
const GUIDE = {
  1: {
    title: "First Trimester",
    foods: ["Whole grains", "Lean proteins", "Citrus & berries", "Leafy greens"],
    supplements: ["Folic acid 400-800 mcg", "Vitamin D 600 IU", "B6 (for nausea)"]
  },
  2: {
    title: "Second Trimester",
    foods: ["Salmon (low-mercury fish)", "Eggs", "Beans & lentils", "Dairy"],
    supplements: ["Iron 27 mg", "Calcium 1000 mg", "Continue prenatal"]
  },
  3: {
    title: "Third Trimester",
    foods: ["Avocado", "Nuts & seeds", "Sweet potatoes", "Berries"],
    supplements: ["Omega-3 (DHA) 200 mg", "Iron + Vit C", "Magnesium for cramps"]
  }
};
function NutritionTab() {
  const {
    trimester,
    active
  } = usePregnancy();
  const [nutTab, setNutTab] = reactExports.useState(active ? trimester : 1);
  const g = GUIDE[nutTab];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4", children: [1, 2, 3].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setNutTab(t), className: cn("flex-1 py-2 rounded-xl text-sm font-medium border transition-smooth", nutTab === t ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-muted-foreground"), children: [
      "T",
      t
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-4", children: "Foods to embrace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: g.foods.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
        f
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-5", children: "Supplements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: g.supplements.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent" }),
        s
      ] }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-4", children: "General guidance — confirm with your provider." })
  ] });
}
const ROUTINES = {
  1: [{
    name: "Brisk walking",
    minutes: 30,
    why: "Low impact, builds stamina"
  }, {
    name: "Prenatal yoga",
    minutes: 25,
    why: "Eases nausea, opens hips"
  }, {
    name: "Swimming",
    minutes: 30,
    why: "Weightless joint relief"
  }],
  2: [{
    name: "Stationary cycling",
    minutes: 30,
    why: "Cardio without balance risk"
  }, {
    name: "Strength (light)",
    minutes: 25,
    why: "Maintains posture as bump grows"
  }, {
    name: "Pelvic floor (Kegels)",
    minutes: 10,
    why: "Prep for labor & recovery"
  }],
  3: [{
    name: "Walking",
    minutes: 20,
    why: "Gentle, can help baby drop"
  }, {
    name: "Birth ball",
    minutes: 15,
    why: "Pelvis mobility"
  }, {
    name: "Stretching",
    minutes: 15,
    why: "Eases lower back"
  }]
};
function ExerciseTab() {
  const {
    trimester,
    active
  } = usePregnancy();
  const tri = active ? trimester : 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [
      "Trimester ",
      tri,
      " safe routines"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ROUTINES[tri].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary font-medium", children: [
          r.minutes,
          " min"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: r.why })
    ] }, r.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-6", children: "Stop and call your provider for pain, bleeding, or dizziness." })
  ] });
}
const PHQ2 = ["Little interest or pleasure in doing things", "Feeling down, depressed, or hopeless"];
const ANSWERS = ["Not at all", "Several days", "More than half the days", "Nearly every day"];
function MentalTab() {
  const [vals, setVals] = reactExports.useState([0, 0]);
  const score = vals.reduce((a, b) => a + b, 0);
  const flag = score >= 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Over the last 2 weeks, how often have you been bothered by:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: PHQ2.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mb-3", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: ANSWERS.map((a, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setVals(vals.map((v, k) => k === i ? j : v)), className: cn("text-left text-sm rounded-xl px-3 py-2 border-2 transition-smooth", vals[i] === j ? "border-primary bg-secondary" : "border-border bg-card"), children: a }, a)) })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("mt-6 rounded-2xl p-5 border shadow-card", flag ? "bg-destructive/10 border-destructive/30" : "bg-secondary border-border"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl mt-1", children: [
        score,
        "/6"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: flag ? "Score of 3+ suggests further screening. Please talk to your provider — antenatal/postpartum mood concerns are common and treatable." : "Below clinical threshold today. Keep checking in — feelings shift week to week." })
    ] })
  ] });
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
  WellnessPage as component
};
