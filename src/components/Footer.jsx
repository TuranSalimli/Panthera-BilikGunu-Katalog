import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        {/* Sol tərəf: Brend və Mətnlər */}
        <div className="site-footer__brand-box">
          <p className="site-footer__brand">Panthera Floral Studio</p>
          <p className="site-footer__wish">Bilik Gününüz mübarək!</p>
          <p className="site-footer__note">
            Balaca məktəblilərin böyük gününə çiçəklərlə rəng qataq.
          </p>
        </div>

        {/* Sağ tərəf: Əlaqə və Sosial şəbəkələr (Yan-yana) */}
        <div className="site-footer__info-row">
          <div className="site-footer__contact">
            <p><strong>Telefon:</strong> +994 51 419 11 66</p>
            <p><strong>E-poçt:</strong> pantheraflowers@gmail.com</p>
            <p><strong>Ünvan:</strong> Bakı, Azərbaycan</p>
          </div>

          <div className="site-footer__socials">
            <a
              href="https://www.instagram.com/panthera.floralstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" /> @panthera.floralstudio
            </a>
            <a
              href="https://www.instagram.com/pantheraflowers_az"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" /> @pantheraflowers_az
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}