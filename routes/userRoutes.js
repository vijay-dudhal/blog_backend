const {getUser,postUser,putUser,deleteUser, login} = require("../controller/userController")

const Route = require("express").Router()

Route.get("/",getUser)
Route.post("/",postUser)
Route.post("/login",login)
Route.put("/:id",putUser)
Route.delete("/:id",deleteUser)

module.exports = Route