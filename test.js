
const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

console.log("Testing Product Showcase Gallery...\n");

// Test 1: HTML structure
assert(html.includes("<!DOCTYPE html>"));
console.log("PASS: HTML structure");

// Test 2: Three product cards
const cards = html.match(/class="product-card fade-in"/g) || [];
assert.strictEqual(cards.length, 3);
console.log("PASS: Three product cards");

// Test 3: Theme toggle button
assert(html.includes('id="themeToggle"'));
console.log("PASS: Theme toggle button");

// Test 4: CSS file linked
assert(html.includes('href="style.css"'));
console.log("PASS: CSS linked");

// Test 5: JavaScript file linked
assert(html.includes('src="script.js"'));
console.log("PASS: JavaScript linked");

// Test 6: Product buttons
const buttons = html.match(/class="view-button"/g) || [];
assert.strictEqual(buttons.length, 3);
console.log("PASS: Three product buttons");

// Test 7: CSS animation
assert(css.includes("@keyframes"));
console.log("PASS: CSS animations");

// Test 8: JavaScript syntax
new Function(js);
console.log("PASS: JavaScript syntax");

console.log("\nAll 8 checks passed!");
