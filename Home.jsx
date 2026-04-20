// Home page — brand-first. La marca primero, el producto después.
const { useState: useStateHome, useEffect: useEffectHome } = React;

function Home({ setRoute, tone, heroVariant }) {
  // El hero ahora HABLA DE LA MARCA, no del producto.
  // Estructura narrativa: "La sobremesa es..." + definición.
  const gamberroCopy = {
    eyebrow: "La Sobremesa · Casa editora de juegos",
    lead:
      "Ese rato raro en el que nadie recoge la mesa. El café se enfría. Alguien saca el tema. Y ya no se va nadie.",
    cta: "Conoce la marca",
  };
  const editorialCopy = {
    eyebrow: "La Sobremesa · España · Est. 2025",
    lead:
      "Un espacio, un rato, una costumbre. Entre la comida y la cena, entre el café y la conversación. Ahí vivimos nosotros.",
    cta: "Qué hacemos",
  };
  const copy = tone === "editorial" ? editorialCopy : gamberroCopy;

  return (
    <main className="page-enter">
      <Hero copy={copy} setRoute={setRoute} heroVariant={heroVariant} tone={tone} />
      <Marquee />
      <ManifestoBlock />
      <StoryGrid />
      <ProductPreview setRoute={setRoute} />
      <PhraseBlock />
      <BigCTA setRoute={setRoute} />
    </main>
  );
}

// ---------- HERO ----------
function Hero({ copy, setRoute, heroVariant, tone }) {
  if (heroVariant === "block") return <HeroBlocks copy={copy} setRoute={setRoute} tone={tone} />;
  if (heroVariant === "split") return <HeroSplit copy={copy} setRoute={setRoute} tone={tone} />;
  return <HeroEditorial copy={copy} setRoute={setRoute} tone={tone} />;
}

/*
 * HeroEditorial — bloque rojo con la definición de marca en Palmore.
 * "La sobremesa es..." en grande; subtitulo explica y define.
 */
function HeroEditorial({ copy, setRoute, tone }) {
  const closer = tone === "editorial" ? "costumbre." : "arte.";
  return (
    <section className="bg-rojo" style={{ padding: "72px 0 96px", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div className="label" style={{ color: "var(--verde-lima)" }}>{copy.eyebrow}</div>

        <h1 className="display" style={{ fontSize: "clamp(64px, 12vw, 200px)", margin: "40px 0 0", color: "var(--verde-lima)", lineHeight: 0.92 }}>
          La sobremesa<br />
          es un<br />
          <em style={{ fontStyle: "normal", color: "var(--papel)" }}>{closer}</em>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end", marginTop: 64 }}>
          <p className="body-l" style={{ color: "var(--verde-lima)", maxWidth: 520, margin: 0, fontSize: 22, lineHeight: 1.4 }}>
            {copy.lead}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button className="btn btn-filled-lima" onClick={() => setRoute("nosotros")}>
              {copy.cta} <span className="arrow">→</span>
            </button>
            <button className="btn" style={{ color: "var(--verde-lima)" }} onClick={() => setRoute("producto")}>
              Don Refranote
            </button>
          </div>
        </div>
      </div>

      {/* Diamante ornamental — guiño al manual */}
      <div style={{ position: "absolute", right: -80, top: -80, width: 280, height: 280, background: "var(--verde-lima)", transform: "rotate(45deg)", opacity: 0.92 }} />
      <div className="display" style={{ position: "absolute", right: 40, top: 40, color: "var(--rojo)", fontSize: 24, transform: "rotate(8deg)", zIndex: 2 }}>
        Nº 01
      </div>
    </section>
  );
}

/*
 * HeroBlocks — split left-right. Izquierda rojo con declaración; derecha lima con matiz.
 */
function HeroBlocks({ copy, setRoute, tone }) {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", minHeight: "82vh" }}>
      <div className="bg-rojo" style={{ padding: "80px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="label" style={{ color: "var(--verde-lima)" }}>{copy.eyebrow}</div>
        <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 160px)", color: "var(--verde-lima)", margin: 0, lineHeight: 0.92 }}>
          La sobremesa<br/>es un <em style={{ fontStyle: "normal", color: "var(--papel)" }}>arte.</em>
        </h1>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-filled-lima" onClick={() => setRoute("nosotros")}>
            {copy.cta} <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <div className="bg-lima" style={{ padding: "56px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div className="display" style={{ fontSize: 60, color: "var(--rojo)", lineHeight: 0.9 }}>
          Café,<br/>charla,<br/>caja.
        </div>
        <div className="placeholder" data-label="foto de mesa · café · cartas" style={{ aspectRatio: "1/1", width: "100%", marginTop: 24 }} />
        <p className="body-l" style={{ color: "var(--rojo)", marginTop: 24 }}>{copy.lead}</p>
      </div>
    </section>
  );
}

/*
 * HeroSplit — papel blanco, Palmore en rojo sobre blanco, bodegón a la derecha.
 */
function HeroSplit({ copy, setRoute, tone }) {
  return (
    <section className="bg-papel" style={{ padding: "72px 0 40px" }}>
      <div className="wrap">
        <div className="label">{copy.eyebrow}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, marginTop: 40, alignItems: "end" }}>
          <h1 className="display" style={{ fontSize: "clamp(64px, 12vw, 200px)", margin: 0, color: "var(--rojo)", lineHeight: 0.92 }}>
            La sobremesa<br/>es un <em style={{ fontStyle: "normal", color: "var(--tinta)" }}>rato largo.</em>
          </h1>
          <div className="placeholder" data-label="bodegón editorial · mesa después de comer" style={{ aspectRatio: "4/5" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 48, gap: 32, flexWrap: "wrap" }}>
          <p className="body-l" style={{ maxWidth: 540, margin: 0, fontSize: 22, lineHeight: 1.4 }}>{copy.lead}</p>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-filled-rojo" onClick={() => setRoute("nosotros")}>
              {copy.cta} <span className="arrow">→</span>
            </button>
            <button className="btn" onClick={() => setRoute("producto")}>Don Refranote</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Marquee de frases firma ----------
function Marquee() {
  const phrases = [
    "¡Aquí se viene a jugar!",
    "Que no se enfríe la sobremesa",
    "Una más y nos vamos",
    "Aquí empieza lo bueno",
    "Cuando nadie mira el reloj",
    "A ver quién se sabe este…",
  ];
  const doubled = [...phrases, ...phrases];
  return (
    <div className="bg-lima" style={{ padding: "18px 0", borderTop: "1px solid var(--rojo)", borderBottom: "1px solid var(--rojo)" }}>
      <div className="marquee">
        <div className="marquee-track display-alt" style={{ fontSize: 38, color: "var(--rojo)", paddingRight: 48, textTransform: "uppercase" }}>
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

// ---------- Manifesto: definición ampliada ----------
function ManifestoBlock() {
  return (
    <section className="bg-papel" style={{ padding: "140px 0", borderBottom: "1px solid rgba(20,19,19,0.08)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
        <div>
          <div className="label">01 — Qué es la sobremesa</div>
          <div className="display" style={{ fontSize: 22, color: "var(--rojo)", marginTop: 18, letterSpacing: 0 }}>
            Manifiesto
          </div>
        </div>
        <div>
          <h2 className="display-light" style={{ fontSize: "clamp(34px, 4.6vw, 64px)", margin: 0, color: "var(--tinta)", letterSpacing: 0 }}>
            Un rato entre dos horas, un tema entre dos personas,
            un café entre dos risas. La sobremesa no se programa:
            <em style={{ fontStyle: "normal", color: "var(--rojo)" }}> se alarga.</em>
          </h2>
          <p className="body-l" style={{ marginTop: 40, maxWidth: 620, opacity: 0.85 }}>
            Somos una casa editora que cree que <strong>los mejores momentos no tienen hora de cierre</strong>. Trabajamos con juegos, libros y objetos pensados para quedarse un poco más en la mesa.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- Story grid — 3 tiempos de la sobremesa ----------
function StoryGrid() {
  // Tres colores de marca, tres momentos narrativos. Sin hablar de producto.
  const beats = [
    { bg: "bg-azul", label: "El café",    title: "Nadie mira el reloj.", body: "El momento en que se baja el ritmo. Cuchara, azúcar, un silencio breve. Empieza la conversación buena.", tone: "var(--papel)" },
    { bg: "bg-rosa", label: "La charla",  title: "Sale el tema.",         body: "Alguien dice algo, otro se ríe, y ya no hay vuelta atrás. Anécdotas viejas, opiniones nuevas.", tone: "var(--rojo)" },
    { bg: "bg-verde",label: "El después", title: "Una más y nos vamos.",  body: "Pero nadie se va. La sobremesa no termina: se pospone. Por si acaso volvemos.", tone: "var(--papel)" },
  ];
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {beats.map((b, i) => (
        <div key={i} className={b.bg} style={{ padding: "72px 40px 72px", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
          <div className="label" style={{ color: b.tone }}>{`0${i+2} — ${b.label}`}</div>
          <div>
            <h3 className="display" style={{ fontSize: "clamp(36px, 3.8vw, 52px)", margin: 0, color: b.tone, lineHeight: 0.95 }}>{b.title}</h3>
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

// ---------- Producto preview: AHORA el juego aparece más tarde, como una "pieza" de la marca ----------
function ProductPreview({ setRoute }) {
  return (
    <section className="bg-papel" style={{ padding: "140px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
          <div>
            <div className="label" style={{ color: "var(--rojo)" }}>Nuestra primera pieza</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", margin: "14px 0 0", color: "var(--tinta)", lineHeight: 0.95 }}>
              <span style={{ color: "var(--rojo)" }}>Don Refranote</span> — un party game<br/>de dichos y refranes.
            </h2>
          </div>
          <div className="display" style={{ fontSize: 18, color: "var(--rojo)", letterSpacing: 0, opacity: 0.7 }}>Nº 01 · Edición España</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div className="placeholder" data-label="caja Don Refranote · bodegón 3/4" style={{ aspectRatio: "4/5", borderRadius: 12 }} />
            <div className="display" style={{ position: "absolute", top: -18, right: -14, background: "var(--verde-lima)", color: "var(--rojo)", padding: "12px 18px", borderRadius: 999, fontSize: 16, transform: "rotate(8deg)" }}>
              ¡Nuevo!
            </div>
          </div>

          <div>
            <p className="body-l" style={{ marginTop: 0, fontSize: 20, lineHeight: 1.45 }}>
              Un juego de mesa con expresiones y refranes españoles.
              Explica, dibuja, actúa, adivina. <strong>A ver quién se sabe este.</strong>
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, margin: "36px 0 32px", borderTop: "1px solid rgba(20,19,19,0.15)", borderBottom: "1px solid rgba(20,19,19,0.15)", padding: "20px 0" }}>
              <Stat label="Jugadores" value="4+" />
              <Stat label="Duración"  value="30′" />
              <Stat label="Cartas"    value="200" />
              <Stat label="Edad"      value="14+" />
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button className="btn btn-filled-dark" onClick={() => setRoute("producto")}>
                Ver el juego <span className="arrow">→</span>
              </button>
              <div className="display" style={{ fontSize: 28, color: "var(--rojo)" }}>25 €</div>
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
      <div className="label" style={{ opacity: 0.55 }}>{label}</div>
      <div className="display" style={{ fontSize: 34, color: "var(--rojo)", marginTop: 6 }}>{value}</div>
    </div>
  );
}

// ---------- Frase firma (bloque azul) ----------
function PhraseBlock() {
  return (
    <section className="bg-azul" style={{ padding: "120px 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="label" style={{ color: "var(--amarillo)" }}>Firma de marca</div>
        <h2 className="display" style={{ fontSize: "clamp(64px, 12vw, 180px)", color: "var(--papel)", margin: "24px 0 0", lineHeight: 0.92 }}>
          “Una más<br/>y nos <em style={{ fontStyle: "normal", color: "var(--amarillo)" }}>vamos.”</em>
        </h2>
        <p className="body-l" style={{ color: "var(--papel)", opacity: 0.85, maxWidth: 520, margin: "32px auto 0" }}>
          Lo hemos dicho todos. Nunca ha sido verdad. De ahí venimos.
        </p>
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
        <h2 className="display" style={{ fontSize: "clamp(56px, 10vw, 150px)", color: "var(--rojo)", margin: "24px 0 40px", lineHeight: 0.92 }}>
          Ponemos<br/>otro café.
        </h2>
        <button className="btn btn-filled-rojo" onClick={() => setRoute("producto")} style={{ fontSize: 16, padding: "22px 36px" }}>
          Ver Don Refranote <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

Object.assign(window, { Home });
