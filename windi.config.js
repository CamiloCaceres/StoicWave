import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  theme: {
    // ...
  },
  shortcuts:{
    'btn': 'px-1.5 p-1 border-2 w-min text-lg font-medium focus:outline-none transition',
    'btn-primary': 'border-t-gray-200 border-l-gray-200 border-r-gray-500 border-b-gray-500 focus:(border-b-gray-200 border-r-gray-200 border-l-gray-500 border-t-gray-500) hover:(border-b-gray-200 border-r-gray-200 border-l-gray-500 border-t-gray-500)',
    'btn-secondary': 'border-t-gray-200 border-l-gray-200 border-r-gray-400 border-b-gray-400 text-gray-500 focus:(border-b-gray-200 border-r-gray-200 border-l-gray-400 border-t-gray-400 text-gray-600) hover:(border-b-gray-200 border-r-gray-200 border-l-gray-400 border-t-gray-400 text-gray-600)',
    'btn-accent': '',
  },
  plugins: [
    require('windicss/plugin/forms'),
    // ...
  ],
})