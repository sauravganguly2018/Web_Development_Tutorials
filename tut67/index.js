const http=require('http');
const fs=require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const Index=fs.readFileSync('./index.html')
const Home=fs.readFileSync('./Home.html')
const About=fs.readFileSync('./About.html')
const Services=fs.readFileSync('./Services.html')
const Contact=fs.readFileSync('./Contact.html')

const server=http.createServer((req,res)=>{
   res.statusCode=200;
    console.log(req.url);
    url=req.url;
    res.setHeader('Content-type','text/html');
    if(url=='/'){
        res.end(Index);
    }

    // if we want to shw 404 not found then simply write if(url=='/anything') in place of if(url=='/')


    else if(url=='/services') {
        res.end(Services);
    }
    else if(url=='/home') {
        res.end(Home);
    }
    else if(url=='/contact') {
        res.end(Contact);
    }
    else if(url=='/about') {
        res.end(About);
    }
    else{
        res.statusCode=404;
        res.end('<h1>404 not found</h1>');
    }


    // else if / if(url=='/'){
    //     res.end(something);
    // }
    // then firstly elfe if / if part will be executed and else part will never be executed


    // else {
    //     res.statusCode=404;
    //      res.end('<h1>404 not found</h1>');
    // }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });