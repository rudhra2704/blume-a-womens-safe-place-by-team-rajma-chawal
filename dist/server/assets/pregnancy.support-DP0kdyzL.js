import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-L2rlBK2h.js";
import { c as createLucideIcon, a as usePregnancy, A as AppShell, e as cn, H as Heart } from "./AppShell-D1GgmO_x.js";
import { S as SectionHeader } from "./SectionHeader-wkFympTJ.js";
import { H as HeartHandshake } from "./heart-handshake-QlkIhktC.js";
import { U as Users } from "./users-DHSnUqnt.js";
import { S as Settings } from "./settings-BxdmR84r.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C5moJc4w.js";
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const MessageCircleQuestionMark = createLucideIcon("message-circle-question-mark", __iconNode);
function SupportPage() {
  const [tab, setTab] = reactExports.useState("partner");
  const {
    active
  } = usePregnancy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Support Circle", subtitle: "Partners, family, Q&A & setup", back: "/pregnancy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-hero p-5 shadow-soft mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-foreground/70", children: "Your support network" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg mt-1", children: "💕 Partner tips · 👨‍👩‍👧 Family guidance · ❓ Q&A · ⚙️ Setup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-1", children: active ? "Everything your support circle needs" : "Set up your LMP to get started" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5 overflow-x-auto -mx-5 px-5 pb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "partner", onClick: () => setTab("partner"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "size-3.5" }), children: "Partner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "family", onClick: () => setTab("family"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-3.5" }), children: "Family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "qa", onClick: () => setTab("qa"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleQuestionMark, { className: "size-3.5" }), children: "Q&A" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabPill, { active: tab === "setup", onClick: () => setTab("setup"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "size-3.5" }), children: "Setup" })
    ] }),
    tab === "partner" && /* @__PURE__ */ jsxRuntimeExports.jsx(PartnerTab, {}),
    tab === "family" && /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyTab, {}),
    tab === "qa" && /* @__PURE__ */ jsxRuntimeExports.jsx(QATab, {}),
    tab === "setup" && /* @__PURE__ */ jsxRuntimeExports.jsx(SetupTab, {})
  ] });
}
const TIPS_BY_TRI = {
  1: ["Take on the cooking — smells can be overwhelming.", "Be the snack hero. Keep crackers by the bed.", "Read one pregnancy article a week together.", "Come to the dating scan if you can."],
  2: ["Plan a babymoon — even one quiet weekend.", "Talk to the bump. Baby can hear you now.", "Help shop for maternity essentials.", "Attend the anomaly scan together."],
  3: ["Pack the hospital bag together.", "Practice timing contractions in advance.", "Pre-cook freezer meals for postpartum.", "Be the lead on baby admin: paperwork, registry."]
};
function PartnerTab() {
  const {
    trimester,
    active
  } = usePregnancy();
  const tri = active ? trimester : 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [
      "Trimester ",
      tri,
      " support tips"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: TIPS_BY_TRI[tri].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl bg-card p-4 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-xl gradient-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4 text-primary-foreground", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: t })
    ] }, i)) })
  ] });
}
const FAMILY_TIPS = [{
  title: "Avoid 'You look so big!'",
  body: "Comments on body size — even meant kindly — can hit hard. Try 'You're glowing' or 'How are you feeling?' instead."
}, {
  title: "Ask before touching the bump",
  body: "It's still her body. A simple 'Can I?' goes a long way."
}, {
  title: "Bring food, not advice",
  body: "Unsolicited tips can pile up. A home-cooked meal is always welcome."
}, {
  title: "Watch for postpartum changes",
  body: "If she seems persistently sad, anxious, withdrawn, or detached after birth — gently encourage her to talk to her doctor."
}, {
  title: "Protect her rest",
  body: "Run interference with visitors. Sleep is a healing tool."
}, {
  title: "Celebrate her",
  body: "She's doing extraordinary work. Acknowledge it specifically and often."
}];
function FamilyTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAMILY_TIPS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-4 border border-border shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: t.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 leading-relaxed", children: t.body })
  ] }, t.title)) });
}
const FAQ = [{
  q: "Is it normal to feel cramping in week 14?",
  a: "Mild cramping in the second trimester is often round-ligament stretching as the uterus grows. Sharp, persistent, or one-sided pain — or any bleeding — warrants a call to your provider."
}, {
  q: "When will I feel the baby move?",
  a: "First-time parents typically feel quickening between weeks 18-22. If you've been pregnant before, you may notice flutters as early as 16 weeks."
}, {
  q: "Can I drink coffee?",
  a: "Most guidelines suggest staying under 200mg caffeine per day — about one 12-oz coffee. Tea, chocolate, and sodas count toward the total."
}, {
  q: "What's a Braxton-Hicks contraction?",
  a: "Practice contractions — irregular tightening that doesn't progress. They tend to ease with hydration and rest. True labor contractions get longer, stronger, and closer together."
}, {
  q: "Is light exercise safe?",
  a: "Yes — walking, prenatal yoga, swimming, and stationary cycling are widely supported. Avoid contact sports and exercises lying flat on your back after 20 weeks."
}, {
  q: "When should I call my doctor immediately?",
  a: "Heavy bleeding, severe headache with vision changes, sudden swelling, fever above 100.4°F, severe abdominal pain, or noticeably reduced fetal movement."
}];
function QATab() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Evidence-based starting points" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: FAQ.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full text-left rounded-2xl bg-card p-4 border border-border shadow-card transition-smooth hover:shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: f.q }),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: f.a })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-6", children: "General information — never replaces your provider's advice." })
  ] });
}
function SetupTab() {
  const {
    settings,
    setSettings,
    active,
    dueDate
  } = usePregnancy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-5 border border-border shadow-card space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "First day of last period (LMP)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: settings.lmp, onChange: (e) => setSettings({
        lmp: e.target.value
      }), className: "w-full rounded-xl bg-secondary px-4 py-3 text-sm" })
    ] }),
    active && dueDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl gradient-soft p-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Estimated due date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl mt-1", children: dueDate.toLocaleDateString(void 0, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }) })
    ] }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSettings({
      lmp: ""
    }), className: "w-full rounded-2xl py-3 text-sm text-destructive border border-destructive/30", children: "Clear pregnancy data" })
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
  SupportPage as component
};
