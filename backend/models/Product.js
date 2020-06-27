const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    id:{ 
        type: Number,
        trim: true,
        required: true,
        unique : true
    },
    brand:{ 
        type: String,
        trim: true,
        required: true
    },
    description:{ 
        type: String,
        trim: true,
        required: true
    },
    image:{
        type: Buffer,
        trim: true,
        required: true
    },
    price:{ 
        type: Number,
        trim: true,
        default: 0,
        required: true
    }
    
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product