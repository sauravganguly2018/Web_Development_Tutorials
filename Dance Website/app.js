const express=require('express')
const path=require('path')
const fs=require('fs');
const { url } = require('inspector');
const app=express()
const port=88;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('contact.pug',params)
})

app.post('/contact',(req,res)=>{
    const name=req.body.name
    const phone=req.body.phone
    const email=req.body.email
    const address=req.body.address
    const concern=req.body.desc
    const ClientData=`The name of Client is ${name}
    phone number : ${phone}
    email : ${email}
    address : ${address}
    concern : ${concern}`
    fs.writeFileSync('ClientData.txt',ClientData)
    res.status(200).render('contact.pug')
})

app.listen(port,()=>{
    console.log(`The application started running on port ${port}`)
})