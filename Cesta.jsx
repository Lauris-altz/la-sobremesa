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
