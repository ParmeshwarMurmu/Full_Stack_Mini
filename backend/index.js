const express = require('express')
const {connection} = require('./config/db')
const { userRouter } = require('./routes/userRoute')
const cors = require('cors')
const {ProductModel} = require('./model/productSchema')


const app = express();

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.use('/', async(req, res)=>{

    try {
        const data = await ProductModel.find()
        res.status(200).send({"msg": data})
    } catch (error) {
        res.status(400).send({"msg": error})
    }
})


app.listen(9000, async()=>{

    try {
        console.log("Conecting to DB");
        await connection
        console.log("Connected to DB");
        console.log(`server running at port `);
        
    } catch (error) {
        console.log(error);
    }
})