const mongoose = require('mongoose')

const addToCartSchema = mongoose.Schema({
    userId:String,
    userName: String,
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'products'}
    
},{
    versionKey: false
})

const AddToCartModel = mongoose.model('cart', addToCartSchema)

module.exports = {
    AddToCartModel
}