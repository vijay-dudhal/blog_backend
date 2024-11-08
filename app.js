const mongoose = require("mongoose")
const express = require("express")
const userRoute = require("./routes/userRoutes")
const blogRoute = require("./routes/blogRoutes")
require("dotenv/config")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()