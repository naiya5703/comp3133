const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
    },
    city: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, 'City name must contain only alphabets and spaces'],
    },
    website: {
        type: String,
        required: true,
        match: [/^(http|https):\/\/[^\s$.?#].[^\s]*$/, 'Invalid website URL'],
    },
    zip: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, 'Zip code must follow 12345-1234 format'],
    },
    phone: {
        type: String,
        required: true,
        match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone must follow 1-123-123-1234 format'],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
