




const user =
{
    name: "ken",
    number: "123"
};









const message =
{
    content: "hello",
    creator: user,
}


export const mockUsers = [
    {
        name: 'Ken',
        number: '1234567890'
    },
    {
        name: 'Alice',
        number: '9876543210'
    },
    {
        name: 'Bob',
        number: '5555555555'
    },
];


export const mockChatData = [
    {
        users: ['John', 'Alice'],
        last_msg: 'Hello there!',
        count: 5
    },
    {
        users: ['Bob', 'Eve'],
        last_msg: 'How are you?',
        count: 3
    },
    {
        users: ['Charlie', 'Grace'],
        last_msg: 'See you later!',
        count: 8
    },
    {
        users: ['David', 'Fiona'],
        last_msg: 'Did you finish the project?',
        count: 4
    },
];

export const mockMessages = [
    {
        content: 'Hello there!',
        creator: mockUsers[0]
    },
    {
        content: 'How are you?',
        creator: mockUsers[1]
    },
    {
        content: 'Nice to meet you!',
        creator: mockUsers[2]
    },
    // Add more mock messages here
];



////////////Test area ////////
// a to c

export const listaA = Array.from({ length: 10 }, (_, index) => `a ${index + 1}`);
export const listaB = Array.from({ length: 15 }, (_, index) => `b ${index + 1}`);
export const listaC = Array.from({ length: 20 }, (_, index) => `c ${index + 1}`);


