const CATEGORY_LABELS = {
  all: "Hamısı",
  girls: "Qızlar üçün",
  boys: "Oğlanlar üçün",
  universal: "Universal",
};

export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  showSearch,
  searchTerm,
  onSearchChange,
}) {
  const showTabs = categories.length > 1;

  if (!showTabs && !showSearch) return null;

  return (
    <div className="filters">
      {showTabs && (
        <div className="filters__tabs" role="tablist" aria-label="Kateqoriya süzgəci">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={
                "filters__tab" +
                (activeCategory === cat ? " filters__tab--active" : "")
              }
              onClick={() => onCategoryChange(cat)}
            >
              {CATEGORY_LABELS[cat] || cat}
            </button>
          ))}
        </div>
      )}

      {showSearch && (
        <div className="filters__search">
          <svg viewBox="0 0 20 20" className="filters__search-icon" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="filters__search-input"
            placeholder="Axtar..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Buket adına görə axtar"
          />
        </div>
      )}
    </div>
  );
}
