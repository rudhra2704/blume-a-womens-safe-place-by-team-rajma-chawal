import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, d as useLocalStorage, f as format, A as AppShell, H as Heart, e as cn } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { A as Activity } from "./activity-B1PRJ3gI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode);
function TrackersPage() {
  const [tab, setTab] = reactExports.useState("mood");
  const [logEntries] = useLocalStorage("blume.log", []);
  const [painEntries] = useLocalStorage("blume.pain", []);
  const [sleepEntries] = useLocalStorage("blume.sleep", []);
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const todayLog = logEntries.find((e) => e.date === today);
  const todaySleep = sleepEntries.find((e) => e.date === today);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Body Trackers", subtitle: "Log mood, pain & sleep daily", back: "/cycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Today's snapshot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl", children: todayLog?.mood ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "mood" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
            todayLog?.energy ?? "—",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "/5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "energy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
            todaySleep?.hours ?? "—",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "h" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "sleep" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: painEntries.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "pain logs" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "mood", onClick: () => setTab("mood"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-3.5" }), children: "Energy & Mood" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "pain", onClick: () => setTab("pain"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-3.5" }), children: "Pain Mapping" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "sleep", onClick: () => setTab("sleep"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-3.5" }), children: "Sleep & Stress" })
    ] }),
    tab === "mood" && /* @__PURE__ */ jsxRuntimeExports.jsx(MoodTab, {}),
    tab === "pain" && /* @__PURE__ */ jsxRuntimeExports.jsx(PainTab, {}),
    tab === "sleep" && /* @__PURE__ */ jsxRuntimeExports.jsx(SleepTab, {})
  ] });
}
const moods = ["😊", "😌", "😐", "😔", "😣", "😤", "🥰", "😴"];
function MoodTab() {
  const [entries, setEntries] = useLocalStorage("blume.log", []);
  const [energy, setEnergy] = reactExports.useState(3);
  const [mood, setMood] = reactExports.useState("😊");
  const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
  const save = () => {
    const next = entries.filter((e) => e.date !== today);
    setEntries([...next, {
      date: today,
      energy,
      mood
    }].slice(-90));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-6 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Energy level" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between mt-3 gap-2", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEnergy(n), className: cn("flex-1 aspect-square rounded-2xl border-2 font-display text-lg transition-smooth", energy === n ? "bg-primary text-primary-foreground border-primary shadow-soft" : "border-border bg-secondary"), children: n }, n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground flex justify-between mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "drained" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "thriving" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-6", children: "Mood" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 mt-3", children: moods.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMood(m), className: cn("aspect-square rounded-2xl text-2xl border-2 transition-smooth", mood === m ? "border-primary bg-secondary shadow-soft" : "border-border bg-card"), children: m }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "w-full mt-6 gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft transition-smooth hover:shadow-glow", children: "Save today's check-in" })
    ] }),
    entries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3", children: "Recent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: entries.slice().reverse().slice(0, 7).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-card p-3 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: format(new Date(e.date), "EEE, MMM d") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: e.mood }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "energy ",
            e.energy,
            "/5"
          ] })
        ] })
      ] }, e.date)) })
    ] })
  ] });
}
const PAIN_TYPES = ["Cramps", "Back pain", "Headache", "Breast", "Joint", "Pelvic"];
const PAIN_LOCATIONS = ["Lower abdomen", "Lower back", "Head", "Chest", "Pelvis", "Legs"];
function PainTab() {
  const [entries, setEntries] = useLocalStorage("blume.pain", []);
  const [type, setType] = reactExports.useState(PAIN_TYPES[0]);
  const [intensity, setIntensity] = reactExports.useState(5);
  const [location, setLocation] = reactExports.useState(PAIN_LOCATIONS[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PAIN_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setType(t), className: cn("px-3 py-1.5 rounded-full text-xs border-2 transition-smooth", type === t ? "border-primary bg-secondary" : "border-border bg-card"), children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PAIN_LOCATIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation(l), className: cn("px-3 py-1.5 rounded-full text-xs border-2 transition-smooth", location === l ? "border-primary bg-secondary" : "border-border bg-card"), children: l }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: [
          "Intensity: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
            intensity,
            "/10"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 10, value: intensity, onChange: (e) => setIntensity(Number(e.target.value)), className: "w-full accent-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEntries([...entries, {
        date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm"),
        type,
        intensity,
        location
      }]), className: "w-full gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft", children: "Log pain" })
    ] }),
    entries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: entries.slice().reverse().map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-3 border border-border flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
          e.type,
          " · ",
          e.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: e.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-display font-semibold", children: [
        e.intensity,
        "/10"
      ] })
    ] }, i)) })
  ] });
}
function SleepTab() {
  const [entries, setEntries] = useLocalStorage("blume.sleep", []);
  const [hours, setHours] = reactExports.useState(7);
  const [stress, setStress] = reactExports.useState(3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: [
          "Sleep: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
            hours,
            "h"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 0, max: 12, step: 0.5, value: hours, onChange: (e) => setHours(Number(e.target.value)), className: "w-full accent-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: [
          "Stress: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
            stress,
            "/5"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 1, max: 5, value: stress, onChange: (e) => setStress(Number(e.target.value)), className: "w-full accent-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const date = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
        setEntries([...entries.filter((e) => e.date !== date), {
          date,
          hours,
          stress
        }]);
      }, className: "w-full gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft", children: "Save tonight" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: entries.slice().reverse().slice(0, 14).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card p-3 border border-border flex justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(new Date(e.date), "EEE, MMM d") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "💤 ",
        e.hours,
        "h · 😬 ",
        e.stress,
        "/5"
      ] })
    ] }, e.date)) })
  ] });
}
function TabPill({
  active,
  onClick,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: cn("flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border transition-smooth", active ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-card border-border text-muted-foreground hover:text-foreground"), children: [
    icon,
    children
  ] });
}
export {
  TrackersPage as component
};
