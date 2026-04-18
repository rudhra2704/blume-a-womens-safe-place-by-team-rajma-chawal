import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, d as useLocalStorage, b as useCycle, A as AppShell, e as cn, P as PHASE_META, f as format } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { M as MapPin } from "./map-pin-efC_ZOw8.js";
import { U as Users } from "./users-DHSnUqnt.js";
import { T as Trash2 } from "./trash-2-C57dGKN8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode$2 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$2);
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
function ManagePage() {
  const [tab, setTab] = reactExports.useState("settings");
  const [alerts] = useLocalStorage("blume.alerts", []);
  const {
    settings
  } = useCycle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Settings & Sharing", subtitle: "Configure, remind & share", back: "/cycle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "At a glance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
            settings.cycleLength,
            "d"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "cycle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-semibold", children: [
            settings.periodLength,
            "d"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "period" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold", children: alerts.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-foreground/60", children: "reminders" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "settings", onClick: () => setTab("settings"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5" }), children: "Cycle Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "alerts", onClick: () => setTab("alerts"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "size-3.5" }), children: "Alerts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "sharing", onClick: () => setTab("sharing"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-3.5" }), children: "Partner Sharing" })
    ] }),
    tab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {}),
    tab === "alerts" && /* @__PURE__ */ jsxRuntimeExports.jsx(AlertsTab, {}),
    tab === "sharing" && /* @__PURE__ */ jsxRuntimeExports.jsx(SharingTab, {})
  ] });
}
function SettingsTab() {
  const {
    settings,
    setSettings
  } = useCycle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last period start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: settings.lastPeriodStart, onChange: (e) => setSettings({
      ...settings,
      lastPeriodStart: e.target.value
    }), className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Cycle length: ${settings.cycleLength} days`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 21, max: 45, value: settings.cycleLength, onChange: (e) => setSettings({
      ...settings,
      cycleLength: Number(e.target.value)
    }), className: "w-full accent-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Period length: ${settings.periodLength} days`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 2, max: 10, value: settings.periodLength, onChange: (e) => setSettings({
      ...settings,
      periodLength: Number(e.target.value)
    }), className: "w-full accent-primary" }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    children
  ] });
}
const PRESETS = ["Start prenatals", "Order period supplies", "Refill prescription", "Schedule annual exam", "Take supplement"];
function AlertsTab() {
  const [alerts, setAlerts] = useLocalStorage("blume.alerts", []);
  const [label, setLabel] = reactExports.useState("");
  const [when, setWhen] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: label, onChange: (e) => setLabel(e.target.value), placeholder: "What to remember", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: when, onChange: (e) => setWhen(e.target.value), placeholder: "When (e.g. day 1, every Monday)", className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLabel(p), className: "px-3 py-1.5 rounded-full text-xs bg-secondary text-foreground border border-border", children: p }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: !label, onClick: () => {
        setAlerts([...alerts, {
          id: crypto.randomUUID(),
          label,
          when: when || "Daily"
        }]);
        setLabel("");
        setWhen("");
      }, className: "w-full gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft disabled:opacity-50", children: "Add reminder" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "size-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: a.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: a.when })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAlerts(alerts.filter((x) => x.id !== a.id)), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }) })
    ] }, a.id)) })
  ] });
}
function SharingTab() {
  const {
    today,
    settings
  } = useCycle();
  const [copied, setCopied] = reactExports.useState(false);
  const [share, setShare] = reactExports.useState({
    phase: true,
    energy: true,
    period: true
  });
  const meta = PHASE_META[today.phase];
  const lines = ["Here's a heads-up from my cycle 🌷", share.phase && `• I'm on day ${today.cycleDay} (${meta.label} phase)`, share.energy && `• Vibe: ${meta.vibe}`, share.period && `• Next period around ${format(today.nextPeriod, "MMM d")}`].filter(Boolean).join("\n");
  const copy = async () => {
    await navigator.clipboard.writeText(lines);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: ["phase", "energy", "period"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 rounded-xl bg-card p-3 border border-border cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: share[k], onChange: (e) => setShare({
        ...share,
        [k]: e.target.checked
      }), className: "size-4 accent-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm capitalize", children: k })
    ] }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card whitespace-pre-line text-sm", children: lines }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: "w-full mt-4 gradient-primary text-primary-foreground rounded-2xl py-3 font-medium shadow-soft flex items-center justify-center gap-2", children: [
      copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-4" }),
      copied ? "Copied" : "Copy to share"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground text-center mt-3", children: [
      "Stays on your device — sharing is always your choice. (LMP: ",
      settings.lastPeriodStart,
      ")"
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
  ManagePage as component
};
