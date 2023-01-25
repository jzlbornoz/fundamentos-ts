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

### Never

- Este tipo de dato se utiliza en aquellas funciones que no tienen final en la vida del programa.
- Un ejemplo de ello es cuando queremos manejar un error o cuando ejecutamos un loop infinito, como por ejemplo una validación de un token de cada x’s segundos, que es una función que se ejecuta constantemente, ya que lanzas la función, esta envía el token lo valida, y comienza el timer para hacer el refresh de ese token, si hay un error lanza una excepción y si no continúa con la validación y el timer…

### Overloaded Functions uses

- Uso de sobrecarga de funciones
  Para realizar la sobrecarga de funciones tenemos simplemente declarar otras funciones con el mismo nombre de la función que tiene la lógica implementada. Dentro de los parámetros de las nuevas funciones vamos a definir el tipo de dato que se va a recibir y además tenemos que aclarar el tipo de dato que se va a retornar con ese parámetro.

- Además, en la función que tiene toda la lógica a sus parámetros podemos colocarle como tipo de dato unknown al igual que su retorno.

## Utility Types

### DTOs

- Es una abreviatura para referirnos a Data Transfer Objects u Objeto de Transferencias de datos.
- Hay momentos particulares en los que nosotros no necesitamos del todo los tipos, es decir, hay parámetros que no hacen falta, por ejemplo, mandarlos al momento de la creación de un objeto, ya que estos son automáticos como el ID o la fecha de creación.

### Omit

```
import { ProductModel } from './product.model';

interface CreateProductDto
  extends Omit< ProductModel, 'id' | 'updateAt' | 'createdAt' | 'category' | 'user'> {
  categoryId: number | string;
  userId: number | string;
}

export { CreateProductDto };
```

### Pick

```
interface InterfaceName extends Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN> {
	statements
}

type typeNameDto = Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN>
```

### Partial

- Nos permite colocar todos los parámetros de una interface como opcionales, sin necesidad que colocar ? parámetro por parámetro.

```
interface InterfaceName extends Partial<Interface> {
		statements
}

type TypeName = Partial<TypeOrInterface>;
```

### Required

- Nos permite colocar todos los parámetros de una interface como obligatorios.

```
interface InterfaceName extends Required<Interface> {
		statements
}

type TypeName = Required<TypeOrInterface>;
```

### Readonly

- Con esta propiedad le decimos TypeScript que todos los parámetros solamente sean de lectura, por ende nos pueden ser mutados a lo largo de nuestro programa.

```
interface InterfaceName extends Readonly<Interface> {
		statements
}

type TypeName = Readonly<TypeOrInterface>;
```

### ReadonlyArray

- Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc.

```
const variabeName: ReadonlyArray<dataType> = [value];
// ----


interface FindProductDto extends Readonly<Partial<Omit<ProductModel, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
```

## POO

### Class

- JavaScript es un lenguaje orientado a objetos, pero está basado en prototipos.
- Las clases son una sintaxis más amigable para trabajar con prototipos, las clases internamente son prototipos.
- La utilizamos para construir instancias de objetos, es como un molde para crear cosas.

```
class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(y: number, m: number, d: number) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
}

const date = new MyDate(1999, 1, 23);

```

### Methods

- Describen el comportamiento de los objetos.

```
class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(y: number, m: number, d: number) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
  printDate(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  addDate(amount: number, type: 'YY' | 'DD' | 'MM') {
    if (type === 'DD') {
      this.day += amount;
      if (this.day > 30) {
        this.day -= 30;
        this.month += 1;
      }
    }
    if (type === 'MM') {
      this.month += amount;
      if (this.month > 12) {
        this.month -= 11;
        this.year += 1;
      }
    }
    if (type === 'YY') {
      this.year += amount;
    }
    return `${this.year}/${this.month}/${this.day}`;
  }
}
```

### Public Access

-Por defecto, todas las propiedades y métodos son públicos pero si queremos aclarar en nuestro código el alcance de los mismos podemos utilizar la palabra reservada `public`.

```
class nameClass {
		public parameter1: dataType;
		constructor (parameters) { statements }

		public method (parameters): dataType { statements }
}
```

### Private Access

- Con esta palabra reservada `private` estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase.

```
class nameClass {
		private parameter1: dataType;
		constructor (parameters) { statements }

		private method (parameters): dataType { statements }
};

//

class nameClass {
		 #parameter1: dataType;
		constructor (parameters) { statements }

		#method (parameters): dataType { statements }
};

```

### Constructor

- Es el constructor en el que construimos la instancia y mandamos los parámetros por defecto por el cual queremos que se inicialice esa instancia a un objeto.

```
class ClassName {
		constructor (
				scope property1: dataType,
				scope propertyN: dataType
		) {
				statements
		}
}

// ---

export class MyDate {
    constructor (
        public year: number = 1993,
        public month: number = 7,
        private day: number = 3
    ) {}
```

### Getters

- Los getters permiten acceder a una propiedad de alcance privado, se pueden obtener los datos de esa propiedad, de manera inmutable, es decir que no se pueden modificar.
- Se obtienen como si fuera una propiedad mas de la instancia, y por definicion todos los getters deben retornar algo.

```
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get day() {
    return this.#day;
  }
```

### Setters

- Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

- A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

```
class ClassName {
		constructor () {
				statements
		}

		set methodName () {
				statements
		}
}

// ---

set month(value: number) {
    if (value >= 1 && value <= 12) {
      this.#month = value;
    } else {
      throw new Error('month out of range');
    }
  }
```

### Inheritance

- Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyecto

```
class FatherClass {
	constructor (properties) {
		statemenst
	}

	MethodsFather () { ... }
}

class ChildClass extends FatherClass {
		constructor (properties) {
			super(properties)
			statemenst
		}

		MethodsChild () { ... }
}
```

#### Super()

- Es una palabra reservada para llamar las propiedades y métodos de la clase padre.

```
// llama al método constructor del objeto padre.
super([arguments]);

// llama cualquier otro método del objeto padre.
super.functionOnParent([arguments]);
```

#### Protected Access

- Básicamente, es la forma de heredar propiedades y métodos. Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

```
class FatherClass {
	constructor (
		protected property1: dataType,
		propertyN: dataType
	) {
		statemenst
	}
}

class ChildClass extends FatherClass {
		constructor (properties and Inheritedproperties) {
			super(Inheritedproperties)
			statemenst
		}
}
```
