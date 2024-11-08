const {getblog,postBlog,putBlog,deleteBlog} = require("../controller/blogController")

const Route = require("express").Router()

Route.get("/",getblog)
Route.post("/",postBlog)
Route.put("/:id",putBlog)
Route.delete("/:id",deleteBlog)

module.exports = Route