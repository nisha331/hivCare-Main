//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require("lodash");
const aboutContent = "The best ideas can change who we are. Daily Journal is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.";

const app = express();



let posts=[];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
 
  res.render("home",{
    
    posts:posts
    });
  
});

app.get("/posts/:blog",function(req,res){
  posts.forEach(function(post){
    const requestedTitle=_.lowerCase(req.params.blog);
    const composedTitle=_.lowerCase(post.title);
    if(requestedTitle===composedTitle)
    res.render("post",{postHeading: post.title, postText: post.body, postWriter: post.writer})
  
  })  
});

app.get("/blog",function(req,res){
  res.render("blog");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.get("/compose", function(req,res){
  
  res.render("compose");
  
});

app.post("/compose", function(req,res){
  var post={
    title: req.body.postTitle,
    body: req.body.postPost,
    writer: req.body.postWriter
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/quiz",function(req,res){
  res.render("quiz");
})
app.get("/transmission",function(req,res){
  res.render("transmission");
})

app.get("/prevention",function(req,res){
  res.render("prevention");
})



app.get("/stigma",function(req,res){
  res.render("stigma");
})


app.get("/covid",function(req,res){
  res.render("covid");
})


app.get("/living",function(req,res){
  res.render("living");
})



app.get("/testing",function(req,res){
  res.render("testing");
})






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
