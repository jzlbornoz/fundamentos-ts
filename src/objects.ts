(() => {
  // Array de Objetos de forma explicita
  type Size = 'M' | 'S' | 'L';
  type Product = {
    title: string;
    createdAt: Date;
    stock?: number;
    size: Size;
  };
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'hola',
    createdAt: new Date(),
    stock: 12,
    size: 'M',
  });

  console.log('Array de Objetos de forma explicita', products);

  // --
})();
