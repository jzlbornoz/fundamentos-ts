import { usersList, addUser, calcUsersPoints } from './users/user.services';
import { ROLES } from './users/user.model';
import {
  addProduct,
  productsList,
  updateProduct,
} from './product/product.services';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 3; index++) {
  addUser({
    id: faker.datatype.uuid(),
    userName: faker.name.fullName(),
    createdAt: new Date(),
    password: faker.internet.password(),
    points: Math.max(100),
    role: ROLES.USER,
    updateAt: new Date(),
  });
}

for (let i = 0; i < 3; i++) {
  addProduct({
    name: faker.commerce.product(),
    stock: Math.max(100),
    categoryId: faker.datatype.uuid(),
    userId: faker.datatype.uuid(),
    sizes: 'S',
  });
}
const res = calcUsersPoints(usersList);

updateProduct(productsList[0].id, {
  name: 'Producto updateado :)',
  stock: 2333,
});

console.log('usersList: ', usersList);
console.log('Total de puntos: ', res);

console.log('=================================');
console.log('ProductsList: ', productsList);
console.log(productsList.length);
