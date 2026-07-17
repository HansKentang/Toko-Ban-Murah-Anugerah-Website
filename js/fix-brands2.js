const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'brands-data.js');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Fix Assurance Triplemax - remove 205/55R16 entry
content = content.replace(
  `            {
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
            },`,
  `            {
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
            },`
);

// 2. Remove Eagle F1 SPORT section (between MAXGUARD SUV and ASYMMETRIC 6)
const eagleF1SportStart = content.indexOf("name: 'EAGLE F1 SPORT'");
if (eagleF1SportStart !== -1) {
  const modelStart = content.lastIndexOf('          {', eagleF1SportStart);
  const asymm6Start = content.indexOf("name: 'EAGLE F1 ASYMMETRIC 6'");
  if (modelStart !== -1 && asymm6Start !== -1) {
    const modelObjStart = content.lastIndexOf('            {', eagleF1SportStart);
    content = content.substring(0, modelObjStart) + content.substring(asymm6Start);
    console.log('Removed Eagle F1 SPORT section');
  }
}

// 3. Fix Eagle F1 Asymmetric 6 - remove 225/55R17 and 225/40R18 entries
const removedLines = content.replace(
  `                    { size: '225/55R17', notes: '97Y · XL' },
                    { size: '225/40R18', notes: '92Y · XL' },`,
  ''
);
if (removedLines !== content) {
  content = removedLines;
  console.log('Removed 225/55R17 and 225/40R18 from Eagle F1 Asymmetric 6');
}

// 4. Fix Eagle F1 Asymmetric 6 SUV - change 255/55R18 to 225/55R18
const fixed255 = content.replace(
  `{ size: '255/55R18', notes: '109W · XL' },`,
  `{ size: '225/55R18', notes: '109W · XL' },`
);
if (fixed255 !== content) {
  content = fixed255;
  console.log('Fixed Eagle F1 Asymmetric 6 SUV 255→225/55R18');
}

// 5. Fix Assurance MaxGuard SUV - change 255/55R19 to 225/55R19
const fixed255_2 = content.replace(
  `{ size: '255/55R19', notes: '111V · XL' },`,
  `{ size: '225/55R19', notes: '111V · XL' },`
);
if (fixed255_2 !== content) {
  content = fixed255_2;
  console.log('Fixed Assurance MaxGuard SUV 255→225/55R19');
}

// 6. Remove Wrangler Duratrac section
const duratracStart = content.indexOf("name: 'WRANGLER DURATRAC'");
if (duratracStart !== -1) {
  const modelObjStart = content.lastIndexOf('            {', duratracStart);
  const duratracRTStart = content.indexOf("name: 'WRANGLER DURATRAC RT'");
  if (modelObjStart !== -1 && duratracRTStart !== -1) {
    content = content.substring(0, modelObjStart) + content.substring(duratracRTStart);
    console.log('Removed WRANGLER DURATRAC');
  }
}

// 7. Remove Wrangler Duratrac RT section
const duratracRTStart = content.indexOf("name: 'WRANGLER DURATRAC RT'");
if (duratracRTStart !== -1) {
  const modelObjStart = content.lastIndexOf('            {', duratracRTStart);
  const silentTrakStart = content.indexOf("name: 'WRANGLER AT SILENTTRAK'");
  if (modelObjStart !== -1 && silentTrakStart !== -1) {
    content = content.substring(0, modelObjStart) + content.substring(silentTrakStart);
    console.log('Removed WRANGLER DURATRAC RT');
  }
}

// 8. Remove Wrangler AT SilentTrak section
const silentTrakStart = content.indexOf("name: 'WRANGLER AT SILENTTRAK'");
if (silentTrakStart !== -1) {
  const modelObjStart = content.lastIndexOf('            {', silentTrakStart);
  const cargoStart = content.indexOf("name: 'CARGO'");
  if (modelObjStart !== -1 && cargoStart !== -1) {
    content = content.substring(0, modelObjStart) + content.substring(cargoStart);
    console.log('Removed WRANGLER AT SILENTTRAK');
  }
}

// 9. Remove Cargo section (last model in goodyear)
const cargoStart = content.indexOf("name: 'CARGO'");
if (cargoStart !== -1) {
  const modelObjStart = content.lastIndexOf('            {', cargoStart);
  // Find the goodyear models closing `]` and goodyear object closing after CARGO
  const goodyearEnd = content.indexOf('            },\n          ]\n        },\n        yokohama:', cargoStart);
  if (modelObjStart !== -1 && goodyearEnd !== -1) {
    // Remove from CARGO model opening to just before yokohama
    content = content.substring(0, modelObjStart) + content.substring(goodyearEnd);
    console.log('Removed CARGO section');
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully applied all Goodyear corrections');
