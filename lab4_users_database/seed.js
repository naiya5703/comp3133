const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('MongoDB Connection Failed:', err));

const usersDataPath = path.join(__dirname, 'UsersData.json');
const usersData = JSON.parse(fs.readFileSync(usersDataPath, 'utf-8'));


const formattedUsers = usersData.map(user => ({
    username: user.username,
    email: user.email,
    city: user.address.city,
    website: user.website,
    zip: user.address.zipcode,
    phone: user.phone
}));

const seedDatabase = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(formattedUsers);
        console.log('Data successfully seeded!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting data:', error);
        mongoose.connection.close();
    }
};

seedDatabase();
