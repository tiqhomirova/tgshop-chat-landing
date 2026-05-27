# Source

This is the Vite + React + Tailwind source for the landing.

## Build & deploy

```bash
cd source
npm install
npm run build
# then copy the build output into the parent repo:
rm -f ../assets/index-*.js ../assets/index-*.css
cp dist/assets/* ../assets/
cp dist/index.html ../index.html
git -C .. add -A
git -C .. commit -m "Rebuild bundle"
git -C .. push
```

## Editing

- Main component: `src/App.tsx` (~2540 lines, generated from Figma)
- Entry: `src/main.tsx`
- Global CSS: `src/index.css` (Tailwind)
