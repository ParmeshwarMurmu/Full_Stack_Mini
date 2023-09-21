const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    pass: String

}, {
    versionKey: false
})


const UserModel = mongoose.model('user', userSchema)

module.exports = {
    UserModel
}