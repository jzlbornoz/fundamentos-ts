import { usersList, addUser, calcUsersPoints } from './users/user.services';
import { ROLES } from './users/user.model';
import { addProduct, productsList } from './product/product.services';

addUser({
  id: Math.random(),
  userName: 'Juan12',
  createdAt: new Date(),
  password: '13232',
  points: 100,
  role: ROLES.USER,
  updateAt: new Date(),
});

addUser({
  id: Math.random(),
  userName: 'gonzalo',
  createdAt: new Date(),
  password: 12,
  points: 23,
  role: ROLES.SELLER,
  updateAt: new Date(),
});

addProduct({
  id: Math.random(),
  name: 'shoe',
  createdAt: new Date(),
  updateAt: new Date(),
  seller: {
    id: Math.random(),
    userName: 'gonzalo',
    createdAt: new Date(),
    password: 12,
    points: 23,
    role: ROLES.SELLER,
    updateAt: new Date(),
  },
  category: {
    id: 1,
    createdAt: new Date(),
    updateAt: new Date(),
    name: 'sport',
  },
  stock: 12,
  sizes: 'S',
});

const res = calcUsersPoints(usersList);

console.log('usersList: ', usersList);
console.log('Total de puntos: ', res);

console.log('ProductsList: ', productsList);
