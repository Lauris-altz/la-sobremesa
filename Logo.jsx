// Logo + brand glyphs
const { useState } = React;

// The logo from the PDF (cropped), inlined as data URL via window.__LOGO_DARK / __LOGO_CREAM.
function LogoImg({ color = "dark", height = 32, className = "" }) {
  const dark = window.__LOGO_DARK || "";
  const cream = window.__LOGO_CREAM || "";
  const base = { height, width: "auto" };
  if (color === "cream") {
    return <img src={cream} alt="La Sobremesa" style={base} className={className} />;
  }
  if (color === "light") {
    return <img src={dark} alt="La Sobremesa" style={{ ...base, filter: "invert(1)" }} className={className} />;
  }
  return <img src={dark} alt="La Sobremesa" style={base} className={className} />;
}

// Tiny decorative glyphs — baraja española suit marks
// Only primitive shapes: circle, diamond, lines — never complex SVG
function SuitCup({ size = 16, color = "currentColor" }) {
  // copa — simplified: circle + trapezoid pedestal
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="12" cy="9" r="6" fill={color} />
      <rect x="10.5" y="13" width="3" height="6" fill={color} />
      <rect x="7" y="18" width="10" height="2" fill={color} />
    </svg>
  );
}
function SuitCoin({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="12" cy="12" r="9" fill={color} />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="var(--crema)" strokeWidth="1.2" />
    </svg>
  );
}
function SuitSword({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: "inline-block", verticalAlign: "middle" }}>
      <rect x="11" y="3" width="2" height="14" fill={color} />
      <rect x="7" y="15" width="10" height="2" fill={color} />
      <rect x="10" y="17" width="4" height="4" fill={color} />
    </svg>
  );
}
function SuitClub({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ display: "inline-block", verticalAlign: "middle" }}>
      <rect x="11" y="3" width="2" height="18" fill={color} />
      <rect x="4" y="11" width="16" height="2" fill={color} />
    </svg>
  );
}

Object.assign(window, { LogoImg, SuitCup, SuitCoin, SuitSword, SuitClub });
