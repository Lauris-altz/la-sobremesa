// Producto — Don Refranote
// Estructura: Qué es → Cómo se juega (ligero) → Jugadores → Contenido → CTA (+ FAQ)
// Tono: más directo que la marca, pero con personalidad.
const { useState: useStateProd } = React;

function Producto({ setRoute, addToCart, tone }) {
  return (
    <main className="page-enter">
      <ProdHero />
      <ProdQueEs />
      <ProdMecanicas />
      <ProdJugadores />
      <ProdContenido />
      <ProdCompra addToCart={addToCart} />
      <ProdFAQ />
    </main>
  );
}

/* ---------- HERO ---------- */
function ProdHero() {
  return (
    <section className="bg-rojo" style={{ padding: "72px 0 96px", position: "relative", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div className="label" style={{ color: "var(--verde-lima)" }}>Nº 01 · Party game de refranes</div>
          <h1 className="display" style={{ fontSize: "clamp(64px, 10vw, 168px)", color: "var(--verde-lima)", margin: "24px 0 0", lineHeight: 0.9 }}>
            Don<br/>Refranote.
          </h1>
          <p className="body-l" style={{ color: "var(--verde-lima)", opacity: 0.95, marginTop: 28, maxWidth: 460, fontSize: 20 }}>
            El party game de expresiones y refranes españoles.
            <br/><strong style={{ color: "var(--papel)" }}>A ver quién se sabe este.</strong>
          </p>

          {/* Mini-specs con diamante */}
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 36, color: "var(--verde-lima)" }}>
            <MiniSpec n="200" l="cartas" />
            <MiniSpec n="1" l="dado" />
            <MiniSpec n="30′" l="por partida" />
            <MiniSpec n="4+" l="jugadores" />
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="placeholder dark" data-label="caja Don Refranote · frontal" style={{ aspectRatio: "1/1", borderRadius: 12 }} />
          <div className="rotate-chip display" style={{ position: "absolute", bottom: -14, left: -14, background: "var(--amarillo)", color: "var(--rojo)", padding: "10px 16px", borderRadius: 999, fontSize: 14 }}>
            ¡Aquí se viene a jugar!
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniSpec({ n, l }) {
  return (
    <div>
      <div className="display" style={{ fontSize: 36, lineHeight: 1 }}>{n}</div>
      <div className="label" style={{ marginTop: 6, opacity: 0.85 }}>{l}</div>
    </div>
  );
}

/* ---------- QUÉ ES ---------- */
function ProdQueEs() {
  return (
    <section className="bg-papel" style={{ padding: "120px 0", borderBottom: "1px solid rgba(20,19,19,0.08)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64 }}>
        <div>
          <div className="label">01 — Qué es</div>
        </div>
        <div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", margin: 0, lineHeight: 0.95, color: "var(--tinta)" }}>
            Un juego de <em style={{ fontStyle: "normal", color: "var(--rojo)" }}>dichos, refranes<br/>y expresiones</em> de toda la vida.
          </h2>
          <p className="body-l" style={{ marginTop: 32, maxWidth: 560, fontSize: 20 }}>
            Sacas una carta. Te toca una acción. Explica, dibuja, actúa, adivina o invéntatelo.
            La mesa decide si cuela. <strong>Una más y nos vamos.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- MECÁNICAS: 5 bloques cortos ---------- */
function ProdMecanicas() {
  // Formato pedido: acción → pista corta. Sin explicar reglas.
  const tiles = [
    { verb: "Explica",  hint: "Sin decir la palabra",     bg: "bg-rojo",     ink: "var(--verde-lima)" },
    { verb: "Dibuja",   hint: "Como puedas",               bg: "bg-azul",     ink: "var(--papel)"     },
    { verb: "Actúa",    hint: "Sin hablar",                bg: "bg-rosa",     ink: "var(--rojo)"      },
    { verb: "Adivina",  hint: "Si te lo sabes",            bg: "bg-verde",    ink: "var(--papel)"     },
    { verb: "Inventa",  hint: "A ver qué sale",            bg: "bg-amarillo", ink: "var(--rojo)"      },
  ];
  return (
    <section className="bg-papel" style={{ padding: "120px 0 0" }}>
      <div className="wrap" style={{ marginBottom: 48 }}>
        <div className="label">02 — Cómo se juega</div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", margin: "14px 0 0", lineHeight: 0.95 }}>
          Cinco formas de <em style={{ fontStyle: "normal", color: "var(--rojo)" }}>sacarlo.</em>
        </h2>
      </div>

      {/* 5 bloques edge-to-edge, cada uno un color de marca */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {tiles.map((t, i) => (
          <div key={i} className={t.bg} style={{ padding: "56px 28px", minHeight: 340, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className="display" style={{ fontSize: 14, color: t.ink, opacity: 0.75 }}>{`0${i+1}`}</div>
            <div>
              <div className="display" style={{ fontSize: "clamp(36px, 3.6vw, 56px)", color: t.ink, lineHeight: 0.95 }}>{t.verb}</div>
              <div className="body-m" style={{ color: t.ink, marginTop: 14, fontStyle: "italic", opacity: 0.92 }}>
                “{t.hint}”
              </div>
            </div>
            <div style={{ height: 1, background: t.ink, opacity: 0.35 }} />
          </div>
        ))}
      </div>

      {/* microcopy editorial */}
      <div className="wrap" style={{ marginTop: 48, textAlign: "center" }}>
        <p className="body-m" style={{ opacity: 0.7, maxWidth: 520, margin: "0 auto" }}>
          Sin reglas largas. Se lee en dos minutos y se aprende en la primera ronda.
        </p>
      </div>
    </section>
  );
}

/* ---------- JUGADORES ---------- */
function ProdJugadores() {
  return (
    <section className="bg-azul" style={{ padding: "140px 0", color: "var(--papel)" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="label" style={{ color: "var(--amarillo)" }}>03 — Jugadores</div>
        <h2 className="display" style={{ fontSize: "clamp(60px, 10vw, 160px)", margin: "24px 0 0", lineHeight: 0.92, color: "var(--verde-lima)" }}>
          De 4 jugadores<br/>en adelante.
        </h2>
        <p className="display-alt" style={{ fontSize: 28, margin: "24px 0 0", color: "var(--amarillo)", textTransform: "none", fontStyle: "italic" }}>
          Cuantos más, mejor.
        </p>
      </div>
    </section>
  );
}

/* ---------- CONTENIDO: cartas por categorías + dado ---------- */
function ProdContenido() {
  // Distribución visual de los 200 refranes por mazo temático
  const mazos = [
    { name: "Animalario",        n: 50, bg: "bg-rosa",     ink: "var(--rojo)",  sample: "“Perro ladrador…”" },
    { name: "De casa y mantel",  n: 50, bg: "bg-verde",    ink: "var(--papel)", sample: "“En casa del herrero…”" },
    { name: "Tiempo y paciencia",n: 50, bg: "bg-amarillo", ink: "var(--rojo)",  sample: "“No por mucho madrugar…”" },
    { name: "Retranca y picardía",n: 50,bg: "bg-lima",     ink: "var(--rojo)",  sample: "“A quien madruga…”" },
  ];
  return (
    <section className="bg-papel" style={{ padding: "120px 0" }}>
      <div className="wrap">
        <div className="label">04 — Contenido</div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", margin: "14px 0 48px", lineHeight: 0.95 }}>
          Qué hay dentro<br/>de la caja.
        </h2>

        {/* Cartas por categoría */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid rgba(20,19,19,0.1)", borderRadius: 16, overflow: "hidden" }}>
          {mazos.map((m, i) => (
            <div key={i} className={m.bg} style={{ padding: "36px 28px", minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "space-between", color: m.ink }}>
              <div className="display" style={{ fontSize: 64, lineHeight: 0.9 }}>{m.n}</div>
              <div>
                <div className="label" style={{ color: m.ink, opacity: 0.85 }}>Mazo</div>
                <div className="display" style={{ fontSize: 22, marginTop: 6, letterSpacing: 0 }}>{m.name}</div>
                <div className="body-s" style={{ marginTop: 14, fontStyle: "italic", opacity: 0.85 }}>{m.sample}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dado + resumen */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginTop: 40, alignItems: "center" }}>
          <Dado />
          <div>
            <div className="display" style={{ fontSize: 28, color: "var(--rojo)", letterSpacing: 0 }}>
              200 cartas · 4 mazos · 1 dado de 5 caras
            </div>
            <p className="body-m" style={{ marginTop: 14, maxWidth: 520, opacity: 0.75 }}>
              El dado decide qué haces con la carta. Explica, dibuja, actúa, adivina o inventa. No te preocupes por las reglas: caben en una servilleta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Dado ilustrado en SVG — 5 caras visibles, iconos rápidos */
function Dado() {
  const face = { fill: "var(--papel)", stroke: "var(--tinta)", strokeWidth: 1.5 };
  return (
    <svg viewBox="0 0 300 260" width="100%" style={{ maxWidth: 280 }} aria-hidden>
      {/* Cara superior */}
      <polygon points="150,20 280,80 150,140 20,80" {...face} />
      {/* Cara frontal-izq */}
      <polygon points="20,80 150,140 150,240 20,180" {...face} />
      {/* Cara frontal-der */}
      <polygon points="280,80 150,140 150,240 280,180" {...face} />

      {/* Glifos (iconitos que sugieren las acciones) */}
      <g style={{ fontFamily: "var(--display)", textTransform: "uppercase", fontSize: 13, fill: "var(--rojo)" }}>
        <text x="150" y="85" textAnchor="middle">Explica</text>
        <text x="85" y="150" textAnchor="middle" transform="rotate(-22 85 150)">Dibuja</text>
        <text x="215" y="150" textAnchor="middle" transform="rotate(22 215 150)">Actúa</text>
      </g>
      {/* Diamante central */}
      <polygon points="150,130 160,140 150,150 140,140" fill="var(--rojo)" />
    </svg>
  );
}

/* ---------- COMPRA (CTA) ---------- */
function ProdCompra({ addToCart }) {
  const [qty, setQty] = useStateProd(1);
  const price = 25;
  return (
    <section className="bg-lima" style={{ padding: "120px 0" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div className="placeholder" data-label="bodegón · Don Refranote + cartas + dado" style={{ aspectRatio: "1/1", borderRadius: 12, background: "var(--papel)" }} />
        </div>
        <div>
          <div className="label" style={{ color: "var(--rojo)" }}>05 — Pide la caja</div>
          <h2 className="display" style={{ fontSize: "clamp(56px, 9vw, 140px)", margin: "20px 0 0", color: "var(--rojo)", lineHeight: 0.9 }}>
            Una más<br/>y nos <em style={{ fontStyle: "normal", color: "var(--tinta)" }}>vamos.</em>
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
            <li>◆ Para 4 jugadores en adelante (cuantos más, mejor).</li>
            <li>◆ 30 minutos por partida.</li>
            <li>◆ Envío gratuito a partir de 40 €.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function ProdFAQ() {
  const [open, setOpen] = useStateProd(0);
  const faqs = [
    { q: "¿Se juega con niños?",       a: "A partir de 14 años. Hay refranes que les van a sonar a chino." },
    { q: "¿Cuánto dura una partida?",  a: "Unos 30 minutos. Luego siempre hay otra. Una más y nos vamos." },
    { q: "¿Cuántos somos mínimo?",     a: "De 4 en adelante. Cuantos más, mejor." },
    { q: "¿Llega a Canarias y Baleares?", a: "Sí, tarda un par de días más. Paciencia, está en el barco." },
  ];
  return (
    <section className="bg-papel" style={{ padding: "120px 0" }}>
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
