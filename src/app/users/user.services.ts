import { UserModel } from './user.model';

const usersList: UserModel[] = [];

const addUser = (data: UserModel) => {
  usersList.push(data);
};

const calcUsersPoints = (userList: UserModel[]): number => {
  const res = userList.reduce(
    (total, user) => (user.points ? (total += user.points) : total),
    0
  );
  return res;
};
export { usersList, addUser, calcUsersPoints };
