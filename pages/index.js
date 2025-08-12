import monetizationMethods from "../data/monetizationData";

export default function Home(){
  return (
    <main style={{
      fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Arial",
      background:"#fff", color:"#111", minHeight:"100vh"
    }}>
      <header style={{
        position:"sticky", top:0, background:"#7F3FBF", color:"#fff",
        padding:"16px 20px", zIndex:10
      }}>
        <h1 style={{margin:0, fontSize:22}}>TrendUp</h1>
        <div style={{opacity:.9, fontSize:13}}>La red social con MÁS formas de monetizar</div>
      </header>

      <div style={{maxWidth:900, margin:"0 auto", padding:"20px 16px"}}>
        <section style={{marginBottom:16}}>
          <p style={{marginTop:0}}>Explora todas las vías de ingresos para creadores, marcas y comunidad.</p>
        </section>

        {monetizationMethods.map((block, idx) => (
          <section key={idx} style={{marginBottom:24}}>
            <h2 style={{fontSize:18, margin:"8px 0"}}>{block.category}</h2>
            <div style={{display:"grid", gap:10}}>
              {block.items.map((txt, i)=>(
                <div key={i} style={{
                  border:"1px solid #eee", borderRadius:12, padding:12,
                  display:"flex", alignItems:"center", justifyContent:"space-between"
                }}>
                  <span>{txt}</span>
                  <a href="#" style={{
                    fontSize:13, textDecoration:"none", fontWeight:700,
                    background:"#7F3FBF", color:"#fff", padding:"6px 10px", borderRadius:8
                  }}>Activar</a>
                </div>
              ))}
            </div>
          </section>
        ))}

        <hr style={{margin:"24px 0"}}/>
        <small style={{color:"#777"}}>© {new Date().getFullYear()} TrendUp</small>
      </div>
    </main>
  );
}
