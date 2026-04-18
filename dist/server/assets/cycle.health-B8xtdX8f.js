import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, d as useLocalStorage, A as AppShell, e as cn, b as useCycle, i as getPhaseForDay, P as PHASE_META } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { C as ChartColumn } from "./chart-column-7m9jS6Qc.js";
import { T as Trash2 } from "./trash-2-C57dGKN8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
const __iconNode = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode);
function HealthPage() {
  const [tab, setTab] = reactExports.useState("symptoms");
  const [logEntries] = useLocalStorage("blume.log", []);
  const [meds] = useLocalStorage("blume.meds", []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Health Intelligence", subtitle: "Patterns, predictions & medications", back: "/cycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Your health data" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: logEntries.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "log entries" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: meds.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "medications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "conditions tracked" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5 overflow-x-auto -mx-5 px-5 pb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "symptoms", onClick: () => setTab("symptoms"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-3.5" }), children: "Symptom Predictor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "insights", onClick: () => setTab("insights"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "size-3.5" }), children: "Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "medication", onClick: () => setTab("medication"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "size-3.5" }), children: "Medication" })
    ] }),
    tab === "symptoms" && /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomsTab, {}),
    tab === "insights" && /* @__PURE__ */ jsxRuntimeExports.jsx(InsightsTab, {}),
    tab === "medication" && /* @__PURE__ */ jsxRuntimeExports.jsx(MedicationTab, {})
  ] });
}
const SYMPTOMS = ["Irregular periods", "Acne", "Excess hair growth", "Weight gain", "Hair thinning", "Severe cramps", "Heavy bleeding", "Mood swings", "Bloating", "Breast tenderness", "Headaches", "Fatigue", "Hot flashes", "Trouble sleeping"];
function analyse(selected) {
  const map = {
    PCOS: {
      keys: ["Irregular periods", "Acne", "Excess hair growth", "Weight gain", "Hair thinning"],
      specialist: "Reproductive Endocrinologist",
      note: "Pattern overlaps with PCOS. Consider hormone panel and ultrasound."
    },
    PMS: {
      keys: ["Mood swings", "Bloating", "Breast tenderness", "Headaches", "Fatigue"],
      specialist: "Gynecologist",
      note: "Classic PMS markers. Cycle tracking + lifestyle review recommended."
    },
    Endometriosis: {
      keys: ["Severe cramps", "Heavy bleeding", "Fatigue"],
      specialist: "Gynecologist (Endometriosis specialist)",
      note: "Painful, heavy cycles warrant a focused exam."
    },
    Perimenopause: {
      keys: ["Hot flashes", "Irregular periods", "Trouble sleeping", "Mood swings"],
      specialist: "Menopause Specialist",
      note: "Symptoms suggest hormonal transition."
    }
  };
  return Object.entries(map).map(([name, v]) => ({
    name,
    score: v.keys.filter((k) => selected.includes(k)).length / v.keys.length,
    specialist: v.specialist,
    note: v.note
  })).filter((m) => m.score > 0).sort((a, b) => b.score - a.score);
}
function SymptomsTab() {
  const [selected, setSelected] = reactExports.useState([]);
  const matches = analyse(selected);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Select your symptoms — not a diagnosis, guidance only." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: SYMPTOMS.map((s) => {
      const on = selected.includes(s);
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(on ? selected.filter((x) => x !== s) : [...selected, s]), className: cn("rounded-2xl p-3 text-left text-sm border-2 transition-smooth", on ? "border-primary bg-secondary shadow-soft" : "border-border bg-card"), children: s }, s);
    }) }),
    matches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Possible matches" }),
      matches.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary font-medium", children: [
            Math.round(m.score * 100),
            "% match"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: m.note }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "See:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: m.specialist })
        ] })
      ] }, m.name))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-6 text-center", children: "This tool offers patterns, not medical advice. Always consult a qualified clinician." })
  ] });
}
function InsightsTab() {
  const [entries] = useLocalStorage("blume.log", []);
  const {
    settings
  } = useCycle();
  const byPhase = {
    menstrual: {
      count: 0,
      energy: 0
    },
    follicular: {
      count: 0,
      energy: 0
    },
    ovulatory: {
      count: 0,
      energy: 0
    },
    luteal: {
      count: 0,
      energy: 0
    }
  };
  entries.forEach((e) => {
    const p = getPhaseForDay(new Date(e.date), settings);
    byPhase[p].count += 1;
    byPhase[p].energy += e.energy;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Cycle length", value: `${settings.cycleLength} days` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Period length", value: `${settings.periodLength} days` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Logs collected", value: entries.length.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Tracking since", value: entries[0] ? entries[0].date.slice(5) : "—" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-6 mb-3", children: "Avg energy by phase" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.keys(byPhase).map((p) => {
      const avg = byPhase[p].count ? byPhase[p].energy / byPhase[p].count : 0;
      const meta = PHASE_META[p];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            meta.emoji,
            " ",
            meta.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold", children: [
            avg ? avg.toFixed(1) : "—",
            "/5"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-smooth", style: {
          width: `${avg / 5 * 100}%`,
          backgroundColor: meta.color
        } }) })
      ] }, p);
    }) })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold mt-1", children: value })
  ] });
}
function MedicationTab() {
  const [meds, setMeds] = useLocalStorage("blume.meds", []);
  const [name, setName] = reactExports.useState("");
  const [dose, setDose] = reactExports.useState("");
  const [schedule, setSchedule] = reactExports.useState("Daily");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Medication name", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: dose, onChange: (e) => setDose(e.target.value), placeholder: "Dose (e.g. 500mg)", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: schedule, onChange: (e) => setSchedule(e.target.value), className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Daily" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Twice daily" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "As needed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Weekly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: !name, onClick: () => {
        setMeds([...meds, {
          id: crypto.randomUUID(),
          name,
          dose,
          schedule
        }]);
        setName("");
        setDose("");
      }, className: "w-full gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft disabled:opacity-50", children: "Add medication" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: meds.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "size-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          m.dose,
          " · ",
          m.schedule
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMeds(meds.filter((x) => x.id !== m.id)), className: "text-muted-foreground hover:text-destructive transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }) })
    ] }, m.id)) })
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
  HealthPage as component
};
