![Gif](https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif)

# Pokemon Character Finder

Se trata de un buscador de los de pokemon desarrollado con [React](https://es.reactjs.org/) y [Sass](https://sass-lang.com/).

## Contenido

Mediante el uso del servicio de https://pokeapi.co/ que nos devuelve información sobre los pokemon, se puede filtrar los pokemon por nombre y ver los detalles de cada pokemon, como altura, peso, habilidades, imágenes del pokemon y sus evoluciones.

A su vez, aparecerán varios mensajes de advertencia, como cuando no hay ningún pokemon que coincida con la búsqueda, cuando navega por una URL inexistente y un loader para cuando tarde en producirse la llamada al servidor api.

## Esctructura

~~~
src
├── components
│   ├── CharacterCard --> (renderiza la tarjeta de cada pokemon, con su foto, nombre y tipos)
│   │   ├── CharacterCard.js
│   │   └── CharacterCard.scss
│   ├── CharacterDetail --> (renderiza a través de una ruta una tajeta con más detalles sobre el pokemon)
│   │   ├── CharacterDetail.js
│   │   └── CharacterDetail.scss
│   ├── PokemonList --> (renderiza el listado de tarjetas)
│   │   ├── PokemonList.js
│   │   └── PokemonList.scss
│   ├── Filters --> (renderiza los campos de filtrado por nombre)
│   │   ├── Filters.js
│   │   └── Filters.scss
│   ├── Footer --> (renderiza el footer)
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Header --> (renderiza el logo )
│   │   ├── Header.js
│   │   └── Header.scss
│   ├── Loader --> (renderiza un mensaje y una imagen cuando tarda en producirse la llamada al servidor api)
│   │   ├── Loader.js
│   │   └── Loader.scss
│   ├── NotFound --> (renderiza un mensaje de advertencia cuando se navega por route a una URL inexistente)
│   │   ├── NotFound.js
│   │   └── NotFound.scss
│   ├── NotMatch --> (renderiza un mensaje cuando ningún personaje coincide con los datos introducidos)
│   │   ├── NotMatch.js
│   │   └── NotMatch.scss
│   └── App.js
│
├── images
├── services
│   └── api.js
├── styleSheets
│   ├── App.scss
│   └── variables.scss
└── index.js


~~~

## La Web

Página principal

![Landing]()

Tarjeta detallada

![CharacterDetail]()

## Arrancar el proyecto

### `npm install`

Para instalar el proyecto

### `npm start`

Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'

### `npm run build`

Para publicar el proyecto a producción
