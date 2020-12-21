![Gif](https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif)

# Pokemon Character Finder

Se trata de un buscador de pokemon desarrollado con [React](https://es.reactjs.org/) y [Sass](https://sass-lang.com/).

## Contenido

Mediante el uso del servicio de https://pokeapi.co/ que nos devuelve información sobre los pokemon, se puede filtrar los pokemon por nombre y ver los detalles de cada pokemon, como altura, peso, habilidades, imágenes del pokemon y sus evoluciones.

## Esctructura

~~~
src
├── components
│   ├── App.js
│   ├── Filter.js --> (renderiza los campos de filtrado por nombre)
│   ├── Header.js --> (renderiza el header)
│   ├── PokeDetail.js --> (renderiza a través de una ruta una tajeta con más detalles sobre el pokemon)
│   ├── PokeList.js --> (renderiza el listado de tarjetas)
│   └── Pokemon.js --> (renderiza la tarjeta de cada pokemon, con su foto, nombre y tipos )
├── data
│   └── api.js
├── images
├── styleSheets
│   ├── App.scss
│   ├── Filter.scss
│   ├── index.scss
│   ├── PokeDetail.scss
│   ├── PokeList.scss
│   └── Pokemon.scss 
└── index.js


~~~

## La Web

Página principal

![Landing](https://i.ibb.co/xjBKGn0/Captura-de-pantalla-2020-12-21-a-las-21-35-37.png)

Tarjeta detallada

![CharacterDetail](https://i.ibb.co/7J9X6m3/Captura-de-pantalla-2020-12-21-a-las-21-36-12.png)

## Arrancar el proyecto

### `npm install`

Para instalar el proyecto

### `npm start`

Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'

### `npm run build`

Para publicar el proyecto a producción
