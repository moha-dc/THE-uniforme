'use strict';
const fs   = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const srcHtml = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
const css     = fs.readFileSync(path.join(root, 'style.css'), 'utf8');

// Remplace le <link> CSS par un <style> inliné
const out = srcHtml.replace(
  '<link rel="stylesheet" href="../style.css" />',
  `<style>${css}</style>`
);

if (out === srcHtml) {
  console.error('⚠️  Marqueur CSS introuvable dans src/index.html');
  process.exit(1);
}

fs.writeFileSync(path.join(root, 'index.html'), out, 'utf8');
console.log(`✓ index.html généré — CSS inliné (${(css.length / 1024).toFixed(1)} KiB)`);
