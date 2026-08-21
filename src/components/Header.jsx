export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <p className="site-header__eyebrow">Panthera</p>
        <h1 className="site-header__brand">
          Floral <span>Studio</span>
        </h1>

        <div className="site-header__divider" aria-hidden="true">
          <svg viewBox="0 0 120 12" className="divider-svg">
            <path
              d="M0 6 H45 M75 6 H120"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="60" cy="6" r="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <p className="site-header__season">Bilik Günü 2026</p>
        <p className="site-header__subtitle">
          Məktəbə ilk addım üçün xüsusi hazırlanmış buketlər
        </p>
      </div>
    </header>
  );
}
