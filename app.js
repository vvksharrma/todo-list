const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();

var items = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extented:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day = (today.toLocaleDateString("en-US", options));
    
    res.render("list",{ listtitle:day, newlistitems: items});

})

app.post("/",(req,res)=>{
    var item= req.body.newItem;

    items.push(item);

    res.redirect("/");
})


app.listen(3000,function(){
    console.log("app is running on port 3000");
})