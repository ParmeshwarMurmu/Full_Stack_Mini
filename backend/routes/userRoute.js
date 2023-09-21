const express = require('express')
const { UserModel } = require('../model/userSchema')
const { BlackListModel } = require('../model/blacklist')
const bcrypt = require('bcrypt')
const {auth} = require('../middlewares/auth')
const jwt = require('jsonwebtoken')
const {AddToCartModel} = require('../model/addToCart')
const { ProductModel } = require('../model/productSchema')


const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {

    try {

        const { userName, pass, email } = req.body;

        const ExistingUser = await UserModel.findOne({ email })
        if (ExistingUser) {
            res.status(200).send({ "msg": "Email Already Exists" })
        }
        else {

            bcrypt.hash(pass, 6, async (err, hash) => {
                // Store hash in your password DB.

                if (err) {
                    res.status(200).send({ "err": err })
                }
                const user = new UserModel({ ...req.body, pass: hash })
                await user.save();
                res.status(200).send({ "msg": "User has been registered succesfully" })

            });
        }

    } catch (error) {
        res.status(200).send({ "err": error })
    }

})



userRouter.post('/login', async (req, res) => {

    try {

        const { userName, pass, email } = req.body;

        const ExistingUser = await UserModel.findOne({ email })

        if (ExistingUser) {
            bcrypt.compare(pass, ExistingUser.pass, (err, result)=> {
                // result == true
                if(err){
                    res.status(200).send({"err": err})
                }

                const token = jwt.sign({userName: ExistingUser.userName, userId: ExistingUser._id }, 'e-commerce', {expiresIn: '7d'});
                res.status(200).send({"msg": "LoginIn Successfull", "token": token})



            });

        }
        else {
            res.status(200).send({ "msg": "User not Registered Or Wrong Credentials" })
        }

    } catch (error) {
        res.status(200).send({ "err": error })
    }

})

userRouter.post('/addToCart', auth, async(req, res)=>{
   
    // console.log(req.body);
    try {
        const newProduct = new AddToCartModel(req.body)
        await newProduct.save()
        res.status(200).send({"msg": "Product added to cart"})
    } catch (error) {
        
    }
    
})

userRouter.get('/cart', auth, async(req, res)=>{
   
    // console.log(req.body);
    const {userId} = req.body
    console.log(userId);
    try {
        const data = await AddToCartModel.find({userId}).populate('productId')
        // console.log("*");
        // console.log(data, "data");
        // const products = data.map(async(el)=>{
        //     const id = el.productId;
        //     const items =  await ProductModel.findOne({_id: id})
        //     // console.log(items);
        //     return items
        // })
        res.status(200).send({"msg": data})
    } catch (error) {
        console.log(error.message);
    }
    
})

userRouter.post('/logout', async(req, res)=>{

    const {token} = req.body;

    const list = new BlackListModel({token})
    await list.save()
    res.status(200).send({"msg": "Logout Successfull"})

})


const fetchData = (data)=>{

    returndata.map(async(el)=>{
        const id = el.productId;
        const items =  await ProductModel.findOne({_id: id})
        // console.log(items);
        return items
    })

}



module.exports = {
    userRouter
}