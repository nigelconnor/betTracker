import userModel from './users/userModel';

const users = [{
    'username': 'nigeloconnor',
    'password': 'nigel',
},
{
    'username': 'fmullins',
    'password': 'fifi',
},
];


export default async function loadUsers() {

    try {
        await userModel.deleteMany();
        new userModel(users[0]).save();
        new userModel(users[1]).save();
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}