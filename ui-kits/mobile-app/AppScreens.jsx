// AppScreens.jsx — WLH mobile app screens

const APP_LISTINGS = [
  { id:1, title:"Loft Lastarria", neighborhood:"Lastarria · Santiago", guests:2, price:480, rating:"4,9", reviews:218, color:"linear-gradient(160deg,#FFE99A,#FFC533)", amenities:["Wi-Fi","Café","Vista"] },
  { id:2, title:"Casa Bellavista", neighborhood:"Bellavista · Santiago", guests:4, price:720, rating:"4,8", reviews:147, color:"linear-gradient(160deg,#B5D4DD,#5C8AA6)", amenities:["Cozinha","Pet","Pátio"] },
  { id:3, title:"Apto Providencia", neighborhood:"Providencia · Santiago", guests:2, price:520, rating:"4,9", reviews:89, color:"linear-gradient(160deg,#FFE99A,#E89028)", amenities:["Wi-Fi","Metrô"] },
  { id:4, title:"Mirante San Cristóbal", neighborhood:"Bellavista · Santiago", guests:3, price:610, rating:"5,0", reviews:62, color:"linear-gradient(160deg,#5A8A6B,#1F3A4D)", amenities:["Vista","Café"] },
];

// ─────────── Home / Search ───────────
function HomeScreen({ onPick }) {
  return (
    <div className="app-scroll">
      <div className="app-hero">
        <div className="app-hero-greeting">
          <span className="wlh-eyebrow">Bem-vinda, Maria</span>
          <h1 className="app-hero-title">Para onde<br/><span className="wlh-script">você vai?</span></h1>
        </div>
        <div className="app-search-bar">
          <i data-lucide="search"></i>
          <span>Santiago · 12–17 jun · 2 hóspedes</span>
        </div>
      </div>

      <div className="app-section">
        <div className="app-section-head">
          <h2>Bairros que a gente ama</h2>
          <a href="#">Ver todos</a>
        </div>
        <div className="app-hood-row">
          {[
            { name:"Lastarria", bg:"#FFC533", fg:"#1F3A4D" },
            { name:"Bellavista", bg:"#1F3A4D", fg:"#FFC533" },
            { name:"Providencia", bg:"#5A8A6B", fg:"#FAF1DE" },
            { name:"Barrio Italia", bg:"#FFE99A", fg:"#1F3A4D" },
          ].map(h => (
            <div key={h.name} className="app-hood-pill" style={{ background: h.bg, color: h.fg }}>{h.name}</div>
          ))}
        </div>
      </div>

      <div className="app-section">
        <div className="app-section-head">
          <h2>Mais reservados</h2>
          <a href="#">Ver todos</a>
        </div>
        <div className="app-listings">
          {APP_LISTINGS.map(l => (
            <button key={l.id} className="app-listing-card" onClick={() => onPick(l)}>
              <div className="app-listing-photo" style={{ background: l.color }}>
                <span className="app-fav">♡</span>
              </div>
              <div className="app-listing-row">
                <div className="app-listing-title">{l.title}</div>
                <div className="app-listing-rating"><span className="wlh-star">★</span> {l.rating}</div>
              </div>
              <div className="app-listing-sub">{l.neighborhood} · {l.guests} hóspedes</div>
              <div className="app-listing-price"><strong>R$ {l.price}</strong> <span>/ noite</span></div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 100 }}></div>
    </div>
  );
}

// ─────────── Listing Detail ───────────
function ListingScreen({ listing, onBack, onReserve }) {
  return (
    <div className="app-scroll app-scroll-no-pad">
      <div className="app-detail-photo" style={{ background: listing.color }}>
        <button className="app-back" onClick={onBack}>
          <i data-lucide="chevron-left"></i>
        </button>
        <button className="app-share">
          <i data-lucide="share"></i>
        </button>
      </div>
      <div className="app-detail-body">
        <h1 className="app-detail-title">{listing.title}</h1>
        <div className="app-detail-meta">
          <span><span className="wlh-star">★</span> {listing.rating} · {listing.reviews} avaliações</span>
        </div>
        <div className="app-detail-loc">{listing.neighborhood}</div>

        <div className="app-host">
          <div className="app-host-avatar">M</div>
          <div>
            <div className="app-host-name">Anfitriã: Mariana</div>
            <div className="app-host-sub">Verificada · Resposta em ~1h</div>
          </div>
        </div>

        <h3>O que esta casa oferece</h3>
        <div className="app-amenities-grid">
          <div className="app-amenity-item"><img src="../../assets/icons/coffee-cup.png"/><span>Café na chegada</span></div>
          <div className="app-amenity-item"><img src="../../assets/icons/key-checkin.png"/><span>Check-in flex</span></div>
          <div className="app-amenity-item"><img src="../../assets/icons/leaves-pair.png"/><span>Sacada com plantas</span></div>
          <div className="app-amenity-item"><img src="../../assets/icons/door-tag.png"/><span>Privacidade total</span></div>
        </div>

        <h3>Sobre o lugar</h3>
        <p className="app-detail-p">
          Apartamento de 2 quartos no coração de Lastarria. Café quentinho na chegada,
          Wi-Fi rápido, e o melhor do bairro a três passos da porta. A gente entrega
          as chaves, as dicas dos vizinhos, e um mapa desenhado à mão.
        </p>

        <div style={{ height: 120 }}></div>
      </div>

      <div className="app-reserve-bar">
        <div>
          <strong>R$ {listing.price}</strong> <span>/ noite</span>
          <div className="app-reserve-dates">12–17 jun · 5 noites</div>
        </div>
        <button className="wlh-btn wlh-btn-primary wlh-btn-lg" onClick={onReserve}>Reservar</button>
      </div>
    </div>
  );
}

// ─────────── Booking confirmed ───────────
function ConfirmedScreen({ listing, onDone }) {
  return (
    <div className="app-scroll app-confirmed">
      <div className="app-confirmed-burst">
        <img src="../../assets/icons/key-checkin.png" alt="" />
      </div>
      <h1 className="app-confirmed-title">
        <span className="wlh-script">Reservado!</span>
      </h1>
      <p className="app-confirmed-sub">
        A gente já avisou a Mariana. Você vai receber o passo a passo<br/>
        de check-in no e-mail e aqui no app.
      </p>

      <div className="app-confirmed-card">
        <div className="app-confirmed-row">
          <span>Apartamento</span><strong>{listing.title}</strong>
        </div>
        <div className="app-confirmed-row">
          <span>Datas</span><strong>12–17 jun</strong>
        </div>
        <div className="app-confirmed-row">
          <span>Hóspedes</span><strong>2 pessoas</strong>
        </div>
        <div className="app-confirmed-row">
          <span>Total</span><strong>R$ {listing.price * 5}</strong>
        </div>
      </div>

      <div className="app-confirmed-checklist">
        <h3>Antes de embarcar</h3>
        <div className="app-check-item"><img src="../../assets/icons/passport.png"/><span>Passaporte e documentos</span></div>
        <div className="app-check-item"><img src="../../assets/icons/umbrella.png"/><span>Junho em Santiago é fresquinho — leve casaco</span></div>
        <div className="app-check-item"><img src="../../assets/icons/heart.png"/><span>A gente está aqui se precisar</span></div>
      </div>

      <button className="wlh-btn wlh-btn-primary wlh-btn-lg" style={{ width: "100%", justifyContent:"center", marginTop: 24 }} onClick={onDone}>
        Ver minha viagem
      </button>
      <div style={{ height: 80 }}></div>
    </div>
  );
}

// ─────────── Trip / Itinerary ───────────
function TripScreen({ listing }) {
  return (
    <div className="app-scroll">
      <div className="app-trip-head">
        <span className="wlh-eyebrow">Sua próxima viagem</span>
        <h1 className="app-trip-title">Santiago em 23 dias</h1>
      </div>

      <div className="app-trip-card" style={{ background: listing.color }}>
        <div>
          <h3 style={{ color:"white", margin:0 }}>{listing.title}</h3>
          <div style={{ color:"rgba(255,255,255,0.9)", fontSize: 13, marginTop:4 }}>{listing.neighborhood}</div>
        </div>
        <div className="app-trip-card-meta">
          <div><strong>12 jun</strong><span>check-in 15h</span></div>
          <div><strong>17 jun</strong><span>check-out 11h</span></div>
        </div>
      </div>

      <div className="app-section">
        <h2>Próximos passos</h2>
        <div className="app-step-card">
          <div className="app-step-num">1</div>
          <div>
            <strong>Confirme seus dados</strong>
            <p>Documento e contato de emergência. 2 minutinhos.</p>
          </div>
          <i data-lucide="chevron-right"></i>
        </div>
        <div className="app-step-card">
          <div className="app-step-num">2</div>
          <div>
            <strong>Mensagem da Mariana</strong>
            <p>Sua anfitriã quer saber seu horário de chegada.</p>
          </div>
          <i data-lucide="chevron-right"></i>
        </div>
        <div className="app-step-card app-step-card-done">
          <div className="app-step-num"><i data-lucide="check"></i></div>
          <div>
            <strong>Pagamento confirmado</strong>
            <p>R$ {listing.price * 5} no cartão final 4242</p>
          </div>
        </div>
      </div>

      <div className="app-section">
        <h2>O que a vizinhança recomenda</h2>
        <div className="app-rec-card">
          <img src="../../assets/icons/coffee-cup.png" />
          <div>
            <strong>Café Forastero</strong>
            <p>3 minutos a pé · O melhor flat white do bairro</p>
          </div>
        </div>
        <div className="app-rec-card">
          <img src="../../assets/icons/leaf.png" />
          <div>
            <strong>Cerro Santa Lucía</strong>
            <p>8 minutos a pé · Pôr do sol pra ninguém botar defeito</p>
          </div>
        </div>
      </div>

      <div style={{ height: 100 }}></div>
    </div>
  );
}

// ─────────── Tab bar ───────────
function TabBar({ active, onTab }) {
  const tabs = [
    { id:"home",  label:"Buscar",   icon:"search" },
    { id:"trips", label:"Viagens",  icon:"map" },
    { id:"favs",  label:"Favoritos",icon:"heart" },
    { id:"me",    label:"Você",     icon:"user" },
  ];
  return (
    <div className="app-tabbar">
      {tabs.map(t => (
        <button key={t.id} className={"app-tab " + (active === t.id ? "app-tab-on" : "")} onClick={() => onTab(t.id)}>
          <i data-lucide={t.icon}></i>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

window.HomeScreen = HomeScreen;
window.ListingScreen = ListingScreen;
window.ConfirmedScreen = ConfirmedScreen;
window.TripScreen = TripScreen;
window.AppTabBar = TabBar;
window.APP_LISTINGS = APP_LISTINGS;
