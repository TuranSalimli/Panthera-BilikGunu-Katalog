import { useMemo, useState, useCallback, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Filters from "./components/Filters.jsx";
import BouquetGrid from "./components/BouquetGrid.jsx";
import Footer from "./components/Footer.jsx";
import bouquets from "./data/bouquets.js";

const SEARCH_THRESHOLD = 10;

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBouquet, setSelectedBouquet] = useState(null);

  const categories = useMemo(() => {
    const found = new Set(["all"]);
    bouquets.forEach((b) => {
      found.add(b.category || "universal");
    });
    return Array.from(found);
  }, []);

  const showSearch = bouquets.length >= SEARCH_THRESHOLD;

  const filtered = useMemo(() => {
    return bouquets.filter((b) => {
      const category = b.category || "universal";
      const matchesCategory =
        activeCategory === "all" || category === activeCategory;
      const matchesSearch = b.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const closeModal = useCallback((e) => {
    if (!e || e.target === e.currentTarget) setSelectedBouquet(null);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setSelectedBouquet(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="page">
      <Header />
      <Hero />

      <main className="catalog" id="catalog">
        <Filters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          showSearch={showSearch}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <BouquetGrid
          bouquets={filtered}
          onCardClick={(bouquet) => setSelectedBouquet(bouquet)}
        />
      </main>

      <Footer />

      {/* WhatsApp Modal */}
      {selectedBouquet && (() => {
        const flowerName = selectedBouquet.name || "Kataloq məhsulu";
        const flowerPrice = selectedBouquet.price || "";
        const imageUrl = `${window.location.origin}/${encodeURI(selectedBouquet.image)}`;
        const messageText = `Salam! Panthera kataloqundan bu məhsulla maraqlanıram:\n\nMəhsul: ${flowerName}\nQiymət: ${flowerPrice}\nLink: ${imageUrl}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=994773040303&text=${encodeURIComponent(messageText)}`;

        return (
          <div className="image-modal active" onClick={closeModal}>
            <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
              <img src={selectedBouquet.image} alt={flowerName} loading="lazy" decoding="async" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-order-btn"
              >
                WhatsApp ilə Sifariş Et
              </a>
            </div>
          </div>
        );
      })()}
    </div>
  );
}