module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'field': {
          // Verde césped
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        'ball': {
          // Blanco y negro clásico
          light: '#FFFFFF',
          dark: '#212121',
        },
        'team': {
          // Colores deportivos vibrantes
          primary: '#1E88E5',   // Azul equipación
          secondary: '#FF3D00', // Naranja energético
          accent: '#FFC107',    // Amarillo arbitral
        },
        'skill': {
          low: '#EF5350',      // Rojo para nivel bajo
          medium: '#FF9800',    // Naranja para nivel medio
          high: '#2196F3',      // Azul para nivel alto
          master: '#4CAF50',    // Verde para nivel maestro
        }
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
