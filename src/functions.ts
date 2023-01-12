(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.size);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);

  // void

  const calcTotal = (arrayPrices: number[]): string => {
    const rta = arrayPrices.reduce((total, price) => total + price, 0);
    return rta.toString();
  };
  const printer = (arrayNumbers: number[]): void => {
    const res = calcTotal(arrayNumbers);
    console.log(`El total es: ${res}`);
  };

  printer([20, 20, 20]);

  // objetos
  const login = (data: { user: string; password: number }) => {
    console.log(data.password, data.user);
  };
  login({
    user: 'hols',
    password: 1243,
  });

  // Array de Objetos con Any
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size: number;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'hola',
    createdAt: new Date(),
    stock: 12,
    size: 2,
  });

  console.log('Array de Objetos con Any', products);

  // --
})();
