# Bit3 - Country Explorer

Bit3 es una aplicación Angular que te permite explorar información detallada de todos los países del mundo utilizando la API pública [RestCountries](https://restcountries.com/). Descubre datos como capitales, idiomas, monedas, población, mapas y más, todo en un solo lugar.

## Características

- Listado de países con banderas, capital, población, monedas e idiomas.
- Búsqueda y vista detallada de cada país.
- Navegación amigable y diseño responsive.
- Consumo de API REST con manejo de errores.

## Requisitos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [Angular CLI](https://angular.io/cli) (v20 o superior)

## Instalación

Clona el repositorio y navega a la carpeta del proyecto:

```bash
git clone https://github.com/tu-usuario/bit3.git
cd bit3
npm install
```

## Servidor de desarrollo

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Abre tu navegador en [http://localhost:4200/](http://localhost:4200/)  
La aplicación se recargará automáticamente al guardar cambios en los archivos fuente.

## Construcción para producción

Para compilar el proyecto para producción:

```bash
ng build
```

Los archivos generados se almacenarán en la carpeta `dist/`.

## Pruebas unitarias

Para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Pruebas end-to-end

Para pruebas end-to-end (e2e):

```bash
ng e2e
```

## Estructura del proyecto

- `/src/app/components/pages/api` — Página de listado de países.
- `/src/app/components/pages/country` — Página de detalle de país.
- `/src/app/services` — Servicios para consumo de API.
- `/src/app/interfaces` — Interfaces TypeScript para tipado de datos.

## Recursos adicionales

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [RestCountries API Docs](https://restcountries.com/)

---

¡Explora el mundo con Bit3!