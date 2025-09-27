
const users = [
    {
        id: '1',
        name: 'user',
        email: "user@example.com",
        password: "12345"
    },
    {
        id:'2',
        name: 'user2',
        email: 'user2@example.com',
        password: '23456'
    }
]

const tasks = [{
    id: '1',
    user_id: users[0].id,
    title: 'study',
    description: 'make ten sentences of past continuous',
    category: 'work'
},
{
    id: '2',
    user_id: users[1].id,
    title: 'sports',
    description: 'a quarter exercise includ four move',
    category: 'personal'
}
]

export {users, tasks};