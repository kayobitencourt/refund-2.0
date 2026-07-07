type UserAPIRule = 'employee' | 'manager';

type UserApiResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserAPIRule;
  };
};
