export default {
  Query: {
    events: async () => {
      return [
        {
          id: 1,
          name: 'test1',
        },
        {
          id: 2,
          name: 'test2',
        },
      ];
    },
    event: async () => {
      return {
        id: 2,
        name: 'test2',
      };
    },
  },
};
