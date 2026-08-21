import { useState } from "react";

export default function BouquetCard({ bouquet }) {
  const [imageFailed, setImageFailed] = useState(false);
  const altText = `${bouquet.name} — Bilik Günü buketi`;

  return (
    <article className="card">
      <div className="card__image-wrap">
        {!imageFailed ? (
          <img
            className="card__image"
            src={bouquet.image}
            alt={altText}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="card__placeholder" role="img" aria-label={altText}>
            <svg viewBox="0 0 100 100" className="card__placeholder-icon" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M50 82 C 48 60, 52 42, 50 20" />
                <path d="M50 60 C 35 52, 25 42, 20 28" />
                <path d="M50 60 C 65 52, 75 42, 80 28" />
                <ellipse cx="50" cy="18" rx="9" ry="13" />
              </g>
            </svg>
            <span>Şəkil tezliklə əlavə olunacaq</span>
          </div>
        )}
        <span className="card__badge">Bilik Günü 2026</span>
      </div>

      <div className="card__body">
        <h3 className="card__name">{bouquet.name}</h3>
        <p className="card__price">{bouquet.price}</p>
      </div>
    </article>
  );
}
