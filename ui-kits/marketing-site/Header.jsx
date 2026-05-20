// Header.jsx — top navigation for the WLH marketing site
const { useState } = React;

function MarketingHeader({ onSearch }) {
  return (
    <header className="wlh-mkt-header">
      <a href="#" className="wlh-mkt-logo">
        <img src="../../assets/logos/horizontal-on-beige-navy.png" alt="We Love Homes" />
      </a>
      <nav className="wlh-mkt-nav">
        <a href="#destinos">Destinos</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#anfitrioes">Para anfitriões</a>
        <a href="#diario">Diário</a>
      </nav>
      <div className="wlh-mkt-actions">
        <a href="#" className="wlh-mkt-link">Entrar</a>
        <button className="wlh-btn wlh-btn-primary">Reservar</button>
      </div>
    </header>
  );
}

window.MarketingHeader = MarketingHeader;
