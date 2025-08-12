export default function Home(){
  const year = new Date().getFullYear();

  const btn = {
    display: "block",
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    fontWeight: 700,
    textAlign: "center",
    textDecoration: "none",
    marginTop: 10
  };

  return (
    <main style={{
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      background: "#fff",
      color: "#111",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "#7F3FBF", color:"#fff", padding: "16px 20px"
      }}>
        <h1 style={{margin:0, fontSize:22}}>TrendUp</h1>
        <div style={{opacity:.9, fontSize:13}}>La red social con más formas de monetizar</div>
      </header>

      {/* Contenido */}
      <div style={{maxWidth:820, margin:"0 auto", padding:"20px 16px"}}>
        {/* CTA principales */}
        <a href="#" style={{...btn, background:"#7F3FBF", color:"#fff"}}>Crear publicación (demo)</a>
        <a href="#" style={{...btn, background:"#111", color:"#fff"}}>Subir Reel (demo)</a>
        <a href="#" style={{...btn, background:"#eee", color:"#111"}}>Marketplace (próximamente)</a>

        {/* Secciones tipo cards */}
        <section style={{marginTop:22}}>
          <h2 style={{fontSize:18, margin:"12px 0"}}>Lo que podrás hacer</h2>
          <div style={{display:"grid", gap:12}}>
            <div style={{border:"1px solid #eee", borderRadius:14, padding:16}}>
              <strong>Monetiza por vistas</strong>
              <p style={{margin:"6px 0 0", color:"#555"}}>
                Activa ingresos por fotos, videos y Reels (CPM/CPE), propinas y suscripciones.
              </p>
            </div>
            <div style={{border:"1px solid #eee", borderRadius:14, padding:16}}>
              <strong>Marketplace integrado</strong>
              <p style={{margin:"6px 0 0", color:"#555"}}>
                Vende productos o digitales. Cobros se activarán con Stripe (modo prueba primero).
              </p>
            </div>
            <div style={{border:"1px solid #eee", borderRadius:14, padding:16}}>
              <strong>App instalable (PWA)</strong>
              <p style={{margin:"6px 0 0", color:"#555"}}>
                Ábrela en Safari → Compartir → <em>Agregar a pantalla de inicio</em> para usarla como app.
              </p>
            </div>
          </div>
        </section>

        {/* Pie */}
        <hr style={{margin:"24px 0"}}/>
        <small style={{color:"#777"}}>© {year} TrendUp</small>
      </div>
    </main>
  );
}
