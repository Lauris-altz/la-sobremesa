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
