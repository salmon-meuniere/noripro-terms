import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme";

export default <Config> {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    'scroll-pt-20',
    'scroll-pt-32',
    'lg:scroll-pt-4',
    'lg:scroll-pt-20',
    'lg:scroll-pt-24',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f9fe',
          '100': '#e3f1fb',
          '200': '#c1e5f6',
          '300': '#8ad0ef',
          '400': '#4bb8e5',
          '500': '#249fd3',
          '600': '#1680b3',
          '700': '#136591',
          '800': '#145678',
          '900': '#164864',
          '950': '#0f3045',
        },
      }
    },
    fontFamily: {
      'title': ['Akshar', 'var(--localized-font, \'\')', 'Meiryo', ...defaultTheme.fontFamily.sans],
      'sans': ['var(--localized-font, \'\')', ...defaultTheme.fontFamily.sans],
      'content-sans': ['var(--localized-font-p, var(--localized-font))', ...defaultTheme.fontFamily.sans, {
        fontFeatureSettings: '"palt" 1'
      }],
    }
  },
  plugins: [],
}