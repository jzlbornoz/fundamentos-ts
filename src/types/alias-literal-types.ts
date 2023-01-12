(() => {
  // Alias Types
  type UserID = string | number | boolean;

  let userId: UserID;

  function greeting(parametro: UserID) {
    return typeof parametro === 'string'
      ? console.log('myTextIs (+)>', parametro.toLocaleLowerCase())
      : null;
  }

  // Literal Types
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'S';
  shirtSize = 'M';
  // shirtSize = "s"; //// wrong

  type TSizes = 'SM' | 'ME' | 'LA' | '2XL';
  let Sizes: TSizes;

  function greet(parametro1: UserID, parametro2: TSizes) {
    return typeof parametro1 === 'string'
      ? console.log(
          'Ropa: (+)>',
          `usuario: ${parametro1.toLocaleLowerCase()}`,
          `tamaño: ${parametro2}`
        )
      : null;
  }
  greet(12, '2XL');
  greet('Molina', 'SM');
  greeting('HOLA');
})();
