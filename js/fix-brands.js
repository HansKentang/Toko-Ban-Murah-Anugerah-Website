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

// 2. Remove the entire Eagle F1 SPORT section
// The section starts with:
//             {
//               name: 'EAGLE F1 SPORT',
// and ends right before:
//             {
//               name: 'EAGLE F1 ASYMMETRIC 6',
// Use a regex to remove it
const eagleF1SportRegex = /            \{\s*\n\s*name: 'EAGLE F1 SPORT',[\s\S]*?(?=\s*\{\s*\n\s*name: 'EAGLE F1 ASYMMETRIC 6')/;
content = content.replace(eagleF1SportRegex, '');

// 3. Fix Eagle F1 Asymmetric 6 - remove 225/55R17 and 225/40R18 entries
content = content.replace(
  `                    { size: '225/55R17', notes: '97Y · XL' },
                    { size: '225/40R18', notes: '92Y · XL' },`,
  ''
);

// 4. Fix Eagle F1 Asymmetric 6 SUV - change 255/55R18 to 225/55R18
content = content.replace(
  `{ size: '255/55R18', notes: '109W · XL' },`,
  `{ size: '225/55R18', notes: '109W · XL' },`
);

// 5. Fix Assurance MaxGuard SUV - change 255/55R19 to 225/55R19
content = content.replace(
  `{ size: '255/55R19', notes: '111V · XL' },`,
  `{ size: '225/55R19', notes: '111V · XL' },`
);

// 6. Remove Wrangler Duratrac section
// Starts with:       {
//               name: 'WRANGLER DURATRAC',
// Ends right before: {
//               name: 'WRANGLER DURATRAC RT',
const wranglerDtRegex = /          \{\s*\n\s*name: 'WRANGLER DURATRAC',[\s\S]*?(?=\s*\{\s*\n\s*name: 'WRANGLER DURATRAC RT')/;
content = content.replace(wranglerDtRegex, '');

// 7. Remove Wrangler Duratrac RT section
// Starts with:       {
//               name: 'WRANGLER DURATRAC RT',
// Ends right before: {
//               name: 'WRANGLER AT SILENTTRAK',
const wranglerDtRtRegex = /          \{\s*\n\s*name: 'WRANGLER DURATRAC RT',[\s\S]*?(?=\s*\{\s*\n\s*name: 'WRANGLER AT SILENTTRAK')/;
content = content.replace(wranglerDtRtRegex, '');

// 8. Remove Wrangler AT SilentTrak section
// Starts with:       {
//               name: 'WRANGLER AT SILENTTRAK',
// Ends right before: {
//               name: 'CARGO',
const wranglerAtRegex = /          \{\s*\n\s*name: 'WRANGLER AT SILENTTRAK',[\s\S]*?(?=\s*\{\s*\n\s*name: 'CARGO')/;
content = content.replace(wranglerAtRegex, '');

// 9. Remove Cargo section
// Starts with:       {
//               name: 'CARGO',
// Ends right before: ],\n        }\n      }, (which is the closing of goodyear models)
const cargoRegex = /          \{\s*\n\s*name: 'CARGO',[\s\S]*?\],\n        \}\n      },?\n/;
content = content.replace(cargoRegex, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully applied all Goodyear corrections');
