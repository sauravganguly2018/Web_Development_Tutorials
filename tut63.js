// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
          /* priority will be given to background color/any properties of visited instead of hover once visited */
          .container {
              border: solid 4px lawngreen;
              background-color: lightcoral;
              border-radius: 5px;
              padding: 10px;
              width: 500px;
              margin: 20px auto;
          }
  
          #head {
              width: 200px;
              margin: auto;
          }
  
          .btn {
              background-color: darkgrey;
              padding: 5px;
              margin: 4px;
              border-radius: 3px;
              cursor: pointer;
          }
  
          a:hover {
              color: red;
              background-color: purple;
              border: 3px solid green;
  
          }
  
          a:visited {
              background-color: yellow;
          }
  
          a:active {
             background-color: red;
          }
  
          button:hover {
              background-color: darkorange;
              border: 3px solid green;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3 id="head">This is my heading</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id voluptatum minus consectetur exercitationem
              magnam officia dolorem labore architecto itaque? Ullam atque, aliquam, itaque tempora et delectus qui
              dolores vitae sit molestiae maxime perspiciatis magni quaerat praesentium laudantium sed iusto voluptatem
              obcaecati voluptate numquam nostrum. Praesentium temporibus quis tempore aspernatur.</P>
          <a href="https://myntra.com" target="-blank" class="btn">Read more</a>
          <button class="btn">contact</button>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});