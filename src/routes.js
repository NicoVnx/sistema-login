const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

var user = "Nico"
var password = "123321"

routes.get("/", (req, res) =>{

  if(req.session.user){

    res.render(views + "restrito", {user: user})

  }else{ 

    res.render(views + "/", {user: user})}

})

routes.post("/exclusivo", (req, res) => res.render(views + "exclusivo"))

routes.get("/exclusivo", (req, res) => {
    
  if(req.session.user){

    res.render(views + "exclusivo", {user: user})}

})

routes.get("/home", (req, res) => {
    
  if(req.session.user){

    res.render(views + "home-logado", {user: user})

  }else{ 

    res.render(views + "home", {user: user})}
  
})

routes.post("/", (req, res) =>{ 

  if( req.body.password == password && req.body.user == user){

    req.session.user = user
    res.render(views + "/restrito", {user: user})
      

  }else{

    res.redirect("/")}

})

routes.get('/logout', (req,res) => {

  req.session.destroy(function (err) {
  res.redirect('/')})

})

module.exports = routes;
