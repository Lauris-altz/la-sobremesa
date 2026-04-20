
// ===== Logo.jsx =====
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


// ===== Nav.jsx =====
// Nav + Footer
const { useEffect: useEffectNav } = React;

function Nav({ route, setRoute, cartCount, onDark = false }) {
  const links = [
    { key: "home", label: "Inicio" },
    { key: "producto", label: "El juego" },
    { key: "nosotros", label: "Nosotros" },
    { key: "contacto", label: "Contacto" },
  ];
  return (
    <nav className={`nav ${onDark ? "on-dark" : ""}`}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <button onClick={() => setRoute("home")} style={{ background: "none", border: 0, cursor: "pointer", padding: 0 }}>
          <LogoImg color={onDark ? "light" : "dark"} height={26} />
        </button>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => setRoute(l.key)}
              style={{
                background: "none",
                border: 0,
                cursor: "pointer",
                fontFamily: "var(--body)",
                fontWeight: 700,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "8px 2px",
                borderBottom: route === l.key ? "2px solid currentColor" : "2px solid transparent",
                color: "inherit",
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => setRoute("cesta")}
            className="btn"
            style={{
              padding: "10px 16px",
              fontSize: 11,
              borderColor: "currentColor",
            }}
          >
            Cesta ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ setRoute }) {
  return (
    <footer className="bg-tinta" style={{ color: "var(--crema)", padding: "80px 0 32px" }}>
      <div className="wrap">
        <div className="display" style={{ fontSize: "clamp(56px, 10vw, 140px)", lineHeight: 0.9, color: "var(--verde-lima)" }}>
          ¡Aquí se<br />viene a jugar!
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 32, marginTop: 72, alignItems: "start" }}>
          <div>
            <LogoImg color="cream" height={22} />
            <p className="body-s" style={{ marginTop: 16, opacity: 0.75, maxWidth: 280 }}>
              Juegos de mesa para alargar la sobremesa. Hecho en España, jugado en cualquier mesa.
            </p>
          </div>
          <div>
            <div className="label" style={{ opacity: 0.6, marginBottom: 12 }}>Explora</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="stack-xs body-s">
              <li><button onClick={() => setRoute("home")} style={linkBtn}>Inicio</button></li>
              <li><button onClick={() => setRoute("producto")} style={linkBtn}>El juego</button></li>
              <li><button onClick={() => setRoute("nosotros")} style={linkBtn}>Nosotros</button></li>
              <li><button onClick={() => setRoute("contacto")} style={linkBtn}>Contacto</button></li>
            </ul>
          </div>
          <div>
            <div className="label" style={{ opacity: 0.6, marginBottom: 12 }}>Pequeños detalles</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="stack-xs body-s">
              <li>Envío 48 h península</li>
              <li>Devolución 30 días</li>
              <li>Preguntas frecuentes</li>
              <li>Aviso legal</li>
            </ul>
          </div>
          <div>
            <div className="label" style={{ opacity: 0.6, marginBottom: 12 }}>Redes</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="stack-xs body-s">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>Spotify (la playlist de la sobremesa)</li>
            </ul>
          </div>
        </div>
        <div className="divider" style={{ margin: "56px 0 20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.6 }}>
          <span>© {new Date().getFullYear()} La Sobremesa</span>
          <span>Una más y nos vamos.</span>
        </div>
      </div>
    </footer>
  );
}

const linkBtn = {
  background: "none", border: 0, padding: 0, margin: 0,
  color: "inherit", cursor: "pointer", textAlign: "left",
  fontFamily: "var(--body)", fontSize: "inherit",
};

Object.assign(window, { Nav, Footer });


// ===== Home.jsx =====
// Home page
const { useState: useStateHome, useEffect: useEffectHome } = React;

function Home({ setRoute, tone, heroVariant }) {
  const gamberroCopy = {
    eyebrow: "Juego de mesa · España · 2–8 jugadores",
    hero: [
      ["Que", "no se"],
      ["enfríe", "la"],
      ["sobremesa."],
    ],
    lead:
      "Hay sobremesas que empiezan con un café y terminan con alguien cantando. Ésta es una de ésas. Hecha caja.",
    cta: "Quiero una caja",
  };
  const editorialCopy = {
    eyebrow: "Un juego de mesa · Hecho en España · 2024",
    hero: [
      ["Hay"],
      ["sobremesas"],
      ["que no acaban."],
    ],
    lead:
      "La Sobremesa es un juego de mesa que enlaza la comida con la cena sin que nadie mire el reloj. Cartas, preguntas, risas. Nada más.",
    cta: "Descubrir la marca",
  };
  const copy = tone === "editorial" ? editorialCopy : gamberroCopy;

  return (
    <main className="page-enter">
      <Hero copy={copy} setRoute={setRoute} heroVariant={heroVariant} />
      <Marquee />
      <ConceptBlock />
      <StoryGrid />
      <GameCard setRoute={setRoute} />
      <PhraseBlock />
      <Testimonies />
      <BigCTA setRoute={setRoute} />
    </main>
  );
}

// ---------- HERO ----------
function Hero({ copy, setRoute, heroVariant }) {
  if (heroVariant === "block") return <HeroBlocks copy={copy} setRoute={setRoute} />;
  if (heroVariant === "split") return <HeroSplit copy={copy} setRoute={setRoute} />;
  return <HeroEditorial copy={copy} setRoute={setRoute} />;
}

function HeroEditorial({ copy, setRoute }) {
  return (
    <section className="bg-rojo" style={{ padding: "56px 0 80px", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div className="label" style={{ color: "var(--verde-lima)" }}>{copy.eyebrow}</div>
        <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", margin: "32px 0 0", color: "var(--verde-lima)" }}>
          {copy.hero.map((line, i) => (
            <div key={i} style={{ display: "block" }}>
              {line.join(" ")}
            </div>
          ))}
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end", marginTop: 56 }}>
          <p className="body-l" style={{ color: "var(--verde-lima)", maxWidth: 520, margin: 0 }}>
            {copy.lead}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button className="btn btn-filled-lima" onClick={() => setRoute("producto")}>
              {copy.cta} <span className="arrow">→</span>
            </button>
            <button className="btn" style={{ color: "var(--verde-lima)" }} onClick={() => setRoute("nosotros")}>
              Nosotros
            </button>
          </div>
        </div>
      </div>
      {/* Giant ornamental diamond */}
      <div style={{ position: "absolute", right: -80, top: -80, width: 280, height: 280, background: "var(--verde-lima)", transform: "rotate(45deg)", opacity: 0.9 }} />
      <div style={{ position: "absolute", right: 40, top: 40, color: "var(--rojo)", fontFamily: "var(--display)", fontSize: 24, textTransform: "uppercase", transform: "rotate(8deg)", zIndex: 2 }}>
        Nº 01
      </div>
    </section>
  );
}

function HeroBlocks({ copy, setRoute }) {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", minHeight: "80vh" }}>
      <div className="bg-rojo" style={{ padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="label" style={{ color: "var(--verde-lima)" }}>{copy.eyebrow}</div>
        <h1 className="display" style={{ fontSize: "clamp(60px, 10vw, 180px)", color: "var(--verde-lima)", margin: 0 }}>
          {copy.hero.flat().join(" ")}
        </h1>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-filled-lima" onClick={() => setRoute("producto")}>
            {copy.cta} <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <div className="bg-lima" style={{ padding: "56px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div className="display" style={{ fontSize: 60, color: "var(--rojo)", lineHeight: 0.9 }}>
          2—8<br/>jugadores
        </div>
        <div className="placeholder" data-label="foto de mesa · café · cartas" style={{ aspectRatio: "1/1", width: "100%", marginTop: 24 }} />
        <p className="body-l" style={{ color: "var(--rojo)", marginTop: 24 }}>{copy.lead}</p>
      </div>
    </section>
  );
}

function HeroSplit({ copy, setRoute }) {
  return (
    <section className="bg-crema" style={{ padding: "64px 0 32px" }}>
      <div className="wrap">
        <div className="label">{copy.eyebrow}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, marginTop: 40, alignItems: "end" }}>
          <h1 className="display" style={{ fontSize: "clamp(64px, 12vw, 200px)", margin: 0, color: "var(--rojo)" }}>
            {copy.hero.flat().join(" ")}
          </h1>
          <div className="placeholder" data-label="bodegón editorial · caja del juego" style={{ aspectRatio: "4/5" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 40, gap: 32, flexWrap: "wrap" }}>
          <p className="body-l" style={{ maxWidth: 540, margin: 0 }}>{copy.lead}</p>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-filled-rojo" onClick={() => setRoute("producto")}>
              {copy.cta} <span className="arrow">→</span>
            </button>
            <button className="btn" onClick={() => setRoute("nosotros")}>Nosotros</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Marquee of signature phrases ----------
function Marquee() {
  const phrases = [
    "¡Aquí se viene a jugar!",
    "Que no se enfríe la sobremesa",
    "Una más y nos vamos",
    "Aquí empieza lo bueno",
    "Cuando nadie mira el reloj",
    "La última y nos vamos",
  ];
  const doubled = [...phrases, ...phrases];
  return (
    <div className="bg-lima" style={{ padding: "18px 0", borderTop: "1px solid var(--rojo)", borderBottom: "1px solid var(--rojo)" }}>
      <div className="marquee">
        <div className="marquee-track display" style={{ fontSize: 40, color: "var(--rojo)", paddingRight: 48 }}>
          {doubled.map((p, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
              {p} <span className="diamond" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Concept big statement ----------
function ConceptBlock() {
  return (
    <section className="bg-crema" style={{ padding: "140px 0" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div className="label">01 — El concepto</div>
        <div>
          <h2 className="display" style={{ fontSize: "clamp(42px, 6vw, 84px)", margin: 0, color: "var(--tinta)" }}>
            Enlazar la comida<br/>con la cena<br/><em style={{ fontStyle: "normal", color: "var(--rojo)" }}>sin darnos cuenta.</em>
          </h2>
          <p className="body-l" style={{ marginTop: 32, maxWidth: 540 }}>
            La sobremesa es ese rato raro en el que nadie recoge la mesa, alguien pone otro café,
            y la conversación se pone interesante. Le hemos puesto cartas.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- Story grid — 3 beats with color blocks ----------
function StoryGrid() {
  const beats = [
    { bg: "bg-azul", label: "Conversación", title: "Nadie mira el reloj.", body: "Preguntas que abren la sobremesa en canal. Sin polémica, con picardía." , tone: "var(--crema)", accent: "var(--amarillo)" },
    { bg: "bg-rosa", label: "Risas", title: "Gana el que más haga reír.", body: "Retos, mímica, confesiones. La mesa decide quién se lleva el punto.", tone: "var(--rojo)", accent: "var(--rojo)" },
    { bg: "bg-verde", label: "Rematar", title: "Una más y nos vamos.", body: "La ronda final es traicionera. Nunca es la última. Lo sabes tú, lo sabemos todos.", tone: "var(--crema)", accent: "var(--amarillo)" },
  ];
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {beats.map((b, i) => (
        <div key={i} className={b.bg} style={{ padding: "72px 40px 72px", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div className="label" style={{ color: b.tone }}>{`0${i+2} — ${b.label}`}</div>
          <div>
            <h3 className="display" style={{ fontSize: 48, margin: 0, color: b.tone }}>{b.title}</h3>
            <p className="body-m" style={{ marginTop: 20, maxWidth: 320, color: b.tone, opacity: 0.9 }}>{b.body}</p>
          </div>
          <div className="display" style={{ fontSize: 160, lineHeight: 1, opacity: 0.12, color: b.tone, position: "absolute", right: 24, top: 16, pointerEvents: "none" }}>
            {i+1}
          </div>
        </div>
      ))}
    </section>
  );
}

// ---------- Game card preview ----------
function GameCard({ setRoute }) {
  return (
    <section className="bg-crema" style={{ padding: "140px 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="placeholder" data-label="caja del juego · bodegón 3/4" style={{ aspectRatio: "4/5", borderRadius: 12 }} />
            <div style={{ position: "absolute", top: -20, right: -20, background: "var(--verde-lima)", color: "var(--rojo)", fontFamily: "var(--display)", textTransform: "uppercase", padding: "14px 20px", borderRadius: 999, fontSize: 18, transform: "rotate(8deg)" }}>
              ¡Nuevo!
            </div>
          </div>
          <div>
            <div className="label" style={{ color: "var(--rojo)" }}>El juego</div>
            <h2 className="display" style={{ fontSize: "clamp(44px, 6vw, 88px)", margin: "20px 0 0", color: "var(--tinta)", lineHeight: 0.92 }}>
              La Sobremesa<br />
              <span style={{ color: "var(--rojo)" }}>— El juego.</span>
            </h2>
            <p className="body-l" style={{ marginTop: 24 }}>
              156 cartas, 3 mazos, 2 dados y una regla de oro: que no se levante nadie hasta el último café.
              Pensado para mesas de 2 a 8, probado en mesas de 12.
            </p>
            <div style={{ display: "flex", gap: 24, margin: "32px 0" }}>
              <Stat label="Jugadores" value="2–8" />
              <Stat label="Duración" value="30–∞" />
              <Stat label="Edad" value="16+" />
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button className="btn btn-filled-dark" onClick={() => setRoute("producto")}>
                Ver el juego <span className="arrow">→</span>
              </button>
              <div className="display" style={{ fontSize: 28, color: "var(--rojo)" }}>29 €</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat({ label, value }) {
  return (
    <div>
      <div className="label" style={{ opacity: 0.5 }}>{label}</div>
      <div className="display" style={{ fontSize: 36, color: "var(--rojo)", marginTop: 4 }}>{value}</div>
    </div>
  );
}

// ---------- Giant phrase block ----------
function PhraseBlock() {
  return (
    <section className="bg-azul" style={{ padding: "120px 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="label" style={{ color: "var(--amarillo)" }}>Firma de marca</div>
        <h2 className="display" style={{ fontSize: "clamp(72px, 13vw, 200px)", color: "var(--crema)", margin: "24px 0 0", lineHeight: 0.9 }}>
          “Una más<br/>y nos <em style={{ fontStyle: "normal", color: "var(--amarillo)" }}>vamos.”</em>
        </h2>
        <p className="body-l" style={{ color: "var(--crema)", opacity: 0.8, maxWidth: 520, margin: "32px auto 0" }}>
          Lo hemos dicho todos. Nunca ha sido verdad. Por eso existe este juego.
        </p>
      </div>
    </section>
  );
}

// ---------- Testimonies ----------
function Testimonies() {
  const items = [
    { text: "“Empezamos con el café. Terminamos cenando.”", who: "Marta, 29, Sevilla" },
    { text: "“Mi tía pidió una expansión. Mi tía.”", who: "Nacho, 34, Madrid" },
    { text: "“La sobremesa más larga de 2025.”", who: "Grupo de WhatsApp «Los del jueves»" },
  ];
  return (
    <section className="bg-crema" style={{ padding: "120px 0" }}>
      <div className="wrap">
        <div className="label" style={{ marginBottom: 40 }}>Lo que cuentan las mesas</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {items.map((t, i) => (
            <div key={i} className="hover-lift" style={{ border: "1px solid rgba(20,19,19,0.15)", borderRadius: 20, padding: 32, background: "var(--crema-2)" }}>
              <div className="display" style={{ fontSize: 28, lineHeight: 1.1, color: "var(--rojo)" }}>{t.text}</div>
              <div className="label" style={{ marginTop: 24, opacity: 0.6 }}>{t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Big CTA ----------
function BigCTA({ setRoute }) {
  return (
    <section className="bg-lima" style={{ padding: "120px 0", textAlign: "center" }}>
      <div className="wrap">
        <div className="label" style={{ color: "var(--rojo)" }}>¿Qué hacemos? ¿Pedimos otra?</div>
        <h2 className="display" style={{ fontSize: "clamp(60px, 11vw, 160px)", color: "var(--rojo)", margin: "24px 0 40px", lineHeight: 0.9 }}>
          Pide la caja.<br/>El resto se hace solo.
        </h2>
        <button className="btn btn-filled-rojo" onClick={() => setRoute("producto")} style={{ fontSize: 16, padding: "22px 36px" }}>
          Quiero el juego <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { Home });


// ===== Producto.jsx =====
// Producto — Historia → qué es → cómo se juega → compra
const { useState: useStateProd } = React;

function Producto({ setRoute, addToCart, tone }) {
  return (
    <main className="page-enter">
      <ProdHero />
      <ProdHistoria />
      <ProdQueEs />
      <ProdComoSeJuega />
      <ProdSituaciones />
      <ProdCompra addToCart={addToCart} />
      <ProdFAQ />
    </main>
  );
}

function ProdHero() {
  return (
    <section className="bg-rojo" style={{ padding: "72px 0 96px", position: "relative", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div className="label" style={{ color: "var(--verde-lima)" }}>Edición única · 2025</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 112px)", color: "var(--verde-lima)", margin: "24px 0 0", lineHeight: 0.9 }}>
            La Sobremesa<br />— El juego.
          </h1>
          <p className="body-l" style={{ color: "var(--verde-lima)", opacity: 0.9, marginTop: 28, maxWidth: 500 }}>
            Un juego de cartas para mesas que no quieren acabar.
            Hecho en España, para jugar en cualquier idioma de los que hablamos en casa.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <div className="placeholder dark" data-label="caja del juego · frontal" style={{ aspectRatio: "1/1", borderRadius: 12 }} />
          <div className="rotate-chip" style={{ position: "absolute", bottom: -14, left: -14, background: "var(--amarillo)", color: "var(--rojo)", padding: "10px 16px", borderRadius: 999, fontFamily: "var(--display)", textTransform: "uppercase", fontSize: 16 }}>
            156 cartas · 3 mazos · 2 dados
          </div>
        </div>
      </div>
    </section>
  );
}

function ProdHistoria() {
  return (
    <section className="bg-crema" style={{ padding: "120px 0" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
        <div>
          <div className="label">01 — La historia</div>
        </div>
        <div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: 0, lineHeight: 1 }}>
            Empezó en una mesa de domingo.
          </h2>
          <p className="body-l" style={{ marginTop: 24, maxWidth: 640 }}>
            Seis amigos, dos botellas, un café. Se nos ocurrió apuntar las preguntas que salían cuando
            nadie tenía prisa. Llenamos una servilleta. Luego dos. Luego una libreta entera.
          </p>
          <p className="body-l" style={{ marginTop: 16, maxWidth: 640 }}>
            La Sobremesa es esa libreta, pero con mejor diseño y reglas que se aguantan de pie.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProdQueEs() {
  const features = [
    { label: "156 cartas", text: "Tres mazos: «Tira de hilo», «A ver, cuenta», «Te la juegas»." },
    { label: "2 dados", text: "Uno para el turno, otro para las penitencias. Ninguno es opcional." },
    { label: "Libreto", text: "Reglas en 2 páginas. El resto son chistes malos." },
    { label: "Caja", text: "De cartón serio. Que aguante caerse al suelo a las 3 de la mañana." },
  ];
  return (
    <section className="bg-azul" style={{ padding: "120px 0", color: "var(--crema)" }}>
      <div className="wrap">
        <div className="label" style={{ color: "var(--amarillo)" }}>02 — Qué es</div>
        <h2 className="display" style={{ fontSize: "clamp(52px, 8vw, 110px)", margin: "20px 0 48px", color: "var(--verde-lima)", lineHeight: 0.9 }}>
          Cartas, dados,<br/>y una regla de oro.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} className="hover-lift" style={{ border: "1px solid rgba(246,239,217,0.25)", borderRadius: 16, padding: 28, background: "rgba(0,0,0,0.15)" }}>
              <div className="display" style={{ fontSize: 44, color: "var(--amarillo)" }}>{`0${i+1}`}</div>
              <div className="label" style={{ marginTop: 20, color: "var(--amarillo)" }}>{f.label}</div>
              <p className="body-s" style={{ marginTop: 10, opacity: 0.85 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdComoSeJuega() {
  const steps = [
    { t: "Te repartes", d: "Cada jugador roba 3 cartas. El que tenga el café más frío empieza." },
    { t: "Tiras", d: "El primer dado marca el mazo. El segundo, lo que toca hacer con la carta." },
    { t: "La mesa vota", d: "Cada respuesta la puntúa la mesa, no tú. Aprendes humildad o trampas." },
    { t: "Se alarga", d: "Gana quien consiga que nadie mire el reloj durante dos rondas seguidas." },
  ];
  return (
    <section className="bg-crema" style={{ padding: "120px 0" }}>
      <div className="wrap">
        <div className="label">03 — Cómo se juega</div>
        <h2 className="display" style={{ fontSize: "clamp(52px, 8vw, 110px)", margin: "20px 0 56px", lineHeight: 0.9 }}>
          En cuatro pasos<br />y un cafelito.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ borderTop: "2px solid var(--tinta)", paddingTop: 20 }}>
              <div className="display" style={{ fontSize: 72, color: "var(--rojo)", lineHeight: 1 }}>{`0${i+1}`}</div>
              <div className="display" style={{ fontSize: 28, marginTop: 16 }}>{s.t}</div>
              <p className="body-m" style={{ marginTop: 12, maxWidth: 260 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdSituaciones() {
  const tiles = [
    { bg: "bg-rosa", label: "Cumpleaños", q: "¿Qué frase dijo tu padre en el último brindis?" },
    { bg: "bg-verde", label: "Navidad", q: "Nombra tres tíos que no conoces en la mesa." },
    { bg: "bg-amarillo", label: "Viernes de tapeo", q: "Imita a alguien de la mesa. Adivinan. Si no, bebes tú." },
    { bg: "bg-azul", label: "Fin de semana en casa", q: "Cuenta una mentira pequeña. La mesa decide si cuela." },
  ];
  return (
    <section>
      <div className="bg-tinta" style={{ padding: "24px 0" }}>
        <div className="wrap">
          <div className="label" style={{ color: "var(--amarillo)" }}>04 — Situaciones reales de juego</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {tiles.map((t, i) => (
          <div key={i} className={t.bg} style={{ padding: 32, minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className="label">{t.label}</div>
            <div className="display" style={{ fontSize: 34, lineHeight: 1.05 }}>{t.q}</div>
            <div style={{ fontFamily: "var(--body)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Mazo «A ver, cuenta»
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProdCompra({ addToCart }) {
  const [qty, setQty] = useStateProd(1);
  const price = 29;
  return (
    <section className="bg-lima" style={{ padding: "120px 0" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div className="placeholder" data-label="bodegón · producto 3/4 con cartas" style={{ aspectRatio: "1/1", borderRadius: 12, background: "var(--crema)" }} />
        </div>
        <div>
          <div className="label" style={{ color: "var(--rojo)" }}>05 — Compra</div>
          <h2 className="display" style={{ fontSize: "clamp(56px, 8vw, 120px)", margin: "20px 0 0", color: "var(--rojo)", lineHeight: 0.9 }}>
            Aquí<br/>empieza<br/>lo bueno.
          </h2>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginTop: 32 }}>
            <div className="display" style={{ fontSize: 72, color: "var(--rojo)" }}>{price} €</div>
            <div className="body-s" style={{ color: "var(--rojo)" }}>IVA incluido · Envío 48h península</div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1.5px solid var(--rojo)", borderRadius: 999, padding: "6px 12px" }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ background: "none", border: 0, cursor: "pointer", color: "var(--rojo)", fontSize: 20, padding: "4px 8px" }}>−</button>
              <div style={{ color: "var(--rojo)", fontWeight: 700, minWidth: 24, textAlign: "center" }}>{qty}</div>
              <button onClick={() => setQty(qty + 1)} style={{ background: "none", border: 0, cursor: "pointer", color: "var(--rojo)", fontSize: 20, padding: "4px 8px" }}>+</button>
            </div>
            <button className="btn btn-filled-rojo" onClick={() => addToCart(qty)}>
              Añadir a la cesta <span className="arrow">→</span>
            </button>
          </div>
          <ul style={{ marginTop: 32, padding: 0, listStyle: "none", color: "var(--rojo)" }} className="stack-xs body-m">
            <li>◆ Para 2–8 jugadores (probado con 12 y algún primo).</li>
            <li>◆ Sesiones de 30 min a «madre mía, son las dos».</li>
            <li>◆ Expansión de invierno disponible en diciembre.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProdFAQ() {
  const [open, setOpen] = useStateProd(0);
  const faqs = [
    { q: "¿Se juega con niños?", a: "Hay cartas que sí, y cartas que mejor guarda la tía Mari. A partir de 16 años." },
    { q: "¿Cuánto dura una partida?", a: "De 30 minutos a la madrugada. Depende de tu mesa y del café." },
    { q: "¿Habrá expansiones?", a: "Dos al año. La próxima es «Cuñados», y sí, viene cargada." },
    { q: "¿Llega a Canarias y Baleares?", a: "Sí, tarda un par de días más. Paciencia, está en el barco." },
  ];
  return (
    <section className="bg-crema" style={{ padding: "120px 0" }}>
      <div className="wrap">
        <div className="label">Dudas razonables</div>
        <div style={{ marginTop: 32, borderTop: "1px solid var(--tinta)" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--tinta)" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 0", background: "none", border: 0, cursor: "pointer", textAlign: "left" }}>
                <span className="display" style={{ fontSize: 32 }}>{f.q}</span>
                <span className="display" style={{ fontSize: 36, color: "var(--rojo)" }}>{open === i ? "—" : "+"}</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 28, maxWidth: 680 }} className="body-l">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Producto });


// ===== Pages.jsx =====
// Nosotros + Contacto
const { useState: useStateOther } = React;

function Nosotros({ setRoute }) {
  return (
    <main className="page-enter">
      <section className="bg-azul" style={{ padding: "96px 0 120px", color: "var(--crema)" }}>
        <div className="wrap">
          <div className="label" style={{ color: "var(--amarillo)" }}>Nosotros</div>
          <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 180px)", color: "var(--verde-lima)", margin: "24px 0 0", lineHeight: 0.9 }}>
            Existimos porque<br/>la mejor hora<br/>es la que sobra.
          </h1>
        </div>
      </section>

      <section className="bg-crema" style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div>
            <div className="label">Qué somos</div>
          </div>
          <div className="stack-m">
            <p className="body-l" style={{ margin: 0, fontSize: 24 }}>
              La Sobremesa nace de una obsesión muy concreta: la mesa que nadie quiere recoger.
              Esa hora larga entre el último plato y el primer café. Entre «pedimos la cuenta» y «pues otra».
            </p>
            <p className="body-l" style={{ margin: 0 }}>
              Cogemos la cultura popular española —expresiones, costumbres, manías de familia, humor de barrio—
              y la metemos en una caja. No para explicarla, sino para jugar con ella.
            </p>
            <p className="body-l" style={{ margin: 0 }}>
              Ni infantil, ni nostálgico, ni cuñado. Lo suficientemente elegante para regalarlo, lo suficientemente gamberro
              para que nadie lo deje en la estantería.
            </p>
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Value bg="bg-rojo" color="var(--verde-lima)" n="01" t="La cultura se juega." body="Recuperamos expresiones, refranes, costumbres. No los enseñamos: los ponemos encima de la mesa." />
        <Value bg="bg-lima" color="var(--rojo)"       n="02" t="La mesa manda."       body="Todo lo que hacemos empieza por una pregunta: ¿esto alarga la sobremesa o la mata?" />
        <Value bg="bg-amarillo" color="var(--rojo)"   n="03" t="Cerca, nunca cursi."  body="Hablamos de tú. Sin tecnicismos, sin postureo. Como se habla en casa de la abuela, pero más divertido." />
      </section>

      <section className="bg-crema" style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="label">Lo que buscamos</div>
          <h2 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", margin: "24px 0 0", lineHeight: 1 }}>
            Que llegue el café<br/>y no se levante nadie.
          </h2>
          <button className="btn btn-filled-dark" style={{ marginTop: 48 }} onClick={() => setRoute("producto")}>
            Ver el juego <span className="arrow">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function Value({ bg, color, n, t, body }) {
  return (
    <div className={bg} style={{ padding: "72px 40px", minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div className="display" style={{ fontSize: 120, lineHeight: 1, color, opacity: 0.22 }}>{n}</div>
      <div>
        <h3 className="display" style={{ fontSize: 44, margin: 0, color, lineHeight: 0.95 }}>{t}</h3>
        <p className="body-m" style={{ marginTop: 20, color, opacity: 0.92, maxWidth: 320 }}>{body}</p>
      </div>
    </div>
  );
}

function Contacto({ setRoute }) {
  const [form, setForm] = useStateOther({ nombre: "", email: "", mensaje: "", motivo: "Hablamos" });
  const [sent, setSent] = useStateOther(false);
  const motivos = ["Hablamos", "Quiero ser tienda", "Prensa", "Una tontería"];
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <main className="page-enter">
      <section className="bg-rojo" style={{ padding: "96px 0 80px", color: "var(--verde-lima)" }}>
        <div className="wrap">
          <div className="label" style={{ color: "var(--verde-lima)" }}>Contacto</div>
          <h1 className="display" style={{ fontSize: "clamp(64px, 11vw, 180px)", margin: "24px 0 0", lineHeight: 0.9 }}>
            Escríbenos.<br/>Contestamos<br/><em style={{ fontStyle: "normal", color: "var(--amarillo)" }}>antes del postre.</em>
          </h1>
        </div>
      </section>

      <section className="bg-crema" style={{ padding: "100px 0 140px" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }}>
          <div className="stack-m">
            <div>
              <div className="label">Hola rápido</div>
              <p className="body-l" style={{ marginTop: 12 }}>hola@lasobremesa.es</p>
            </div>
            <div>
              <div className="label">Tiendas</div>
              <p className="body-l" style={{ marginTop: 12 }}>wholesale@lasobremesa.es</p>
            </div>
            <div>
              <div className="label">Visítanos</div>
              <p className="body-m" style={{ marginTop: 12 }}>
                C/ del Pez, 12 · 28004 Madrid<br/>
                Jueves a sábado, de 11 a 20h<br/>
                <span style={{ color: "var(--rojo)" }}>(los lunes, sobremesa obligatoria)</span>
              </p>
            </div>
          </div>

          {!sent ? (
            <form onSubmit={submit} style={{ border: "1px solid var(--tinta)", borderRadius: 24, padding: 40, background: "var(--crema-2)" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {motivos.map((m) => (
                  <button type="button" key={m} onClick={() => setForm({ ...form, motivo: m })}
                          style={{
                            padding: "8px 14px", borderRadius: 999,
                            border: "1.5px solid var(--tinta)",
                            background: form.motivo === m ? "var(--tinta)" : "transparent",
                            color: form.motivo === m ? "var(--crema)" : "var(--tinta)",
                            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer"
                          }}>
                    {m}
                  </button>
                ))}
              </div>
              <Field label="¿Cómo te llamas?" value={form.nombre} onChange={set("nombre")} placeholder="Tu nombre" />
              <Field label="¿A qué email contestamos?" value={form.email} onChange={set("email")} placeholder="tu@email.com" type="email" />
              <Field label="Cuéntanos" value={form.mensaje} onChange={set("mensaje")} placeholder="Una línea nos vale. Dos mejor." textarea />
              <button type="submit" className="btn btn-filled-dark" style={{ marginTop: 8 }}>
                Mandar <span className="arrow">→</span>
              </button>
              <p className="body-s" style={{ marginTop: 20, opacity: 0.6 }}>No te suscribimos a nada. Prometido.</p>
            </form>
          ) : (
            <div style={{ border: "1px solid var(--tinta)", borderRadius: 24, padding: 48, background: "var(--verde-lima)" }}>
              <div className="display" style={{ fontSize: 48, color: "var(--rojo)", lineHeight: 0.95 }}>
                Recibido, {form.nombre || "amig@"}.
              </div>
              <p className="body-l" style={{ marginTop: 16, color: "var(--rojo)" }}>
                Contestamos antes de que se enfríe el café. Mientras tanto, échale un ojo al juego.
              </p>
              <button className="btn btn-filled-rojo" style={{ marginTop: 24 }} onClick={() => setRoute("producto")}>
                Ver el juego <span className="arrow">→</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea = false }) {
  return (
    <label style={{ display: "block", marginBottom: 20 }}>
      <span className="label" style={{ display: "block", marginBottom: 8 }}>{label}</span>
      {textarea ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} rows={4}
                  style={fieldStyle} />
      ) : (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
               style={fieldStyle} />
      )}
    </label>
  );
}

const fieldStyle = {
  width: "100%", padding: "14px 0",
  background: "transparent",
  border: 0, borderBottom: "1.5px solid var(--tinta)",
  outline: "none", fontFamily: "var(--body)", fontSize: 18, color: "var(--tinta)",
  resize: "vertical",
};

Object.assign(window, { Nosotros, Contacto });


// ===== Cesta.jsx =====
// Cesta + Tweaks + App
const { useState: useStateApp, useEffect: useEffectApp } = React;

function Cesta({ cart, setCart, setRoute }) {
  const gamePrice = 29;
  const subtotal = cart.reduce((s, it) => s + it.qty * gamePrice, 0);
  const envio = cart.length ? (subtotal >= 40 ? 0 : 3.9) : 0;
  const total = subtotal + envio;

  const changeQty = (i, d) => {
    const next = cart.map((it, idx) => idx === i ? { ...it, qty: Math.max(0, it.qty + d) } : it).filter(it => it.qty > 0);
    setCart(next);
  };

  const empty = cart.length === 0;

  return (
    <main className="page-enter">
      <section className="bg-crema" style={{ padding: "72px 0 0" }}>
        <div className="wrap">
          <div className="label">Cesta</div>
          <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 140px)", margin: "20px 0 16px", lineHeight: 0.9 }}>
            {empty ? "Cesta vacía. De momento." : "Esto ya casi es tuyo."}
          </h1>
          <p className="body-l" style={{ maxWidth: 540 }}>
            {empty ? "No pasa nada. Una sobremesa buena también empieza sin plan." : "No lo dejes enfriar. El cartero está al caer."}
          </p>
        </div>
      </section>

      <section className="bg-crema" style={{ padding: "60px 0 120px" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56 }}>
          <div>
            {empty ? (
              <div style={{ border: "1px dashed var(--tinta)", borderRadius: 20, padding: 48, textAlign: "center" }}>
                <div className="display" style={{ fontSize: 40, color: "var(--rojo)" }}>Pedimos otra.</div>
                <button className="btn btn-filled-dark" style={{ marginTop: 24 }} onClick={() => setRoute("producto")}>
                  Ver el juego <span className="arrow">→</span>
                </button>
              </div>
            ) : (
              cart.map((it, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(20,19,19,0.15)", alignItems: "center" }}>
                  <div className="placeholder" data-label="caja" style={{ aspectRatio: "1/1", borderRadius: 10 }} />
                  <div>
                    <div className="display" style={{ fontSize: 28 }}>La Sobremesa — El juego</div>
                    <div className="body-s" style={{ opacity: 0.7, marginTop: 6 }}>Edición estándar · 156 cartas · 2 dados</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, border: "1.5px solid var(--tinta)", borderRadius: 999, padding: "4px 10px", marginTop: 12, width: "fit-content" }}>
                      <button onClick={() => changeQty(i, -1)} style={iconBtn}>−</button>
                      <div style={{ minWidth: 24, textAlign: "center", fontWeight: 700 }}>{it.qty}</div>
                      <button onClick={() => changeQty(i, +1)} style={iconBtn}>+</button>
                    </div>
                  </div>
                  <div className="display" style={{ fontSize: 32, color: "var(--rojo)" }}>{(it.qty * gamePrice).toFixed(0)} €</div>
                </div>
              ))
            )}
          </div>

          <aside style={{ position: "sticky", top: 100, alignSelf: "start", border: "1px solid var(--tinta)", borderRadius: 20, padding: 32, background: "var(--crema-2)" }}>
            <div className="label">Resumen</div>
            <Row k="Subtotal" v={`${subtotal.toFixed(2)} €`} />
            <Row k={`Envío${envio === 0 && !empty ? " (gratis)" : ""}`} v={envio === 0 ? (empty ? "—" : "0 €") : `${envio.toFixed(2)} €`} />
            <div className="divider" style={{ margin: "16px 0" }} />
            <Row k="Total" v={`${total.toFixed(2)} €`} big />
            {!empty && subtotal < 40 && (
              <p className="body-s" style={{ marginTop: 8, color: "var(--rojo)" }}>
                Te quedan {(40 - subtotal).toFixed(2)} € para envío gratis. ¿Otra? Por pedir...
              </p>
            )}
            <button disabled={empty} className="btn btn-filled-dark" style={{ width: "100%", justifyContent: "center", marginTop: 20, opacity: empty ? 0.4 : 1 }}>
              Pagar <span className="arrow">→</span>
            </button>
            <p className="body-s" style={{ marginTop: 16, opacity: 0.7 }}>Pago seguro · Devolución 30 días · Envío 48h península</p>
          </aside>
        </div>

        {!empty && (
          <div className="wrap" style={{ marginTop: 80 }}>
            <div className="bg-lima" style={{ borderRadius: 20, padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 24 }}>
              <div>
                <div className="label" style={{ color: "var(--rojo)" }}>Un empujoncito</div>
                <div className="display" style={{ fontSize: 40, color: "var(--rojo)", marginTop: 10 }}>
                  Una más y nos vamos. <em style={{ fontStyle: "normal", fontSize: 22 }}>(mentira)</em>
                </div>
              </div>
              <button className="btn btn-filled-rojo" onClick={() => setRoute("producto")}>
                Seguir mirando <span className="arrow">→</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function Row({ k, v, big = false }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 14 }}>
      <span className="body-m" style={{ opacity: big ? 1 : 0.8, fontWeight: big ? 700 : 400 }}>{k}</span>
      <span className={big ? "display" : "body-m"} style={{ fontSize: big ? 34 : 16, color: big ? "var(--rojo)" : "inherit", fontWeight: big ? 400 : 600 }}>{v}</span>
    </div>
  );
}
const iconBtn = { background: "none", border: 0, cursor: "pointer", color: "var(--tinta)", fontSize: 18, padding: "4px 8px" };

// ---------- Toast ----------
function Toast({ msg }) {
  if (!msg) return null;
  return <div className="toast"><div className="label" style={{ color: "var(--verde-lima)", marginBottom: 4 }}>Añadido</div><div className="body-m">{msg}</div></div>;
}

// ---------- Tweaks panel ----------
function TweaksPanel({ visible, tweaks, setTweaks }) {
  if (!visible) return null;
  const heroOpts = [
    { k: "editorial", l: "Editorial" },
    { k: "block", l: "Bloques" },
    { k: "split", l: "Split" },
  ];
  const toneOpts = [
    { k: "gamberro", l: "Gamberro" },
    { k: "editorial", l: "Editorial" },
  ];
  const accents = [
    { k: "rojo",     color: "#D90E15" },
    { k: "azul",     color: "#355FA9" },
    { k: "lima",     color: "#CEC80A" },
    { k: "verde",    color: "#049368" },
    { k: "amarillo", color: "#F6D518" },
    { k: "rosa",     color: "#F4A8BE" },
  ];
  return (
    <div className="tweaks-panel">
      <h4>Tweaks</h4>
      <div className="tweaks-row">
        <span className="label">Layout del hero</span>
        <div>
          {heroOpts.map(o => (
            <button key={o.k} className="tweaks-opt" aria-pressed={tweaks.heroVariant === o.k}
                    onClick={() => setTweaks({ ...tweaks, heroVariant: o.k })}>{o.l}</button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <span className="label">Tono del copy</span>
        <div>
          {toneOpts.map(o => (
            <button key={o.k} className="tweaks-opt" aria-pressed={tweaks.tone === o.k}
                    onClick={() => setTweaks({ ...tweaks, tone: o.k })}>{o.l}</button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <span className="label">Easter egg «Una más y nos vamos»</span>
        <div>
          <button className="tweaks-opt" aria-pressed={tweaks.easter} onClick={() => setTweaks({ ...tweaks, easter: !tweaks.easter })}>
            {tweaks.easter ? "On" : "Off"}
          </button>
        </div>
      </div>
      <p className="body-s" style={{ opacity: 0.6, marginTop: 8, fontSize: 10 }}>
        Persisten al recargar.
      </p>
    </div>
  );
}

Object.assign(window, { Cesta, Toast, TweaksPanel });


// ===== App.jsx =====
// Main App — routing + state + easter egg
const { useState: useStateMain, useEffect: useEffectMain } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "tone": "gamberro",
  "easter": true
}/*EDITMODE-END*/;

function App() {
  const [route, setRouteState] = useStateMain(() => localStorage.getItem("ls-route") || "home");
  const [cart, setCart] = useStateMain(() => {
    try { return JSON.parse(localStorage.getItem("ls-cart") || "[]"); } catch { return []; }
  });
  const [toast, setToast] = useStateMain(null);
  const [tweaksVisible, setTweaksVisible] = useStateMain(false);
  const [tweaks, setTweaks] = useStateMain(() => {
    try { return { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem("ls-tweaks") || "{}") }; }
    catch { return TWEAK_DEFAULTS; }
  });
  const [easterTriggered, setEasterTriggered] = useStateMain(false);

  useEffectMain(() => { localStorage.setItem("ls-route", route); window.scrollTo(0, 0); }, [route]);
  useEffectMain(() => { localStorage.setItem("ls-cart", JSON.stringify(cart)); }, [cart]);
  useEffectMain(() => { localStorage.setItem("ls-tweaks", JSON.stringify(tweaks)); }, [tweaks]);

  // Tweaks parent-postMessage contract
  useEffectMain(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setTweaksVisible(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const setTweaksPersist = (next) => {
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: next }, "*");
  };

  const setRoute = (r) => setRouteState(r);

  const addToCart = (qty = 1) => {
    const existing = cart.find(i => i.id === "sobremesa");
    let next;
    if (existing) {
      next = cart.map(i => i.id === "sobremesa" ? { ...i, qty: i.qty + qty } : i);
    } else {
      next = [...cart, { id: "sobremesa", qty }];
    }
    setCart(next);
    const msgs = ["La Sobremesa × " + qty + " a la cesta.", "Otra más al carro. Buena decisión.", "Esto ya casi es tuyo."];
    setToast(msgs[Math.floor(Math.random() * msgs.length)]);
    setTimeout(() => setToast(null), 2400);
  };

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  // Easter egg: typing "una mas" triggers confetti of phrases
  useEffectMain(() => {
    if (!tweaks.easter) return;
    let buf = "";
    const onKey = (e) => {
      buf = (buf + e.key.toLowerCase()).slice(-20);
      if (buf.includes("unamas") || buf.includes("una mas")) {
        setEasterTriggered(true);
        setTimeout(() => setEasterTriggered(false), 3600);
        buf = "";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tweaks.easter]);

  const onDark = route === "home" && tweaks.heroVariant === "editorial" ? false : false;

  return (
    <React.Fragment>
      <Nav route={route} setRoute={setRoute} cartCount={cartCount} onDark={onDark} />
      {route === "home" && <Home setRoute={setRoute} tone={tweaks.tone} heroVariant={tweaks.heroVariant} />}
      {route === "producto" && <Producto setRoute={setRoute} addToCart={addToCart} tone={tweaks.tone} />}
      {route === "nosotros" && <Nosotros setRoute={setRoute} />}
      {route === "contacto" && <Contacto setRoute={setRoute} />}
      {route === "cesta" && <Cesta cart={cart} setCart={setCart} setRoute={setRoute} />}
      <Footer setRoute={setRoute} />
      <Toast msg={toast} />
      <TweaksPanel visible={tweaksVisible} tweaks={tweaks} setTweaks={setTweaksPersist} />
      <EasterEgg on={easterTriggered} />
      <HintChip onClick={() => setTweaksVisible(!tweaksVisible)} visible={!tweaksVisible} />
    </React.Fragment>
  );
}

function HintChip({ onClick, visible }) {
  if (!visible) return null;
  return (
    <button onClick={onClick} style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 90,
      background: "var(--tinta)", color: "var(--verde-lima)",
      border: 0, borderRadius: 999, padding: "10px 16px",
      fontFamily: "var(--body)", fontSize: 11, fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.08em",
      cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    }}>
      ✦ Tweaks
    </button>
  );
}

function EasterEgg({ on }) {
  if (!on) return null;
  const phrases = ["Una más y nos vamos", "(mentira)", "Que no se enfríe", "Aquí empieza lo bueno", "¡Aquí se viene a jugar!"];
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 120,
      overflow: "hidden"
    }}>
      {Array.from({ length: 18 }).map((_, i) => {
        const p = phrases[i % phrases.length];
        const left = (i * 53) % 100;
        const delay = (i % 6) * 0.08;
        const rot = (i % 2 ? -1 : 1) * (4 + (i * 3) % 18);
        const colors = ["var(--rojo)", "var(--azul)", "var(--verde-lima)", "var(--amarillo)", "var(--verde)", "var(--rosa)"];
        const bg = colors[i % colors.length];
        return (
          <div key={i} style={{
            position: "absolute",
            left: left + "%",
            top: "-10%",
            transform: `rotate(${rot}deg)`,
            background: bg, color: "var(--tinta)",
            fontFamily: "var(--display)", fontSize: 28,
            padding: "10px 18px", borderRadius: 999,
            animation: `fall 3.4s ${delay}s ease-in forwards`,
            whiteSpace: "nowrap",
            textTransform: "uppercase"
          }}>{p}</div>
        );
      })}
      <style>{`@keyframes fall { to { top: 110%; transform: rotate(${Math.random()*30 - 15}deg); } }`}</style>
    </div>
  );
}

Object.assign(window, { App });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

