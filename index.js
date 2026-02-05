  const express = require("express");
  const mongoose = require("mongoose");
  const bookRoutes = require("./routes/bookroutes");
  const mo=require("./db/mo");
  const multer =require("multer");
  const upload=multer({dest:'./uploads'});
  



  const app = express();

  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static("public"));


  mongoose.connect("mongodb://127.0.0.1:27017/todolist")
  .then(() => console.log("MongoDB Connected"));

  app.use("/", bookRoutes);

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });

  
