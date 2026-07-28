# KBAM × Maryville Website Starter

A responsive landing page for the Maryville Rebels Fall 2026 Collection.

## Preview
Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Replace before launch
1. In `script.js`, replace the Google Form URL.
2. In `index.html`, replace both `August __, 2026` placeholders.
3. Replace the email and social links.
4. Replace temporary artwork previews with official transparent PNG files.
5. Add final pickup, return, exchange, and defect policies.

## Canva export settings
Export logos and designs as transparent PNG files, 2000–3000 px wide, tightly cropped. Put them in `assets/brand` and `assets/designs`.

Example replacement:
```html
<div class="preview"><img src="assets/designs/hand-letter-rebels.png" alt="Hand Letter Rebels artwork"></div>
```
Add to CSS:
```css
.preview img{max-width:78%;max-height:78%;object-fit:contain}
```
