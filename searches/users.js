const { v4: uuidv4 } = require('uuid');

let users = 
[
    {
        id: uuidv4(),
        username: 'Mikko28',
        name: 'Mikko Laitila',
        birthDate: '19990405',
        address: {
            street: 'Kajaanintie 11',
            country: 'Finland',
            postalCode: '90590',
            city: 'Oulu'
        },
        email: 'mikko.laitinen@gmail.fi',
        password: 'salasana123'
    }
]

module.exports = 
{
    //method used to get username
    getUserByName: (username) => users.find(u => u.username == username),
    //method used to add a new user     
    addUser: (username, password, name, birthDate, email, address) =>
    {
        users.push 
        (
            {
                id: uuidv4(),
                username, 
                name,
                birthDate,
                address,
                email,
                password
            }
        );
    }
}