# PRD — SmartQuail Landing Page

## 1. Tujuan

Brand awareness + showcase produk — menampilkan SmartQuail sebagai solusi IoT monitoring kandang puyuh yang *credible* di mata audience campuran: industri, akademisi, dan pejabat kampus. Sekaligus menjadi portofolio riset jangka panjang Ricky Rudiansyah & Marcellino Asanuddin.

## 2. Target Audience

| Segmen | Kebutuhan |
|---|---|
| Pejabat kampus & akademisi | Narasi riset & kontribusi keilmuan |
| Orang industri & investor | Potensi skalabilitas & ROI |
| Peternak puyuh | Bukti nyata sistem bekerja |
| Mahasiswa BINUS & umum | Inspirasi & cara kerja sistem |

## 3. Struktur Halaman

1. **Navbar** — Fixed, glassmorphism, logo + nav links + dark mode toggle
2. **Hero** — Tagline + visual dashboard live, 2 CTA button
3. **Problem Statement** — 3 pain point cards (heat stress, monitoring manual, respon lambat)
4. **Solusi & Fitur Utama** — 6 fitur dalam grid (sensor, dashboard Flutter, auto-control PWM, dll)
5. **Cara Kerja** — Step-by-step alur sistem: sensor → data → dashboard → aksi
6. **Demo / Preview** — Screenshot atau mockup dashboard
7. **Dampak & Data** — Angka efisiensi / statistik kunci
8. **Tim** — Foto Ricky & Marcell + peran
9. **Kontak / CTA Final** — "Tertarik Berkolaborasi?" + WhatsApp & Email
10. **Footer** — Logo, copyright, credits

## 4. Tone & Gaya Visual

- **Modern, bersih, sedikit teknikal tapi accessible** — bukan corporate kaku, bukan startup playful
- **Referensi:** gaya Vercel / Linear tapi lebih hangat
- **Warna:** Hijau-teal sebagai primary (tema alam/pertanian + IoT), surface neutral/putih bersih, satu accent saja
- **Mode:** Light + Dark (detect preferensi sistem, toggle manual, persist localStorage)

## 5. Tech Stack

| Layer | Pilihan |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS v3 (production build via npm) + custom CSS minimal |
| Script | Vanilla JavaScript (ES6+) |
| Font | Inter (Google Fonts CDN) |
| Ikon | Lucide SVG inline |
| Hosting | Static file (bisa langsung buka / deploy Vercel / Netlify) |

## 6. Konten

| Status | Item |
|---|---|
| Perlu dibuat | Hero copy, deskripsi fitur, copy cara kerja, ilustrasi SVG |
| Sudah ada | Nama project, nama tim (Ricky Rudiansyah, Marcellino Asanuddin), konsep sistem |
| Placeholder | Screenshot dashboard Flutter, foto tim, data pengujian sensor, nomor WA/email |

## 7. Call to Action

| Prioritas | Teks | Aksi |
|---|---|---|
| Primer | "Lihat Demo" | Anchor ke section #demo |
| Sekunder | "Hubungi Kami" | Link WhatsApp / email untuk kolaborasi |

## 8. Spesifikasi Teknis

- **Single Page Application** — semua section dalam 1 file `index.html`
- **Smooth scroll** — navigasi anchor dengan `scroll-behavior: smooth`
- **Dark mode** — class `dark` pada `<html>`, Tailwind `dark:` variant, localStorage persist, OS preference fallback
- **Responsive** — Mobile-first, breakpoint: sm(640px) / md(768px) / lg(1024px) / xl(1280px)
- **Animasi** — Scroll reveal via IntersectionObserver (fade-in + translateY), hover scale pada card
- **Performa** — Zero JS framework, production build via `npm run build` (CSS ~30KB), load <500ms

## 9. Status

| Fitur | Status |
|---|---|
| Struktur HTML | ✅ Done |
| Styling (Tailwind + Custom CSS) | ✅ Done |
| Dark Mode | ✅ Done |
| Responsive | ✅ Done |
| SVGs | ✅ Done |
| Screenshot dashboard asli | ✅ Done (YouTube embed + click-to-play thumbnail) |
| Foto tim asli | ✅ Done (ricky.jpeg, marcell.jpg) |
| Nomor WA / Email | ✅ Done (+62818860008, marcellinoasanuddin@gmail.com) |
| Data dampak konkret | ⏳ Data ilustratif (0.3°C akurasi, 2s update, 3x pakan, THI 78) |
