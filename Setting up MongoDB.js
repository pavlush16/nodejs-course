//Setting up MongoDB

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


const User = require('../models/User');

// Create a new user
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
});

newUser.save()
    .then(user => {
        console.log('User saved:', user);
    })
    .catch(err => {
        console.error('Error saving user:', err);
    });
