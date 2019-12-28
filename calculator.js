express=require("express");
app=express();
mymodule=require("./mymodulecal");
fs=require("fs")
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.get("/",function(req,resp){
	resp.sendFile("form.html",{root:__dirname});
	console.log("a");
});


app.post("/calculate",function(req,resp){
	console.log("a");
var op=req.body.cal;
console.log(op);
switch(op)
{
case "add":
    console.log("add");
	result=mymodule.add(req.body.a,req.body.b);
	resp.send("result=  "+result);
	break;
	case "sub":
	console.log("sub");
	result=mymodule.sub(req.body.a,req.body.b);
	resp.send("result=  "+result);
	break;
	case "mul":
	console.log("mul");
	result=mymodule.mul(req.body.a,req.body.b);
	resp.send("result=  "+result);
	break;
	case "div":
	console.log("div");
	result=mymodule.div(req.body.a,req.body.b);
	resp.send("result=  "+result);
	break;
}
});
app.listen(3000,function(){
	console.log("server started on port 3000");
})
