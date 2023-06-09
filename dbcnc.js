const express= require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const { Int32 } = require('mongodb');

app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://suryagunji24:Surya2000@cluster0.uma9ypy.mongodb.net/dbcnc",{useNewUrlparser:true});

const notesSchema={
    UserName : String,
    UserMessage: String
}

const Note = mongoose.model("Note",notesSchema)

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req , res){
    let newNote = new Note({
            UserName : req.body.UserName1,
            UserMessage : req.body.UserMessage1
        });
newNote.save()
res.redirect("/")
    });

app.listen( 3000 ,() => {
    console.log("server is running in port 3000");
});