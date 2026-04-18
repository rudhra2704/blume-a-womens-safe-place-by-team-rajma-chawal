import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, h as addDays, a as usePregnancy, A as AppShell, n as nearestWeekInfo, f as format, B as Baby, e as cn, W as WEEKLY_INFO } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
const CalendarClock = createLucideIcon("calendar-clock", __iconNode);
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}
function JourneyPage() {
  const [tab, setTab] = reactExports.useState("weekly");
  const {
    active,
    week,
    dueDate,
    trimester,
    daysToDue
  } = usePregnancy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Weekly Journey", subtitle: "Development & appointments", back: "/pregnancy" }),
    active && dueDate ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: nearestWeekInfo(week).emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: [
          "Trimester ",
          trimester,
          " · Week ",
          week
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold mt-0.5", children: [
          "Size of a ",
          nearestWeekInfo(week).size
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/70 mt-0.5", children: [
          "Due ",
          format(dueDate, "MMM d, yyyy"),
          " · ",
          daysToDue,
          " days to go"
        ] })
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "Set your LMP in Support → Setup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-1", children: "to unlock your weekly journey." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "weekly", onClick: () => setTab("weekly"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "size-3.5" }), children: "Weekly Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "appointments", onClick: () => setTab("appointments"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "size-3.5" }), children: "Appointments" })
    ] }),
    tab === "weekly" && /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyTab, {}),
    tab === "appointments" && /* @__PURE__ */ jsxRuntimeExports.jsx(AppointmentsTab, {})
  ] });
}
function WeeklyTab() {
  const {
    active,
    week
  } = usePregnancy();
  if (!active) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Set your LMP first in Setup." });
  const current = nearestWeekInfo(week);
  const allWeeks = Object.entries(WEEKLY_INFO);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-6 mb-6 shadow-card border border-border text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-6xl", children: current.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl mt-3", children: current.milestone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-3", children: "Journey" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: allWeeks.map(([w, info]) => {
      const wk = Number(w);
      const isPast = wk < week;
      const isCurrent = Math.abs(wk - week) <= 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-4 border flex items-start gap-3 transition-smooth " + (isCurrent ? "bg-secondary border-primary shadow-soft" : isPast ? "bg-card border-border opacity-60" : "bg-card border-border"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl bg-background flex items-center justify-center text-lg shrink-0", children: info.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Week ",
            w
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-sm", children: [
            "Size of a ",
            info.size
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: info.milestone })
        ] })
      ] }, w);
    }) })
  ] });
}
const TIMELINE = [{
  week: 8,
  label: "First prenatal visit",
  desc: "Confirm pregnancy, dating scan"
}, {
  week: 12,
  label: "NT scan",
  desc: "First trimester screening"
}, {
  week: 16,
  label: "Check-up + bloodwork",
  desc: "Iron, thyroid, AFP"
}, {
  week: 20,
  label: "Anomaly scan",
  desc: "Detailed anatomy ultrasound"
}, {
  week: 24,
  label: "Glucose challenge",
  desc: "GD screening"
}, {
  week: 28,
  label: "RhoGAM (if Rh-)",
  desc: "Begin third trimester"
}, {
  week: 32,
  label: "Growth scan",
  desc: "Position & growth check"
}, {
  week: 36,
  label: "GBS swab",
  desc: "Group B Strep test"
}, {
  week: 38,
  label: "Weekly visits start",
  desc: "Cervical checks if needed"
}];
function AppointmentsTab() {
  const {
    active,
    week,
    settings
  } = usePregnancy();
  const lmp = settings.lmp ? new Date(settings.lmp) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: TIMELINE.map((t) => {
    const date = lmp ? format(addWeeks(lmp, t.week - 1), "EEE, MMM d") : null;
    const past = active && week > t.week;
    const next = active && !past && t.week - week <= 2;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-2xl p-4 border flex items-start gap-3", next ? "bg-secondary border-primary shadow-soft" : "bg-card border-border", past && "opacity-50"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "size-12 rounded-xl bg-background flex flex-col items-center justify-center shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "WK" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold", children: t.week })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-sm flex items-center gap-2", children: [
          t.label,
          past && /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "size-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: t.desc }),
        date && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary mt-1", children: date })
      ] })
    ] }, t.week);
  }) });
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
  JourneyPage as component
};
