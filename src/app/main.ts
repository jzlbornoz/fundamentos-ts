import { usersList, addUser, calcUsersPoints } from './users/user.services';
import { ROLES } from './users/user.model';

addUser({
  id: Math.random(),
  userName: 'Juan12',
  createdAt: new Date(),
  password: '13232',
  points: 100,
  role: ROLES.USER,
});

addUser({
  id: Math.random(),
  userName: 'gonzalo',
  createdAt: new Date(),
  password: 12,
  points: 23,
  role: ROLES.SELLER,
});

const res = calcUsersPoints(usersList);

console.log(usersList);
console.log('Total de puntos: ', res);
