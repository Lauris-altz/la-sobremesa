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
