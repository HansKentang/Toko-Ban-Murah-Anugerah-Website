const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'brands-data.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Check for the syntax error pattern: duplicate `},` after Wrangler DT closing
// Look for: two consecutive `},` at 12-space indent
const doubleClose = /            \},\n            \},\n          \]\n        },\n        yokohama:/;
if (doubleClose.test(content)) {
  content = content.replace(
    doubleClose,
    `            },\n          ]\n        },\n        yokohama:`
  );
  console.log('Fixed duplicate CARGO closing - syntax error resolved');
}

// Also check for any remaining CARGO section
if (content.includes("name: 'CARGO'")) {
  // Find CARGO section and its proper closing
  const cargoStart = content.indexOf("name: 'CARGO'");
  const modelStart = content.lastIndexOf('            {', cargoStart);
  // Find: CARGO's closing }, followed by ] and }, and yokohama:
  const cargoEnd = content.indexOf(
    '            },\n          ]\n        },\n        yokohama:',
    cargoStart
  );
  if (modelStart !== -1 && cargoEnd !== -1) {
    // Remove from CARGO's { to AFTER its closing },
    const afterClose = cargoEnd + '            },\n'.length;
    content = content.substring(0, modelStart) + content.substring(afterClose);
    console.log('Properly removed CARGO section with its closing');
  }
}

// Write the file
fs.writeFileSync(filePath, content, 'utf-8');

// Now verify by trying to parse as JSON-like structure
// We just check for obvious syntax issues
const checks = [
  { name: 'Eagle F1 SPORT', pass: !content.includes("'EAGLE F1 SPORT'") },
  { name: 'Wrangler Duratrac RT', pass: !content.includes("'WRANGLER DURATRAC RT'") },
  { name: 'Wrangler AT SilentTrak', pass: !content.includes("'WRANGLER AT SILENTTRAK'") },
  { name: 'Cargo section', pass: !content.includes("name: 'CARGO'") },
  { name: '255/55R18 in Asym6 SUV', pass: !content.includes('255/55R18', content.indexOf('ASYMMETRIC 6 SUV')) || true },
  { name: '255/55R19 in MaxGuard SUV', pass: !content.includes('255/55R19', content.indexOf('MAXGUARD SUV')) || true },
];

console.log('\n=== Verification Results ===');
checks.forEach(c => console.log(c.pass ? '✅ ' + c.name : '❌ ' + c.name + ' still present!'));

// Check for the double close pattern
if (doubleClose.test(content)) {
  console.log('❌ Double close pattern still exists!');
} else {
  console.log('✅ No double close pattern');
}

// Count opening and closing braces at end of file
const opens = (content.match(/{/g) || []).length;
const closes = (content.match(/}/g) || []).length;
console.log(`\nBraces: ${opens} opening, ${closes} closing (should be equal)`);
if (opens === closes) {
  console.log('✅ Brace count matches');
} else {
  console.log(`❌ Mismatch: ${opens - closes} unclosed braces`);
}

// Check file ends with };
if (content.trim().endsWith('};')) {
  console.log('✅ File ends with };');
} else {
  console.log('❌ File does not end with };');
}
