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

## tsconfig.json

- Para evitar describir en cada comando la configuracion de la Transpilacion se requiere del archivo tsconfig.json, que se genera automanticamente con una configuracion por defecto usando el comando `npx tsc --init`.

- En este archivo se le indican las configuraciones como outDir y target y se correria usando el comando `npx tsc`.

- Se agrega el siguiente script al package.json, el flag 'watch' se utiliza como un hotreloaded.
- /package.json

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx tsc --watch"
  },
```

## Types

- Tipos explicitos

```
const age: number = 20;
```

- Tipos inferidos

```
const age = 20;
```

## Advanced Types

- Se utilizara la libreria `npm i -D ts-node` para evitar el proceso de transpilacion y correrlo con node, esta libreria hace ese trabajo.
- Otra Opcion seria instalar nodemon y que se mantenga escuchando/vigilando el directorio dist (output de transpilacion): `npm i -D nodemon`

### Enums

- Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera

```
enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner"
}
```

### Tuplas

- Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. como lo hace useState en react.

```
const user: [string, number, boolean] = ["Irving", 20, true];
```

### Unknown

- Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.

```
let unknowVar: unknown;
```
