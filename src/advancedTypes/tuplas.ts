//array
const array: (number | string)[] = [12, '23'];
array.push(23);

//tupla

let tupla: [number, string] = [23, 'hola'];

tupla = [12, 'doce'];

const [numero, nombre] = tupla;

console.log('numbero: ', numero);
console.log('nombre:', nombre);
