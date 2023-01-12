import { usersList, addUser, calcUsersPoints } from './user.services';

addUser({
  userName: 'Juan12',
  createdAt: new Date(),
  password: '13232',
  points: 100,
});

addUser({
  userName: 'gonzalo',
  createdAt: new Date(),
  password: 12,
  points: 23,
});

const res = calcUsersPoints(usersList);

console.log(usersList);
console.log('Total de puntos: ', res);
