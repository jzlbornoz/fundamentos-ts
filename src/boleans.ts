(() => {
  // Inferido
  let bool = false;

  //Explicito
  let boolEx: boolean = true;

  let door = false;
  const random = Math.random();
  console.log('random number: ', random);
  door = random > 0.5;

  console.log('door', door);
})();
