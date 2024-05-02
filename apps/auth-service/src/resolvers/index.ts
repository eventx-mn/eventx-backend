export default {
  Query: {
    users: async () => {
      return [
        {
          id: 1,
          username: 'test1',
          email: 'test1@gmail.com',
          role: 'test1',
        },
        {
          id: 2,
          username: 'test2',
          email: 'test2@gmail.com',
          role: 'test2',
        },
      ];
    },
    user: async () => {
      return {
        id: 2,
        username: 'test2',
        email: 'test2@gmail.com',
        role: 'test2',
      };
    },
  },
};
