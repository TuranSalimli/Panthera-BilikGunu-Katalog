export default function Hero() {
  return (
    <section className="hero">
      <svg
        className="hero__motif"
        viewBox="0 0 420 420"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M210 400 C 205 300, 215 220, 210 60" />
          <path d="M210 340 C 170 320, 140 300, 110 250" />
          <path d="M210 340 C 250 320, 280 300, 310 250" />
          <path d="M210 260 C 175 245, 150 225, 128 185" />
          <path d="M210 260 C 245 245, 270 225, 292 185" />
          <path d="M210 180 C 180 160, 160 135, 148 95" />
          <path d="M210 180 C 240 160, 260 135, 272 95" />
          <path d="M110 250 C 95 255, 80 250, 70 235" />
          <path d="M310 250 C 325 255, 340 250, 350 235" />
          <ellipse cx="210" cy="55" rx="14" ry="20" />
          <ellipse cx="148" cy="90" rx="11" ry="16" transform="rotate(-30 148 90)" />
          <ellipse cx="272" cy="90" rx="11" ry="16" transform="rotate(30 272 90)" />
        </g>
        <g fill="currentColor" className="hero__motif-accent">
          <circle cx="210" cy="55" r="2.5" />
          <circle cx="148" cy="90" r="2" />
          <circle cx="272" cy="90" r="2" />
        </g>
      </svg>

      <div className="hero__content">
        <p className="hero__kicker">Bilik Günü kolleksiyası</p>
        <h2 className="hero__title">İlk dərs, ilk gül buketi.</h2>
        <p className="hero__text">
          Balaca məktəblilər üçün sevgi ilə hazırlanmış xüsusi Bilik Günü
          kolleksiyası.
        </p>
      </div>
    </section>
  );
}
