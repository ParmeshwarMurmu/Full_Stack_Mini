const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

   id:Number,
   name: String,
   userName:String,
   email:String,
   address: Object,
   phone:Number,
   company: Object,
   website: String

}, {
    versionKey: false
})



const ProductModel = mongoose.model('products', productSchema)

module.exports = {
    ProductModel
}