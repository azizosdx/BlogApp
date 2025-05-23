const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    userId: { // Référence à l'utilisateur
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    image: {
        type: String,
    },
    
} , 
{ timestamps: true }); 

const post = mongoose.model('Post', postSchema);
module.exports = post;
