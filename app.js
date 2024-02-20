const express = require('express'); 
const path = require('path') 
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
var expressLayouts = require('express-ejs-layouts');
const app = express(); 
const PORT = 3000; 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set("layout", "./layouts/layout.ejs");

app.use("/",userRoutes)
app.use("/admin",adminRoutes)

app.listen(PORT, (error) =>{ 
	if(!error){
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    } 
	else{

		console.log("Error occurred, server can't start", error); 
    }
	} 
); 
