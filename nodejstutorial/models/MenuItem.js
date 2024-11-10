const mongoose = require('mongoose');

const menuItemSelection = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    type:{
        type:String,
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_sales:{
        type: Number,
        default:0
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemSelection);
module.exports = MenuItem;