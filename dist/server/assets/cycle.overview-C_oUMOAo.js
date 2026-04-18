import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, j as constructFrom, k as normalizeDates, s as startOfDay, t as toDate, A as AppShell, S as Sparkles, C as Calendar, b as useCycle, P as PHASE_META, f as format, e as cn, l as startOfWeek, h as addDays, i as getPhaseForDay } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { C as ChevronRight } from "./chevron-right-8JTiZAqc.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function constructNow(date) {
  return constructFrom(date, Date.now());
}
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function endOfWeek(date, options) {
  const weekStartsOn = options?.weekStartsOn;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
function isToday(date, options) {
  return isSameDay(
    constructFrom(date, date),
    constructNow(date)
  );
}
function OverviewPage() {
  const [tab, setTab] = reactExports.useState("briefing");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Daily Overview", subtitle: "Your phase at a glance", back: "/cycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "briefing", onClick: () => setTab("briefing"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }), children: "Daily Briefing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "calendar", onClick: () => setTab("calendar"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3.5" }), children: "Phase Calendar" })
    ] }),
    tab === "briefing" && /* @__PURE__ */ jsxRuntimeExports.jsx(BriefingTab, {}),
    tab === "calendar" && /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarTab, {})
  ] });
}
function SummaryBanner() {
  const {
    today
  } = useCycle();
  const meta = PHASE_META[today.phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: meta.emoji }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
        "Day ",
        today.cycleDay,
        " · ",
        meta.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/70 mt-0.5", children: [
        "Next period ",
        format(today.nextPeriod, "MMM d"),
        " · ovulation",
        " ",
        format(today.nextOvulation, "MMM d")
      ] })
    ] })
  ] }) });
}
function BriefingTab() {
  const {
    today
  } = useCycle();
  const meta = PHASE_META[today.phase];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Today's vibe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 mt-2 text-sm", children: meta.vibe })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "What works today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: meta.tasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
        " ",
        t
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Next period" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg mt-1", children: format(today.nextPeriod, "MMM d") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "in ",
          today.daysUntilPeriod,
          " days"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ovulation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg mt-1", children: format(today.nextOvulation, "MMM d") })
      ] })
    ] })
  ] });
}
function CalendarTab() {
  const {
    settings
  } = useCycle();
  const [cursor, setCursor] = reactExports.useState(/* @__PURE__ */ new Date());
  const start = startOfWeek(startOfMonth(cursor), {
    weekStartsOn: 1
  });
  const end = endOfWeek(endOfMonth(cursor), {
    weekStartsOn: 1
  });
  const days = [];
  for (let d = start; d <= end; d = addDays(d, 1)) days.push(d);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCursor(addDays(startOfMonth(cursor), -1)), className: "size-9 rounded-full bg-card border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: format(cursor, "MMMM yyyy") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCursor(addDays(endOfMonth(cursor), 1)), className: "size-9 rounded-full bg-card border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground mb-2", children: ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: d }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: days.map((d) => {
      const phase = getPhaseForDay(d, settings);
      const inMonth = isSameMonth(d, cursor);
      const isMenstrual = phase === "menstrual";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("size-10 sm:size-11 rounded-full flex flex-col items-center justify-center relative transition-smooth shadow-sm hover:shadow-md hover:-translate-y-0.5", !inMonth && "opacity-30", isToday(d) && !isMenstrual && "ring-2 ring-primary ring-offset-2 ring-offset-background", isMenstrual && "ring-2 ring-destructive ring-offset-2 ring-offset-background"), style: {
        backgroundColor: `color-mix(in oklch, ${PHASE_META[phase].color} 30%, white)`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[11px] sm:text-xs font-semibold", isMenstrual ? "text-destructive" : "text-foreground"), children: format(d, "d") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] leading-none mt-0.5 opacity-80", children: PHASE_META[phase].emoji })
      ] }) }, d.toISOString());
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-2", children: ["menstrual", "follicular", "ovulatory", "luteal"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full", style: {
        backgroundColor: `color-mix(in oklch, ${PHASE_META[p].color} 50%, white)`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        PHASE_META[p].emoji,
        " ",
        PHASE_META[p].label
      ] })
    ] }, p)) })
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
  OverviewPage as component
};
