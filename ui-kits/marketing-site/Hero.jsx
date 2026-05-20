// Hero.jsx — full-bleed hero with brushy display headline
function MarketingHero() {
  return (
    <section className="wlh-mkt-hero">
      <div className="wlh-mkt-hero-mural" aria-hidden="true">
        <img src="../../assets/illustrations/icon-collage.png" alt="" />
      </div>
      <div className="wlh-mkt-hero-content">
        <span className="wlh-eyebrow">Aluguel para brasileiros · Santiago, Chile</span>
        <h1 className="wlh-mkt-hero-title">
          Sua casa<br/><span className="wlh-script">em Santiago</span><br/>está te esperando.
        </h1>
        <p className="wlh-mkt-hero-sub">
          A gente entrega a chave, o café quentinho e o melhor do bairro.
          Você entrega o coração.
        </p>
        <div className="wlh-mkt-hero-search">
          <SearchField label="Para onde?" value="Santiago, Chile" />
          <SearchField label="Check-in" value="12 jun" />
          <SearchField label="Check-out" value="17 jun" />
          <SearchField label="Hóspedes" value="2" />
          <button className="wlh-btn wlh-btn-primary wlh-btn-lg">
            <i data-lucide="search"></i> Buscar
          </button>
        </div>
        <div className="wlh-mkt-hero-trust">
          <span><i data-lucide="shield-check"></i> Anfitriões verificados</span>
          <span><img src="../../assets/icons/coffee-cup.svg" /> Café na chegada</span>
          <span><img src="../../assets/icons/key-checkin.svg" /> Check-in flex</span>
        </div>
      </div>
    </section>
  );
}

function SearchField({ label, value }) {
  return (
    <div className="wlh-search-field">
      <span className="wlh-search-field-label">{label}</span>
      <span className="wlh-search-field-value">{value}</span>
    </div>
  );
}

window.MarketingHero = MarketingHero;
