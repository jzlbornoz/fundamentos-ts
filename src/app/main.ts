import { usersList, addUser, calcUsersPoints } from './users/user.services';
import { ROLES } from './users/user.model';
import { addProduct, productsList } from './product/product.services';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 5; index++) {
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
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    createdAt: new Date(),
    updateAt: new Date(),
    seller: {
      id: faker.datatype.uuid(),
      userName: faker.name.fullName(),
      createdAt: new Date(),
      password: faker.internet.password(),
      points: Math.max(100),
      role: ROLES.USER,
      updateAt: new Date(),
    },
    category: {
      id: faker.datatype.uuid(),
      createdAt: new Date(),
      updateAt: new Date(),
      name: faker.commerce.department(),
    },
    stock: Math.max(100),
    sizes: 'S',
  });
}
const res = calcUsersPoints(usersList);

console.log('usersList: ', usersList);
console.log('Total de puntos: ', res);

console.log('=================================');
console.log('ProductsList: ', productsList);
console.log(productsList.length);
