// Sections.jsx — homepage sections: featured listings, neighborhoods, how-it-works
const SAMPLE_LISTINGS = [
  { id:1, title:"Loft Lastarria", location:"Santiago", guests:2, price:480, rating:"4,9", color:"linear-gradient(135deg,#FFE99A,#FFC533)", amenities:["Wi-Fi","Café","Vista"], tag:"Mais reservado", tagTone:"yellow" },
  { id:2, title:"Casa Bellavista", location:"Santiago", guests:4, price:720, rating:"4,8", color:"linear-gradient(135deg,#B5D4DD,#5A8A6B)", amenities:["Cozinha","Pet","Pátio"], tag:"Pet friendly", tagTone:"aqua" },
  { id:3, title:"Apto Providencia", location:"Santiago", guests:2, price:520, rating:"4,9", color:"linear-gradient(135deg,#FFC533,#E89028)", amenities:["Wi-Fi","Metrô","Lavanderia"] },
  { id:4, title:"Mirante Cerro San Cristóbal", location:"Santiago", guests:3, price:610, rating:"5,0", color:"linear-gradient(135deg,#1F3A4D,#B5D4DD)", amenities:["Vista","Café","Sacada"], tag:"Premium", tagTone:"purple" },
];

function FeaturedListings() {
  return (
    <section className="wlh-mkt-section">
      <div className="wlh-mkt-section-head">
        <div>
          <span className="wlh-eyebrow">Bairros que a gente ama</span>
          <h2>O que está bombando em Santiago</h2>
        </div>
        <a href="#all" className="wlh-mkt-link-arrow">Ver todos →</a>
      </div>
      <div className="wlh-mkt-grid-4">
        {SAMPLE_LISTINGS.map(l => <ListingCard key={l.id} listing={l} />)}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon:"passport.svg", title:"Você escolhe", body:"Apartamento, datas, hóspedes. Tudo em português, com preço em real." },
    { icon:"key-checkin.svg", title:"A gente entrega a chave", body:"Check-in flexível, instruções claras, suporte em português 24/7." },
    { icon:"coffee-cup.svg", title:"Você se sente em casa", body:"Café quentinho, mapa do bairro, dicas dos vizinhos. Welcome kit incluso." },
  ];
  return (
    <section className="wlh-mkt-section wlh-mkt-section-aqua">
      <div className="wlh-mkt-how-head">
        <span className="wlh-eyebrow">Como funciona</span>
        <h2>Três passos. Zero dor de cabeça.</h2>
      </div>
      <div className="wlh-mkt-steps">
        {steps.map((s, i) => (
          <div key={i} className="wlh-mkt-step">
            <div className="wlh-mkt-step-num">{i+1}</div>
            <img src={"../../assets/icons/" + s.icon} className="wlh-mkt-step-icon" />
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Neighborhoods() {
  const hoods = [
    { name:"Lastarria", tagline:"Cafés, museus, ruas estreitas", bg:"#FFC533", fg:"#1F3A4D" },
    { name:"Bellavista", tagline:"Boêmio, vida noturna, arte", bg:"#1F3A4D", fg:"#FFC533" },
    { name:"Providencia", tagline:"Calmo, arborizado, residencial", bg:"#5A8A6B", fg:"#FAF1DE" },
    { name:"Barrio Italia", tagline:"Vintage, design, brunch", bg:"#FFE99A", fg:"#1F3A4D" },
  ];
  return (
    <section className="wlh-mkt-section">
      <span className="wlh-eyebrow">Onde se hospedar</span>
      <h2>Cada bairro, uma história.</h2>
      <div className="wlh-mkt-grid-4">
        {hoods.map(h => (
          <a href="#" key={h.name} className="wlh-hood-card" style={{ background: h.bg, color: h.fg }}>
            <h3 style={{ color: h.fg }}>{h.name}</h3>
            <p style={{ color: h.fg, opacity: 0.9 }}>{h.tagline}</p>
            <span className="wlh-mkt-link-arrow" style={{ color: h.fg }}>Explorar →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="wlh-mkt-cta-band">
      <div className="wlh-mkt-cta-mural" aria-hidden="true">
        <img src="../../assets/illustrations/mosaic-mural.png" alt="" />
      </div>
      <div className="wlh-mkt-cta-content">
        <h2 className="wlh-script" style={{ fontSize: 80, color: "#1F3A4D" }}>Vamos para Santiago?</h2>
        <p>A gente cuida da chave. Você cuida do café.</p>
        <button className="wlh-btn wlh-btn-primary wlh-btn-lg">Reservar agora</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wlh-mkt-footer">
      <div className="wlh-mkt-footer-top">
        <img src="../../assets/logos/horizontal-on-navy-white.png" className="wlh-mkt-footer-logo" />
        <div className="wlh-mkt-footer-cols">
          <div>
            <h4>Destinos</h4>
            <a href="#">Santiago</a>
            <a href="#">Em breve · Buenos Aires</a>
            <a href="#">Em breve · Cidade do México</a>
          </div>
          <div>
            <h4>Empresa</h4>
            <a href="#">Sobre</a>
            <a href="#">Diário</a>
            <a href="#">Imprensa</a>
          </div>
          <div>
            <h4>Ajuda</h4>
            <a href="#">Central</a>
            <a href="#">Política de cancelamento</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </div>
      <div className="wlh-mkt-footer-bottom">
        <span>© 2026 We Love Homes</span>
        <span>Feito com <img src="../../assets/icons/heart.svg" style={{height:14,verticalAlign:"middle"}} /> no Brasil</span>
      </div>
    </footer>
  );
}

window.FeaturedListings = FeaturedListings;
window.HowItWorks = HowItWorks;
window.Neighborhoods = Neighborhoods;
window.CtaBand = CtaBand;
window.MarketingFooter = Footer;
