(() => {
  //inferido
  const numbers = [2, 54, 23, 1, 3, 6, 3, 'hola', true];
  numbers.push(34);
  numbers.push(false);
  numbers.push('ggg');
  console.log('Array 1: ', numbers);

  //explicito
  const array: (number | boolean | string)[] = [];
  array.push(3324);
  array.push(true);
  array.push('gg23g');
  console.log('Array 2: ', array);

  // matriz explicita
  const matriz: number[][] = [
    [23, 34, 45],
    [23, 45, 76],
    [34, 56, 7],
  ];
  console.log('matriz: ', matriz);
  const rta: number[] = matriz.flat(1);
  console.log(rta);
})();
