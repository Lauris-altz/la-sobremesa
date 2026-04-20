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
