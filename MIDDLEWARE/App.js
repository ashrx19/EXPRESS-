const exp = require('express');

const app = exp();


app.listen(9999);

app.use((req,res,next)=>{
    console.log('Middlewhere')
    next();
})

app.get('/',(req,res)=>{
    res.sendFile('./home.html',{root:__dirname+ '/../components'})
})


app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root: __dirname + '/../components'})
})

//Error
app.use((req, res,next)=>{
    console.log("Middleware 2")
    res.sendFile('./error.html',{root: __dirname + '/../components'})
})

//ROUTE SPECIFIC MIDDLEWARE
// const checkAuth = (req, res, next) => {
//   console.log("Checking authentication");
//   next();
// };

// app.get("/profile", checkAuth, (req, res) => {
//   res.send("Profile page");
// });