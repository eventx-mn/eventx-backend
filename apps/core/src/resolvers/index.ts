import Users from '../model/Users';

export default {
  Query: {
    users: async () => {
      return Users.find();
    },
    user: async () => {
      return {
        _id: 2,
        username: 'test2',
        email: 'test2@gmail.com',
        role: 'test2',
      };
    },
  },
};
