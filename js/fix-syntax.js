const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'brands-data.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the orphaned closing } between WRANGLER DT and yokohama
// Pattern: WRANGLER DT closing }, followed by blank lines, then orphaned },
var pattern = /            \},\n[ ]*\n[ ]*\n[ ]*\n            \},\n          \]\n        },\n        yokohama:/;
if (pattern.test(content)) {
  content = content.replace(
    pattern,
    `            },\n          ]\n        },\n        yokohama:`
  );
  console.log('Fixed orphaned CARGO closing brace');
}

// Verify the fix
var opens = (content.match(/{/g) || []).length;
var closes = (content.match(/}/g) || []).length;
console.log('Braces: ' + opens + ' opening, ' + closes + ' closing');

// Try to parse as JavaScript
try {
  eval(content);
  console.log('✅ File parses as valid JavaScript');
} catch(e) {
  console.log('❌ Still has syntax error:', e.message);
  // Find the area around the error
  var goodyearIdx = content.indexOf('goodyear:');
  var yokohamaIdx = content.indexOf('yokohama:');
  console.log('goodyear starts at char:', goodyearIdx);
  console.log('yokohama starts at char:', yokohamaIdx);
  
  // Check around the transition
  var transitionArea = content.substring(goodyearIdx, yokohamaIdx + 200);
  var lastLines = transitionArea.split('\n').slice(-30);
  console.log('\n=== Last 30 lines of goodyear area ===');
  lastLines.forEach(function(l, i) { console.log(i + ': ' + l); });
}

fs.writeFileSync(filePath, content, 'utf-8');
