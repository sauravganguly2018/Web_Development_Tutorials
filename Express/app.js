const express=require('express');
const app=express();
const path=require('path')
const fs=require('fs')
const port=86;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))  //For serving static files
app.use(express.urlencoded()) //for bringing the data of form into express

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  //set the template engine as pug
app.set('views',path.join(__dirname,'views'))  //set the viewsdirectory

//ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so far so use it wisely"
    const params={title:"pubg is the best game",content:con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    // console.log(req.body)
    Name=req.body.name
    age=req.body.age
    phone=req.body.phone
    address=req.body.address
    more=req.body.more
    let OutputToWrite=`The name of client is ${Name}
     ${age} years old
    Phone no. is ${phone}
    Address is : ${address}
    More about Him/Her : ${more}`
    fs.writeFileSync('ClientData.txt',OutputToWrite)
    const params={'message':"Your form has been submitted successfully"}
    res.status(200).render('index.pug',params)
})


// //our pug demo endpoint
// app.get('/demo', function (req, res) {
//     res.status(200).render('demo', { title: 'Hey saurav ganguly', message: 'Hello there! and thanks for telling me how to use pug ' })
//   })

// app.get("/", (req,res)=>{
//     res.send('This is home page of my first express app with Saurav')
// })

// // app.get("/about", (req,res)=>{
// //     res.send('This is about page of my first express app with Saurav')
// // })

// app.post("/about", (req,res)=>{
//     res.send('This is post request about page of my first express app with Saurav')
// })

// app.get("/about", (req,res)=>{
//     // res.statusCode=200;
//     res.status(200).send('This is about page of my first express app with Saurav')
// })

// app.get("/this", (req,res)=>{
//     // res.statusCode=404;
//     res.status(404).send('This page is not found on my website code with saurav')
// })

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})