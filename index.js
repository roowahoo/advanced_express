const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

const landingRoutes=require('./routes/landing')
const corporateRoutes=require('./routes/corporate')

async function main(){
    // if url begins with forward slash,uselanding routes
    app.use('/',landingRoutes)
    app.use('/for-investors',corporateRoutes)
}

// async function main() {
//   app.get('/',(req,res)=>
//   res.send('Its alive'))
// }

main();

app.listen(3000, () => {
  console.log("Server has started");
});