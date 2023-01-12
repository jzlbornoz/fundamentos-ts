import { User } from './user.model';

const usersList: User[] = [];

const addUser = (data: User) => {
  usersList.push(data);
};

const calcUsersPoints = (userList: User[]): number => {
  const res = userList.reduce(
    (total, user) => (user.points ? (total += user.points) : total),
    0
  );
  return res;
};
export { usersList, addUser, calcUsersPoints };
