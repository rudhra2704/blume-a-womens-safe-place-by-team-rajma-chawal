import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, a as usePregnancy, d as useLocalStorage, A as AppShell, e as cn, f as format } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { A as Activity } from "./activity-B1PRJ3gI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode$4 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }]
];
const Scale = createLucideIcon("scale", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
const Square = createLucideIcon("square", __iconNode$1);
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
function TrackersPage() {
  const [tab, setTab] = reactExports.useState("symptoms");
  const {
    trimester,
    active
  } = usePregnancy();
  const [weightEntries] = useLocalStorage("blume.preg.weight", []);
  const [symptomLogs] = useLocalStorage("blume.preg.symptoms", []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Body & Symptoms", subtitle: "Track what your body is telling you", back: "/pregnancy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Tracking summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: symptomLogs.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "symptom logs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: weightEntries.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "weight logs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
            "T",
            active ? trimester : "—"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "trimester" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5 overflow-x-auto -mx-5 px-5 pb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "symptoms", onClick: () => setTab("symptoms"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-3.5" }), children: "Symptoms" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "weight", onClick: () => setTab("weight"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "size-3.5" }), children: "Weight" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "contractions", onClick: () => setTab("contractions"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "size-3.5" }), children: "Contractions" })
    ] }),
    tab === "symptoms" && /* @__PURE__ */ jsxRuntimeExports.jsx(SymptomsTab, {}),
    tab === "weight" && /* @__PURE__ */ jsxRuntimeExports.jsx(WeightTab, {}),
    tab === "contractions" && /* @__PURE__ */ jsxRuntimeExports.jsx(ContractionsTab, {})
  ] });
}
const BY_TRI = {
  1: ["Nausea", "Fatigue", "Tender breasts", "Frequent urination", "Food aversions"],
  2: ["Round ligament pain", "Heartburn", "Backache", "Quickening (kicks)", "Glow"],
  3: ["Braxton-Hicks", "Swelling", "Insomnia", "Strong kicks", "Pelvic pressure"]
};
function SymptomsTab() {
  const {
    trimester,
    active
  } = usePregnancy();
  const [logs, setLogs] = useLocalStorage("blume.preg.symptoms", []);
  const [intensity, setIntensity] = reactExports.useState({});
  const tri = active ? trimester : 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: BY_TRI[tri].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          intensity[s] ?? 0,
          "/5"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-3", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIntensity({
        ...intensity,
        [s]: n
      }), className: cn("flex-1 aspect-square rounded-xl border-2 text-sm transition-smooth", intensity[s] === n ? "border-primary bg-secondary" : "border-border bg-card"), children: n }, n)) })
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
      const newLogs = Object.entries(intensity).map(([symptom, i]) => ({
        date: today,
        symptom,
        intensity: i
      }));
      setLogs([...logs.filter((l) => l.date !== today), ...newLogs]);
      setIntensity({});
    }, className: "w-full mt-4 gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft", children: "Save today" })
  ] });
}
function WeightTab() {
  const {
    week,
    active
  } = usePregnancy();
  const [entries, setEntries] = useLocalStorage("blume.preg.weight", []);
  const [kg, setKg] = reactExports.useState(60);
  const lower = active ? Math.max(0, (week - 13) * 0.45) : 0;
  const upper = active ? Math.max(0, (week - 13) * 0.6) + 2 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    active && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Recommended cumulative gain by week ",
        week
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl mt-1", children: [
        lower.toFixed(1),
        " – ",
        upper.toFixed(1),
        " kg"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: [
        "Today's weight: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
          kg,
          " kg"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 40, max: 120, step: 0.5, value: kg, onChange: (e) => setKg(Number(e.target.value)), className: "w-full accent-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
        setEntries([...entries.filter((e) => e.date !== date), {
          date,
          kg
        }]);
      }, className: "w-full mt-3 gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft", children: "Log weight" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: entries.slice().reverse().slice(0, 14).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-3 border border-border flex justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(new Date(e.date), "EEE, MMM d") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
        e.kg,
        " kg"
      ] })
    ] }, e.date)) })
  ] });
}
function ContractionsTab() {
  const [list, setList] = reactExports.useState([]);
  const [running, setRunning] = reactExports.useState(false);
  const [now, setNow] = reactExports.useState(Date.now());
  const interval = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (running) {
      interval.current = setInterval(() => setNow(Date.now()), 250);
      return () => {
        if (interval.current) clearInterval(interval.current);
      };
    }
  }, [running]);
  const startTimer = () => {
    setList([{
      start: Date.now()
    }, ...list]);
    setRunning(true);
  };
  const stopTimer = () => {
    setList(([first, ...rest]) => first ? [{
      ...first,
      end: Date.now()
    }, ...rest] : []);
    setRunning(false);
  };
  const current = list[0];
  const elapsed = current && !current.end ? (now - current.start) / 1e3 : 0;
  const stats = list.filter((c) => c.end).slice(0, 5).map((c, i, arr) => {
    const prev = arr[i + 1];
    const dur = c.end ? (c.end - c.start) / 1e3 : 0;
    const gap = prev ? (c.start - prev.start) / 6e4 : 0;
    return {
      ...c,
      dur,
      gap
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-8 text-center shadow-card border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: running ? "Contracting" : "Tap to start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-5xl mt-3", children: [
        Math.floor(elapsed / 60).toString().padStart(2, "0"),
        ":",
        Math.floor(elapsed % 60).toString().padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: running ? stopTimer : startTimer, className: "mt-6 mx-auto size-20 rounded-full gradient-primary text-primary-foreground shadow-soft flex items-center justify-center", children: running ? /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "size-7" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-7 ml-1" }) })
    ] }),
    list.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setList([]), className: "mx-auto mt-4 flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3" }),
      " Reset"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: stats.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-3 border border-border flex justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(c.start, "HH:mm:ss") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        c.dur.toFixed(0),
        "s · every ",
        c.gap ? c.gap.toFixed(1) + "m" : "—"
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-6", children: "511 rule: contractions every 5 min, lasting 1 min, for 1 hour → call provider." })
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
  TrackersPage as component
};
