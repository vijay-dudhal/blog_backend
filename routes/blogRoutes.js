const {getblog,postBlog,putBlog,deleteBlog} = require("../controller/blogController")
const auth = require("../middleware/auth")

const Route = require("express").Router()

Route.get("/",getblog)
Route.post("/",auth,postBlog)
Route.put("/:id",auth,putBlog)
Route.delete("/:id",auth,deleteBlog)

module.exports = Route