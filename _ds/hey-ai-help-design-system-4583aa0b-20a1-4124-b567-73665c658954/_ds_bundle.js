/* @ds-bundle: {"format":3,"namespace":"HeyAIHelpDesignSystem_4583aa","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"CalloutCard","sourcePath":"components/surfaces/CalloutCard.jsx"},{"name":"CodeWindow","sourcePath":"components/surfaces/CodeWindow.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"PricingCard","sourcePath":"components/surfaces/PricingCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"63f512637bb4","components/core/Badge.jsx":"0f138797bde0","components/core/Button.jsx":"86b04e6a85ba","components/core/IconButton.jsx":"41a4fbf1d751","components/core/Input.jsx":"d46ba4e59352","components/core/Tabs.jsx":"95cdf438b0c8","components/surfaces/CalloutCard.jsx":"749ed25d4bc0","components/surfaces/CodeWindow.jsx":"fda2badc803e","components/surfaces/FeatureCard.jsx":"915b9761b1e2","components/surfaces/PricingCard.jsx":"df17a93e5edb","ui_kits/marketing-site/ConnectorsScreen.jsx":"88f3c3713efd","ui_kits/marketing-site/Footer.jsx":"a912743d7acd","ui_kits/marketing-site/HomeScreen.jsx":"1d363dcdaae9","ui_kits/marketing-site/PricingScreen.jsx":"15196e1b97f5","ui_kits/marketing-site/TopNav.jsx":"cffd99ea34d6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HeyAIHelpDesignSystem_4583aa = window.HeyAIHelpDesignSystem_4583aa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — Hey AI Help brand mark + wordmark. The coral chat-bubble glyph is the
 * brand prefix; never invert the glyph to white within the wordmark itself.
 */
function Logo({
  variant = "wordmark",
  onDark = false,
  height = 28,
  style,
  ...rest
}) {
  const wordColor = onDark ? "var(--color-on-dark)" : "var(--color-ink)";
  const dotColor = "var(--color-on-primary)";
  const glyph = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: height,
    height: height,
    style: {
      flex: "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 6h32a10 10 0 0 1 10 10v22a10 10 0 0 1-10 10H30L16 58V48a10 10 0 0 1-10-10V16A10 10 0 0 1 16 6Z",
    fill: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "28",
    r: "3.4",
    fill: dotColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "34",
    cy: "28",
    r: "3.4",
    fill: dotColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "28",
    r: "3.4",
    fill: dotColor
  }));
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        ...style
      }
    }, rest), glyph);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, rest), glyph, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: height * 1.05,
      fontWeight: 500,
      letterSpacing: "-0.5px",
      lineHeight: 1,
      color: wordColor
    }
  }, "Hey AI Help"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. `pill` (cream), `coral` (filled), `uppercase` (coral
 * uppercase NEW/BETA), plus accent tints.
 */
function Badge({
  variant = "pill",
  children,
  style,
  ...rest
}) {
  const variants = {
    pill: {
      background: "var(--color-surface-card)",
      color: "var(--color-ink)",
      fontSize: "var(--type-caption-size)",
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none"
    },
    coral: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontSize: "var(--type-caption-size)",
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none"
    },
    uppercase: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontSize: "var(--type-caption-upper-size)",
      fontWeight: 500,
      letterSpacing: "1.5px",
      textTransform: "uppercase"
    },
    teal: {
      background: "rgba(93,184,166,0.16)",
      color: "#2f7e6f",
      fontSize: "var(--type-caption-size)",
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none"
    },
    amber: {
      background: "rgba(232,165,90,0.18)",
      color: "#9a6420",
      fontSize: "var(--type-caption-size)",
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      lineHeight: 1.4,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Hey AI Help's primary action control.
 * Coral primary used scarcely; secondary is cream-with-hairline.
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: "0 14px",
      fontSize: 13
    },
    md: {
      height: 40,
      padding: "0 20px",
      fontSize: "var(--type-button-size)"
    },
    lg: {
      height: 48,
      padding: "0 26px",
      fontSize: 15
    }
  };
  const variants = {
    primary: {
      background: disabled ? "var(--color-primary-disabled)" : "var(--color-primary)",
      color: disabled ? "var(--color-muted-soft)" : "var(--color-on-primary)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: "1px solid var(--color-hairline)"
    },
    "secondary-on-dark": {
      background: "var(--color-surface-dark-elevated)",
      color: "var(--color-on-dark)",
      border: "1px solid transparent"
    },
    "on-coral": {
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: "1px solid transparent"
    },
    text: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "1px solid transparent",
      padding: "0 4px"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--type-button-weight)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 120ms ease",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onDown = e => {
    if (disabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--color-primary-active)";
  };
  const onUp = e => {
    if (disabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--color-primary)";
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp,
    disabled: !href ? disabled : undefined,
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 36px circular icon control (carousel arrows, share, view-more).
 * Cream with hairline by default; `on-dark` variant for dark surfaces.
 */
function IconButton({
  variant = "default",
  size = 36,
  label,
  children,
  onClick,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      color: "var(--color-ink)"
    },
    "on-dark": {
      background: "var(--color-surface-dark-elevated)",
      border: "1px solid transparent",
      color: "var(--color-on-dark)"
    },
    ghost: {
      background: "transparent",
      border: "1px solid transparent",
      color: "var(--color-ink)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      cursor: "pointer",
      padding: 0,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — standard text input. Cream bg, hairline border, coral focus ring.
 */
function Input({
  type = "text",
  invalid = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = invalid ? "var(--color-error)" : focused ? "var(--color-primary)" : "var(--color-hairline)";
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      height: 40,
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: 1.55,
      color: "var(--color-ink)",
      background: "var(--color-canvas)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focused && !invalid ? "var(--ring-focus)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — category/filter row. Active tab gets a cream-card fill + ink text.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map(item => {
    const id = typeof item === "string" ? item : item.id;
    const label = typeof item === "string" ? item : item.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        padding: "8px 14px",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.4,
        cursor: "pointer",
        border: "none",
        borderRadius: "var(--radius-md)",
        background: active ? "var(--color-surface-card)" : "transparent",
        color: active ? "var(--color-ink)" : "var(--color-muted)",
        transition: "background 120ms ease, color 120ms ease"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CalloutCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CalloutCard — full-bleed coral CTA card. Coral surface IS the voltage;
 * the inner button uses the cream `on-coral` style.
 */
function CalloutCard({
  title,
  body,
  ctaLabel = "Try Hey AI Help",
  onCta,
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-xxl)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--type-display-sm-size)",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.3px",
      maxWidth: "20ch"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.55,
      opacity: 0.92,
      maxWidth: "46ch"
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "on-coral",
    href: href,
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { CalloutCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CalloutCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CodeWindow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CodeWindow — dark code-editor card. Line numbers + monospace body on the
 * dark surface, optional terminal output panel below. The signature
 * product-chrome element. Pass `children` to supply syntax-highlighted JSX,
 * or `code` for plain auto-numbered text.
 */
function CodeWindow({
  filename = "main.py",
  code = "",
  children,
  terminal,
  style,
  ...rest
}) {
  const lines = code ? code.replace(/\n$/, "").split("\n") : [];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-surface-dark)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-lg)",
      fontFamily: "var(--font-mono)",
      color: "var(--color-on-dark)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#3a3833"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#3a3833"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#3a3833"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 12,
      color: "var(--color-on-dark-soft)"
    }
  }, filename)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-dark-soft)",
      borderRadius: "var(--radius-md)",
      padding: "16px 0",
      fontSize: "var(--type-code-size)",
      lineHeight: "var(--type-code-lh)",
      overflowX: "auto"
    }
  }, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, children) : lines.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      padding: "0 16px",
      whiteSpace: "pre"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      flex: "none",
      color: "var(--color-muted-soft)",
      userSelect: "none"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", null, line || " ")))), terminal && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: "var(--color-surface-dark-elevated)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      fontSize: "var(--type-code-size)",
      lineHeight: "var(--type-code-lh)",
      color: "var(--color-on-dark-soft)",
      whiteSpace: "pre-wrap"
    }
  }, terminal));
}
Object.assign(__ds_scope, { CodeWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CodeWindow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureCard — cream content card for 3-up feature grids.
 * Background surface-card, 12px radius, generous 32px padding.
 */
function FeatureCard({
  icon,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--color-surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-primary)",
      display: "flex",
      marginBottom: 4
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-title-md-size)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: 1.55,
      color: "var(--color-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PricingCard — plan tier card. Default is cream + hairline; `featured`
 * flips to the dark surface (the dark surface IS the featured signal).
 */
function PricingCard({
  name,
  price,
  period = "/mo",
  blurb,
  features = [],
  ctaLabel = "Get started",
  featured = false,
  onCta,
  style,
  ...rest
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? "var(--color-surface-dark)" : "var(--color-canvas)",
      color: dark ? "var(--color-on-dark)" : "var(--color-ink)",
      border: dark ? "1px solid transparent" : "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-title-lg-size)",
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--type-display-sm-size)",
      fontWeight: 400,
      letterSpacing: "-0.3px"
    }
  }, price), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: dark ? "var(--color-on-dark-soft)" : "var(--color-muted)"
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: dark ? "var(--color-on-dark-soft)" : "var(--color-muted)"
    }
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "8px 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      fontSize: "var(--type-body-md-size)",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)",
      flex: "none"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? "var(--color-on-dark)" : "var(--color-body)"
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "on-coral" : "primary",
    onClick: onCta,
    style: {
      width: "100%"
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PricingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ConnectorsScreen.jsx
try { (() => {
// ConnectorsScreen — category tabs + filterable connector tile grid.
const {
  Tabs,
  Badge
} = window.HeyAIHelpDesignSystem_4583aa;
const CONNECTORS = [{
  name: "GitHub",
  cat: "dev",
  desc: "Read repos, open PRs, run checks."
}, {
  name: "Linear",
  cat: "dev",
  desc: "Triage and update issues."
}, {
  name: "Notion",
  cat: "docs",
  desc: "Search pages and draft docs."
}, {
  name: "Google Drive",
  cat: "docs",
  desc: "Pull context from your files."
}, {
  name: "Slack",
  cat: "comms",
  desc: "Summarize threads, post updates."
}, {
  name: "Gmail",
  cat: "comms",
  desc: "Draft replies in your voice."
}, {
  name: "Figma",
  cat: "docs",
  desc: "Reference frames and specs."
}, {
  name: "Sentry",
  cat: "dev",
  desc: "Investigate and explain errors."
}];
function ConnectorTile({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--color-surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 18,
      color: "var(--color-ink)"
    }
  }, c.name[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--color-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--color-accent-teal)"
    }
  }), "Connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--color-muted)"
    }
  }, c.desc));
}
function ConnectorsScreen() {
  const Section = window.KitSection;
  const [tab, setTab] = React.useState("all");
  const tabs = [{
    id: "all",
    label: "All"
  }, {
    id: "dev",
    label: "Developer"
  }, {
    id: "docs",
    label: "Docs & files"
  }, {
    id: "comms",
    label: "Communication"
  }];
  const shown = CONNECTORS.filter(c => tab === "all" || c.cat === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 80,
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: 48,
      fontWeight: 400,
      letterSpacing: "-1px",
      color: "var(--color-ink)"
    }
  }, "Connect everything you work in"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 18,
      color: "var(--color-muted)",
      maxWidth: "52ch"
    }
  }, "Hey AI Help reads from your tools so its answers come from your real context."), /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(ConnectorTile, {
    key: c.name,
    c: c
  })))));
}
window.ConnectorsScreen = ConnectorsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ConnectorsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
// Footer — dark navy, 4-column links. Never inverts.
function Footer() {
  const cols = [{
    h: "Product",
    links: ["Overview", "Connectors", "Pricing", "Download", "Changelog"]
  }, {
    h: "Company",
    links: ["About", "Careers", "News", "Customers"]
  }, {
    h: "Resources",
    links: ["Docs", "Help center", "Community", "Status"]
  }, {
    h: "Legal",
    links: ["Privacy", "Terms", "Trust center", "Cookies"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-surface-dark)",
      color: "var(--color-on-dark-soft)",
      padding: "64px 32px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "28",
    height: "28",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: "-0.5px",
      color: "var(--color-on-dark)"
    }
  }, "Hey AI Help")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.55,
      maxWidth: "24ch"
    }
  }, "Your thinking partner for everyday work.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--color-on-dark)",
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontSize: 14,
      color: "var(--color-on-dark-soft)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      marginTop: 40,
      paddingTop: 24,
      fontSize: 13,
      color: "var(--color-muted-soft)"
    }
  }, "\xA9 2026 Hey AI Help, Inc. All rights reserved.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
// HomeScreen — hero, feature grid, model band, coral CTA.
const {
  Button,
  Badge,
  FeatureCard,
  CodeWindow,
  CalloutCard
} = window.HeyAIHelpDesignSystem_4583aa;
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 32px",
      ...style
    }
  }, children);
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 80,
      paddingBottom: 96,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "uppercase",
    style: {
      marginBottom: 20
    }
  }, "New \xB7 Haiku 4"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-display)",
      fontSize: 64,
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: "-1.5px",
      color: "var(--color-ink)"
    }
  }, "Meet your thinking partner"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--color-body)",
      maxWidth: "42ch"
    }
  }, "Hey AI Help works alongside you \u2014 reading your tools, writing real code, and giving answers that hold up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate("pricing")
  }, "Try Hey AI Help"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate("connectors")
  }, "See connectors"))), /*#__PURE__*/React.createElement(CodeWindow, {
    filename: "agent.py",
    style: {
      borderRadius: "var(--radius-xl)"
    }
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      whiteSpace: "pre"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#8e8b82"
    }
  }, "# build an agent in three lines"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#cc785c"
    }
  }, "from"), " heyai ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#cc785c"
    }
  }, "import"), " Agent", "\n", "agent = Agent(", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e8a55a"
    }
  }, "\"sonnet\""), ")", "\n", "agent.connect(", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e8a55a"
    }
  }, "\"github\""), ", ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e8a55a"
    }
  }, "\"linear\""), ")", "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#5db8a6"
    }
  }, "print"), "(agent.ask(", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e8a55a"
    }
  }, "\"triage today's issues\""), "))"))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontSize: 36,
      fontWeight: 400,
      letterSpacing: "-0.5px",
      color: "var(--color-ink)"
    }
  }, "Built to do the work"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 36px",
      fontSize: 16,
      color: "var(--color-muted)"
    }
  }, "Not a chatbot bolted onto a search box."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, "\u25CD"),
    title: "Connect your tools"
  }, "Reads from the apps you already use \u2014 GitHub, Linear, Notion, Drive \u2014 no copy-paste."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, "\u2318"),
    title: "Writes real code"
  }, "Ships working pull requests, runs tests, and explains every change in plain language."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, "\u2756"),
    title: "Answers that hold up"
  }, "Cites its sources and shows its reasoning, so you can trust what comes back."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-dark)",
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 36px",
      fontFamily: "var(--font-display)",
      fontSize: 36,
      fontWeight: 400,
      letterSpacing: "-0.5px",
      color: "var(--color-on-dark)"
    }
  }, "Which problem are you up against?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, [{
    n: "Opus",
    b: "Deep reasoning for the hardest, highest-stakes work."
  }, {
    n: "Sonnet",
    b: "The everyday balance of speed, cost, and capability."
  }, {
    n: "Haiku",
    b: "Near-instant responses for high-volume, simple tasks."
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.n,
    style: {
      background: "var(--color-surface-dark-elevated)",
      borderRadius: "var(--radius-lg)",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 400,
      letterSpacing: "-0.3px",
      color: "var(--color-on-dark)",
      marginBottom: 12
    }
  }, m.n), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--color-on-dark-soft)"
    }
  }, m.b), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--color-primary)",
      cursor: "pointer"
    }
  }, "Learn more \u2192")))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 96,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(CalloutCard, {
    title: "Start with Hey AI Help today",
    body: "Free to try. Bring your own tools. Cancel anytime.",
    ctaLabel: "Get started free",
    onCta: () => onNavigate("pricing")
  })));
}
window.HomeScreen = HomeScreen;
window.KitSection = Section;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingScreen.jsx
try { (() => {
// PricingScreen — 3-up pricing tiers, featured tier flips dark.
const {
  PricingCard
} = window.HeyAIHelpDesignSystem_4583aa;
function PricingScreen({
  onNavigate
}) {
  const Section = window.KitSection;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 80,
      paddingBottom: 28,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: 48,
      fontWeight: 400,
      letterSpacing: "-1px",
      color: "var(--color-ink)"
    }
  }, "Pricing that scales with you"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto",
      fontSize: 18,
      color: "var(--color-muted)",
      maxWidth: "46ch"
    }
  }, "Start free. Upgrade when Hey AI Help becomes part of how you work.")), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 32,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Free",
    price: "$0",
    blurb: "For getting started",
    features: ["50 messages / day", "Standard models", "1 connected tool"],
    ctaLabel: "Start free",
    onCta: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Pro",
    price: "$20",
    blurb: "For everyday power use",
    featured: true,
    features: ["Unlimited messages", "Priority access to all models", "Unlimited connected tools", "Projects & memory"],
    ctaLabel: "Choose Pro",
    onCta: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Team",
    price: "$30",
    period: "/seat\xB7mo",
    blurb: "For working together",
    features: ["Everything in Pro", "Shared projects & workspace", "Central billing & admin", "SSO + audit log"],
    ctaLabel: "Start a team",
    onCta: () => onNavigate("home")
  }))));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/TopNav.jsx
try { (() => {
// TopNav — cream nav bar, 64px, logo + menu + sign-in + coral CTA.
const {
  Button
} = window.HeyAIHelpDesignSystem_4583aa;
function TopNav({
  route,
  onNavigate
}) {
  const items = ["Product", "Solutions", "Use Cases", "Pricing", "Research", "Company"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      background: "var(--color-canvas)",
      borderBottom: "1px solid var(--color-hairline-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "30",
    height: "30",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: "-0.5px",
      color: "var(--color-ink)"
    }
  }, "Hey AI Help")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22
    }
  }, items.map(it => {
    const target = it === "Pricing" ? "pricing" : it === "Solutions" ? "connectors" : null;
    const active = target && route === target;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      onClick: () => target && onNavigate(target),
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 500,
        color: active ? "var(--color-ink)" : "var(--color-muted)",
        cursor: target ? "pointer" : "default",
        textDecoration: "none"
      }
    }, it);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => onNavigate("home")
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate("pricing")
  }, "Try Hey AI Help")));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CalloutCard = __ds_scope.CalloutCard;

__ds_ns.CodeWindow = __ds_scope.CodeWindow;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

})();
