import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
  theme: { extend: { colors: { ink: 'var(--ink)', paper: 'var(--paper)', signal: 'var(--signal)', cyan: 'var(--cyan)' } } },
  plugins: [],
};
export default config;
