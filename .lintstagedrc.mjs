export default {
  "*.{js,jsx,ts,tsx}": ["eslint"],
  "*.{ts,tsx}": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,mjs,jsx,ts,tsx,json,css,md,yaml,yml}": ["prettier --check"],
};
