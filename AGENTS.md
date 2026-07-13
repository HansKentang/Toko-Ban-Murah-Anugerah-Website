# Toko Ban Murah Anugerah — UI/UX Page Layout Guide

> This document describes the section-by-section layout of every page in the site.
> Use it to understand the page structure before making changes or adding new pages.

---

## Global Layout Scaffold (Shared by all pages)

Each page is wrapped in the following persistent elements:

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR (fixed top, z-50, h-20)                     │
│  ┌───┬──────────────────────────┬────────────────┐  │
│  │ ☰ │ Logo + "TB Anugerah"     │ Nav Links      │  │
│  │   │                          │ + "Hubungi" CTA │  │
│  └───┴──────────────────────────┴────────────────┘  │
├─────────────────────────────────────────────────────┤
│  MOBILE DRAWER (hidden on desktop)                  │
│  ┌──────────────────────────────────────┐           │
│  │  "Menu"                         [X]  │           │
│  │  ──────────────────────────────────  │           │
│  │  ● Beranda  ● Koleksi  ● Layanan    │           │
│  │  ● Promo    ● Lokasi   ● Kontak     │           │
│  └──────────────────────────────────────┘           │
├─────────────────────────────────────────────────────┤
│                                                     │
│          PAGE CONTENT (main section)                │
│                                                     │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
│  ┌──────────────────────────────────────────────┐   │
│  │  Logo + "Toko Ban Murah Anugerah"            │   │
│  │  "Solusi Ban Berkualitas & Terpercaya"       │   │
│  │  Nav links (Beranda / Koleksi / ... / Kontak)│   │
│  │  ──────────────────────────────────────────  │   │
│  │  © 2024 ...   Syarat & Ketentuan | Privasi   │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  WHATSAPP FAB (fixed bottom-right, z-45)            │
├─────────────────────────────────────────────────────┤
│  BOTTOM NAV MOBILE (fixed bottom, md:hidden)        │
│  [Home] [Koleksi] [Promo] [Layanan] [Kontak]       │
└─────────────────────────────────────────────────────┘
```

### Shared persistent components

| Component | Container | Key classes | Notes |
|---|---|---|---|
| **Navbar** | `<header.fixed.top-0>` | `z-50 h-20 bg-surface border-b border-outline-variant` | 80px tall, brand + desktop nav + CTA button |
| **Mobile Drawer** | `<div#drawer.fixed.inset-0.z-70>` | Overlay + slide-in from left, `w-80` | Hidden by default, toggled via `#drawer-toggle` |
| **Footer** | `<footer.bg-primary-container>` | `text-on-primary py-12` | Brand + nav links + legal |
| **WhatsApp FAB** | `<a.fixed.bottom-6.right-6>` | `z-45 w-14 h-14 bg-[#25D366] rounded-full` | Hover tooltip, float animation |
| **Bottom Nav (Mobile)** | `<nav.fixed.bottom-0.md:hidden>` | `z-50 bg-surface border-t` | 5 icons: Home, Koleksi, Promo, Layanan, Kontak |

---

## Page 1: Beranda (index.html)

```
┌─────────────────────────────────────────────────────┐
│  HERO (min-h-[640px])                               │
│  ┌──────────────────────────────────────────────┐   │
│  │  Background image parallax                    │   │
│  │  Radial gradient overlay (left-to-right)     │   │
│  │  Tire pattern texture overlay                │   │
│  │  Bottom fade gradient                         │   │
│  │                                               │   │
│  │  Logo + Headline: "Performa Tangguh,          │   │
│  │  Harga Terjangkau"                            │   │
│  │  Subheading                                   │   │
│  │  [Cek Harga Ban] [Lihat Layanan]              │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  INFINITE BRAND SCROLL (marquee)                    │
│  "Merek Ban Terpercaya"                             │
│  Bridgestone / Michelin / Dunlop / ... logos       │
├─────────────────────────────────────────────────────┤
│  TIRE SIZE FILTER (card with dropdowns)             │
│  "Cari Cepat Ukuran Ban"                            │
│  [Lebar ▼] [Aspek ▼] [Ring ▼] [Cari]              │
├─────────────────────────────────────────────────────┤
│  LAYANAN KAMI (3-column grid)                       │
│  "Layanan Kami" → "Lihat Semua"                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Ganti Ban │ │Balancing │ │Spooring  │            │
│  │ Baru      │ │& Nitrogen│ │/Alignment│            │
│  └──────────┘ └──────────┘ └──────────┘            │
├─────────────────────────────────────────────────────┤
│  STATISTIK (4-column, bg-primary)                   │
│  20+ Tahun  |  3 Cabang  |  10K+ Pelanggan  |  50+ Merek │
├─────────────────────────────────────────────────────┤
│  CABANG TERDEKAT (horizontal scroll cards)          │
│  ┌─────────────┐  ┌─────────────┐                   │
│  │ Banyumanik  │  │ Ungaran     │                   │
│  │ ★ 4.9       │  │ ★ 4.6       │                   │
│  └─────────────┘  └─────────────┘                   │
├─────────────────────────────────────────────────────┤
│  TESTIMONI (3-column grid)                          │
│  "Apa Kata Pelanggan"  ★★★★★ 4.9                    │
│  ┌─────┐ ┌─────┐ ┌─────┐                            │
│  │Card1│ │Card2│ │Card3│                            │
│  └─────┘ └─────┘ └─────┘                            │
├─────────────────────────────────────────────────────┤
│  CTA BANNER (rounded bg-primary)                    │
│  "Dapatkan Harga Spesial Hari Ini!"                 │
│  [Lihat Promo Terbaru] [Chat WhatsApp]              │
├─────────────────────────────────────────────────────┤
│  FAQ (accordion, max-w-3xl)                         │
│  "Tanya Jawab (FAQ)"                                │
│  ▶ Apakah ban yang dijual bergaransi?               │
│  ▶ Berapa lama proses ganti ban?                    │
│  ▶ Apakah bisa bayar pakai kartu kredit?            │
└─────────────────────────────────────────────────────┘
```

### Beranda sections

| # | Section | Element | Layout | Notes |
|---|---|---|---|---|
| 1 | **Hero** | `section.hero-section` | `min-h-[640px] flex-col justify-end` | 4 overlay layers, staggered entrance animation |
| 2 | **Brand Marquee** | `section.py-8.overflow-hidden` | Full-width marquee (35s loop) | Grayscale logos with hover color |
| 3 | **Tire Size Filter** | `section.max-w-7xl` | `bg-surface-container-lowest rounded-xl` | 3 dropdowns + CTA button |
| 4 | **Layanan Kami** | `section.py-16` | `grid-cols-1 md:grid-cols-3 gap-4` | 3 service cards with icons |
| 5 | **Statistik** | `section.py-16.bg-primary` | `grid-cols-2 md:grid-cols-4` | Counter animation on scroll |
| 6 | **Cabang Terdekat** | `section.py-12.bg-surface-container-low` | Horizontal scroll (overflow-x-auto) | 2 branch cards |
| 7 | **Testimoni** | `section.py-16` | `grid-cols-1 md:grid-cols-3 gap-4` | 3 testimonial cards with star ratings |
| 8 | **CTA Banner** | `section.bg-surface-container-low` | `max-w-4xl mx-auto text-center` | Promo + WhatsApp CTAs inside primary card |
| 9 | **FAQ** | `section.py-16` | `max-w-3xl mx-auto space-y-3` | Accordion (toggle max-height) |

---

## Page 2: Koleksi (koleksi.html)

```
┌─────────────────────────────────────────────────────┐
│  HERO (automotive-gradient, 2-layer)                │
│  Logo + badge "9 Merek Ternama"                     │
│  "Koleksi Ban Lengkap & Berkualitas"                │
│  [Jelajahi Merek] [Lihat Layanan]                   │
├─────────────────────────────────────────────────────┤
│  BRAND GRID (3×3)                                   │
│  "Pilih Merek Ban"                                  │
│  ┌──────┐ ┌──────┐ ┌──────┐                         │
│  │Bridge│ │Dunlop│ │GT Rad│                         │
│  │stone │ │      │ │ial   │                         │
│  ├──────┤ ├──────┤ ├──────┤                         │
│  │Falken│ │Hankoo│ │Delium│                         │
│  │      │ │k     │ │      │                         │
│  ├──────┤ ├──────┤ ├──────┤                         │
│  │Swallo│ │Michel│ │Sailun│                         │
│  │w     │ │in    │ │      │                         │
│  └──────┘ └──────┘ └──────┘                         │
├─────────────────────────────────────────────────────┤
│  DETAIL VIEW (hidden, shown on brand click)          │
│  [← Kembali]                    [Brand Logo]         │
│  6-column model grid (populated by JS)              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│  │Card│ │Card│ │Card│ │Card│ │Card│ │Card│        │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘        │
│  [Tanya Ketersediaan & Harga via WhatsApp]           │
├─────────────────────────────────────────────────────┤
│  WHY OUR BRANDS (3-column)                          │
│  "Mengapa Memilih Ban Kami?"                        │
│  Produk Asli  | Lengkap &  | Konsultasi             │
│  Bergaransi   | Bervariasi | Gratis                 │
└─────────────────────────────────────────────────────┘
```

### Koleksi sections

| # | Section | Layout | Notes |
|---|---|---|---|
| 1 | **Hero** | `automotive-gradient py-20 md:py-28` | Tire pattern overlay, headline with gold accent |
| 2 | **Brand Grid** | `grid-cols-2 md:grid-cols-3 gap-3 md:gap-4` | 9 clickable brand boxes, staggered entrance animation |
| 3 | **Detail View** | `grid-cols-2 sm:3 md:4 lg:6` | Alternate view with back button + model cards |
| 4 | **Why Our Brands** | `grid-cols-1 md:grid-cols-3 gap-6` | 3 feature cards with icons |

---

## Page 3: Layanan (layanan.html)

```
┌─────────────────────────────────────────────────────┐
│  HEADER (automotive-gradient, centered)              │
│  Logo + "Layanan Kami" + subtitle                   │
├─────────────────────────────────────────────────────┤
│  TRUST BANNER                                       │
│  ✓ Mekanik Ramah, Tanpa Tekanan. | ...              │
├─────────────────────────────────────────────────────┤
│  SERVICE BENTO GRID (12-column)                     │
│  ┌──────────────────────┬────────────┐              │
│  │    Ganti Ban Baru    │ Balancing  │              │
│  │    (8 cols, feat.)   │ Roda       │              │
│  │    img | text + CTA  │ (4 cols)   │              │
│  ├────────────┬─────────┤            │              │
│  │  Spooring   │  Servis │            │              │
│  │  /Alignment │  Ringan │────────────┤              │
│  │  (4 cols)   │ (4 cols)│ Konsultasi │              │
│  │             │         │ Gratis     │              │
│  └─────────────┴─────────┴────────────┘              │
└─────────────────────────────────────────────────────┘
```

### Layanan sections

| # | Section | Layout | Notes |
|---|---|---|---|
| 1 | **Header** | `text-center py-16 md:py-20` | Centered, grid pattern overlay |
| 2 | **Trust Banner** | `bg-surface-container-low py-6` | Flex row with icon + text |
| 3 | **Service Grid** | `grid-cols-1 md:grid-cols-12 gap-6` | Bento layout: featured (8col) + 4 smaller cards (4col each), 1 highlighted card |

---

## Page 4: Promo (promo.html)

```
┌─────────────────────────────────────────────────────┐
│  HERO (automotive-gradient)                          │
│  Logo + badge "Eksklusif: Promo Akhir Tahun"        │
│  "Promo Ban Terbatas! Hemat Hingga 40%"             │
│  [Lihat Promo]    Berakhir dalam: 02H 14J 45M       │
├─────────────────────────────────────────────────────┤
│  TIRE FILTER (floating card, -mt-12)                │
│  Lebar ▼  |  Profil ▼  |  Ring ▼  |  [Cari Ban]   │
├─────────────────────────────────────────────────────┤
│  PRODUCT GRID (3-column)                            │
│  "Katalog Promo Unggulan"                           │
│  [Semua Merk] [Bridgestone] [Michelin] [GT Radial] │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│  │ Turanza T005│ │Pilot Sport4│ │Champiro GTX │   │
│  │ Rp1.150.000 │ │Rp2.250.000 │ │Rp650.000    │   │
│  │ [Ambil Promo]│ │[Ambil Promo]│ │[Ambil Promo]│   │
│  └─────────────┘ └─────────────┘ └─────────────┘   │
├─────────────────────────────────────────────────────┤
│  TESTIMONIAL (2-column: image + quote)              │
│  "Dipercaya Ribuan Pelanggan Sejak 1998"            │
└─────────────────────────────────────────────────────┘
```

### Promo sections

| # | Section | Layout | Notes |
|---|---|---|---|
| 1 | **Hero** | `automotive-gradient py-20 md:py-28` | Countdown timer (days/hours/mins), gold badge |
| 2 | **Tire Filter** | `-mt-12 relative z-20` | 4-column grid with dropdowns, overlapping card |
| 3 | **Product Grid** | `grid-cols-1 md:grid-cols-3 gap-6` | Product cards with discount badges, hover lift |
| 4 | **Testimonial** | `grid-cols-1 lg:grid-cols-2 gap-12` | Image placeholder + star rating + quote |

---

## Page 5: Lokasi (lokasi.html)

```
┌─────────────────────────────────────────────────────┐
│  HEADER (automotive-gradient)                        │
│  Logo + "Lokasi Cabang Kami" + subtitle             │
├─────────────────────────────────────────────────────┤
│  LOCATIONS (2-column grid)                          │
│  ┌────────────────────┐ ┌────────────────────┐      │
│  │ CABANG BANYUMANIK  │ │ CABANG UNGARAN     │      │
│  │ Image placeholder  │ │ Image placeholder  │      │
│  │ Address + Hours    │ │ Address + Hours    │      │
│  │ Phone + Rating 4.9 │ │ Phone + Rating 4.6 │      │
│  │ Review highlight   │ │ Review highlight   │      │
│  │ [Maps] [Hubungi]   │ │ [Maps] [Hubungi]   │      │
│  │ Embed Google Maps  │ │ Embed Google Maps  │      │
│  └────────────────────┘ └────────────────────┘      │
├─────────────────────────────────────────────────────┤
│  WHY CHOOSE US (3-column)                           │
│  "Mengapa Servis di Cabang Kami?"                   │
│  Original & Terjamin  | Teknologi Modern  | Mekanik Ahli │
└─────────────────────────────────────────────────────┘
```

### Lokasi sections

| # | Section | Layout | Notes |
|---|---|---|---|
| 1 | **Header** | `automotive-gradient py-16 md:py-20` | Left-aligned with logo |
| 2 | **Locations** | `grid-cols-1 lg:grid-cols-2 gap-6` | 2 detailed branch cards with embedded Google Maps |
| 3 | **Why Choose Us** | `grid-cols-1 md:grid-cols-3 gap-2` | 3 colored feature cards (primary-container / surface-high / secondary-fixed) |

---

## Page 6: Kontak (kontak.html)

```
┌─────────────────────────────────────────────────────┐
│  HERO (automotive-gradient)                          │
│  Logo + "Hubungi Kami" + subtitle                   │
├─────────────────────────────────────────────────────┤
│  DIRECT CONTACT (2-column)                          │
│  ┌──────────────────┐ ┌──────────────────┐           │
│  │ 📞 Telepon       │ │ 💬 WhatsApp      │           │
│  │   Langsung       │ │   Chat           │           │
│  │ [Hubungi Sekarang]│ │ [WhatsApp Kami]  │           │
│  └──────────────────┘ └──────────────────┘           │
├─────────────────────────────────────────────────────┤
│  INQUIRY FORM + HOURS (5-column split)              │
│  ┌──────────┬─────────────────────────────┐          │
│  │ (2 cols)  │ (3 cols)                   │          │
│  │ "Formulir │ Name  WA#                  │          │
│  │ Pertanyaan│ Vehicle  Tire Size          │          │
│  │ "         │ Message (textarea)         │          │
│  │ Operating │ [Kirim Pesan]              │          │
│  │ Hours card│                             │          │
│  └──────────┴─────────────────────────────┘          │
├─────────────────────────────────────────────────────┤
│  REVIEWS (3-column grid)                            │
│  "Apa Kata Pelanggan Kami?"                         │
│  3 testimonial cards with star ratings              │
└─────────────────────────────────────────────────────┘
```

### Kontak sections

| # | Section | Layout | Notes |
|---|---|---|---|
| 1 | **Hero** | `automotive-gradient py-16 md:py-20` | Left-aligned with logo, grid pattern |
| 2 | **Direct Contact** | `grid-cols-1 md:grid-cols-2 gap-6` | 2 call-to-action cards (Phone + WhatsApp) |
| 3 | **Form + Hours** | `lg:grid-cols-5 gap-6` | Left (2 cols): description + hours card; Right (3 cols): form |
| 4 | **Reviews** | `grid-cols-1 md:grid-cols-3 gap-6` | 3 review cards with avatar initials |

---

## Layout Conventions Summary

| Property | Value |
|---|---|
| **Max content width** | `max-w-7xl` (1280px) |
| **Desktop margins** | `px-4 md:px-8` |
| **Section vertical spacing** | `py-16` (default), `py-20` (featured), `py-12` (compact) |
| **Grid system** | 12-column mental model (via Tailwind grid-cols-*) |
| **Mobile bottom nav** | 5 fixed tabs, visible on `md:hidden` |
| **All forms** | `bg-surface-container-low` inputs, `focus:border-primary` |
| **CTA buttons** | `bg-secondary-container` (gold) or `bg-primary` (green) with `active:scale-95` |
| **Cards** | `rounded-xl border border-outline-variant` with hover lift |
