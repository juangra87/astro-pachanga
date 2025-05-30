# ⚽ Pachanga Frontend

Una aplicación web para organizar partidos de fútbol sala y fútbol, con un sistema inteligente de distribución de jugadores en equipos equilibrados basado en habilidades y estado físico.

## 🚀 Stack Tecnológico

- **[Astro](https://astro.build)** - Framework web para sitios estáticos y dinámicos
- **[Vue 3](https://vuejs.org)** - Framework progresivo para interfaces de usuario
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework CSS utility-first
- **[pnpm](https://pnpm.io)** - Gestor de paquetes rápido y eficiente
- **[GitHub Pages](https://pages.github.com)** - Hosting y despliegue automático

## 🎯 Funcionalidades Principales

- **Gestión de Jugadores**: 
  - Crear y administrar perfiles de jugadores
  - Asignar niveles de habilidad
  - Registrar estado físico actual
  
- **Gestión de Partidos**:
  - Crear partidos de fútbol sala o fútbol
  - Seleccionar jugadores disponibles
  
- **Distribución Inteligente de Equipos**:
  - Algoritmo de balanceo automático
  - Considera nivel de habilidad de cada jugador
  - Tiene en cuenta el estado físico actual
  - Genera equipos equilibrados para partidos más competitivos

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                          |
| :--------------------- | :---------------------------------------------- |
| `pnpm install`         | Instala las dependencias                        |
| `pnpm run dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm run build`       | Construye el sitio para producción en `./dist/` |
| `pnpm run preview`     | Vista previa del build localmente               |

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/pachanga-frontend.git

# Navega al directorio
cd pachanga-frontend

# Instala las dependencias con pnpm
pnpm install

# Inicia el servidor de desarrollo
pnpm run dev
```

## 🚀 Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama `main`.

El workflow de GitHub Actions se encarga de:
1. Construir el proyecto con Astro
2. Desplegar los archivos estáticos en GitHub Pages

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
