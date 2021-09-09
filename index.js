const express = require("express")
const server = express()
const routes = require("./src/routes")
const session = require("express-session")



server.use(session({
secret: "ndfgjnw9824",
resave: true,
saveUninitialized: true}))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: false }))

server.set("view engine", "ejs")

server.use(routes)
server.listen(3000, () => console.log("Server Rodando!"))
