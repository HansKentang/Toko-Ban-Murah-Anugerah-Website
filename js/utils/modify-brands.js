const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'brands-data.js');
let content = fs.readFileSync(filePath, 'utf-8');

// The brand data to insert
const newBrands = `
        goodyear: {
          name: 'Goodyear',
          logo: 'images/goodyear-logo.svg',
          models: [
            // ===== ASSURANCE Series =====
            {
              name: 'ASSURANCE DURAPLUS',
              desc: 'Durable Touring — Tahan Lama & Nyaman',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '155/80R12', notes: '77T · TL' },
                    { size: '165/80R13', notes: '83T · TL' },
                    { size: '185/80R14', notes: '95S · TL' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE DURAPLUS 2',
              desc: 'Enhanced Durability — Comfort & Long Life',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '175/65R14', notes: '82H' },
                    { size: '185/70R14', notes: '88H' },
                    { size: '195/70R14', notes: '91H' },
                    { size: '185/65R15', notes: '88H' },
                    { size: '195/50R15', notes: '82V' },
                    { size: '195/55R15', notes: '85V' },
                    { size: '195/65R15', notes: '91V' },
                    { size: '205/65R15', notes: '94H' },
                    { size: '195/60R16', notes: '89V' },
                    { size: '205/60R16', notes: '92V' },
                    { size: '205/65R16', notes: '95V' },
                    { size: '215/60R16', notes: '95V' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE TRIPLEMAX',
              desc: 'Maximum Safety — Handling & Pengereman Prima',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '185/55R15', notes: '82V' },
                    { size: '205/55R16', notes: '91V · FP GM' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE TRIPLEMAX 2',
              desc: 'Next-Gen Safety — Presisi & Responsif',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '205/50R17', notes: '89W · FP' },
                    { size: '215/60R17', notes: '96H' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE MAXGUARD',
              desc: 'Premium Protection — Aman & Berkualitas',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '185/55R15', notes: '82V' },
                    { size: '185/60R15', notes: '84H' },
                    { size: '185/65R15', notes: '85V' },
                    { size: '195/50R15', notes: '88V' },
                    { size: '195/55R15', notes: '85V' },
                    { size: '195/60R15', notes: '88V' },
                    { size: '195/65R15', notes: '91V' },
                    { size: '205/65R15', notes: '94V' },
                    { size: '185/55R16', notes: '83V' },
                    { size: '185/60R16', notes: '86H' },
                    { size: '195/50R16', notes: '84V' },
                    { size: '195/55R16', notes: '87V' },
                    { size: '195/60R16', notes: '89V' },
                    { size: '195/65R16', notes: '92V' },
                    { size: '205/55R16', notes: '91V' },
                    { size: '205/60R16', notes: '92V' },
                    { size: '205/65R16', notes: '95V' },
                    { size: '215/60R16', notes: '95V' },
                    { size: '205/45R17', notes: '84W' },
                    { size: '205/50R17', notes: '93W · XL FP' },
                    { size: '205/55R17', notes: '91V' },
                    { size: '205/60R17', notes: '94V' },
                    { size: '215/45R17', notes: '91W' },
                    { size: '215/55R17', notes: '94V' },
                    { size: '225/55R17', notes: '97V' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE COMFORTRED',
              desc: 'Premium Comfort — Reduksi Kebisingan Maksimal',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '205/60R16', notes: '92W · FP' },
                    { size: '215/50R17', notes: '95W · XL FP' },
                    { size: '215/55R17', notes: '98W · XL FP' },
                    { size: '225/45R17', notes: '94Y · XL FP' },
                    { size: '225/50R17', notes: '98Y · XL FP' },
                    { size: '225/55R17', notes: '97Y · FP' },
                    { size: '245/45R17', notes: '99Y · XL FP' },
                    { size: '225/45R18', notes: '95W · XL FP' },
                    { size: '235/45R18', notes: '98W · XL FP' },
                    { size: '235/50R18', notes: '97W · FP' },
                    { size: '245/40R18', notes: '93Y · FP' },
                    { size: '245/45R18', notes: '100W · XL FP' },
                    { size: '245/45R19', notes: '102W · XL FP' },
                  ]
                },
              ]
            },
            {
              name: 'ASSURANCE MAXGUARD SUV',
              desc: 'SUV Protection — Kuat & Tangguh',
              subCategories: [
                {
                  label: 'SUV Lineup',
                  entries: [
                    { size: '205/70R15', notes: '96H' },
                    { size: '215/70R15', notes: '' },
                    { size: '235/70R15', notes: '' },
                    { size: '215/65R16', notes: '98H' },
                    { size: '215/70R16', notes: '100H' },
                    { size: '235/60R16', notes: '100H' },
                    { size: '215/60R17', notes: '96H' },
                    { size: '225/60R17', notes: '99V' },
                    { size: '225/65R17', notes: '102V' },
                    { size: '235/65R17', notes: '108V · XL' },
                    { size: '265/65R17', notes: '112H' },
                    { size: '215/55R18', notes: '95H' },
                    { size: '225/50R18', notes: '99W · XL FP' },
                    { size: '225/60R18', notes: '100V' },
                    { size: '235/50R18', notes: '101W · XL FP' },
                    { size: '235/55R18', notes: '104V · XL' },
                    { size: '235/60R18', notes: '107W · XL' },
                    { size: '265/60R18', notes: '110V' },
                    { size: '225/55R19', notes: '99V' },
                    { size: '235/50R19', notes: '99V · FP' },
                    { size: '235/55R19', notes: '105V · XL' },
                    { size: '255/55R19', notes: '111V · XL' },
                    { size: '245/50R20', notes: '102V · FP' },
                    { size: '265/50R20', notes: '102V · FP' },
                  ]
                },
              ]
            },
            // ===== EAGLE F1 Series (High Performance) =====
            {
              name: 'EAGLE F1 SPORT',
              desc: 'High Performance — Sport & Handling Responsif (Import)',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '205/45R16', notes: '87W · XL FP' },
                    { size: '205/50R16', notes: '91W · XL FP' },
                    { size: '205/55R16', notes: '91W · FP' },
                    { size: '205/45R17', notes: '88W · XL FP' },
                    { size: '215/45R17', notes: '91Y · XL FP' },
                    { size: '215/50R17', notes: '91W · FP' },
                    { size: '215/55R17', notes: '94V · FP' },
                    { size: '225/45R17', notes: '94W · XL FP' },
                    { size: '225/50R17', notes: '98W · XL FP' },
                    { size: '225/55R17', notes: '101W · XL FP' },
                    { size: '235/45R17', notes: '94W · FP' },
                    { size: '245/45R17', notes: '95Y · FP' },
                    { size: '215/40R18', notes: '89W' },
                    { size: '215/45R18', notes: '93W · XL FP' },
                    { size: '225/40R18', notes: '92Y · XL FP' },
                    { size: '225/45R18', notes: '95W · XL FP' },
                    { size: '235/40R18', notes: '95W · XL FP' },
                    { size: '235/45R18', notes: '98W · XL FP' },
                    { size: '245/40R18', notes: '93Y · FP' },
                    { size: '245/45R18', notes: '100W · XL FP' },
                    { size: '255/55R18', notes: '109Y · XL FP' },
                    { size: '265/35R18', notes: '97W · XL FP' },
                    { size: '245/40R19', notes: '98Y · XL FP' },
                    { size: '255/50R19', notes: '107Y · XL' },
                  ]
                },
              ]
            },
            {
              name: 'EAGLE F1 ASYMMETRIC 6',
              desc: 'Ultra High Performance — Sport & Presisi Maksimal',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '205/45R17', notes: '88Y · XL' },
                    { size: '215/45R17', notes: '91Y · XL' },
                    { size: '225/45R17', notes: '94Y · XL' },
                    { size: '225/50R17', notes: '98Y · XL' },
                    { size: '225/55R17', notes: '97Y · XL' },
                    { size: '225/40R18', notes: '92Y · XL' },
                    { size: '225/45R18', notes: '95Y · XL' },
                    { size: '235/40R18', notes: '95Y · XL' },
                    { size: '235/45R18', notes: '98Y · XL' },
                    { size: '245/40R18', notes: '93Y · XL' },
                    { size: '245/45R18', notes: '100Y · XL' },
                    { size: '225/45R19', notes: '96W · XL' },
                    { size: '245/45R19', notes: '102Y · XL' },
                    { size: '275/40R19', notes: '105Y · XL' },
                  ]
                },
              ]
            },
            {
              name: 'EAGLE F1 ASYMMETRIC 6 SUV',
              desc: 'Ultra High Performance SUV — Sport & Presisi',
              subCategories: [
                {
                  label: 'SUV Lineup',
                  entries: [
                    { size: '225/50R18', notes: '99W · XL' },
                    { size: '225/60R18', notes: '104W · XL' },
                    { size: '235/50R18', notes: '101W · XL' },
                    { size: '235/60R18', notes: '107W · XL' },
                    { size: '255/55R18', notes: '109W · XL' },
                    { size: '245/55R19', notes: '107W · XL' },
                    { size: '255/55R19', notes: '111W · XL' },
                    { size: '235/55R20', notes: '105W · XL' },
                    { size: '245/50R20', notes: '105W · XL' },
                    { size: '255/50R20', notes: '109W · XL' },
                    { size: '255/55R20', notes: '110Y · XL' },
                    { size: '275/50R20', notes: '113Y · XL' },
                  ]
                },
              ]
            },
            // ===== EFFICIENTGRIP Series =====
            {
              name: 'EFFICIENTGRIP PERFORMANCE SUV',
              desc: 'SUV Performance — Irit BBM & Aman (Import)',
              subCategories: [
                {
                  label: 'SUV Lineup',
                  entries: [
                    { size: '215/60R16', notes: '95H · LHD' },
                    { size: '235/50R18', notes: '97V · FP' },
                    { size: '235/55R19', notes: '105V · XL FP' },
                    { size: '265/50R20', notes: '107V · FP' },
                  ]
                },
              ]
            },
            // ===== WRANGLER Series (SUV & Off-Road) =====
            {
              name: 'WRANGLER DT',
              desc: 'Light Truck — Kuat & Tangguh',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '175R13 LT', notes: '97/95N' },
                  ]
                },
              ]
            },
            {
              name: 'WRANGLER DURATRAC',
              desc: 'All-Terrain — Traksi Tangguh Segala Medan',
              subCategories: [
                {
                  label: 'SUV & 4x4',
                  entries: [
                    { size: '265/70R16', notes: '' },
                    { size: '265/65R17', notes: '' },
                  ]
                },
              ]
            },
            {
              name: 'WRANGLER DURATRAC RT',
              desc: 'Rugged Terrain — Daya Cengkeram Ekstrim',
              subCategories: [
                {
                  label: '4x4 Off-Road',
                  entries: [
                    { size: 'LT235/75R15', notes: '104/101S' },
                    { size: 'LT225/75R16', notes: '115/112S' },
                    { size: 'LT235/85R16', notes: '120/116S' },
                    { size: 'LT245/70R16', notes: '113/110S' },
                    { size: 'LT245/75R16', notes: '120/116S' },
                    { size: 'LT255/70R16', notes: '120/117S' },
                    { size: 'LT265/70R16', notes: '121/118S' },
                    { size: 'LT265/75R16', notes: '123/120R' },
                    { size: 'LT285/75R16', notes: '126/123R' },
                    { size: 'LT245/65R17', notes: '111/108S' },
                    { size: 'LT245/75R17', notes: '121/118S' },
                    { size: 'LT265/65R17', notes: '120/117S' },
                    { size: 'LT265/70R17', notes: '123/120S' },
                    { size: 'LT285/70R17', notes: '122/119R' },
                    { size: 'LT265/60R18', notes: '119/116S' },
                    { size: 'LT275/65R18', notes: '123/120Q' },
                    { size: 'LT265/50R20', notes: '115/112S' },
                  ]
                },
              ]
            },
            {
              name: 'WRANGLER AT SILENTTRAK',
              desc: 'All-Terrain — Senyap & Tangguh',
              subCategories: [
                {
                  label: 'All-Terrain OWL',
                  entries: [
                    { size: '225/75R15', notes: '102T · OWL' },
                    { size: '235/70R15', notes: '103T · OWL' },
                    { size: '235/75R15', notes: '109T · XL OWL' },
                    { size: '255/70R15', notes: '108T · OWL' },
                    { size: '30x9.50R15LT', notes: '104R · OWL' },
                    { size: '31x10.50R15LT', notes: '109R · OWL' },
                    { size: '205R16LT', notes: '110/108R · OWL' },
                    { size: '235/70R16', notes: '106T · OWL' },
                    { size: '245/70R16', notes: '111T · XL OWL' },
                    { size: 'LT245/75R16', notes: '120/116S · OWL' },
                    { size: '255/70R16', notes: '111T · OWL' },
                    { size: '265/70R16', notes: '112T · OWL' },
                    { size: 'LT265/75R16', notes: '123/120Q · OWL' },
                    { size: '225/65R17', notes: '102T' },
                    { size: 'LT225/70R17', notes: '110/107S' },
                    { size: '255/65R17', notes: '110T · OWL' },
                    { size: '265/65R17', notes: '112S · OWL' },
                    { size: '265/70R17', notes: '116H · XL' },
                    { size: '275/65R17', notes: '115T · OWL' },
                    { size: 'LT285/65R17', notes: '121/118S · OWL' },
                    { size: '265/60R18', notes: '110T · OWL' },
                    { size: 'LT285/60R18', notes: '118/115S · OWL' },
                  ]
                },
              ]
            },
            // ===== CARGO Series (Commercial) =====
            {
              name: 'CARGO',
              desc: 'Commercial & Light Truck — Daya Tahan Tinggi',
              subCategories: [
                {
                  label: 'G26 & MARATHON 2',
                  entries: [
                    { size: '185R14C', notes: '102/100P · G26' },
                    { size: '195R14C', notes: '106/104P · G26' },
                    { size: '185R14C', notes: '102/100S · Marathon 2' },
                    { size: '195R14C', notes: '106/104S · Marathon 2' },
                    { size: '195R15C', notes: '106/104S · Marathon 2' },
                    { size: '195/70R15C', notes: '104/102S · Marathon 2' },
                    { size: '205/65R15C', notes: '102/100T · Marathon 2' },
                    { size: '205/70R15C', notes: '106/104S · Marathon 2' },
                    { size: '215/70R15C', notes: '109/107S · 8PR' },
                    { size: '225/70R15C', notes: '112/110R · Marathon 2' },
                    { size: '205/65R16C', notes: '107/105T · Marathon 2' },
                    { size: '215/60R16C', notes: '103/101T · Marathon 2' },
                    { size: '215/65R16C', notes: '109/107T · Marathon 2' },
                    { size: '215/70R16C', notes: '108/106T · 6PR' },
                    { size: '215/75R16C', notes: '113/111R · Marathon 2' },
                    { size: '235/65R16C', notes: '115/113R · Marathon 2' },
                  ]
                },
              ]
            },
          ]
        },
        yokohama: {
          name: 'Yokohama',
          logo: 'images/yokohama-logo.svg',
          models: [
            // ===== ADVAN Series (High Performance) =====
            {
              name: 'ADVAN',
              desc: 'High Performance — Sport & Presisi',
              subCategories: [
                {
                  label: 'A10E / A13C / V61A',
                  entries: [
                    { size: '205/50R17', notes: '89V · A10E' },
                    { size: '215/50R17', notes: '91V · A10E' },
                    { size: '195/50R16', notes: '84V · A13C' },
                    { size: '255/55R18', notes: '105V · V61A' },
                    { size: '235/60R18', notes: '103H · V61A' },
                  ]
                },
              ]
            },
            {
              name: 'ADVAN dB',
              desc: 'Premium Comfort — Quiet Luxury',
              subCategories: [
                {
                  label: 'V551 Series',
                  entries: [
                    { size: '215/45R18', notes: '89W · V551A' },
                    { size: '225/50R18', notes: '95V · V551V' },
                    { size: '215/50R17', notes: '91V · V551V' },
                  ]
                },
              ]
            },
            {
              name: 'ADVAN SPORT',
              desc: 'Ultra High Performance — V105 Series',
              subCategories: [
                {
                  label: 'V105 / V107',
                  entries: [
                    { size: '295/40R20', notes: '106Y · V103A' },
                    { size: '275/45R19', notes: '108Y · V103B' },
                    { size: '275/40R20', notes: '106Y · V103B' },
                    { size: '295/35R21', notes: '107Y · V103B' },
                    { size: '275/45R20', notes: '110Y · V103H' },
                    { size: '235/60R18', notes: '103V · V105' },
                    { size: '255/40R18', notes: '99Y · V105' },
                    { size: '285/35R18', notes: '97Y · V105' },
                    { size: '235/40R19', notes: '92Y · V105' },
                    { size: '235/55R19', notes: '101V · V105' },
                    { size: '245/40R19', notes: '98Y · V105' },
                    { size: '275/35R19', notes: '100Y · V105' },
                    { size: '245/35R20', notes: '95Y · V105' },
                    { size: '255/40R20', notes: '101Y · V105' },
                    { size: '275/30R20', notes: '97Y · V105' },
                    { size: '275/40R20', notes: '106Y · V105' },
                    { size: '275/35R20', notes: '102Y · V105D' },
                    { size: '275/40R20', notes: '106Y · V105E' },
                    { size: '255/35R19', notes: '96Y · V105S' },
                    { size: '285/30R19', notes: '98Y · V105S' },
                    { size: '245/45R20', notes: '103Y · V105T' },
                    { size: '295/35R21', notes: '107Y · V105T' },
                    { size: '295/35R20', notes: '105Y · V105W' },
                    { size: '315/35R20', notes: '110Y · V105W' },
                    { size: '285/45R22', notes: '114Y · V107C' },
                    { size: '285/40R22', notes: '110Y · V107C' },
                    { size: '225/60R18', notes: '104W · V107D' },
                    { size: '275/50R20', notes: '113Y · V107D' },
                    { size: '325/40R22', notes: '114Y · V107D' },
                    { size: '275/40R18', notes: '103Y · V107E' },
                    { size: '245/50R19', notes: '105Y · V107E' },
                    { size: '285/35R19', notes: '103Y · V107E' },
                    { size: '285/30R20', notes: '99Y · V107E' },
                    { size: '275/40R21', notes: '107Y · V107E' },
                    { size: '295/25R21', notes: '96Y · V107E' },
                    { size: '315/35R21', notes: '111Y · V107E' },
                    { size: '235/50R19', notes: '99Y · V107F' },
                    { size: '255/35R21', notes: '98Y · V107F' },
                    { size: '275/50R20', notes: '113W · V802' },
                  ]
                },
              ]
            },
            // ===== BluEarth Series (Eco) =====
            {
              name: 'BluEarth',
              desc: 'Eco Performance — Irit BBM & Ramah Lingkungan',
              subCategories: [
                {
                  label: 'AE / E Series',
                  entries: [
                    { size: '215/55R17', notes: '94V · AE51B' },
                    { size: '205/55R17', notes: '91V · AE51D' },
                    { size: '225/45R18', notes: '91W · AE51D' },
                    { size: '235/60R18', notes: '103H · AE61E' },
                    { size: '215/65R16', notes: '98H · E51A' },
                    { size: '225/60R18', notes: '100H · E51A' },
                    { size: '225/60R17', notes: '99H · E51AA' },
                    { size: '175/55R15', notes: '77V · A34LZ' },
                    { size: '185/55R16', notes: '87H · AE50' },
                  ]
                },
              ]
            },
            // ===== ASPEC / AVID GT Series =====
            {
              name: 'ASPEC & AVID GT',
              desc: 'Touring & Performance SUV',
              subCategories: [
                {
                  label: 'ASPEC',
                  entries: [
                    { size: '215/60R17', notes: '96H · A349A' },
                    { size: '195/65R15', notes: '91H · A349G' },
                  ]
                },
                {
                  label: 'AVID GT',
                  entries: [
                    { size: '275/45R20', notes: '110V · S35A' },
                    { size: '305/40R20', notes: '112V · S35A' },
                    { size: '285/40R21', notes: '109V · S35A' },
                    { size: '315/35R21', notes: '111V · S35A' },
                  ]
                },
              ]
            },
            // ===== C.Drive Series =====
            {
              name: 'C.Drive',
              desc: 'Premium Touring — AC02 Series',
              subCategories: [
                {
                  label: 'AC02A',
                  entries: [
                    { size: '205/55R16', notes: '91H' },
                    { size: '205/55R16', notes: '91V' },
                    { size: '225/45R17', notes: '91V' },
                    { size: '235/50R18', notes: '97V' },
                  ]
                },
              ]
            },
            // ===== GEOLANDAR Series (SUV & 4x4) =====
            {
              name: 'GEOLANDAR',
              desc: 'SUV & 4×4 — All-Terrain & Highway',
              subCategories: [
                {
                  label: 'G033 / G039 / G900',
                  entries: [
                    { size: '215/70R16', notes: '99H · G033' },
                    { size: '265/70R16', notes: '112S · G039' },
                    { size: '215/55R17', notes: '94V · G900A' },
                    { size: '285/60R18', notes: '116V · G94AV' },
                    { size: '225/55R17', notes: '97V · G95A' },
                    { size: '225/60R17', notes: '99V · G95A' },
                    { size: '225/65R17', notes: '102V · G98GV' },
                    { size: '235/60R18', notes: '103H · G99B' },
                    { size: '255/65R17', notes: '110H · G015A' },
                    { size: '265/65R18', notes: '114V · G31B' },
                    { size: '265/70R16', notes: '112S · G94CV' },
                  ]
                },
              ]
            },
            // ===== YOKOHAMA dB Series =====
            {
              name: 'Yokohama dB',
              desc: 'Quiet Comfort — Kabin Senyap & Nyaman',
              subCategories: [
                {
                  label: 'E70 Series',
                  entries: [
                    { size: '205/60R16', notes: '92H · E70A' },
                    { size: '215/55R17', notes: '93V · E70B' },
                    { size: '225/60R17', notes: '99H · E70GZ' },
                    { size: '205/55R16', notes: '91V · E70JC' },
                    { size: '205/55R16', notes: '91V · E70J' },
                    { size: '205/55R17', notes: '91V · E70NZ' },
                  ]
                },
              ]
            },
            // ===== ADVAN / GEOLANDAR Non-Sport SUV & 4x4 =====
            {
              name: 'ADVAN / GEOLANDAR SUV',
              desc: 'SUV Touring & All-Terrain',
              subCategories: [
                {
                  label: 'SUV All-Terrain',
                  entries: [
                    { size: '285/45R22', notes: '114H' },
                    { size: '265/50R20', notes: '107H' },
                    { size: '285/50R20', notes: '112H' },
                    { size: '275/55R20', notes: '117H' },
                    { size: '275/60R20', notes: '115H' },
                    { size: '235/55R19', notes: '105H' },
                    { size: '255/55R19', notes: '111H' },
                    { size: '225/55R18', notes: '98H' },
                    { size: '255/55R18', notes: '109H' },
                    { size: '235/60R18', notes: '107H' },
                    { size: '265/60R18', notes: '110H' },
                    { size: '275/60R18', notes: '113H' },
                    { size: '285/60R18', notes: '116H' },
                    { size: '265/65R18', notes: '114H' },
                    { size: '275/65R18', notes: '116H' },
                    { size: '255/70R18', notes: '113H' },
                    { size: '265/70R18', notes: '116H' },
                    { size: '215/60R17', notes: '96H' },
                    { size: '225/65R17', notes: '102H' },
                    { size: '235/65R17', notes: '108H' },
                    { size: '245/65R17', notes: '111H' },
                    { size: '265/65R17', notes: '112H' },
                    { size: '285/65R17', notes: '116H' },
                    { size: 'P245/65R17', notes: '105T' },
                    { size: 'P255/70R17', notes: '110T' },
                    { size: 'P285/70R17', notes: '117T' },
                    { size: 'P255/75R17', notes: '113T' },
                    { size: '215/60R16', notes: '95H' },
                    { size: '215/65R16', notes: '98H' },
                    { size: '255/65R16', notes: '109H' },
                    { size: '215/70R16', notes: '100H' },
                    { size: '225/70R16', notes: '103H' },
                    { size: '265/70R16', notes: '112H' },
                    { size: '275/70R16', notes: '114H' },
                    { size: 'P235/70R16', notes: '104T' },
                    { size: 'P255/70R16', notes: '109T' },
                    { size: 'P245/75R16', notes: '109T' },
                    { size: 'P265/75R16', notes: '114T' },
                    { size: '175/80R16', notes: '91S' },
                    { size: '205/80R16', notes: '104T' },
                    { size: '215/80R16', notes: '103H' },
                    { size: '205/70R15', notes: '96H' },
                    { size: '215/70R15', notes: '98H' },
                    { size: 'P235/70R15', notes: '102T' },
                    { size: 'P235/75R15', notes: '108T' },
                    { size: '175/80R15', notes: '90S' },
                    { size: '195/80R15', notes: '96H' },
                  ]
                },
              ]
            },
            // ===== ADVAN SUV & GEOLANDAR LT =====
            {
              name: 'ADVAN SUV & GEOLANDAR LT',
              desc: 'Luxury SUV & Light Truck Premium',
              subCategories: [
                {
                  label: 'Luxury SUV & LT',
                  entries: [
                    { size: '265/40R22', notes: '106W' },
                    { size: '295/35R21', notes: '107W' },
                    { size: '275/40R21', notes: '108W' },
                    { size: '295/40R21', notes: '111W' },
                    { size: '265/45R21', notes: '104W' },
                    { size: '275/45R21', notes: '110W' },
                    { size: '275/40R20', notes: '106W' },
                    { size: '235/45R20', notes: '100W' },
                    { size: '255/45R20', notes: '105W' },
                    { size: '265/45R20', notes: '108W' },
                    { size: '255/50R20', notes: '109W' },
                    { size: '265/50R20', notes: '111W' },
                    { size: '275/50R20', notes: '113W' },
                    { size: '255/55R20', notes: '110W' },
                    { size: '235/45R19', notes: '99W' },
                    { size: '255/50R19', notes: '107W' },
                    { size: '265/50R19', notes: '110W' },
                    { size: '235/55R19', notes: '105W' },
                    { size: '255/55R19', notes: '111W' },
                    { size: '275/55R19', notes: '111W' },
                    { size: '255/55R18', notes: '109W' },
                    { size: 'LT225/65R17', notes: 'A7Q' },
                    { size: 'LT225/75R16', notes: '115Q' },
                    { size: '185/85R16', notes: '105N' },
                    { size: 'LT215/75R15', notes: '100Q' },
                  ]
                },
              ]
            },
            // ===== TEMPORARY SPARE =====
            {
              name: 'TEMPORARY SPARE',
              desc: 'Ban Sementara Darurat',
              subCategories: [
                {
                  label: 'Compact Spare',
                  entries: [
                    { size: 'T145/70D17', notes: '106M · Y870C' },
                    { size: 'T155/70D17', notes: '110M · Y870C' },
                    { size: 'T155/80D17', notes: '100M · Y870C' },
                    { size: 'T145/70D18', notes: '107M · Y870C' },
                  ]
                },
              ]
            },
          ]
        }
`;

// The file ends with "      };" preceded by the sailun brand closing
// We need to find the last occurrence of "      };" and insert before it
const lastClosing = content.lastIndexOf('      };');
if (lastClosing === -1) {
  console.error('Could not find closing pattern');
  process.exit(1);
}

const before = content.substring(0, lastClosing);
const after = content.substring(lastClosing);

// Add comma after sailun's closing bracket, then insert new brands
const modifiedContent = before + ',' + newBrands + after;

fs.writeFileSync(filePath, modifiedContent, 'utf-8');
console.log('Successfully added Goodyear and Yokohama brands');
