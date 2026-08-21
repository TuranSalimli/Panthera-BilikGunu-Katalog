import BouquetCard from "./BouquetCard.jsx";

export default function BouquetGrid({ bouquets, onCardClick }) {
  if (bouquets.length === 0) {
    return (
      <div className="empty-state">
        <p>Axtarışınıza uyğun buket tapılmadı.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {bouquets.map((bouquet) => (
        <div 
          key={bouquet.id} 
          onClick={() => onCardClick && onCardClick(bouquet)}
          style={{ cursor: "pointer" }}
        >
          <BouquetCard bouquet={bouquet} />
        </div>
      ))}
    </div>
  );
}