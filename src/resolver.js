export const resolver={
    Query: {
        helloworld: () => 'hello world',
        users: () =>User.find()
    },


}