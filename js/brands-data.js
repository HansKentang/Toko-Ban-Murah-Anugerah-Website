      var brands = {
        bridgestone: {
          name: 'Bridgestone',
          logo: 'images/bridgestone-logo.svg',
          models: [
            // ===== POTENZA Series =====
            {
              name: 'POTENZA',
              desc: 'High Performance — Sport & Racing DNA',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '225/35R19', notes: '88 Y · Extra Load (XL)' },
                    { size: '235/35R19', notes: '91 Y · Extra Load (XL)' },
                    { size: '255/35R19', notes: '96 Y · Extra Load (XL)' },
                    { size: '225/40R19', notes: '93 Y · Extra Load (XL)' },
                    { size: '245/40R19', notes: '98 Y · Extra Load (XL)' },
                  ]
                },
                {
                  label: 'S007A (Import)',
                  entries: [
                    { size: '225/40R18 S007A', notes: '92 Y · Extra Load (XL)' },
                    { size: '245/40R18 S007A', notes: '97 Y · Extra Load (XL)' },
                    { size: '255/40R18 S007A', notes: '99 Y · Extra Load (XL)' },
                    { size: '225/45R18 S007A', notes: '95 Y · Extra Load (XL)' },
                    { size: '235/45R18 S007A', notes: '98 Y · Extra Load (XL)' },
                    { size: '225/50R18 S007A', notes: '95 Y' },
                    { size: '245/50R18 S007A', notes: '104 Y · Extra Load (XL)' },
                    { size: '225/50R17 S007A', notes: '98 Y · Extra Load (XL)' },
                  ]
                },
                {
                  label: 'Adrenalin RE003',
                  entries: [
                    { size: '225/40R18 RE003', notes: '92 W · Extra Load (XL)' },
                    { size: '225/45R18 RE003', notes: '95 W · Extra Load (XL)' },
                    { size: '235/50R18 RE003', notes: '101 W · Extra Load (XL)' },
                    { size: '205/45R17 RE003', notes: '88 W · Extra Load (XL)' },
                    { size: '215/45R17 RE003', notes: '91 W · Extra Load (XL)' },
                    { size: '225/45R17 RE003', notes: '94 W · Extra Load (XL)' },
                    { size: '245/45R17 RE003', notes: '95 W · Extra Load (XL)' },
                    { size: '225/55R17 RE003', notes: '97 W' },
                    { size: '205/50R16 RE003', notes: '87 W' },
                    { size: '215/60R16 RE003', notes: '95 V' },
                    { size: '225/50R16 RE003', notes: '92 W' },
                  ]
                },
                {
                  label: 'OEM & Import Premium',
                  entries: [
                    { size: '185/55R15 RE030', notes: '82 V · Honda Brio RS' },
                    { size: '235/55R20 SPORT', notes: '105 Y · Lexus RX300 · ENLITEN+EV · XL' },
                    { size: '275/35R20 S001', notes: '102 Y · BMW 7 Series Rear · STAR+RSC · XL' },
                    { size: '245/40R20 S001', notes: '99 Y · BMW 7 Series Front · XL' },
                    { size: '245/40R20 S001', notes: '95 Y · BMW 7 Series / A4A' },
                    { size: '255/35R19 S001', notes: '96 Y · BMW 4 Series Cabrio Rear · XL' },
                    { size: '225/40R19 S001', notes: '89 Y · BMW 3 Series Front · STAR+RSC' },
                    { size: '275/40R19 S001', notes: '101 Y · Mercedes S-Class Rear · MOExtended' },
                    { size: '275/40R19 S001', notes: '101 Y · BMW 7 Series Rear · STAR+RSC · XL' },
                    { size: '225/45R19 S001', notes: '92 W · BMW X1 · STAR+RSC' },
                    { size: '245/45R19 S001', notes: '102 Y · Mercedes S-Class Front · MOExtended · XL' },
                    { size: '245/45R19 S001', notes: '98 Y · BMW 7 Series Front · STAR+RSC' },
                    { size: '225/40R18 S001', notes: '92 Y · Mini Clubman · STAR+RSC · XL' },
                    { size: '255/40R18 S001', notes: '95 Y · BMW 3 Series Rear' },
                    { size: '225/45R18 S001', notes: '91 Y · BMW 3 Series Front' },
                    { size: '225/45R18 S001', notes: '91 W · BMW 2 Series · STAR+RSC' },
                    { size: '225/50R17 S001', notes: '94 W · BMW 3 Series · STAR+RSC' },
                    { size: '225/50R17 S001', notes: '94 W · BMW Z4, 3 Series, Supra · RFT' },
                    { size: '225/45R17 RE050A', notes: '91 Y · BMW 3 Series · STAR+RSC' },
                    { size: '225/50R17 RE050', notes: '94 W · BMW 5 Series · STAR+RFT+RSC' },
                  ]
                },
              ]
            },
            // ===== TURANZA Series =====
            {
              name: 'TURANZA',
              desc: 'Premium Comfort — Quiet & Refined Touring',
              subCategories: [
                {
                  label: 'Standard Lineup',
                  entries: [
                    { size: '225/45R19', notes: '96 W · Import (IMP)' },
                    { size: '225/55R19', notes: '103 H' },
                    { size: '235/45R18', notes: '98 W · Import (IMP)' },
                    { size: '215/45R18', notes: '93 W · Import (IMP)' },
                    { size: '235/50R18', notes: '101 W' },
                    { size: '225/50R18', notes: '95 V' },
                    { size: '235/55R18', notes: '100 V' },
                    { size: '225/55R18', notes: '98 H' },
                    { size: '235/60R18', notes: '107 W' },
                    { size: '225/60R18', notes: '100 H' },
                    { size: '215/45R17', notes: '91 W · Import (IMP)' },
                    { size: '225/50R17', notes: '98 W' },
                    { size: '215/50R17', notes: '95 W' },
                    { size: '205/50R17', notes: '93 W' },
                    { size: '225/55R17', notes: '101 W' },
                    { size: '215/55R17', notes: '94 W' },
                    { size: '215/60R17', notes: '100 H' },
                  ]
                },
                {
                  label: 'Turanza 6',
                  entries: [
                    { size: '205/60R17', notes: '94 H' },
                    { size: '195/50R16', notes: '84 W' },
                    { size: '225/55R16', notes: '99 W' },
                    { size: '215/55R16', notes: '97 W · Import (IMP)' },
                    { size: '205/55R16', notes: '94 W' },
                    { size: '195/55R16', notes: '91 V' },
                    { size: '185/55R16', notes: '83 V' },
                    { size: '215/60R16', notes: '99 W' },
                    { size: '205/60R16', notes: '96 W' },
                    { size: '195/60R16', notes: '89 H' },
                    { size: '215/65R16', notes: '98 V' },
                    { size: '205/65R16', notes: '95 V' },
                    { size: '185/55R15', notes: '82 V' },
                    { size: '195/60R15', notes: '88 V' },
                    { size: '185/60R15', notes: '88 V' },
                    { size: '205/65R15', notes: '99 V' },
                    { size: '195/65R15', notes: '95 V' },
                    { size: '185/65R15', notes: '88 V' },
                    { size: '185/70R14', notes: '88 H' },
                  ]
                },
                {
                  label: 'OEM & Special Fitment',
                  entries: [
                    { size: '225/55R18', notes: '98 H · Turanza 6 · Mitsubishi C-MPV' },
                    { size: '225/55R18', notes: '102 Y · Turanza 6 · BMW X1 · STAR+MO · XL' },
                    { size: '215/55R18', notes: '95 V · T005A · Toyota Yaris Cross' },
                    { size: '225/50R18', notes: '95 V · T005A · Lexus UX · RFT+RUNFLAT' },
                    { size: '205/50R17', notes: '89 V · T005A · Toyota All New Veloz' },
                    { size: '215/50R17', notes: '91 W · T005A · Suzuki APV Luxury II' },
                    { size: '215/55R17', notes: '94 V · T005A · Honda BR-V Prestige, WR-V RS' },
                    { size: '205/60R17', notes: '94 H · T005A · Toyota Raize, Daihatsu Rocky' },
                    { size: '185/55R16', notes: '83 V · T005A · Honda City Hatchback RS' },
                    { size: '215/60R16', notes: '95 V · T005A · Honda WR-V' },
                    { size: '205/65R16', notes: '95 H · T005A · Toyota Yaris Cross, Raize, Rocky' },
                    { size: '215/55R17', notes: '94 V · ER33 · Honda HR-V, Innova Venturer' },
                    { size: '195/50R16', notes: '84 V · ER33 · Toyota Yaris, Vios, Sienta' },
                    { size: '185/55R16', notes: '83 H · ER370 · Honda Jazz RS' },
                    { size: '195/65R15', notes: '91 H · ER60 · Suzuki APV Arena' },
                    { size: '225/50R18', notes: '95 W · T001 · BMW X1 · STAR+RSC' },
                    { size: '225/45R17', notes: '91 W · T001 · Mini Clubman · STAR+RSC' },
                    { size: '225/50R17', notes: '94 W · T001 · Mercedes C-Class · MOExtended' },
                    { size: '205/55R17', notes: '91 W · T001 · BMW 2 Series · STAR+RSC' },
                    { size: '245/45R20', notes: '99 Y · T005 · Lexus LS · RFT+RUNFLAT' },
                    { size: '245/45R20', notes: '103 Y · T005 · Lexus LM400 · XL' },
                    { size: '255/40R20', notes: '101 Y · T005 · Mercedes S-Class · MO+B-Silent · XL' },
                    { size: '285/35R20', notes: '104 Y · T005 · Mercedes S-Class · MO+B-Silent · XL' },
                    { size: '275/35R19', notes: '100 Y · T005 · BMW 8 Series Rear · XL' },
                    { size: '245/40R19', notes: '98 Y · T005 · BMW 8 Series Front · XL' },
                    { size: '255/40R18', notes: '99 Y · T005 · BMW 3/4 Series · RSC · XL' },
                    { size: '245/40R18', notes: '97 Y · T005 · Mercedes C-Class · MO · XL' },
                    { size: '225/40R18', notes: '92 Y · T005 · BMW 1/2 GT, Mini · STAR+RSC · XL' },
                    { size: '225/45R18', notes: '95 Y · T005 · BMW 3/4 Series · RSC · XL' },
                    { size: '245/45R18', notes: '100 Y · T005 · BMW 5 Series · XL' },
                    { size: '235/55R18', notes: '100 Y · T005 · Mercedes GLB' },
                    { size: '225/45R17', notes: '94 Y · T005 · BMW 1/2 GT, Mini · STAR+RSC · XL' },
                    { size: '225/50R17', notes: '98 Y · T005 · BMW 3/4 Series · XL' },
                    { size: '225/55R17', notes: '97 Y · ER300 · BMW 5 Series · STAR+RSC+ECOPIA' },
                    { size: '215/70R15', notes: '97 H · GR-50 · KIA SEDONA · LWT' },
                  ]
                },
              ]
            },
            // ===== ECOPIA Series =====
            {
              name: 'ECOPIA',
              desc: 'Fuel Efficient — Eco-Friendly & Low Rolling Resistance',
              subCategories: [
                {
                  label: 'EP300 & ENLITEN',
                  entries: [
                    { size: '225/50R18', notes: '95 V · EP300' },
                    { size: '215/55R17', notes: '94 V · EP300' },
                    { size: '215/60R17', notes: '95 H · EP300' },
                    { size: '205/50R17', notes: '93 V · EP300' },
                    { size: '205/60R17', notes: '94 H · EP300' },
                    { size: '205/55R16', notes: '91 V · EP300' },
                    { size: '195/60R16', notes: '89 H · ENLITEN' },
                    { size: '205/65R16', notes: '95 H · ENLITEN' },
                    { size: '185/60R15', notes: '84 H · ENLITEN' },
                    { size: '185/65R15', notes: '88 H · ENLITEN' },
                    { size: '195/65R15', notes: '91 H · ENLITEN' },
                    { size: '205/65R15', notes: '94 H · ENLITEN' },
                  ]
                },
                {
                  label: 'EP150 — OEM & Passenger',
                  entries: [
                    { size: '205/55R17', notes: '91 V · Mitsubishi Xpander Sport' },
                    { size: '185/55R16', notes: '83 V · Import (IMP)' },
                    { size: '195/55R16', notes: '87 V · Toyota Yaris Cross, Sienta, Grand Livina' },
                    { size: '205/55R16', notes: '91 V · Mitsubishi Xpander Sport' },
                    { size: '195/60R16', notes: '89 H · Nissan Serena, Honda BR-V' },
                    { size: '195/65R16', notes: '92 H · Mitsubishi Xpander GLS/Exceed' },
                    { size: '205/65R16', notes: '95 H · Toyota Kijang Innova G/V/Q' },
                    { size: '185/60R15', notes: '84 H · Toyota Etios' },
                    { size: '195/60R15', notes: '88 H · Import (IMP)' },
                    { size: '175/65R15', notes: '84 H' },
                    { size: '185/65R15', notes: '88 S · Toyota Grand New Veloz, Xpander Exceed' },
                    { size: '195/65R15', notes: '91 S · Daihatsu Luxio M' },
                    { size: '205/70R15', notes: '96 H' },
                  ]
                },
                {
                  label: 'EP150 — City & Compact',
                  entries: [
                    { size: '175/65R14', notes: '82 T/S · Vios, Yaris, Agya, Calya, Etios' },
                    { size: '185/65R14', notes: '86 H' },
                    { size: '195/65R14', notes: '89 H' },
                    { size: '185/70R14', notes: '88 S · Grand New Avanza, Great New Xenia' },
                    { size: '195/70R14', notes: '91 H' },
                    { size: '185/80R14', notes: '91 S' },
                    { size: '165/70R13', notes: '79 S' },
                    { size: '175/70R13', notes: '82 S' },
                    { size: '185/70R13', notes: '86 S' },
                    { size: '165/80R13', notes: '83 S' },
                    { size: '155/70R12', notes: '73 S' },
                  ]
                },
                {
                  label: 'H/L 422 Plus',
                  entries: [
                    { size: '255/50R20', notes: '105 V · Mazda CX-9' },
                    { size: '225/55R19', notes: '99 H · Nissan X-Trail' },
                  ]
                },
              ]
            },
            // ===== DUELER Series =====
            {
              name: 'DUELER',
              desc: 'SUV & Off-Road — All-Terrain, Mud-Terrain & Highway',
              subCategories: [
                {
                  label: 'A/T 002 (All-Terrain)',
                  entries: [
                    { size: '235/60R17', notes: '102 H · RBT' },
                    { size: '225/65R17', notes: '102 T · OWT' },
                    { size: '265/65R17', notes: '112 S · OWT' },
                    { size: '285/65R17', notes: '116 T · OWT' },
                    { size: '265/70R17', notes: '115 S · OWT' },
                    { size: '215/70R16', notes: '100 S · OWT' },
                    { size: '245/70R16', notes: '111 S · OWT · XL' },
                    { size: '265/70R16', notes: '112 S · OWT' },
                    { size: '275/70R16', notes: '114 S · OWT' },
                    { size: '205/70R15', notes: '96 S · OWT' },
                    { size: '215/70R15', notes: '98 S · OWT' },
                    { size: '235/70R15', notes: '106 S · OWT · XL' },
                    { size: '265/70R15', notes: '112 T · DWT' },
                    { size: '235/75R15', notes: '109 T · DWT · XL' },
                  ]
                },
                {
                  label: 'A/T 697 (LVR)',
                  entries: [
                    { size: '265/65R17', notes: '116 S · RBT' },
                    { size: '225/70R17', notes: '110 Q · OWT' },
                    { size: '265/70R17', notes: '121 Q · RBT · Import' },
                    { size: '245/70R16', notes: '113 S · OWT' },
                    { size: '225/75R16', notes: '103 S · OWT' },
                    { size: '245/75R16', notes: '108 S · DWT' },
                    { size: '245/75R16', notes: '114 S · RBT' },
                    { size: '265/75R16', notes: '112 S · OWT' },
                    { size: '285/75R16', notes: '116 R · OWT' },
                    { size: '30x9.50R15', notes: '104 S · OWT' },
                    { size: '31x10.50R15', notes: '109 S · OWT' },
                    { size: '27x8.50R14', notes: '95 S · OWT' },
                  ]
                },
                {
                  label: 'M/T 674 (Mud-Terrain)',
                  entries: [
                    { size: '245/70R16', notes: '113 Q · OWT' },
                    { size: '225/75R16', notes: '110 Q · OWT' },
                    { size: '245/75R16', notes: '108 Q · OWT' },
                    { size: '245/75R16', notes: '114 Q · DWT' },
                    { size: '265/75R16', notes: '112 Q · OWT' },
                    { size: '285/75R16', notes: '122 Q · OWT' },
                    { size: '235/85R16', notes: '114 Q · BOWT' },
                    { size: '215/75R15', notes: '100 Q · COWT' },
                    { size: '235/75R15', notes: '104 Q · COWT' },
                    { size: '30x9.50R15', notes: '104 Q · OWT' },
                    { size: '31x10.50R15', notes: '109 Q · OWT' },
                    { size: '27x8.50R14', notes: '95 Q · OWT' },
                  ]
                },
                {
                  label: 'H/P SPORT AS (High Performance)',
                  entries: [
                    { size: '245/50R20', notes: '102 V · Hyundai Palisade · Import' },
                    { size: '245/60R18', notes: '105 H · Hyundai Palisade · Import' },
                    { size: '235/45R19', notes: '95 VN · 95 VR' },
                    { size: '225/45R18', notes: '91 V · BMW · STAR+RSC' },
                    { size: '285/60R18', notes: '116 V · Land Cruiser, LX470' },
                  ]
                },
                {
                  label: 'H/P SPORT (Performance SUV)',
                  entries: [
                    { size: '225/60R18', notes: '100 H · Suzuki Grand Vitara' },
                    { size: '265/70R16', notes: '112 H' },
                  ]
                },
                {
                  label: 'H/L 33 / 33A (Luxury SUV)',
                  entries: [
                    { size: '235/60R18', notes: '103 H · H/L 33 · Honda CR-V 1.5T' },
                    { size: '235/55R20', notes: '102 V · H/L 33A · Lexus RX300 · Import' },
                  ]
                },
                {
                  label: 'H/L 400 (Luxury SUV)',
                  entries: [
                    { size: '245/50R20', notes: '102 V · Mazda CX-9' },
                    { size: '225/55R18', notes: '98 H · Subaru Forester · Import' },
                  ]
                },
                {
                  label: 'H/L 683 / 852 (Classic SUV)',
                  entries: [
                    { size: '235/70R15', notes: '103 S · H/L 683 · Isuzu Panther GT · RBT' },
                    { size: '195/80R15', notes: '96 S · H/L 852 · Suzuki Jimny · Import' },
                  ]
                },
                {
                  label: 'H/T 470 / 684 (Highway Truck)',
                  entries: [
                    { size: '225/65R17', notes: '102 T · H/T 470 · Honda All New CR-V' },
                    { size: '205/70R15', notes: '96 T · H/T 684' },
                    { size: '255/60R18', notes: '112 H · H/T 684 II · Ford Ranger · XL' },
                    { size: '265/60R18', notes: '110 H · H/T 684 II · Fortuner, Pajero Dakar' },
                    { size: '265/65R17', notes: '112 S · H/T 684 II · Toyota Fortuner' },
                    { size: '265/70R16', notes: '112 S · H/T 684 II · Pajero Sport Exceed' },
                  ]
                },
                {
                  label: 'H/L 687 (SUV Touring)',
                  entries: [
                    { size: '215/60R17', notes: '96 H · Mitsubishi Outlander Sport' },
                    { size: '225/65R17', notes: '101 S · Suzuki Grand Vitara' },
                    { size: '235/60R16', notes: '100 H · Toyota Rush, Terios' },
                  ]
                },
                {
                  label: 'H/L 689 (SUV Touring)',
                  entries: [
                    { size: '215/65R16', notes: '98 H · Nissan Xtrail' },
                    { size: '235/75R15', notes: '108 S · Isuzu Elf NHR' },
                  ]
                },
                {
                  label: 'H/T 840 / A/T 693 (Off-Road)',
                  entries: [
                    { size: '255/65R17', notes: '110 S · H/T 840 · Isuzu D-Max · Import' },
                    { size: '265/70R16', notes: '112 S · H/T 840 · Toyota Hilux, Triton · Import' },
                    { size: '285/60R18', notes: '116 V · A/T 693 · Land Cruiser 200, LX470 · RBT' },
                    { size: '265/65R17', notes: '112 S · A/T 693 III · Fortuner 2.4G' },
                    { size: '265/65R18', notes: '114 V · A/T 693 IV · Land Cruiser · RBT' },
                    { size: '265/55R20', notes: '113 V · A/T 693 V · Land Cruiser, LX570 · XL' },
                    { size: '265/60R18', notes: '114 S · A/T 693 V · RBT · XL' },
                  ]
                },
              ]
            },
            // ===== ALENZA Series =====
            {
              name: 'ALENZA',
              desc: 'Premium SUV Performance — Luxury & Precision',
              subCategories: [
                {
                  label: 'ALENZA 001',
                  entries: [
                    { size: '235/50R21', notes: '101 W · Import (IMP)' },
                    { size: '235/50R20', notes: '100 V · Import (IMP)' },
                    { size: '235/45R19', notes: '99 W · Import (IMP)' },
                    { size: '235/55R19', notes: '101 W' },
                    { size: '235/55R18', notes: '104 V · Import · XL' },
                    { size: '235/55R18', notes: '100 W · Import (IMP)' },
                    { size: '235/60R18', notes: '103 W' },
                    { size: '225/60R17', notes: '99 V · Import (IMP)' },
                    { size: '225/65R17', notes: '102 H · Import (IMP)' },
                  ]
                },
                {
                  label: 'ALENZA 001A & H/L 33',
                  entries: [
                    { size: '215/60R17', notes: '96 H · 001A · Toyota Yaris Cross, Rush, Terios' },
                    { size: '225/50R18', notes: '95 V · H/L 33 · Honda All New HR-V RS' },
                  ]
                },
                {
                  label: 'ALENZA H/L 331',
                  entries: [
                    { size: '225/50R18', notes: '95 V · H/L 331' },
                  ]
                },
              ]
            },
            // ===== TECHNO Series & Commercial =====
            {
              name: 'TECHNO',
              desc: 'Sport Compact, Commercial & Light Truck',
              subCategories: [
                {
                  label: 'TECHNO SPORTS (18")',
                  entries: [
                    { size: '215/35R18', notes: '84 W · XL' },
                    { size: '215/40R18', notes: '89 W · XL' },
                    { size: '225/40R18', notes: '92 W · XL' },
                    { size: '225/45R18', notes: '95 V · XL' },
                    { size: '245/45R18', notes: '100 W · XL' },
                    { size: '225/50R18', notes: '95 W' },
                  ]
                },
                {
                  label: 'TECHNO SPORTS (17")',
                  entries: [
                    { size: '205/40R17', notes: '84 V · XL' },
                    { size: '215/40R17', notes: '87 W · XL' },
                    { size: '205/45R17', notes: '88 V · XL' },
                    { size: '215/45R17', notes: '91 V · XL' },
                    { size: '225/45R17', notes: '94 V · XL' },
                    { size: '205/50R17', notes: '93 V · XL' },
                    { size: '215/50R17', notes: '95 V · XL' },
                    { size: '225/55R17', notes: '101 V · XL' },
                  ]
                },
                {
                  label: 'TECHNO SPORTS (16")',
                  entries: [
                    { size: '195/50R16', notes: '84 V' },
                    { size: '205/50R16', notes: '87 V' },
                    { size: '185/55R16', notes: '83 V' },
                    { size: '195/55R16', notes: '87 V' },
                    { size: '205/55R16', notes: '91 V' },
                  ]
                },
                {
                  label: 'TECHNO SPORTS (15" & 14")',
                  entries: [
                    { size: '195/50R15', notes: '82 V' },
                    { size: '185/55R15', notes: '82 H' },
                    { size: '195/55R15', notes: '85 H' },
                    { size: '185/60R15', notes: '84 H' },
                    { size: '195/60R15', notes: '88 H' },
                    { size: '185/65R15', notes: '88 S' },
                    { size: '155/65R14', notes: '75 S' },
                    { size: '175/65R14', notes: '82 S' },
                    { size: '185/70R14', notes: '88 S' },
                    { size: '195/70R14', notes: '91 S' },
                  ]
                },
                {
                  label: 'TECHNO 248 & 13"',
                  entries: [
                    { size: '185/80R14', notes: '91 S · 248 · Suzuki APV Arena' },
                    { size: '165/65R13', notes: '77 H' },
                    { size: '175/70R13', notes: '82 T' },
                    { size: '165/80R13', notes: '83 S' },
                  ]
                },
                {
                  label: 'R660A — Light Truck',
                  entries: [
                    { size: '235/65R16', notes: '115 T · Toyota ACE · Import' },
                    { size: '235/60R17', notes: '109 T · Import' },
                  ]
                },
                {
                  label: 'R624 — Light Truck (8 PR)',
                  entries: [
                    { size: '205/70R15', notes: '106 R (8 PR)' },
                    { size: '215/70R15', notes: '109 R (8 PR)' },
                    { size: '195R15', notes: '106 R (8 PR)' },
                    { size: '185R14', notes: '102 R (8 PR) · Mitsubishi L300 SL' },
                    { size: '195R14', notes: '106 R (8 PR)' },
                    { size: '165R13', notes: '94 R (8 PR) · Mitsubishi T120 SS' },
                    { size: '175R13', notes: '97 R (8 PR)' },
                  ]
                },
                {
                  label: 'B390 / BISON 623 (Passenger / Commercial)',
                  entries: [
                    { size: '205/65R15', notes: '94 S · B390 · Toyota Innova' },
                    { size: '185R14', notes: '102 (8 PR) · BISON 623' },
                    { size: '225/75R16', notes: '121 R (10 PR) · Import' },
                    { size: '215/65R16C', notes: '106 T (6 PR)' },
                  ]
                },
              ]
            },
          ]
        },
        dunlop: {
          name: 'Dunlop',
          logo: 'images/dunlop-logo.svg',
          models: [
            // ===== SP Series & Specialized OEM =====
            {
              name: 'SP Series & Specialized OEM',
              desc: 'OEM Patterns & Specialized Commercial',
              subCategories: [
                {
                  label: 'SP Series & Specialized OEM',
                  entries: [
                    { size: '165/80 SR13', notes: 'HIMAX (Discontinued)' },
                    { size: '175/70 SR12', notes: 'HIMAX (Discontinued)' },
                    { size: '155/80 SR12', notes: 'SP10' },
                    { size: '185/70 R14', notes: 'SP10' },
                    { size: '185/65 R15', notes: 'SP10' },
                    { size: '185/60 HR15', notes: 'SP2030' },
                    { size: '185/65 HR15', notes: 'SP300' },
                    { size: '175/60 TR15', notes: 'SP31' },
                    { size: '175/65 TR15', notes: 'SP31' },
                    { size: '165 R14C 8PR', notes: 'SPLT30A' },
                    { size: '175 R14C 8PR', notes: 'SPLT30A' },
                    { size: '205/60 HR16', notes: 'SP 230' },
                    { size: '205/65 SR15', notes: 'D80V4' },
                  ]
                },
              ]
            },
            // ===== ST / PT / SUV & 4WD =====
            {
              name: 'ST / PT / SUV & 4WD',
              desc: 'SUV, 4WD, All-Terrain & Mud-Terrain',
              subCategories: [
                {
                  label: 'ST / PT / SUV & 4WD',
                  entries: [
                    { size: '215/65 SR16', notes: 'ST 20T' },
                    { size: '215/65 HR16', notes: 'ST20' },
                    { size: '235/60 HR16', notes: 'ST20' },
                    { size: '225/60 HR17', notes: 'ST20 (Import)' },
                    { size: '225/60 HR18', notes: 'ST30' },
                    { size: '225/65 TR17', notes: 'ST30' },
                    { size: '225/65 HR17', notes: 'ST30' },
                    { size: '225/55 HR19', notes: 'ST30' },
                    { size: '285/50 VR20', notes: 'PT2A' },
                    { size: '275/50 VR21', notes: 'PT3A' },
                    { size: '235/75 SR15', notes: 'TG20' },
                    { size: '235/70 SR15', notes: 'TG30' },
                    { size: '235/75 SR15', notes: 'AT22' },
                    { size: '225/70 SR16', notes: 'AT20' },
                    { size: '255/70 HR16', notes: 'AT20' },
                    { size: '265/70 SR16', notes: 'AT20' },
                    { size: '195/80 SR15', notes: 'AT20' },
                    { size: '265/65 SR17', notes: 'AT20 Z' },
                    { size: '275/65 HR17', notes: 'AT22 Z' },
                    { size: '265/65 SR17', notes: 'AT25' },
                    { size: '265/60 HR18', notes: 'AT25' },
                    { size: '265/60 HR18', notes: 'AT25 PT' },
                    { size: '265/65 VR18', notes: 'AT30' },
                    { size: '27x8.5 QR14', notes: 'MT2' },
                    { size: '30x9.5 QR15', notes: 'MT2' },
                    { size: '31x10.5 QR15', notes: 'MT2' },
                    { size: '235/75 QR15', notes: 'MT2' },
                    { size: '265/65 QR17', notes: 'MT2' },
                    { size: '265/75 QR16', notes: 'MT2' },
                  ]
                },
              ]
            },
            // ===== SP SPORT MAXX =====
            {
              name: 'SP SPORT MAXX',
              desc: 'Ultra High Performance — Sport & Precision',
              subCategories: [
                {
                  label: 'SP SPORT MAXX',
                  entries: [
                    { size: '185/55 VR15', notes: 'SPMAXX050' },
                    { size: '215/55 VR17', notes: 'SPMAXX050' },
                    { size: '225/50 VR18', notes: 'SPMAXX050' },
                    { size: '225/60 HR18', notes: 'SPMAXX050' },
                    { size: '235/60 HR18', notes: 'SPMAXX050' },
                    { size: '215/55 R18', notes: 'SPMAXX050 (Import)' },
                    { size: '235/55 VR20', notes: 'SPMAXX050 (Import)' },
                    { size: '215/45 YR17', notes: 'SPMAXX050+' },
                    { size: '205/50 YR17', notes: 'SPMAXX050+' },
                    { size: '215/50 WR17', notes: 'SPMAXX050+' },
                    { size: '225/40 YR18', notes: 'SPMAXX050+' },
                    { size: '235/50 WR18', notes: 'SPMAXX050+' },
                    { size: '225/45 YR18', notes: 'SPMAXX050+' },
                    { size: '225/50 VR18', notes: 'SPMAXX060' },
                    { size: '225/55 HR19 XL', notes: 'SPMAXX060' },
                    { size: '235/50 VR20 XL', notes: 'SPMAXX060' },
                    { size: '255/45 WR20', notes: 'SPMAXX060' },
                  ]
                },
              ]
            },
            // ===== ENASAVE & ECO =====
            {
              name: 'ENASAVE & ECO',
              desc: 'Fuel Efficient & Eco-Friendly — Low Rolling Resistance',
              subCategories: [
                {
                  label: 'ENASAVE & ECO',
                  entries: [
                    { size: '145 R12', notes: 'ENASAVE VAN01' },
                    { size: '225/70 R15', notes: 'SP VAN 01' },
                    { size: '225/75 R16', notes: 'SP VAN 01' },
                    { size: '235/65 R16', notes: 'SP VAN 01' },
                    { size: '175/65 TR14', notes: 'EC300' },
                    { size: '165/65 SR13', notes: 'EC300+' },
                    { size: '165/65 SR14', notes: 'EC300+' },
                    { size: '185/70 SR14', notes: 'EC300+' },
                    { size: '185/65 SR15', notes: 'EC300+' },
                    { size: '185/65 HR15', notes: 'EC300+' },
                    { size: '195/65 HR15', notes: 'EC300+' },
                    { size: '195/65 HR16', notes: 'EC300+' },
                    { size: '205/65 HR15', notes: 'EC300+' },
                    { size: '205/65 HR16', notes: 'EC300+' },
                    { size: '215/65 SR16', notes: 'EC300+' },
                    { size: '185/60 HR15', notes: 'EC300+' },
                    { size: '185/60 HR16', notes: 'EC300+ (Import)' },
                    { size: '195/60 HR16', notes: 'EC300+' },
                    { size: '215/60 HR16', notes: 'EC300+' },
                    { size: '205/60 HR17', notes: 'EC300+' },
                    { size: '215/60 HR17', notes: 'EC300+' },
                    { size: '185/55 HR15', notes: 'EC300+' },
                    { size: '185/55 HR16', notes: 'EC300+' },
                    { size: '195/55 VR16', notes: 'EC300+' },
                    { size: '205/55 VR16', notes: 'EC300+' },
                    { size: '205/55 VR17', notes: 'EC300+' },
                    { size: '195/50 VR16', notes: 'EC300+' },
                    { size: '185/55 HR16', notes: 'EC330 (Import)' },
                    { size: '185/65 HR15', notes: 'EC350+' },
                    { size: '195/60 HR16', notes: 'EC350+' },
                  ]
                },
              ]
            },
            // ===== MANS Performance =====
            {
              name: 'MANS Performance',
              desc: 'Premium Touring & Comfort — LM705 Series',
              subCategories: [
                {
                  label: 'MANS Performance',
                  entries: [
                    { size: '185/70 HR14', notes: '' },
                    { size: '195/70 HR14', notes: '' },
                    { size: '205/70 HR14', notes: '' },
                    { size: '205/70 HR15', notes: '' },
                    { size: '215/70 HR15', notes: '' },
                    { size: '185/65 HR15', notes: '' },
                    { size: '195/65 HR15', notes: '' },
                    { size: '205/65 HR15', notes: '' },
                    { size: '205/65 HR16', notes: '' },
                    { size: '215/65 HR16', notes: '' },
                    { size: '185/60 HR15', notes: '' },
                    { size: '195/60 HR15', notes: '' },
                    { size: '195/60 HR16', notes: '' },
                    { size: '205/60 HR16', notes: '' },
                    { size: '215/60 HR16', notes: '' },
                    { size: '215/60 HR17', notes: '' },
                    { size: '225/60 HR17', notes: '' },
                    { size: '225/60 VR18', notes: '' },
                    { size: '255/60 VR18 XL', notes: '' },
                    { size: '185/55 VR15', notes: '' },
                    { size: '185/55 VR16', notes: '' },
                    { size: '195/55 VR15', notes: '' },
                    { size: '195/55 VR16', notes: '' },
                    { size: '205/55 VR16', notes: '' },
                    { size: '225/55 WR16 XL', notes: '' },
                    { size: '215/55 VR17', notes: '' },
                    { size: '225/55 WR17 XL', notes: '' },
                    { size: '235/55 VR18', notes: '' },
                    { size: '235/55 VR19', notes: '' },
                    { size: '195/50 VR16', notes: '' },
                    { size: '215/50 VR17 XL', notes: '' },
                    { size: '225/50 VR17 XL', notes: '' },
                    { size: '235/50 WR18', notes: '' },
                    { size: '195/45 WR16', notes: '' },
                    { size: '205/45 WR17 XL', notes: '' },
                    { size: '215/45 WR17 XL', notes: '' },
                    { size: '265/35 WR18 XL', notes: '' },
                    { size: '225/35 YR19 XL', notes: '' },
                    { size: '235/35 WR19 XL', notes: '' },
                    { size: '275/30 WR19 XL', notes: '' },
                  ]
                },
              ]
            },
            // ===== DIREZZA Premium Performance =====
            {
              name: 'DIREZZA Premium Performance',
              desc: 'Sport & Ultra High Performance — DZ102',
              subCategories: [
                {
                  label: 'DIREZZA Premium Performance',
                  entries: [
                    { size: '195/50 VR16', notes: '' },
                    { size: '205/55 VR16', notes: '' },
                    { size: '205/45 WR17', notes: '' },
                    { size: '215/45 WR17', notes: '' },
                    { size: '225/45 WR17 XL', notes: '' },
                    { size: '245/45 WR17', notes: '' },
                    { size: '205/50 WR17 XL', notes: '' },
                    { size: '215/50 VR17', notes: '' },
                    { size: '205/40 WR17 XL', notes: '' },
                    { size: '215/40 WR17 XL', notes: '' },
                    { size: '215/35 WR18', notes: '' },
                    { size: '205/40 WR18 XL', notes: '' },
                    { size: '215/40 WR18 XL', notes: '' },
                    { size: '225/40 WR18', notes: '' },
                    { size: '235/40 WR18', notes: '' },
                    { size: '245/40 WR18 XL', notes: '' },
                    { size: '225/45 WR18', notes: '' },
                    { size: '225/50 WR18', notes: '' },
                    { size: '235/50 VR18', notes: '' },
                    { size: '225/55 VR18', notes: '' },
                    { size: '235/60 HR18', notes: '' },
                  ]
                },
              ]
            },
            // ===== Commercial Light Truck =====
            {
              name: 'Commercial Light Truck',
              desc: 'Light Truck & Commercial Van — LT4 / LT5',
              subCategories: [
                {
                  label: 'Commercial Light Truck',
                  entries: [
                    { size: '165 R13', notes: 'LT4 (Discontinued)' },
                    { size: '165 R13', notes: 'LT5' },
                    { size: '175 R13', notes: 'LT5' },
                    { size: '185 R14', notes: 'LT5' },
                    { size: '195 R14', notes: 'LT5' },
                    { size: '195 R15', notes: 'LT5' },
                  ]
                },
              ]
            },
            // ===== Touring Passenger & All-Terrain =====
            {
              name: 'Touring Passenger & All-Terrain',
              desc: 'Passenger Touring & All-Terrain — R1 & AT5',
              subCategories: [
                {
                  label: 'Touring Passenger & All-Terrain',
                  entries: [
                    { size: '165/80 SR13', notes: '' },
                    { size: '185/80 SR14', notes: '' },
                    { size: '175/70 SR12', notes: '' },
                    { size: '175/70 SR13', notes: '' },
                    { size: '185/70 SR13', notes: '' },
                    { size: '185/70 SR14', notes: '' },
                    { size: '195/70 TR14', notes: '' },
                    { size: '165/65 SR13', notes: '' },
                    { size: '165/65 SR14', notes: '' },
                    { size: '175/65 SR14', notes: '' },
                    { size: '175/65 SR15', notes: '' },
                    { size: '185/65 TR14', notes: '' },
                    { size: '185/65 SR15', notes: '' },
                    { size: '195/65 SR14', notes: '' },
                    { size: '195/65 TR15', notes: '' },
                    { size: '205/65 TR15', notes: '' },
                    { size: '215/65 TR15', notes: '' },
                    { size: '175/60 SR15', notes: '' },
                    { size: '185/60 TR14', notes: '' },
                    { size: '185/60 TR15', notes: '' },
                    { size: '185/60 TR16', notes: '' },
                    { size: '195/60 TR15', notes: '' },
                    { size: '205/60 TR15', notes: '' },
                    { size: '205/60 TR16', notes: '' },
                    { size: '205/70 TR15', notes: 'AT5' },
                    { size: '235/70 SR15 XL', notes: 'AT5' },
                    { size: '265/70 TR15', notes: 'AT5 (Import)' },
                    { size: '30x9.50 SR15', notes: 'AT5' },
                    { size: '31x10.50 SR15', notes: 'AT5' },
                    { size: '215/70 TR16', notes: 'AT5' },
                    { size: '225/70 TR16', notes: 'AT5' },
                    { size: '245/70 TR16', notes: 'AT5' },
                    { size: '255/70 TR16', notes: 'AT5' },
                    { size: '265/70 TR16', notes: 'AT5' },
                    { size: '225/75 SR16', notes: 'AT5' },
                    { size: '245/75 SR16', notes: 'AT5' },
                    { size: '265/75 SR16', notes: 'AT5' },
                    { size: '285/75 QR16', notes: 'AT5 (Import)' },
                    { size: '235/60 HR16', notes: 'AT5' },
                    { size: '235/60 HR17', notes: 'AT5' },
                    { size: '225/65 HR17', notes: 'AT5' },
                    { size: '235/65 HR17', notes: 'AT5' },
                    { size: '265/65 SR17', notes: 'AT5' },
                    { size: '265/70 TR17', notes: 'AT5' },
                    { size: '285/65 TR17', notes: 'AT5 (Import)' },
                    { size: '235/55 HR18', notes: 'AT5' },
                    { size: '265/60 HR18', notes: 'AT5' },
                    { size: '285/60 TR18 XL', notes: 'AT5' },
                  ]
                },
              ]
            },
          ]
        },
        gtradial: {
          name: 'GT Radial', logo: 'images/gtradial-logo.svg',
          models: [
            // ===== SAVERO & KOMODO Series =====
            {
              name: 'SAVERO & KOMODO',
              desc: 'SUV, All-Terrain, Mud-Terrain & Extreme',
              subCategories: [
                {
                  label: 'SAVERO A/T PRO',
                  entries: [
                    { size: '265/50R20', notes: 'All-Terrain Professional' },
                    { size: '285/50R20', notes: 'All-Terrain Professional' },
                    { size: '275/55R20', notes: 'All-Terrain Professional' },
                    { size: '265/60R18', notes: 'All-Terrain Professional' },
                    { size: '285/60R18', notes: 'All-Terrain Professional' },
                    { size: '255/65R17', notes: 'All-Terrain Professional' },
                    { size: '265/65R17', notes: 'All-Terrain Professional' },
                    { size: '275/65R17', notes: 'All-Terrain Professional' },
                    { size: 'LT265/70R17', notes: 'All-Terrain Professional' },
                    { size: 'LT285/70R17', notes: 'All-Terrain Professional' },
                    { size: '245/70R16', notes: 'All-Terrain Professional' },
                    { size: '255/70R16', notes: 'All-Terrain Professional' },
                    { size: '265/70R16', notes: 'All-Terrain Professional' },
                    { size: '275/70R16', notes: 'All-Terrain Professional' },
                    { size: '225/75R16', notes: 'All-Terrain Professional' },
                    { size: 'LT245/75R16', notes: 'All-Terrain Professional' },
                    { size: 'LT265/75R16', notes: 'All-Terrain Professional' },
                    { size: 'LT30X9.5R15', notes: 'All-Terrain Professional' },
                    { size: 'LT31X10.5R15', notes: 'All-Terrain Professional' },
                    { size: '205/70R15', notes: 'All-Terrain Professional' },
                    { size: '235/70R15', notes: 'All-Terrain Professional' },
                    { size: 'LT255/70R15', notes: 'All-Terrain Professional' },
                    { size: '265/70R15', notes: 'All-Terrain Professional' },
                    { size: '225/75R15', notes: 'All-Terrain Professional' },
                    { size: '235/75R15', notes: 'All-Terrain Professional' },
                  ]
                },
                {
                  label: 'SAVERO SUV',
                  entries: [
                    { size: '265/50R20', notes: '' },
                    { size: '285/50R20', notes: '' },
                    { size: '215/55R18', notes: '' },
                    { size: '225/55R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '225/60R18', notes: '' },
                    { size: '235/60R18', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/60R18', notes: '' },
                    { size: '225/65R18', notes: '' },
                    { size: '235/65R18', notes: '' },
                    { size: '215/55R17', notes: '' },
                    { size: '235/55R17', notes: '' },
                    { size: '215/60R17', notes: '' },
                    { size: '225/60R17', notes: '' },
                    { size: '255/60R17', notes: '' },
                    { size: '225/65R17', notes: '' },
                    { size: '235/65R17', notes: '' },
                    { size: '245/65R17', notes: '' },
                    { size: '265/65R17', notes: '' },
                    { size: '215/60R16', notes: '' },
                    { size: '235/60R16', notes: '' },
                    { size: '215/65R16', notes: '' },
                    { size: '255/65R16', notes: '' },
                    { size: '215/70R16', notes: '' },
                    { size: '225/70R16', notes: '' },
                    { size: '235/70R16', notes: '' },
                    { size: '245/70R16', notes: '' },
                    { size: '265/70R16', notes: '' },
                    { size: '275/70R16', notes: '' },
                    { size: '205/70R15', notes: '' },
                    { size: '215/70R15', notes: '' },
                    { size: '265/70R15', notes: '' },
                  ]
                },
                {
                  label: 'SAVERO M/T PRO',
                  entries: [
                    { size: '33X12.50R20', notes: 'Mud-Terrain Professional' },
                    { size: 'LT245/70R18', notes: 'Mud-Terrain Professional' },
                    { size: 'LT265/60R18', notes: 'Mud-Terrain Professional' },
                    { size: 'LT265/65R18', notes: 'Mud-Terrain Professional' },
                    { size: 'LT285/60R18', notes: 'Mud-Terrain Professional' },
                    { size: 'LT225/70R17', notes: 'Mud-Terrain Professional' },
                    { size: 'LT265/65R17', notes: 'Mud-Terrain Professional' },
                    { size: 'LT265/70R17', notes: 'Mud-Terrain Professional' },
                    { size: 'LT285/70R17', notes: 'Mud-Terrain Professional' },
                    { size: 'LT245/75R16', notes: 'Mud-Terrain Professional' },
                    { size: 'LT265/75R16', notes: 'Mud-Terrain Professional' },
                    { size: 'LT285/75R16', notes: 'Mud-Terrain Professional' },
                    { size: '30X9.50R15', notes: 'Mud-Terrain Professional' },
                    { size: '31X10.50R15', notes: 'Mud-Terrain Professional' },
                    { size: 'LT215/75R15', notes: 'Mud-Terrain Professional' },
                    { size: 'LT235/75R15', notes: 'Mud-Terrain Professional' },
                    { size: '27X8.50R14', notes: 'Mud-Terrain Professional' },
                    { size: '26X7.5R13', notes: 'Mud-Terrain Professional' },
                  ]
                },
                {
                  label: 'SAVERO M/T',
                  entries: [
                    { size: '245/75R16', notes: 'Mud-Terrain' },
                    { size: 'LT265/75R16', notes: 'Mud-Terrain' },
                    { size: '31X10.5R15', notes: 'Mud-Terrain' },
                    { size: '33X12.5R15', notes: 'Mud-Terrain' },
                    { size: 'LT235/75R15', notes: 'Mud-Terrain' },
                  ]
                },
                {
                  label: 'KOMODO EXTREME',
                  entries: [
                    { size: '35X12.5-16', notes: 'Extreme Off-Road' },
                    { size: '245/75-16', notes: 'Extreme Off-Road' },
                    { size: '265/75-16', notes: 'Extreme Off-Road' },
                    { size: '280/85-16', notes: 'Extreme Off-Road' },
                    { size: '29X9.5-15', notes: 'Extreme Off-Road' },
                    { size: '31X10.5-15', notes: 'Extreme Off-Road' },
                    { size: '33X10.5-15', notes: 'Extreme Off-Road' },
                    { size: '33X12.5-15', notes: 'Extreme Off-Road' },
                    { size: '27X8.5-14', notes: 'Extreme Off-Road' },
                  ]
                },
              ]
            },
            // ===== CHAMPIRO Series =====
            {
              name: 'CHAMPIRO',
              desc: 'Passenger, Eco & High Performance',
              subCategories: [
                {
                  label: 'CHAMPIRO HPY',
                  entries: [
                    { size: '255/35ZR20', notes: 'Ultra High Performance' },
                    { size: '275/40R20', notes: 'Ultra High Performance' },
                    { size: '255/45ZR20', notes: 'Ultra High Performance' },
                    { size: '255/45R20 EV', notes: 'Ultra High Performance' },
                    { size: '265/50R20', notes: 'Ultra High Performance' },
                    { size: '275/55R20', notes: 'Ultra High Performance' },
                    { size: '225/35ZR19', notes: 'Ultra High Performance' },
                    { size: '235/35ZR19', notes: 'Ultra High Performance' },
                    { size: '255/35ZR19', notes: 'Ultra High Performance' },
                    { size: '225/40ZR19', notes: 'Ultra High Performance' },
                    { size: '255/40ZR19', notes: 'Ultra High Performance' },
                    { size: '275/45R19', notes: 'Ultra High Performance' },
                    { size: '255/50ZR19', notes: 'Ultra High Performance' },
                    { size: '235/55R19', notes: 'Ultra High Performance' },
                    { size: '255/35ZR18', notes: 'Ultra High Performance' },
                    { size: '265/35ZR18', notes: 'Ultra High Performance' },
                    { size: '205/40ZR18', notes: 'Ultra High Performance' },
                    { size: '225/40ZR18', notes: 'Ultra High Performance' },
                    { size: '235/40ZR18', notes: 'Ultra High Performance' },
                    { size: '245/40ZR18', notes: 'Ultra High Performance' },
                    { size: '225/45ZR18', notes: 'Ultra High Performance' },
                    { size: '245/45ZR18', notes: 'Ultra High Performance' },
                    { size: '255/45ZR18', notes: 'Ultra High Performance' },
                    { size: '235/50ZR18', notes: 'Ultra High Performance' },
                    { size: '235/55ZR18', notes: 'Ultra High Performance' },
                    { size: '255/55ZR18', notes: 'Ultra High Performance' },
                    { size: '235/60R18', notes: 'Ultra High Performance' },
                    { size: '245/40ZR17', notes: 'Ultra High Performance' },
                    { size: '205/45ZR17', notes: 'Ultra High Performance' },
                    { size: '215/45ZR17', notes: 'Ultra High Performance' },
                    { size: '225/45ZR17', notes: 'Ultra High Performance' },
                    { size: '235/45ZR17', notes: 'Ultra High Performance' },
                    { size: '245/45ZR17', notes: 'Ultra High Performance' },
                    { size: '205/50ZR17', notes: 'Ultra High Performance' },
                    { size: '225/50ZR17', notes: 'Ultra High Performance' },
                    { size: '235/50ZR17', notes: 'Ultra High Performance' },
                    { size: '215/55ZR17', notes: 'Ultra High Performance' },
                    { size: '235/55R17', notes: 'Ultra High Performance' },
                    { size: '215/60R17', notes: 'Ultra High Performance' },
                    { size: '225/65R17', notes: 'Ultra High Performance' },
                    { size: '235/65R17', notes: 'Ultra High Performance' },
                    { size: '245/65R17', notes: 'Ultra High Performance' },
                    { size: '205/55ZR16', notes: 'Ultra High Performance' },
                  ]
                },
                {
                  label: 'CHAMPIRO GTX PRO2',
                  entries: [
                    { size: '215/35R18', notes: 'Ultra High Performance' },
                    { size: '215/40R18', notes: 'Ultra High Performance' },
                    { size: '225/40R18', notes: 'Ultra High Performance' },
                    { size: '245/45R18', notes: 'Ultra High Performance' },
                    { size: '205/40R17', notes: 'Ultra High Performance' },
                    { size: '215/40R17', notes: 'Ultra High Performance' },
                    { size: '205/45R17', notes: 'Ultra High Performance' },
                    { size: '215/45R17', notes: 'Ultra High Performance' },
                    { size: '225/45R17', notes: 'Ultra High Performance' },
                    { size: '235/45R17', notes: 'Ultra High Performance' },
                    { size: '205/50R17', notes: 'Ultra High Performance' },
                    { size: '215/50R17', notes: 'Ultra High Performance' },
                    { size: '225/50R17', notes: 'Ultra High Performance' },
                    { size: '235/50R17', notes: 'Ultra High Performance' },
                    { size: '225/55R17', notes: 'Ultra High Performance' },
                    { size: '195/45R16', notes: 'Ultra High Performance' },
                    { size: '185/50R16', notes: 'Ultra High Performance' },
                    { size: '195/50R16', notes: 'Ultra High Performance' },
                    { size: '205/50R16', notes: 'Ultra High Performance' },
                    { size: '185/55R16', notes: 'Ultra High Performance' },
                    { size: '195/55R16', notes: 'Ultra High Performance' },
                    { size: '205/55R16', notes: 'Ultra High Performance' },
                    { size: '195/50R15', notes: 'Ultra High Performance' },
                    { size: '185/55R15', notes: 'Ultra High Performance' },
                    { size: '195/55R15', notes: 'Ultra High Performance' },
                    { size: '185/60R14', notes: 'Ultra High Performance' },
                    { size: '195/60R14', notes: 'Ultra High Performance' },
                  ]
                },
                {
                  label: 'CHAMPIRO GTX PRO',
                  entries: [
                    { size: '235/40R18', notes: 'High Performance' },
                    { size: '225/45R18', notes: 'High Performance' },
                    { size: '235/45R18', notes: 'High Performance' },
                    { size: '215/55R17', notes: 'High Performance' },
                    { size: '205/60R16', notes: 'High Performance' },
                    { size: '215/60R16', notes: 'High Performance' },
                    { size: '225/60R16', notes: 'High Performance' },
                    { size: '235/60R16', notes: 'High Performance' },
                    { size: '185/60R15', notes: 'High Performance' },
                    { size: '195/60R15', notes: 'High Performance' },
                    { size: '205/60R15', notes: 'High Performance' },
                    { size: '175/65R15', notes: 'High Performance' },
                    { size: '185/65R15', notes: 'High Performance' },
                    { size: '195/65R15', notes: 'High Performance' },
                    { size: '205/65R15', notes: 'High Performance' },
                    { size: '185/65R14', notes: 'High Performance' },
                    { size: '195/65R14', notes: 'High Performance' },
                    { size: '185/65R13', notes: 'High Performance' },
                  ]
                },
                {
                  label: 'CHAMPIRO SX2',
                  entries: [
                    { size: '265/35ZR18', notes: 'Street Legal Racing' },
                    { size: '225/40ZR18', notes: 'Street Legal Racing' },
                    { size: '235/40ZR18', notes: 'Street Legal Racing' },
                    { size: '245/40ZR18', notes: 'Street Legal Racing' },
                    { size: '215/40ZR17', notes: 'Street Legal Racing' },
                    { size: '235/40ZR17', notes: 'Street Legal Racing' },
                    { size: '245/40ZR17', notes: 'Street Legal Racing' },
                    { size: '215/45ZR17', notes: 'Street Legal Racing' },
                    { size: '225/45R17', notes: 'Street Legal Racing' },
                    { size: '235/45ZR17', notes: 'Street Legal Racing' },
                    { size: '205/50R16', notes: 'Street Legal Racing' },
                    { size: '225/50R16', notes: 'Street Legal Racing' },
                    { size: '195/50R15', notes: 'Street Legal Racing' },
                    { size: '195/55R15', notes: 'Street Legal Racing' },
                  ]
                },
                {
                  label: 'CHAMPIRO SX-R',
                  entries: [
                    { size: '265/35R18', notes: 'Street Legal Racing' },
                    { size: '245/40R17', notes: 'Street Legal Racing' },
                    { size: '215/45R17', notes: 'Street Legal Racing' },
                    { size: '225/45R17', notes: 'Street Legal Racing' },
                    { size: '235/45R17', notes: 'Street Legal Racing' },
                    { size: '195/50R15', notes: 'Street Legal Racing' },
                  ]
                },
                {
                  label: 'CHAMPIRO ECOTEC',
                  entries: [
                    { size: '205/50R17', notes: 'Eco Performance' },
                    { size: '205/60R17', notes: 'Eco Performance' },
                    { size: '215/60R17', notes: 'Eco Performance' },
                    { size: '185/55R16', notes: 'Eco Performance' },
                    { size: '195/60R16', notes: 'Eco Performance' },
                    { size: '205/60R16', notes: 'Eco Performance' },
                    { size: '215/60R16', notes: 'Eco Performance' },
                    { size: '205/65R16', notes: 'Eco Performance' },
                    { size: '215/65R16', notes: 'Eco Performance' },
                    { size: '185/55R15', notes: 'Eco Performance' },
                    { size: '195/55R15', notes: 'Eco Performance' },
                    { size: '185/60R15', notes: 'Eco Performance' },
                    { size: '195/60R15', notes: 'Eco Performance' },
                    { size: '185/65R15', notes: 'Eco Performance' },
                    { size: '195/65R15', notes: 'Eco Performance' },
                    { size: '205/65R15', notes: 'Eco Performance' },
                    { size: '205/70R15', notes: 'Eco Performance' },
                    { size: '185/60R14', notes: 'Eco Performance' },
                    { size: '175/65R14', notes: 'Eco Performance' },
                    { size: '185/70R14', notes: 'Eco Performance' },
                    { size: '195/70R14', notes: 'Eco Performance' },
                    { size: '185/80R14', notes: 'Eco Performance' },
                    { size: '175/60R13', notes: 'Eco Performance' },
                    { size: '165/65R13', notes: 'Eco Performance' },
                    { size: '175/70R13', notes: 'Eco Performance' },
                    { size: '185/70R13', notes: 'Eco Performance' },
                    { size: '165/80R13', notes: 'Eco Performance' },
                    { size: '145/70R12', notes: 'Eco Performance' },
                  ]
                },
                {
                  label: 'CHAMPIRO ECO',
                  entries: [
                    { size: '195/60R15', notes: 'Eco Performance' },
                    { size: '175/65R15', notes: 'Eco Performance' },
                    { size: '175/65R14', notes: 'Eco Performance' },
                    { size: '185/65R14', notes: 'Eco Performance' },
                    { size: '185/60R13', notes: 'Eco Performance' },
                    { size: '165/70R13', notes: 'Eco Performance' },
                    { size: '145/80R13', notes: 'Eco Performance' },
                    { size: '155/80R13', notes: 'Eco Performance' },
                  ]
                },
                {
                  label: 'CHAMPIRO LUXE',
                  entries: [
                    { size: '225/50R17', notes: 'Luxury Touring' },
                    { size: '215/55R17', notes: 'Luxury Touring' },
                    { size: '225/55R17', notes: 'Luxury Touring' },
                    { size: '205/55R16', notes: 'Luxury Touring' },
                    { size: '205/65R16', notes: 'Luxury Touring' },
                  ]
                },
                {
                  label: 'CHAMPIRO BXT PLUS',
                  entries: [
                    { size: '175/70R12', notes: 'Micro / Compact' },
                    { size: '155/80R12', notes: 'Micro / Compact' },
                  ]
                },
              ]
            },
            // ===== MAXMILER Series =====
            {
              name: 'MAXMILER',
              desc: 'Commercial & Van',
              subCategories: [
                {
                  label: 'MAXMILER PRO',
                  entries: [
                    { size: '235/65R16C', notes: 'Commercial Van' },
                    { size: '175/75R16C', notes: 'Commercial Van' },
                    { size: '225/75R16C', notes: 'Commercial Van' },
                    { size: '195R15C', notes: 'Commercial Van' },
                    { size: '205/70R15C', notes: 'Commercial Van' },
                    { size: '225/70R15C', notes: 'Commercial Van' },
                    { size: '165R14C', notes: 'Commercial Van' },
                    { size: '175R14C', notes: 'Commercial Van' },
                    { size: '175/75R14C', notes: 'Commercial Van' },
                    { size: '185R14C', notes: 'Commercial Van' },
                    { size: '195R14C', notes: 'Commercial Van' },
                    { size: '165/80R13', notes: 'Commercial Van' },
                    { size: '165R13C', notes: 'Commercial Van' },
                    { size: '175R13C', notes: 'Commercial Van' },
                    { size: '155R12C', notes: 'Commercial Van' },
                  ]
                },
              ]
            },
          ]
        },
        falken: {
          name: 'Falken',
          logo: 'images/falken-logo.svg',
          models: [
            // ===== SINCERA SN832i — Comfort Touring =====
            {
              name: 'SINCERA SN832i',
              desc: 'Comfort Touring — Senyap, Nyaman & Irit',
              subCategories: [
                {
                  label: 'SINCERA SN832i',
                  entries: [
                    { size: '155/70 R12 73T', notes: '' },
                    { size: '175/70 R13 82T', notes: '' },
                    { size: '165/60 R14 75T', notes: '' },
                    { size: '175/65 R14 82T', notes: '' },
                    { size: '185/65 R14 86H', notes: '' },
                    { size: '185/70 R14 88T', notes: '' },
                    { size: '195/70 R14 91H', notes: '' },
                    { size: '165/50 R15 72H', notes: '' },
                    { size: '175/50 R15 75H', notes: '' },
                    { size: '195/50 R15 82H', notes: '' },
                    { size: '185/55 R15 82H', notes: '' },
                    { size: '195/55 R15 85H', notes: '' },
                    { size: '185/60 R15 84H', notes: '' },
                    { size: '195/60 R15 88H', notes: '' },
                    { size: '185/65 R15 88T', notes: '' },
                    { size: '195/65 R15 91H', notes: '' },
                    { size: '205/65 R15 94H', notes: '' },
                    { size: '215/65 R15 96H', notes: '' },
                    { size: '205/70 R15 96S', notes: '' },
                    { size: '205/55 R16 91H', notes: '' },
                  ]
                },
              ]
            },
            // ===== ZIEX ZE310R — Eco Performance =====
            {
              name: 'ZIEX ZE310R',
              desc: 'Eco Performance — Handling Presisi & Daya Cengkeram Basah',
              subCategories: [
                {
                  label: 'ZIEX ZE310R',
                  entries: [
                    { size: '185/65 R14 86H', notes: '' },
                    { size: '185/70 R14 88S', notes: '' },
                    { size: '175/50 R15 75H', notes: '' },
                    { size: '195/50 R15 82V', notes: '' },
                    { size: '185/55 R15 86V', notes: '' },
                    { size: '195/55 R15 85V', notes: '' },
                    { size: '175/60 R15 81H', notes: '' },
                    { size: '185/60 R15 84H', notes: '' },
                    { size: '195/60 R15 88H', notes: '' },
                    { size: '175/65 R15 84H', notes: '' },
                    { size: '185/65 R15 88H', notes: '' },
                    { size: '195/65 R15 91H', notes: '' },
                    { size: '205/65 R15 94H', notes: '' },
                    { size: '185/50 R16 81V', notes: '' },
                    { size: '195/45 R16 84V', notes: '' },
                    { size: '195/50 R16 84V', notes: '' },
                    { size: '205/50 R16 87V', notes: '' },
                    { size: '185/55 R16 83V', notes: '' },
                    { size: '195/55 R16 87V', notes: '' },
                    { size: '205/55 R16 91V', notes: '' },
                    { size: '195/60 R16 89V', notes: '' },
                    { size: '205/60 R16 92H', notes: '' },
                    { size: '215/60 R16 99H', notes: '' },
                    { size: '225/60 R16 98V', notes: '' },
                    { size: '235/60 R16 100W', notes: '' },
                    { size: '195/65 R16 92V', notes: '' },
                    { size: '205/65 R16 95H', notes: '' },
                    { size: '215/65 R16 98H', notes: '' },
                    { size: '205/40 R17 84W', notes: '' },
                    { size: '195/45 R17 85W', notes: '' },
                    { size: '205/45 R17 88W', notes: '' },
                    { size: '215/45 R17 91W', notes: '' },
                    { size: '205/50 R17 93W', notes: '' },
                    { size: '215/50 R17 91W', notes: '' },
                    { size: '205/55 R17 91V', notes: '' },
                    { size: '215/55 R17 94W', notes: '' },
                    { size: '225/55 R17 101W', notes: '' },
                    { size: '215/60 R17 96H', notes: '' },
                    { size: '225/60 R17 99V', notes: '' },
                    { size: '235/60 R17 102H', notes: '' },
                    { size: '215/65 R17 99V', notes: '' },
                    { size: '225/65 R17 102V', notes: '' },
                    { size: '225/40 R18 92W', notes: '' },
                    { size: '225/45 R18 95W', notes: '' },
                    { size: '225/50 R18 95W', notes: '' },
                    { size: '235/50 R18 101W', notes: '' },
                    { size: '225/55 R18 98V', notes: '' },
                    { size: '235/55 R18 100V', notes: '' },
                    { size: '225/60 R18 100H', notes: '' },
                    { size: '235/60 R18 103H', notes: '' },
                  ]
                },
              ]
            },
            // ===== WILDPEAK AT3WA — All-Terrain =====
            {
              name: 'WILDPEAK AT3WA',
              desc: 'All-Terrain — Traksi Tangguh Segala Medan',
              subCategories: [
                {
                  label: 'WILDPEAK AT3WA',
                  entries: [
                    { size: '265/70 R16 112T', notes: '' },
                    { size: '265/65 R17 112H', notes: '' },
                    { size: '265/60 R18 110H', notes: '' },
                  ]
                },
              ]
            },
            {
              name: 'AZENIS FK520',
              desc: 'Ultra High Performance - Sport & Precision',
              subCategories: [
                {
                  label: 'R20 - Large SUV & Luxury',
                  entries: [
                    { size: '245/40R20 99Y', notes: '' },
                    { size: '245/45R20 103Y', notes: '' },
                    { size: '255/45R20 105Y', notes: '' },
                    { size: '255/50R20 109Y', notes: '' },
                  ]
                },
              ]
            },
            // ===== ZIEX CT50 A/S - All-Season =====
            {
              name: 'ZIEX CT50 A/S',
              desc: 'All-Season - Performa Sepanjang Tahun',
              subCategories: [
                {
                  label: 'R20 - Large SUV',
                  entries: [
                    { size: '255/50R20 105V', notes: '' },
                  ]
                },
              ]
            },
            // ===== LINAM VAN01 - Commercial Van =====
            {
              name: 'LINAM VAN01',
              desc: 'Commercial Van - Tangguh & Andal',
              subCategories: [
                {
                  label: 'R14C - Light Commercial',
                  entries: [
                    { size: '185R14C 102/100R', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        hankook: {
          name: 'Hankook', logo: 'images/hankook-logo.svg',
          models: [
            { name: 'Ventus Prime4', sizes: '205/55R16 · 215/55R17 · 225/45R17', desc: 'Premium sport · Handling presisi' },
            {
              name: 'KINERGY',
              desc: 'All-Season & Comfort Touring',
              subCategories: [
                {
                  label: '4S2',
                  entries: [
                    { size: '185/55R15', notes: '' },
                    { size: '195/65R15', notes: '' },
                    { size: '205/60R16', notes: '' },
                  ]
                },
                {
                  label: 'PT',
                  entries: [
                    { size: '175/65R14', notes: '' },
                    { size: '185/65R14', notes: '' },
                    { size: '195/60R15', notes: '' },
                  ]
                },
              ]
            },
            { name: 'Dynapro HP2', sizes: '215/65R16 · 225/60R17 · 235/55R18', desc: 'SUV premium · Stabilitas tinggi' }
          ]
        },
        delium: {
          name: 'Delium', logo: 'images/delium-logo.png',
          models: [
            // ===== EVO TECHNO - Passenger Touring =====
            {
              name: 'EVO TECHNO',
              desc: 'Passenger Touring - Nyaman & Ekonomis',
              subCategories: [
                {
                  label: 'City & Compact (R12-R14)',
                  entries: [
                    { size: '155/70R12', notes: '' },
                    { size: '165/65R13', notes: '' },
                    { size: '165/70R13', notes: '' },
                    { size: '165/80R13', notes: '' },
                    { size: '175/70R13', notes: '' },
                    { size: '175/65R14', notes: '' },
                    { size: '185/70R14', notes: '' },
                    { size: '195/70R14', notes: '' },
                  ]
                },
                {
                  label: 'Sedan & MPV (R15)',
                  entries: [
                    { size: '185/55R15', notes: '' },
                    { size: '185/60R15', notes: '' },
                    { size: '185/65R15', notes: '' },
                    { size: '195/60R15', notes: '' },
                    { size: '195/65R15', notes: '' },
                    { size: '205/65R15', notes: '' },
                    { size: '205/70R15', notes: '' },
                  ]
                },
                {
                  label: 'Medium Sedan (R16)',
                  entries: [
                    { size: '195/55R16', notes: '' },
                    { size: '195/60R16', notes: '' },
                    { size: '205/55R16', notes: '' },
                    { size: '205/65R16', notes: '' },
                  ]
                },
              ]
            },
            // ===== EVO RAZE - Sport Performance =====
            {
              name: 'EVO RAZE',
              desc: 'Sport Performance - Handling & Gaya',
              subCategories: [
                {
                  label: 'R15 - Compact Sport',
                  entries: [
                    { size: '195/50R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                  ]
                },
                {
                  label: 'R16 - Medium Sport',
                  entries: [
                    { size: '195/50R16', notes: '' },
                  ]
                },
                {
                  label: 'R17 - Large Sport',
                  entries: [
                    { size: '205/45R17', notes: '' },
                    { size: '215/45R17', notes: '' },
                  ]
                },
                {
                  label: 'R18 - Ultra High Performance',
                  entries: [
                    { size: '225/45R18', notes: '' },
                  ]
                },
              ]
            },
            // ===== POWER SAVER - Commercial Van =====
            {
              name: 'POWER SAVER',
              desc: 'Commercial Van - Daya Tahan Tinggi',
              subCategories: [
                {
                  label: 'Light Truck (8PR)',
                  entries: [
                    { size: '165R13 8PR', notes: '' },
                    { size: '175R13 8PR', notes: '' },
                    { size: '185R14 8PR', notes: '' },
                    { size: '195R14 8PR', notes: '' },
                    { size: '195R15 8PR', notes: '' },
                  ]
                },
              ]
            },
            // ===== TERRA — All-Terrain & Mud-Terrain =====
            {
              name: 'TERRA',
              desc: 'Off-Road — All-Terrain & Mud-Terrain',
              subCategories: [
                {
                  label: 'CRUISER A/T',
                  entries: [
                    { size: '185/70R14', notes: '' },
                    { size: '195/70R14', notes: '' },
                    { size: '195/65R15', notes: '' },
                    { size: '205/70R15', notes: '' },
                    { size: '235/75R15', notes: '' },
                  ]
                },
                {
                  label: 'MANIA',
                  entries: [
                    { size: '31x10.5R15', notes: '' },
                  ]
                },
              ]
            },
            // ===== VELOCITA DTX - Sport Compact =====
            {
              name: 'VELOCITA DTX',
              desc: 'Sport Compact - Urban Performance',
              subCategories: [
                {
                  label: 'Sport Compact',
                  entries: [
                    { size: '195/50R15', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        swallow: {
          name: 'Swallow', logo: 'images/swallow-logo.png',
          models: [
            {
              name: 'HS',
              desc: 'Passenger — Economical & Reliable',
              subCategories: [
                {
                  label: '231',
                  entries: [
                    { size: '175/65R14', notes: '' },
                    { size: '185/65R14', notes: '' },
                    { size: '195/60R15', notes: '' },
                  ]
                },
                {
                  label: '237',
                  entries: [
                    { size: '185/55R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                    { size: '205/55R16', notes: '' },
                  ]
                },
                {
                  label: '229',
                  entries: [
                    { size: '155/80R13', notes: '' },
                    { size: '175/70R13', notes: '' },
                    { size: '165/65R14', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        michelin: {
          name: 'Michelin', logo: 'images/michelin-logo.svg',
            models: [
            // ===== PRIMACY — Premium Comfort =====
            {
              name: 'PRIMACY',
              desc: 'Premium Comfort — Nyaman, Irit & Inovatif',
              subCategories: [
                {
                  label: '5',
                  entries: [
                    { size: '205/55R16', notes: '' },
                    { size: '205/60R16', notes: '' },
                    { size: '205/65R16', notes: '' },
                    { size: '205/50R17', notes: '' },
                    { size: '205/55R17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '215/50R17', notes: '' },
                    { size: '215/55R17', notes: '' },
                    { size: '215/60R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '225/50R17', notes: '' },
                    { size: '225/55R17', notes: '' },
                    { size: '225/60R17', notes: '' },
                    { size: '235/45R17', notes: '' },
                    { size: '235/50R17', notes: '' },
                    { size: '235/55R17', notes: '' },
                    { size: '245/45R17', notes: '' },
                    { size: '215/45R18', notes: '' },
                    { size: '215/55R18', notes: '' },
                    { size: '225/45R18', notes: '' },
                    { size: '225/50R18', notes: '' },
                    { size: '235/50R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '245/45R18', notes: '' },
                    { size: '225/55R19', notes: '' },
                    { size: '235/55R19', notes: '' },
                  ]
                },
                {
                  label: '4',
                  entries: [
                    { size: '215/60R17', notes: '' },
                    { size: '225/50R18', notes: '' },
                    { size: '225/55R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '245/45R18', notes: 'Standard · ZP' },
                    { size: '245/50R18', notes: 'Standard · ZP' },
                  ]
                },
                {
                  label: 'SUV+',
                  entries: [
                    { size: '215/60R17', notes: '' },
                    { size: '225/65R17', notes: '' },
                    { size: '235/60R17', notes: '' },
                    { size: '235/65R17', notes: '' },
                    { size: '265/65R17', notes: '' },
                    { size: '215/50R18', notes: '' },
                    { size: '225/55R18', notes: '' },
                    { size: '225/60R18', notes: '' },
                    { size: '235/50R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '235/60R18', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/60R18', notes: '' },
                    { size: '225/55R19', notes: '' },
                    { size: '235/55R19', notes: '' },
                    { size: '235/55R20', notes: '' },
                    { size: '245/50R20', notes: '' },
                  ]
                },
                {
                  label: '3 (ZP)',
                  entries: [
                    { size: '205/55R17 ZP', notes: 'Runflat' },
                    { size: '225/50R17 ZP', notes: 'Runflat' },
                    { size: '225/55R17 ZP', notes: 'Runflat' },
                    { size: '225/45R18 ZP', notes: 'Runflat' },
                  ]
                },
                {
                  label: 'E PRIMACY',
                  entries: [
                    { size: '235/45R18', notes: 'EV' },
                    { size: '235/60R18', notes: 'EV' },
                    { size: '235/50R19', notes: 'EV' },
                    { size: '235/55R19', notes: 'EV' },
                    { size: '245/45R20', notes: 'EV' },
                    { size: '275/50R20', notes: 'EV' },
                  ]
                },
              ]
            },
            // ===== PILOT SPORT — High Performance =====
            {
              name: 'PILOT SPORT',
              desc: 'High Performance — Sport, Presisi & Inovasi',
              subCategories: [
                {
                  label: '5',
                  entries: [
                    { size: '205/40R17', notes: '' },
                    { size: '205/45R17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '215/55R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '225/50R17', notes: '' },
                    { size: '245/40R17', notes: '' },
                    { size: '245/45R17', notes: '' },
                    { size: '215/40R18', notes: '' },
                    { size: '215/45R18', notes: '' },
                    { size: '225/40R18', notes: '' },
                    { size: '225/45R18', notes: '' },
                    { size: '225/50R18', notes: '' },
                    { size: '235/40R18', notes: '' },
                    { size: '245/35R18', notes: '' },
                    { size: '245/40R18', notes: '' },
                    { size: '225/35R19', notes: '' },
                    { size: '235/35R19', notes: '' },
                    { size: '235/40R19', notes: '' },
                    { size: '245/35R19', notes: '' },
                    { size: '245/40R19', notes: '' },
                    { size: '255/35R19', notes: '' },
                    { size: '255/40R19', notes: '' },
                    { size: '235/35R20', notes: '' },
                    { size: '245/35R20', notes: '' },
                    { size: '245/40R20', notes: '' },
                    { size: '255/35R20', notes: '' },
                  ]
                },
                {
                  label: '4/4S',
                  entries: [
                    { size: '205/50R17', notes: 'PS4' },
                    { size: '225/45R17 ZP', notes: 'PS4 Runflat' },
                    { size: '235/45R17', notes: 'PS4' },
                    { size: '255/40R17', notes: 'PS4' },
                    { size: '215/35R18', notes: 'PS4S' },
                    { size: '225/40R18', notes: 'PS4S' },
                    { size: '225/40R18 ZP', notes: 'PS4 Runflat' },
                    { size: '225/45R18', notes: 'PS4' },
                    { size: '235/40R18', notes: 'PS4' },
                    { size: '245/40R18', notes: 'PS4' },
                    { size: '255/35R18', notes: 'PS4' },
                    { size: '255/40R18', notes: 'PS4' },
                    { size: '265/35R18', notes: 'PS4' },
                    { size: '235/35R19', notes: 'PS4S' },
                    { size: '245/35R19', notes: 'PS4S' },
                    { size: '255/35R19', notes: 'PS4S' },
                    { size: '265/35R19', notes: 'PS4S' },
                    { size: '275/35R19', notes: 'PS4S' },
                    { size: '285/35R19', notes: 'PS4S' },
                    { size: '245/35R20', notes: 'PS4S' },
                    { size: '255/35R20', notes: 'PS4S' },
                    { size: '265/35R20', notes: 'PS4S' },
                    { size: '275/30R20', notes: 'PS4' },
                    { size: '275/35R20', notes: 'PS4' },
                    { size: '285/35R20', notes: 'PS4' },
                    { size: '255/30R21', notes: 'PS4S' },
                    { size: '255/35R21', notes: 'PS4S' },
                    { size: '265/35R21', notes: 'PS4S' },
                    { size: '275/30R21', notes: 'PS4S' },
                    { size: '275/35R21', notes: 'PS4S' },
                    { size: '285/30R21', notes: 'PS4S' },
                    { size: '295/30R21', notes: 'PS4S' },
                    { size: '255/30R22', notes: 'PS4S' },
                    { size: '285/30R22', notes: 'PS4S' },
                    { size: '285/35R22', notes: 'PS4S' },
                    { size: '315/30R22', notes: 'PS4S' },
                  ]
                },
                {
                  label: '4 SUV',
                  entries: [
                    { size: '225/60R18', notes: '' },
                    { size: '235/50R18', notes: 'EMT' },
                    { size: '235/60R18', notes: '' },
                    { size: '255/55R18', notes: '' },
                    { size: '225/55R19', notes: '' },
                    { size: '235/45R19', notes: 'EMT' },
                    { size: '235/55R19', notes: 'EMT · Standard' },
                    { size: '245/35R19', notes: '' },
                    { size: '245/45R19', notes: '' },
                    { size: '255/45R19', notes: '' },
                    { size: '255/50R19', notes: '' },
                    { size: '255/55R19', notes: '' },
                    { size: '265/50R19', notes: '' },
                    { size: '275/55R19', notes: '' },
                    { size: '235/55R20', notes: '' },
                    { size: '245/45R20', notes: '' },
                    { size: '255/45R20', notes: '' },
                    { size: '255/50R20', notes: '' },
                    { size: '255/55R20', notes: '' },
                    { size: '265/45R20', notes: '' },
                    { size: '265/50R20', notes: '' },
                    { size: '275/40R20', notes: '' },
                    { size: '275/45R20', notes: '' },
                    { size: '275/50R20', notes: '' },
                    { size: '285/40R20', notes: '' },
                    { size: '285/45R20', notes: '' },
                    { size: '285/50R20', notes: '' },
                    { size: '295/40R20', notes: '' },
                    { size: '305/40R20', notes: '' },
                    { size: '235/50R21', notes: '' },
                    { size: '235/45R21', notes: '' },
                    { size: '245/45R21', notes: '' },
                    { size: '255/40R21', notes: '' },
                    { size: '265/40R21', notes: '' },
                    { size: '265/45R21', notes: '' },
                    { size: '275/40R21', notes: 'Standard · ZP' },
                    { size: '275/45R21', notes: '' },
                    { size: '285/40R21', notes: '' },
                    { size: '285/45R21', notes: '' },
                    { size: '295/35R21', notes: '' },
                    { size: '295/40R21', notes: '' },
                    { size: '315/35R21', notes: '' },
                    { size: '315/40R21', notes: '' },
                    { size: '325/30R21', notes: '' },
                    { size: '275/40R22', notes: '' },
                    { size: '285/40R22', notes: '' },
                    { size: '285/45R22', notes: '' },
                    { size: '295/40R22', notes: '' },
                    { size: '315/30R22', notes: '' },
                    { size: '295/35R23', notes: '' },
                  ]
                },
                {
                  label: 'CUP 2',
                  entries: [
                    { size: '225/40R18', notes: '' },
                    { size: '235/35R19', notes: '' },
                    { size: '245/35R19', notes: '' },
                    { size: '255/35R19', notes: '' },
                    { size: '265/35R19', notes: '' },
                    { size: '275/35R19', notes: '' },
                    { size: '255/35R20', notes: '' },
                    { size: '265/35R20', notes: '' },
                    { size: '275/30R20', notes: '' },
                    { size: '295/30R20', notes: '' },
                  ]
                },
                {
                  label: 'SUPER SPORT',
                  entries: [
                    { size: '245/35R18', notes: '' },
                    { size: '255/40R18', notes: '' },
                    { size: '275/40R18', notes: '' },
                    { size: '225/40R19', notes: '' },
                    { size: '245/35R19', notes: '' },
                    { size: '255/35R19', notes: '' },
                    { size: '255/45R19', notes: '' },
                    { size: '265/35R19', notes: '' },
                    { size: '265/40R19', notes: '' },
                    { size: '275/35R19', notes: '' },
                    { size: '285/40R19', notes: '' },
                    { size: '245/40R20', notes: '' },
                    { size: '255/35R20', notes: '' },
                    { size: '255/40R20', notes: '' },
                    { size: '265/35R20', notes: '' },
                    { size: '275/35R20', notes: '' },
                    { size: '285/30R20', notes: '' },
                    { size: '295/30R20', notes: '' },
                    { size: '295/35R20', notes: '' },
                    { size: '245/40R21', notes: 'ZP' },
                    { size: '285/35R21', notes: '' },
                    { size: '325/30R21', notes: '' },
                  ]
                },
                {
                  label: 'EV',
                  entries: [
                    { size: '255/45R19', notes: '' },
                    { size: '245/45R20', notes: '' },
                    { size: '255/45R20', notes: '' },
                    { size: '255/50R21', notes: '' },
                  ]
                },
                {
                  label: '3',
                  entries: [
                    { size: '245/45R19', notes: '' },
                    { size: '275/45R19', notes: '' },
                    { size: '285/35R20', notes: '' },
                  ]
                },
                {
                  label: '2',
                  entries: [
                    { size: '245/35R19', notes: '' },
                  ]
                },
              ]
            },
            // ===== LATITUDE — SUV Touring & Performance =====
            {
              name: 'LATITUDE',
              desc: 'SUV Touring & Performance — Stabil & Nyaman',
              subCategories: [
                {
                  label: 'SPORT 3',
                  entries: [
                    { size: '235/55R18', notes: '' },
                    { size: '235/60R18', notes: '' },
                    { size: '255/55R18', notes: 'ZP' },
                    { size: '235/55R19', notes: '' },
                    { size: '245/50R19', notes: 'ZP' },
                    { size: '255/50R19', notes: 'EMT · Standard' },
                    { size: '275/50R19', notes: '' },
                    { size: '275/55R19', notes: '' },
                    { size: '235/55R20', notes: '' },
                    { size: '245/45R20', notes: 'ZP' },
                    { size: '255/45R20', notes: '' },
                    { size: '265/45R20', notes: '' },
                    { size: '275/40R20', notes: 'ZP' },
                    { size: '275/45R20', notes: '' },
                    { size: '275/50R20', notes: '' },
                    { size: '285/40R20', notes: '' },
                    { size: '285/45R20', notes: '' },
                    { size: '295/40R20', notes: '' },
                    { size: '265/40R21', notes: '' },
                    { size: '285/40R21', notes: '' },
                    { size: '295/35R21', notes: '' },
                  ]
                },
                {
                  label: 'SPORT',
                  entries: [
                    { size: '275/55R19', notes: '' },
                  ]
                },
                {
                  label: 'TOUR HP',
                  entries: [
                    { size: '235/55R19', notes: '' },
                    { size: '255/50R19', notes: '' },
                  ]
                },
              ]
            },
            // ===== LTX TRAIL - SUV All-Terrain =====
            {
              name: 'LTX TRAIL',
              desc: 'SUV All-Terrain - Traksi Tangguh',
              subCategories: [
                {
                  label: 'SUV & 4x4',
                  entries: [
                    { size: '265/65R17', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/60R18', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        sailun: {
          name: 'Sailun', logo: 'images/sailun-logo.png',
          models: [
            // ===== ELITE 2 — Passenger Performance Series =====
            {
              name: 'ELITE 2',
              desc: 'Passenger Performance — Nyaman & Stabil',
              subCategories: [
                {
                  label: 'R18 — Premium Sedan & MPV',
                  entries: [
                    { size: '215/35R18', notes: '' },
                    { size: '235/40R18', notes: '' },
                    { size: '225/45R18', notes: '' },
                    { size: '235/45R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                  ]
                },
                {
                  label: 'R17 — Medium Sedan & Hatchback',
                  entries: [
                    { size: '205/40R17', notes: '' },
                    { size: '205/45R17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '235/45R17', notes: '' },
                    { size: '205/50R17', notes: '' },
                    { size: '215/50R17', notes: '' },
                    { size: '225/50R17', notes: '' },
                    { size: '215/55R17', notes: '' },
                    { size: '225/55R17', notes: '' },
                    { size: '205/60R17', notes: '' },
                    { size: '215/60R17', notes: '' },
                  ]
                },
                {
                  label: 'R16 — City Car & Compact Sedan',
                  entries: [
                    { size: '195/45R16', notes: '' },
                    { size: '195/50R16', notes: '' },
                    { size: '205/50R16', notes: '' },
                    { size: '185/55R16', notes: '' },
                    { size: '195/55R16', notes: '' },
                    { size: '205/55R16', notes: '' },
                    { size: '195/60R16', notes: '' },
                    { size: '205/60R16', notes: '' },
                    { size: '215/60R16', notes: '' },
                    { size: '225/60R16', notes: '' },
                    { size: '235/60R16', notes: '' },
                    { size: '205/65R16', notes: '' },
                    { size: '215/65R16', notes: '' },
                  ]
                },
                {
                  label: 'R15 — Compact & Entry-Level',
                  entries: [
                    { size: '195/50R15', notes: '' },
                    { size: '185/55R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                    { size: '185/60R15', notes: '' },
                    { size: '195/60R15', notes: '' },
                    { size: '205/60R15', notes: '' },
                    { size: '175/65R15', notes: '' },
                    { size: '185/65R15', notes: '' },
                    { size: '195/65R15', notes: '' },
                    { size: '205/65R15', notes: '' },
                    { size: '205/70R15', notes: '' },
                  ]
                },
                {
                  label: 'R14 — City Car',
                  entries: [
                    { size: '185/60R14', notes: '' },
                    { size: '175/65R14', notes: '' },
                    { size: '185/65R14', notes: '' },
                    { size: '195/65R14', notes: '' },
                    { size: '185/70R14', notes: '' },
                    { size: '195/70R14', notes: '' },
                    { size: '185/80R14', notes: '' },
                  ]
                },
                {
                  label: 'R13 & R12 — Micro / Compact',
                  entries: [
                    { size: '175/70R13', notes: '' },
                    { size: '165/80R13', notes: '' },
                    { size: '155/80R12', notes: '' },
                  ]
                },
              ]
            },
            // ===== ATREZO ZSR2 — High Performance & Ultra High Performance =====
            {
              name: 'ATREZO ZSR2',
              desc: 'High Performance — Sport & Ultra High Performance',
              subCategories: [
                {
                  label: 'R20 / ZR20',
                  entries: [
                    { size: '255/35ZR20', notes: '' },
                    { size: '275/40R20', notes: '' },
                    { size: '255/45R20', notes: '' },
                    { size: '255/45ZR20', notes: '' },
                    { size: '265/50R20', notes: '' },
                    { size: '275/55R20', notes: '' },
                  ]
                },
                {
                  label: 'R19 / ZR19',
                  entries: [
                    { size: '225/35ZR19', notes: '' },
                    { size: '235/35ZR19', notes: '' },
                    { size: '255/35ZR19', notes: '' },
                    { size: '225/40ZR19', notes: '' },
                    { size: '255/40ZR19', notes: '' },
                    { size: '275/45R19', notes: '' },
                    { size: '255/50ZR19', notes: '' },
                    { size: '235/55R19', notes: '' },
                  ]
                },
                {
                  label: 'R18 / ZR18',
                  entries: [
                    { size: '255/35ZR18', notes: '' },
                    { size: '265/35ZR18', notes: '' },
                    { size: '225/40ZR18', notes: '' },
                    { size: '235/40ZR18', notes: '' },
                    { size: '245/40ZR18', notes: '' },
                    { size: '225/45ZR18', notes: '' },
                    { size: '245/45ZR18', notes: '' },
                    { size: '255/45ZR18', notes: '' },
                    { size: '235/50ZR18', notes: '' },
                    { size: '235/55ZR18', notes: '' },
                    { size: '255/55ZR18', notes: '' },
                    { size: '235/60R18', notes: '' },
                  ]
                },
                {
                  label: 'R17 / ZR17',
                  entries: [
                    { size: '245/40ZR17', notes: '' },
                    { size: '205/45ZR17', notes: '' },
                    { size: '215/45ZR17', notes: '' },
                    { size: '225/45ZR17', notes: '' },
                    { size: '235/45ZR17', notes: '' },
                    { size: '245/45ZR17', notes: '' },
                    { size: '205/50ZR17', notes: '' },
                    { size: '225/50ZR17', notes: '' },
                    { size: '235/50ZR17', notes: '' },
                    { size: '215/55ZR17', notes: '' },
                    { size: '235/55R17', notes: '' },
                    { size: '225/65R17', notes: '' },
                    { size: '245/65R17', notes: '' },
                  ]
                },
                {
                  label: 'ZR16',
                  entries: [
                    { size: '205/55ZR16', notes: '' },
                  ]
                },
              ]
            },
            // ===== ATREZO R01 SPORT — Sport Performance =====
            {
              name: 'ATREZO R01 SPORT',
              desc: 'Sport Performance — Responsif & Presisi',
              subCategories: [
                {
                  label: 'R18 / ZR18',
                  entries: [
                    { size: '265/35ZR18', notes: '' },
                    { size: '265/35R18', notes: '' },
                    { size: '225/40ZR18', notes: '' },
                    { size: '235/40ZR18', notes: '' },
                    { size: '245/40ZR18', notes: '' },
                  ]
                },
                {
                  label: 'R17 / ZR17',
                  entries: [
                    { size: '215/40ZR17', notes: '' },
                    { size: '235/40ZR17', notes: '' },
                    { size: '245/40ZR17', notes: '' },
                    { size: '245/40R17', notes: '' },
                    { size: '215/45ZR17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '235/45ZR17', notes: '' },
                    { size: '235/45R17', notes: '' },
                  ]
                },
                {
                  label: 'R16 & R15',
                  entries: [
                    { size: '205/50R16', notes: '' },
                    { size: '195/50R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                  ]
                },
              ]
            },
            // ===== COMMERCIO PRO — Commercial Series =====
            {
              name: 'COMMERCIO PRO',
              desc: 'Commercial & Van — Tangguh & Andal',
              subCategories: [
                {
                  label: 'R16C — Light Truck',
                  entries: [
                    { size: '225/75R16C', notes: '' },
                    { size: '235/65R16C', notes: '' },
                  ]
                },
                {
                  label: 'R15C — Light Truck',
                  entries: [
                    { size: '195R15C', notes: '' },
                    { size: '205/70R15C', notes: '' },
                  ]
                },
                {
                  label: 'R14C — Commercial Van',
                  entries: [
                    { size: '175R14C', notes: '' },
                    { size: '185R14C', notes: '' },
                    { size: '195R14C', notes: '' },
                  ]
                },
                {
                  label: 'R13C — Commercial Van',
                  entries: [
                    { size: '165R13C', notes: '' },
                    { size: '175R13C', notes: '' },
                  ]
                },
              ]
            },
            // ===== ATREZO SUV T-CON — SUV Touring =====
            {
              name: 'ATREZO SUV T-CON',
              desc: 'SUV Touring — Nyaman di Segala Medan',
              subCategories: [
                {
                  label: 'R20 — Large SUV',
                  entries: [
                    { size: '265/50R20', notes: '' },
                  ]
                },
                {
                  label: 'R18 — Medium & Large SUV',
                  entries: [
                    { size: '215/55R18', notes: '' },
                    { size: '225/55R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '225/60R18', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/60R18', notes: '' },
                    { size: '225/65R18', notes: '' },
                  ]
                },
                {
                  label: 'R17 — Medium SUV',
                  entries: [
                    { size: '215/55R17', notes: '' },
                    { size: '235/55R17', notes: '' },
                    { size: '215/60R17', notes: '' },
                    { size: '225/60R17', notes: '' },
                    { size: '255/60R17', notes: '' },
                    { size: '225/65R17', notes: '' },
                    { size: '265/65R17', notes: '' },
                  ]
                },
                {
                  label: 'R16 — Compact SUV',
                  entries: [
                    { size: '215/60R16', notes: '' },
                    { size: '235/60R16', notes: '' },
                    { size: '215/65R16', notes: '' },
                    { size: '255/65R16', notes: '' },
                    { size: '215/70R16', notes: '' },
                    { size: '225/70R16', notes: '' },
                    { size: '245/70R16', notes: '' },
                    { size: '265/70R16', notes: '' },
                    { size: '275/70R16', notes: '' },
                  ]
                },
                {
                  label: 'R15 — Compact SUV',
                  entries: [
                    { size: '215/70R15', notes: '' },
                    { size: '265/70R15', notes: '' },
                  ]
                },
              ]
            },
            // ===== TERAMAX — All-Terrain & Mud-Terrain =====
            {
              name: 'TERAMAX',
              desc: 'Off-Road — All-Terrain & Mud-Terrain',
              subCategories: [
                {
                  label: 'A/T M',
                  entries: [
                    { size: '265/50R20', notes: '' },
                    { size: '275/55R20', notes: '' },
                    { size: '285/50R20', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/60R18', notes: '' },
                    { size: '255/65R17', notes: '' },
                    { size: '265/65R17', notes: '' },
                    { size: '275/65R17', notes: '' },
                    { size: 'LT265/70R17', notes: '' },
                    { size: 'LT285/70R17', notes: '' },
                    { size: '245/70R16', notes: '' },
                    { size: '265/70R16', notes: '' },
                    { size: '275/70R16', notes: '' },
                    { size: '225/75R16', notes: '' },
                    { size: '205/70R15', notes: '' },
                    { size: '235/70R15', notes: '' },
                    { size: '265/70R15', notes: '' },
                  ]
                },
                {
                  label: 'M/T',
                  entries: [
                    { size: 'LT265/60R18', notes: '' },
                    { size: 'LT265/65R18', notes: '' },
                    { size: 'LT245/70R18', notes: '' },
                    { size: 'LT265/65R17', notes: '' },
                    { size: 'LT225/70R17', notes: '' },
                    { size: 'LT265/70R17', notes: '' },
                    { size: 'LT285/70R17', notes: '' },
                    { size: 'LT245/75R16', notes: '' },
                    { size: 'LT265/75R16', notes: '' },
                    { size: '30X9.50R15', notes: '' },
                    { size: '31X10.50R15', notes: '' },
                    { size: 'LT215/75R15', notes: '' },
                    { size: 'LT235/75R15', notes: '' },
                    { size: '27X8.50R14', notes: '' },
                    { size: '26X7.5R13', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        blackhawk: {
          name: 'Blackhawk',
          logo: 'images/blackhawk-logo.png',
          models: [
            // ===== Street Performance =====
            {
              name: 'Street Performance',
              desc: 'Passenger & UHP Performance — HH31, HU71, HC01',
              subCategories: [
                {
                  label: 'STREET-H HH31',
                  entries: [
                    { size: '175/70R13 82T', notes: '' },
                    { size: '165/70R14 81T', notes: '' },
                    { size: '175/65R14 86T', notes: '' },
                    { size: '175/70R14 88T', notes: '' },
                    { size: '185/60R14 82H', notes: '' },
                    { size: '185/70R14 88H', notes: '' },
                    { size: '195/70R14 91T', notes: '' },
                    { size: '175/65R15 84H', notes: '' },
                    { size: '185/55R15 82V', notes: '' },
                    { size: '185/60R15 88V', notes: '' },
                    { size: '185/65R15 88V', notes: '' },
                    { size: '195/50R15 82V', notes: '' },
                    { size: '195/55R15 85V', notes: '' },
                    { size: '195/60R15 88V', notes: '' },
                    { size: '195/65R15 91V', notes: '' },
                    { size: '205/65R15 94V', notes: '' },
                    { size: '205/70R15 96T', notes: '' },
                    { size: '195/50R16 88V', notes: '' },
                    { size: '195/55R16 91V', notes: '' },
                    { size: '195/60R16 89V', notes: '' },
                    { size: '205/55R16 91V', notes: '' },
                    { size: '205/60R16 92V', notes: '' },
                    { size: '205/65R16 95H', notes: '' },
                    { size: '215/60R16 95V', notes: '' },
                  ]
                },
                {
                  label: 'STREET-H HU71 (UHP)',
                  entries: [
                    { size: '205/40R17 84Y', notes: '' },
                    { size: '205/45R17 88W', notes: '' },
                    { size: '205/50R17 93W', notes: '' },
                    { size: '215/45R17 91Y', notes: '' },
                    { size: '215/50R17 95W', notes: '' },
                    { size: '215/55R17 98W', notes: '' },
                    { size: '225/45R17 94Y', notes: '' },
                    { size: '225/50R17 98W', notes: '' },
                    { size: '225/55R17 101W', notes: '' },
                    { size: '225/40R18 92Y', notes: '' },
                    { size: '225/45R18 95Y', notes: '' },
                    { size: '225/50R18 99Y', notes: '' },
                    { size: '235/40R18 95Y', notes: '' },
                    { size: '235/45R18 98Y', notes: '' },
                    { size: '245/40R18 97Y', notes: '' },
                    { size: '255/35R19 96Y', notes: '' },
                    { size: '245/35R20 95Y', notes: '' },
                    { size: '255/45R20 105Y', notes: '' },
                  ]
                },
                {
                  label: 'BLACKHAWK HC01',
                  entries: [
                    { size: '185/70R14 92H', notes: '' },
                    { size: '185/65R15 88H', notes: '' },
                  ]
                },
              ]
            },
            // ===== AGILITY SUV =====
            {
              name: 'AGILITY SUV',
              desc: 'SUV & Off-Road Performance — HV71 Series',
              subCategories: [
                {
                  label: 'AGILITY SUV HV71',
                  entries: [
                    { size: '215/65R16 98H', notes: '' },
                    { size: '235/60R16 100H', notes: '' },
                    { size: '245/70R16 107T', notes: '' },
                    { size: '265/70R16 112H', notes: '' },
                    { size: '215/60R17 96H', notes: '' },
                    { size: '225/60R17 99H', notes: '' },
                    { size: '225/65R17 102H', notes: '' },
                    { size: '265/65R17 112H', notes: '' },
                    { size: '225/55R18 98V', notes: '' },
                    { size: '225/60R18 100H', notes: '' },
                    { size: '235/50R18 97V', notes: '' },
                    { size: '235/55R18 100V', notes: '' },
                    { size: '235/60R18 107V', notes: '' },
                    { size: '265/60R18 110H', notes: '' },
                    { size: '235/55R19 105V', notes: '' },
                    { size: '265/50R20 107H', notes: '' },
                  ]
                },
              ]
            },
            // ===== Commercial =====
            {
              name: 'Commercial',
              desc: 'Light Truck & Commercial Van — HC51, HL06',
              subCategories: [
                {
                  label: 'HISCEND-H CARGO HC51',
                  entries: [
                    { size: '165R13C 94/93S', notes: '' },
                    { size: '175R13C 97/95S', notes: '' },
                    { size: '185R14C', notes: '' },
                    { size: '195R14C', notes: '' },
                    { size: '195R15C', notes: '' },
                    { size: '195/70R15C 104/102R', notes: '' },
                    { size: '205/70R15C 106/104R', notes: '' },
                    { size: '215/70R15C 109/107S', notes: '' },
                    { size: '225/70R15C 112/110S', notes: '' },
                    { size: '205/65R16C 107/105T', notes: '' },
                    { size: '205/75R16C 113/111T', notes: '' },
                    { size: '215/65R16C 109/107T', notes: '' },
                    { size: '215/75R16C 116/114R', notes: '' },
                    { size: '225/65R16C 112/110T', notes: '' },
                    { size: '225/75R16C 121/120R', notes: '' },
                    { size: '235/65R16C 121/119R', notes: '' },
                    { size: '195/75R16C 110/108R', notes: '' },
                  ]
                },
                {
                  label: 'HISCEND-H HL06',
                  entries: [
                    { size: '205/70R15C 106/104R', notes: '' },
                  ]
                },
              ]
            },
          ]
        },
        accelera: {
          name: 'Accelera',
          logo: 'images/accelera-logo.png',
          models: [
            // ===== PHI Series — Ultra High Performance =====
            {
              name: 'PHI',
              desc: 'Ultra High Performance — 18"–22" Street & Track',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '245/35ZR22 XL', notes: '' },
                    { size: '255/30ZR22 Y XL', notes: '' },
                    { size: '245/25ZR21', notes: '' },
                    { size: '235/30ZR21', notes: '' },
                    { size: '255/30ZR21 XL', notes: '' },
                    { size: '255/35ZR21', notes: '' },
                    { size: '245/40R21 XL', notes: '' },
                    { size: '215/30R20', notes: '' },
                    { size: '225/30ZR20 XL', notes: '' },
                    { size: '235/30ZR20 XL', notes: '' },
                    { size: '245/30ZR20 XL', notes: '' },
                    { size: '255/30ZR20 XL', notes: '' },
                    { size: '265/30ZR20 XL', notes: '' },
                    { size: '225/35ZR20 XL', notes: '' },
                    { size: '235/35ZR20 XL', notes: '' },
                    { size: '255/40ZR20 XL', notes: '' },
                    { size: '255/30ZR19 XL', notes: '' },
                    { size: '265/30ZR19 XL', notes: '' },
                    { size: '215/35ZR19 XL', notes: '' },
                    { size: '265/35ZR19 XL', notes: '' },
                    { size: '215/40ZR19 XL', notes: '' },
                    { size: '245/40ZR19 XL', notes: '' },
                    { size: '255/40ZR19 XL', notes: '' },
                    { size: '245/45ZR19 XL', notes: '' },
                    { size: '255/45ZR19 XL', notes: '' },
                    { size: '205/35ZR18 XL', notes: '' },
                    { size: '265/35ZR18 XL', notes: '' },
                    { size: '255/40ZR18 XL', notes: '' },
                    { size: '205/45ZR18 XL', notes: '' },
                    { size: '215/45ZR18 XL', notes: '' },
                    { size: '255/45ZR18 XL', notes: '' },
                    { size: '195/40R17 XL', notes: '' },
                    { size: '245/45ZR17 XL', notes: '' },
                    { size: '255/25ZR21', notes: '' },
                    { size: '245/30ZR21', notes: '' },
                    { size: '245/35ZR21', notes: '' },
                    { size: '255/35ZR20 XL', notes: '' },
                    { size: '225/35ZR18 XL', notes: '' },
                    { size: '215/50ZR18 XL', notes: '' },
                    { size: '245/50R18', notes: '' },
                    { size: '185/35R17 XL', notes: '' },
                    { size: '225/35R17', notes: '' },
                    { size: '165/40R17', notes: '' },
                    { size: '215/40ZR17 XL', notes: '' },
                    { size: '245/40ZR17 XL', notes: '' },
                    { size: '205/45ZR17 XL', notes: '' },
                    { size: '235/45ZR17 XL', notes: '' },
                    { size: '235/50R17 XL', notes: '' },
                    { size: '245/55ZR17', notes: '' },
                    { size: '205/40R16', notes: '' },
                    { size: '195/45ZR16 XL', notes: '' },
                    { size: '205/45ZR16 XL', notes: '' },
                    { size: '215/45R16', notes: '' },
                    { size: '185/50R16', notes: '' },
                    { size: '225/50ZR16 XL', notes: '' },
                    { size: '185/55R16', notes: '' },
                    { size: '195/55R16 XL', notes: '' },
                    { size: '215/55ZR16 XL', notes: '' },
                    { size: '225/55ZR16 XL', notes: '' },
                    { size: '195/45R15', notes: '' },
                    { size: '175/50R15', notes: '' },
                    { size: '195/50R15', notes: '' },
                    { size: '205/50ZR15 XL', notes: '' },
                    { size: '175/55R15', notes: '' },
                    { size: '185/55R15', notes: '' },
                    { size: '195/55R15 XL', notes: '' },
                    { size: '205/55R15', notes: '' },
                    { size: '295/25ZR21 XL', notes: '' },
                    { size: '275/30R21', notes: '' },
                    { size: '275/25ZR20 XL', notes: '' },
                    { size: '285/25R20', notes: '' },
                    { size: '275/30ZR20 XL', notes: '' },
                    { size: '285/30ZR20 XL', notes: '' },
                    { size: '295/30ZR20', notes: '' },
                    { size: '305/30ZR20', notes: '' },
                    { size: '275/35ZR20 XL', notes: '' },
                    { size: '275/30ZR19 XL', notes: '' },
                    { size: '285/30R19', notes: '' },
                    { size: '295/30ZR19', notes: '' },
                    { size: '275/35ZR19 XL', notes: '' },
                    { size: '285/35ZR19 XL', notes: '' },
                    { size: '275/35ZR18 XL', notes: '' },
                    { size: '275/40ZR18 XL', notes: '' },
                  ]
                },
              ]
            },
            // ===== Iota — EV, High Performance & SUV =====
            {
              name: 'Iota',
              desc: 'EV, High Performance & SUV — Silent, Efficient & Tangguh',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '245/50ZR18 104W XL', notes: '' },
                    { size: '235/50ZR18 101Y XL', notes: '' },
                    { size: '225/50ZR18 99W XL', notes: '' },
                    { size: '215/50ZR18 97W XL', notes: '' },
                    { size: '255/45ZR18 103Y XL', notes: '' },
                    { size: '245/45ZR18 100Y XL', notes: '' },
                    { size: '235/45ZR18 98Y XL', notes: '' },
                    { size: '225/45ZR18 95Y XL', notes: '' },
                    { size: '215/45ZR18 93W XL', notes: '' },
                    { size: '255/40ZR18 99Y XL', notes: '' },
                    { size: '245/40ZR18 97Y XL', notes: '' },
                    { size: '235/40ZR18 95Y XL', notes: '' },
                    { size: '225/40ZR18 92Y XL', notes: '' },
                    { size: '215/40ZR18 89Y XL', notes: '' },
                    { size: '205/40ZR18 86Y XL', notes: '' },
                    { size: '245/35ZR18 92Y XL', notes: '' },
                    { size: '255/35ZR18 94Y XL', notes: '' },
                    { size: '275/35ZR18 99Y XL', notes: '' },
                    { size: '235/55ZR17 103W XL', notes: '' },
                    { size: '225/55ZR17 101W XL', notes: '' },
                    { size: '215/55ZR17 98W XL', notes: '' },
                    { size: '205/55R17 95V XL', notes: '' },
                    { size: '245/50ZR17 99W', notes: '' },
                    { size: '225/50ZR17 98 XL', notes: '' },
                    { size: '215/50ZR17 95W XL', notes: '' },
                    { size: '205/50ZR17 93W XL', notes: '' },
                    { size: '245/45ZR17 99W XL', notes: '' },
                    { size: '235/45ZR17 97W XL', notes: '' },
                    { size: '225/45ZR17 94W XL', notes: '' },
                    { size: '215/45ZR17 91W XL', notes: '' },
                    { size: '205/45ZR17 88W XL', notes: '' },
                    { size: '255/40ZR17 98W XL', notes: '' },
                    { size: '215/40ZR17 87W XL', notes: '' },
                    { size: '205/40ZR17 84W XL', notes: '' },
                    { size: '195/40R17 81V XL', notes: '' },
                    { size: '165/40R17 72V XL', notes: '' },
                    { size: '235/60ZR16 104W XL', notes: '' },
                    { size: '225/55ZR16 99W XL', notes: '' },
                    { size: '215/55ZR16 97W XL', notes: '' },
                    { size: '205/55ZR16 94W XL', notes: '' },
                    { size: '195/55R16 XL', notes: '' },
                    { size: '185/55R16 83V', notes: '' },
                    { size: '205/50ZR16 91W XL', notes: '' },
                    { size: '165/50R16 77V XL', notes: '' },
                    { size: '185/50R16 81V', notes: '' },
                    { size: '195/50R16 88V XL', notes: '' },
                    { size: '225/50ZR16 XL', notes: '' },
                    { size: '205/45ZR16 87W XL', notes: '' },
                    { size: '215/45ZR16 90W', notes: '' },
                    { size: '175/75R16 83Q XL', notes: '' },
                    { size: '205/55R15 92V XL', notes: '' },
                    { size: '195/55R15 89V XL', notes: '' },
                    { size: '175/55R15 77T', notes: '' },
                    { size: '185/55R15 86V XL', notes: '' },
                    { size: '165/55R15 75V', notes: '' },
                    { size: '205/50ZR15 89W XL', notes: '' },
                    { size: '195/50R15 82V', notes: '' },
                    { size: '175/50R15 75H', notes: '' },
                    { size: '195/45R15 78V', notes: '' },
                    { size: '205/60R14 88H', notes: '' },
                    { size: '245/45ZR20 103Y XL', notes: '' },
                    { size: '245/45ZR19 102Y XL', notes: '' },
                    { size: '235/40ZR19 96Y XL', notes: '' },
                    { size: '235/50ZR18 101Y XL', notes: '' },
                    { size: '225/50ZR18 99W XL', notes: '' },
                    { size: '245/45ZR18 100Y XL', notes: '' },
                    { size: '235/45ZR18 98Y XL', notes: '' },
                    { size: '225/45ZR18 95Y XL', notes: '' },
                    { size: '245/40ZR18 97Y XL', notes: '' },
                    { size: '235/40ZR18 95Y XL', notes: '' },
                    { size: '225/40ZR18 92Y XL', notes: '' },
                    { size: '215/40ZR18 89Y XL', notes: '' },
                    { size: '235/55ZR17 103W XL', notes: '' },
                    { size: '225/55ZR17 101W XL', notes: '' },
                    { size: '215/55ZR17 98W XL', notes: '' },
                    { size: '225/50ZR17 98 XL', notes: '' },
                    { size: '215/50ZR17 95W XL', notes: '' },
                    { size: '205/50ZR17 93W XL', notes: '' },
                    { size: '225/45ZR17 94W XL', notes: '' },
                    { size: '205/55ZR16 94W XL', notes: '' },
                    { size: '265/40R20', notes: '' },
                    { size: '275/40R20 XL', notes: '' },
                    { size: '295/40R20', notes: '' },
                    { size: '235/45ZR20', notes: '' },
                    { size: '255/45ZR20', notes: '' },
                    { size: '265/45R20', notes: '' },
                    { size: '275/45ZR20', notes: '' },
                    { size: '235/50R20 XL', notes: '' },
                    { size: '245/50R20 XL', notes: '' },
                    { size: '255/50R20 XL', notes: '' },
                    { size: '265/50ZR20', notes: '' },
                    { size: '285/50R20 XL', notes: '' },
                    { size: '235/55R20', notes: '' },
                    { size: '255/55R20', notes: '' },
                    { size: '275/55R20', notes: '' },
                    { size: '275/60R20 XL', notes: '' },
                    { size: '275/45R19 XL', notes: '' },
                    { size: '285/45R19 XL', notes: '' },
                    { size: '235/50R19 XL', notes: '' },
                    { size: '255/50ZR19', notes: '' },
                    { size: '265/50ZR19 XL', notes: '' },
                    { size: '225/55R19', notes: '' },
                    { size: '235/55R19', notes: '' },
                    { size: '245/55R19 XL', notes: '' },
                    { size: '255/55R19 XL', notes: '' },
                    { size: '255/60R19', notes: '' },
                    { size: '265/55R19', notes: '' },
                    { size: '215/55R18', notes: '' },
                    { size: '225/55R18', notes: '' },
                    { size: '235/55R18', notes: '' },
                    { size: '255/55R18 XL', notes: '' },
                    { size: '235/60R18 XL', notes: '' },
                    { size: '245/60R18', notes: '' },
                    { size: '255/60R18 XL', notes: '' },
                    { size: '265/60R18 XL', notes: '' },
                    { size: '235/65R18 XL', notes: '' },
                    { size: '255/65R18', notes: '' },
                    { size: '215/60R17', notes: '' },
                    { size: '225/60R17', notes: '' },
                    { size: '235/60R17', notes: '' },
                    { size: '255/60R17 XL', notes: '' },
                    { size: '235/65R17 XL', notes: '' },
                    { size: '265/65R17 XL', notes: '' },
                    { size: '265/70R16 XL', notes: '' },
                  ]
                },
              ]
            },
            // ===== 651 SPORT — Track & Competition =====
            {
              name: '651 SPORT',
              desc: 'Track & Competition — TW200, TW100, Pro SC Semi-Slick',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '305/30R20', notes: '' },
                    { size: '245/35R20', notes: '' },
                    { size: '295/35R20', notes: '' },
                    { size: '305/30R19', notes: '' },
                    { size: '265/30R19', notes: '' },
                    { size: '235/35R19', notes: '' },
                    { size: '245/35R19', notes: '' },
                    { size: '285/35R19', notes: '' },
                    { size: '295/35R19', notes: '' },
                    { size: '235/40R19', notes: '' },
                    { size: '265/40R19', notes: '' },
                    { size: '215/35R18', notes: '' },
                    { size: '255/35R18', notes: '' },
                    { size: '265/35R18', notes: '' },
                    { size: '285/35R18', notes: '' },
                    { size: '225/40R18', notes: '' },
                    { size: '235/40R18', notes: '' },
                    { size: '245/40R18', notes: '' },
                    { size: '265/40R18', notes: '' },
                    { size: '235/50R18', notes: '' },
                    { size: '255/50R18', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '215/40R17', notes: '' },
                    { size: '235/40R17', notes: '' },
                    { size: '245/40R17', notes: '' },
                    { size: '255/40R17', notes: '' },
                    { size: '205/45ZR17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '235/45R17', notes: '' },
                    { size: '195/50R16', notes: '' },
                    { size: '205/50ZR16', notes: '' },
                    { size: '225/45R15', notes: '' },
                    { size: '195/50R15', notes: '' },
                    { size: '205/50R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                    { size: '175/50R13', notes: '' },
                    { size: '165/60R12', notes: '' },
                    { size: '265/30R19', notes: '' },
                    { size: '235/35R19', notes: '' },
                    { size: '215/35R18', notes: '' },
                    { size: '255/35R18', notes: '' },
                    { size: '265/35R18', notes: '' },
                    { size: '285/35R18', notes: '' },
                    { size: '225/40R18', notes: '' },
                    { size: '235/40R18', notes: '' },
                    { size: '245/40R18', notes: '' },
                    { size: '255/50R18', notes: '' },
                    { size: '235/40R17', notes: '' },
                    { size: '245/40R17', notes: '' },
                    { size: '255/40R17', notes: '' },
                    { size: '205/45ZR17', notes: '' },
                    { size: '215/45R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '235/45R17', notes: '' },
                    { size: '195/50R16', notes: '' },
                    { size: '205/50ZR16', notes: '' },
                    { size: '225/45R15', notes: '' },
                    { size: '195/50R15', notes: '' },
                    { size: '205/50R15', notes: '' },
                    { size: '195/55R15', notes: '' },
                    { size: '255/35R18', notes: '' },
                    { size: '285/35R18', notes: '' },
                    { size: '265/35R18', notes: '' },
                    { size: '235/40R18', notes: '' },
                    { size: '225/40R18', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '255/50R18', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '295/35R24 XL', notes: '' },
                    { size: '305/35R24 XL', notes: '' },
                    { size: '325/35ZR23', notes: '' },
                    { size: '285/35R23', notes: '' },
                    { size: '285/40R23', notes: '' },
                    { size: '285/25ZR22 XL', notes: '' },
                    { size: '235/30R22 XL', notes: '' },
                    { size: '245/30R22 XL', notes: '' },
                    { size: '255/30ZR22', notes: '' },
                    { size: '265/30R22 XL', notes: '' },
                    { size: '295/30R22 XL', notes: '' },
                    { size: '315/30ZR22 XL', notes: '' },
                    { size: '255/35R22', notes: '' },
                    { size: '265/35ZR22 XL', notes: '' },
                    { size: '275/35ZR22 XL', notes: '' },
                    { size: '285/35R22 XL', notes: '' },
                    { size: '325/35R22 110Y', notes: '' },
                    { size: '265/40R22 XL', notes: '' },
                    { size: '275/40R22', notes: '' },
                    { size: '285/40R22 XL', notes: '' },
                    { size: '305/40ZR22', notes: '' },
                    { size: '275/45ZR22', notes: '' },
                    { size: '285/45R22', notes: '' },
                    { size: '305/45R22', notes: '' },
                    { size: '275/50R22 XL', notes: '' },
                  ]
                },
              ]
            },
            // ===== 351 SPORT GD — Sport Performance =====
            {
              name: '351 SPORT GD',
              desc: 'Sport Performance — Responsif & Presisi',
              subCategories: [
                {
                  label: '351 Sport GD',
                  entries: [
                    { size: '285/35R18 101W', notes: '' },
                    { size: '265/35R18 93W', notes: '' },
                    { size: '255/35R18 94W', notes: '' },
                    { size: '245/40R18 88W', notes: '' },
                    { size: '235/40R18 91W', notes: '' },
                    { size: '225/40R18 88W', notes: '' },
                    { size: '245/40R17 95W', notes: '' },
                    { size: '255/40R17 98W', notes: '' },
                    { size: '235/40R17', notes: '' },
                    { size: '225/45R17', notes: '' },
                    { size: '215/45R17 87W', notes: '' },
                    { size: '205/50R16 87W', notes: '' },
                    { size: '225/45R15 91W', notes: '' },
                    { size: '195/50R15', notes: '' },
                  ]
                },
              ]
            },
            // ===== ECO PLUSH — Comfort Touring =====
            {
              name: 'ECO PLUSH',
              desc: 'Comfort Touring — Senyap, Nyaman & Irit',
              subCategories: [
                {
                  label: 'Eco Plush',
                  entries: [
                    { size: '215/65R17', notes: '' },
                    { size: '195/60R16', notes: '' },
                    { size: '205/60R16 XL', notes: '' },
                    { size: '215/60R16 XL', notes: '' },
                    { size: '225/60ZR16 XL', notes: '' },
                    { size: '205/65R16', notes: '' },
                    { size: '215/65R16 XL', notes: '' },
                    { size: '165/60R15', notes: '' },
                    { size: '175/60R15', notes: '' },
                    { size: '185/60R15 XL', notes: '' },
                    { size: '195/60R15', notes: '' },
                    { size: '205/60R15', notes: '' },
                    { size: '225/60R15 XL', notes: '' },
                    { size: '175/65R15', notes: '' },
                    { size: '185/65R15', notes: '' },
                    { size: '195/65R15', notes: '' },
                    { size: '205/65R15', notes: '' },
                    { size: '215/65R15 XL', notes: '' },
                    { size: '205/70R15', notes: '' },
                    { size: '215/70R15', notes: '' },
                    { size: '165/60R14', notes: '' },
                    { size: '185/60R14', notes: '' },
                    { size: '155/65R14', notes: '' },
                    { size: '165/65R14', notes: '' },
                    { size: '175/65R14', notes: '' },
                    { size: '185/65R14', notes: '' },
                    { size: '165/70R14', notes: '' },
                    { size: '175/70R14', notes: '' },
                    { size: '185/70R14', notes: '' },
                    { size: '195/70R14', notes: '' },
                    { size: '175/70R13', notes: '' },
                    { size: '185/70R13', notes: '' },
                    { size: '165/80R13', notes: '' },
                  ]
                },
              ]
            },
            // ===== Omikron — All-Terrain & Highway =====
            {
              name: 'Omikron',
              desc: 'All-Terrain & Highway — Traksi Tangguh untuk SUV & 4x4',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '275/45R22', notes: '' },
                    { size: '275/55R20', notes: '' },
                    { size: '33x12.5R20', notes: '' },
                    { size: '35x12.5R20', notes: '' },
                    { size: '37x13.5R20', notes: '' },
                    { size: '285/65R18', notes: '' },
                    { size: '275/70R18', notes: '' },
                    { size: '315/70R17', notes: '' },
                    { size: '235/80R17', notes: '' },
                    { size: '35x12.5R17', notes: '' },
                    { size: '235/85R16', notes: '' },
                    { size: '185/85R16', notes: '' },
                    { size: '235/75R15', notes: '' },
                    { size: '30x9.5R15', notes: '' },
                    { size: '31x10.5R15', notes: '' },
                    { size: '265/50R20', notes: 'OWL' },
                    { size: '285/50R20', notes: 'OWL' },
                    { size: '265/60R18', notes: 'OWL' },
                    { size: '285/60R18', notes: 'OWL' },
                    { size: '275/70R18', notes: 'OWL' },
                    { size: '265/65R17', notes: 'OWL' },
                    { size: '265/70R17', notes: 'OWL' },
                    { size: '285/70R17', notes: 'OWL' },
                    { size: '245/75R17', notes: 'OWL' },
                    { size: '285/75R17', notes: 'OWL' },
                    { size: '235/80R17', notes: 'OWL' },
                    { size: '245/70R16', notes: 'OWL' },
                    { size: '265/70R16 XL', notes: 'OWL' },
                    { size: '245/75R16', notes: 'OWL' },
                    { size: '265/75R16', notes: 'OWL' },
                    { size: '235/85R16', notes: 'OWL' },
                    { size: '235/75R15', notes: 'OWL' },
                    { size: '215/75R15', notes: 'OWL' },
                    { size: '235/70R15', notes: 'OWL' },
                    { size: '285/50R20', notes: 'OOL' },
                    { size: '225/60R18', notes: '' },
                    { size: '265/65R18', notes: '' },
                    { size: '225/65R17 XL', notes: '' },
                    { size: '235/65R17', notes: '' },
                    { size: '245/65R17', notes: '' },
                    { size: '245/70R17', notes: '' },
                    { size: '265/70R17', notes: '' },
                    { size: '235/80R17', notes: '' },
                    { size: '215/70R16', notes: '' },
                    { size: '235/70R16', notes: '' },
                    { size: '245/70R16', notes: '' },
                    { size: '255/70R16', notes: '' },
                    { size: '225/75R16', notes: '' },
                    { size: '245/75R16', notes: '' },
                    { size: '265/75R16', notes: '' },
                    { size: '235/85R16', notes: '' },
                  ]
                },
              ]
            },
            // ===== Epsilon — All-Terrain & Highway =====
            {
              name: 'Epsilon',
              desc: 'All-Terrain & Highway — Off-Road Tangguh & Bobot Berat',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '285/55R20', notes: '' },
                    { size: '305/55R20', notes: '' },
                    { size: '275/65R20', notes: '' },
                    { size: '265/70R17', notes: '' },
                    { size: '225/75R16', notes: '' },
                    { size: '245/75R16', notes: '' },
                    { size: '255/70R16', notes: '' },
                    { size: '285/75R16', notes: '' },
                    { size: '31x10.5R15', notes: '' },
                    { size: '235/65R16', notes: '' },
                    { size: '225/70R16', notes: '' },
                    { size: '215/85R16', notes: '' },
                    { size: '235/85R16', notes: '' },
                    { size: '31x10.5R15', notes: '' },
                  ]
                },
              ]
            },
            // ===== M/T & OFF-ROAD =====
            {
              name: 'M/T & OFF-ROAD',
              desc: 'Mud-Terrain, Extreme Off-Road — M/T 01, Badak X-Treme',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '33x12.5R20', notes: '' },
                    { size: '35x12.5R20', notes: '' },
                    { size: '37x13.5R20', notes: '' },
                    { size: '265/60R18', notes: '' },
                    { size: '285/65R18', notes: '' },
                    { size: '255/70R18', notes: '' },
                    { size: '35x12.5R18', notes: '' },
                    { size: '265/65R17', notes: '' },
                    { size: '285/70R17', notes: '' },
                    { size: '315/70R17', notes: '' },
                    { size: '255/75R17', notes: '' },
                    { size: '235/80R17', notes: '' },
                    { size: '35x12.5R17', notes: '' },
                    { size: '235/70R16', notes: '' },
                    { size: '285/75R16', notes: '' },
                    { size: '315/75R16', notes: '' },
                    { size: '185/85R16', notes: 'OWL' },
                    { size: '235/85R16', notes: 'OWL' },
                    { size: '235/75R15', notes: 'OWL' },
                    { size: '195/80R15', notes: 'OWL' },
                    { size: '28x8.5R15 LT 102Q', notes: 'OWL' },
                    { size: '30x9.5R15', notes: 'OWL' },
                    { size: '31x10.5R15 Q', notes: 'OWL' },
                    { size: '33x12.5R15', notes: 'C/T' },
                    { size: '165/80R13', notes: 'C/T' },
                    { size: '275/45R22', notes: '' },
                    { size: '265/50R20', notes: '' },
                    { size: '275/55R20', notes: '' },
                    { size: '40x13.5R17', notes: '' },
                    { size: '37x11.5R17', notes: '' },
                    { size: '265/75R16 10PR', notes: '' },
                    { size: '35x10.5R16', notes: '' },
                    { size: '35x12.5R15', notes: '' },
                    { size: '33x12.5R15', notes: '' },
                    { size: '35x10.5R15', notes: '' },
                    { size: '33x10.5R15', notes: '' },
                    { size: '31x10.5R15', notes: '' },
                    { size: '27x8.5R14', notes: '' },
                    { size: '225/50R18', notes: '' },
                    { size: '900R16 (6PR) 115/110Q', notes: '' },
                    { size: '900R17 (6PR) 115/112Q', notes: '' },
                    { size: '255/60R15 102T', notes: '' },
                    { size: '235/45R21 101Y', notes: '' },
                    { size: '255/30ZR22 95Y', notes: '' },
                    { size: '285/35R22 106W XL', notes: '' },
                    { size: '285/25ZR20 93Y', notes: '' },
                    { size: '235/30ZR20 88Y', notes: '' },
                    { size: '275/30ZR20 97Y XL', notes: '' },
                    { size: '245/35ZR20 95Y XL', notes: '' },
                    { size: '255/35ZR20 97Y XL', notes: '' },
                    { size: '275/35ZR20 10Y XL', notes: '' },
                    { size: '225/40ZR20 94W', notes: '' },
                    { size: '245/40ZR20 99Y XL', notes: '' },
                    { size: '255/40ZR20 101Y XL', notes: '' },
                    { size: '245/45ZR20 103Y XL', notes: '' },
                    { size: '155/70R19 84Q', notes: '' },
                    { size: '175/60R19 86Q', notes: '' },
                    { size: '245/45ZR19 102Y XL', notes: '' },
                    { size: '235/45ZR19 99Y XL', notes: '' },
                    { size: '225/45ZR19 96W XL', notes: '' },
                    { size: '255/40ZR19 100Y XL', notes: '' },
                    { size: '245/40ZR19 98Y XL', notes: '' },
                    { size: '235/40ZR19 96Y XL', notes: '' },
                    { size: '225/40ZR19 93Y XL', notes: '' },
                    { size: '275/35ZR19 100Y XL', notes: '' },
                    { size: '265/35ZR19 98Y XL', notes: '' },
                    { size: '255/35ZR19 96Y XL', notes: '' },
                  ]
                },
              ]
            },
            // ===== ALPHA & SIGMA — Entry Level =====
            {
              name: 'ALPHA & SIGMA',
              desc: 'Entry Level Performance — Compact & City Car',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '205/35ZR18 XL', notes: '' },
                    { size: '195/50R14', notes: '' },
                    { size: '185/55R14', notes: '' },
                    { size: '185/60R13', notes: '' },
                    { size: '215/35ZR18 XL', notes: '' },
                    { size: '165/55R13', notes: '' },
                    { size: '175/60R13', notes: '' },
                    { size: '165/65R13', notes: '' },
                  ]
                },
              ]
            },
            // ===== RALLY — RA 162 =====
            {
              name: 'RALLY',
              desc: 'Rally & Competition — RA 162',
              subCategories: [
                {
                  label: 'RA 162',
                  entries: [
                    { size: '205/65R15', notes: '' },
                    { size: '185/65R15', notes: '' },
                    { size: '185/65R14', notes: '' },
                  ]
                },
              ]
            },
            // ===== COMMERCIAL — Light Truck & Van =====
            {
              name: 'COMMERCIAL',
              desc: 'Light Truck, Van & Commercial — Ultra-3, Ultra-5, NPM',
              subCategories: [
                {
                  label: 'Semua Ukuran',
                  entries: [
                    { size: '235/65R16 8PR', notes: '' },
                    { size: '195/75R16 8PR', notes: '' },
                    { size: '195/70R15 8PR', notes: '' },
                    { size: '195R15C 8PR', notes: '' },
                    { size: '185R14C 8PR', notes: '' },
                    { size: '195R14C 8PR', notes: '' },
                    { size: '175R13C 8PR', notes: '' },
                    { size: '185/60R13', notes: '' },
                    { size: '205/75R14C', notes: '' },
                    { size: '195R14C 8PR', notes: '' },
                    { size: '225/40R18 NPM', notes: '' },
                    { size: '225/45R17 NPM', notes: '' },
                    { size: '225/55R17 NPM', notes: '' },
                  ]
                },
              ]
            },
          ]
        }
,
        goodyear: {
          name: 'Goodyear',
          logo: 'images/goodyear-logo.png',
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
                    { size: '225/55R19', notes: '111V · XL' },
                    { size: '245/50R20', notes: '102V · FP' },
                    { size: '265/50R20', notes: '102V · FP' },
                  ]
                },
              ]
            },
            // ===== EAGLE F1 Series (High Performance) =====

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
                    { size: '225/55R18', notes: '109W · XL' },
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
          ]
        },
        yokohama: {
          name: 'Yokohama',
          logo: 'images/yokohama-logo.png',
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
      };
