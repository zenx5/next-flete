const { createServer } = require("node:http")
const next = require("next")
const { parse } = require("url")
const { Server } = require("socket.io")

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();


app.prepare().then(() => {
  const httpServer = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl
      await handler(req, res, parsedUrl)
    }
    catch(error) {
      console.error('Error occurred handling', req.url, error)
      res.statusCode = 500
      res.end('internal server error')
    }
  });

  const io = new Server(httpServer);
  io.on( 'connection', ( socket ) => {
      console.log( 'a user connected' );
      socket.on( 'disconnect', () => {
          console.log( 'user disconnected' );
      });

      socket.on( 'message', async ( msg ) => {
        try{
          const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(msg),
          })
          const data = await response.json()
          if( data.error ) throw new Error('Error occurred sending message')
          io.emit( 'message', msg );
        }catch(error){
          console.error('Error occurred sending message', error)
          io.emit( 'message', {content: 'Error occurred sending message', user: {id: 0, name: 'admin', type: 'admin'}} );
        }
      })
  })

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });

});
