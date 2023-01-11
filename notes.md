# TypeScript

## ¿Por qué usar TypeScript?

- Es uno de los lenguajes de programación más queridos por la comunidad.
- Alta adopción.
- Podemos prevenir muchos errores de JS.
- Mejor experiencia de desarrollo.
- Menor cantidad de bugs.

## TypeScript vs JavaScript

- En JavaScript te das cuenta de los errores del código una vez que lo estés ejecutando. En TypeScript con el análisis estático de código nos damos cuenta de los errores en el editor o a la hora de transpilar, por lo que evitamos que los errores lleguen a la ejecución.
- Un programador de TS es distinto a uno de JS. El programador de TypeScript añade una capa de análisis de código estático a Javascript.

## Set Up del proyecto

- `npm install typescript -D` Para no instalarlo de manera global.
- `npx tsc --version` Para comprobar que se ha instalado correctamente.
- Opcionalmente se agrega el archivo .editorconfig, con el fin de dar una configuración simple y sencilla a la hora de ejecutar código.
- se crea el directorio 'src'.

## El compilador de TypeScript

- Ya que Node y el navegador no son capaces de leer codigo typescript, se necesita hacer un proceso de compilacion a Js que se conoce como `Transpilacion`.

- Cabe resaltar que se debe indicar la version de Js que se desea obtener, ya que por defecto el compilador entiende que el proceso debe resulta en Es3.

- Se crea el archivo index.ts.

- Se crea el directorio dist, en donde se almacenara el resultado de la Transpilacion.

- Para correr el proceso se utiliza el comando: `npx tsc src/*.ts --outDir dist --target es6`.
