enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
}

type User = {
  username: string;
  password: number | string;
  role: ROLES;
};

const newUser: User = {
  username: 'juan',
  password: 12,
  role: ROLES.USER,
};

const newSeller: User = {
  username: 'vixtor',
  password: 's3eqwe',
  role: ROLES.OWNER,
};
