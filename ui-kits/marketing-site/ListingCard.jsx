// ListingCard.jsx — square photo card with rating, price
function ListingCard({ listing, onFav }) {
  const [favorited, setFav] = React.useState(listing.fav || false);
  return (
    <a href="#listing" className="wlh-listing-card">
      <div className="wlh-listing-photo" style={{ background: listing.color }}>
        <button
          className={"wlh-fav " + (favorited ? "wlh-fav-on" : "")}
          onClick={(e) => { e.preventDefault(); setFav(!favorited); }}
          aria-label="Favoritar"
        >
          {favorited ? "♥" : "♡"}
        </button>
        {listing.tag ? (
          <span className={"wlh-listing-tag wlh-chip-" + (listing.tagTone || "yellow")}>
            {listing.tag}
          </span>
        ) : null}
      </div>
      <div className="wlh-listing-body">
        <div className="wlh-listing-row">
          <div className="wlh-listing-title">{listing.title}</div>
          <div className="wlh-listing-rating">
            <span className="wlh-star">★</span> {listing.rating}
          </div>
        </div>
        <div className="wlh-listing-sub">{listing.location} · {listing.guests} hóspedes</div>
        <div className="wlh-listing-amenities">
          {listing.amenities.map((a, i) => (
            <span key={i} className="wlh-amenity">{a}</span>
          ))}
        </div>
        <div className="wlh-listing-price">
          <strong>R$ {listing.price}</strong> <span>/ noite</span>
        </div>
      </div>
    </a>
  );
}

window.ListingCard = ListingCard;
