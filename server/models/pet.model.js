const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'pet name name required!'],
        minlength: [3, 'Name must be at least 3 characters']
     },
    type: { 
        type: String,
        required: [true, 'Pet type is required!'],
        minlength: [3, 'Type must be at least 3 characters']
    },
    description: { 
        type: String,
        required: [true, 'Pet description is required!'],
        minlength: [3, 'Description must be at least 3 characters']
    },
    skill1: {
        type: String,
        required: [false, '']
    },
    skill2: {
        type: String,
        required: [false, '']
    },
    skill3: {
        type: String,
        required: [false, '']
    },
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);
module.exports = {Pet: Pet};

