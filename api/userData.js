import userModel from './users/userModel';

const users = [{
    'username': 'nigeloconnor',
    'password': 'nigel',
},
{
    'username': 'fionamullins',
    'password': 'fiona',
}
];


export default async function loadUsers() {

    try {
        await userModel.deleteMany();
        //await userModel.collection.insertMany(users);
        await new userModel(users[0]).save();
        await new userModel(users[1]).save();
        console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
    }
}