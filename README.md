# Panthera Floral Studio — Bilik Günü Kataloqu

React + Vite ilə hazırlanmış premium buket kataloqu.

## 1. Yeni buket necə əlavə olunur?

`src/data/bouquets.js` faylını açın və array-ə yeni obyekt əlavə edin:

```js
{
  id: 7,
  name: "Yeni Buket Adı",
  price: "50 AZN",
  category: "universal", // "girls" | "boys" | "universal" — istəyə bağlı
  image: "/images/buket-07.jpg",
}
```

Başqa heç nə etməyə ehtiyac yoxdur — kataloq, filtr və şəkillər avtomatik yenilənir.

## 2. Şəkil hansı qovluğa atılır?

`public/images/` qovluğuna. Fayl adını `bouquets.js`-dəki `image` sahəsi ilə eyni saxlayın
(məs: `public/images/buket-07.jpg` → `image: "/images/buket-07.jpg"`).

Əgər şəkil hələ qoyulmayıbsa və ya tapılmırsa, sayt xəta vermir — onun yerinə zərif
bir placeholder (incə çiçək xətti + "Şəkil tezliklə əlavə olunacaq") göstərilir.

## 3. Buketin adı harada dəyişdirilir?

`src/data/bouquets.js` faylında, müvafiq obyektin `name` sahəsində.

## 4. Qiymət harada dəyişdirilir?

Eyni fayl, `price` sahəsində. Qiymət mətn (string) olaraq saxlanılır, ona görə
"45 AZN", "45 ₼" və ya istənilən formatda yaza bilərsiniz.

## 5. Kateqoriya necə əlavə olunur?

Obyektə `category: "girls"`, `category: "boys"` və ya `category: "universal"`
əlavə edin. Sahə yazılmasa, buket avtomatik "Hamısı" bölməsində görünür.
Kataloqda birdən çox fərqli kateqoriya olduqda filtr düymələri özü aktivləşir —
başqa heç bir dəyişiklik lazım deyil.

Qeyd: axtarış qutusu yalnız kataloqda 10 və ya daha çox buket olduqda avtomatik
görünür (`src/App.jsx` içindəki `SEARCH_THRESHOLD` dəyəri ilə tənzimlənir).

## 6. Layihə necə işə salınır?

```bash
npm install
npm run dev
```

Terminalda göstərilən linki (adətən `http://localhost:5173`) brauzerdə açın.

## 7. Production build necə alınır?

```bash
npm run build
```

Nəticə `dist/` qovluğuna yığılır — bu qovluğu istənilən statik hosting
(Netlify, Vercel, cPanel və s.) üzərinə yükləyə bilərsiniz. Yoxlamaq üçün:

```bash
npm run preview
```

## Layihə strukturu

```
src/
  components/     → Header, Hero, Filters, BouquetGrid, BouquetCard, Footer
  data/
    bouquets.js   → buket siyahısı (yeganə fayl ki, siz idarə edəcəksiniz)
  App.jsx
  main.jsx
  styles.css
public/
  images/         → buket şəkilləri bura atılır
```
