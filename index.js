// Importing json-server library

const jsonServer = require('json-server');

// Create server instance
const MPserver=jsonServer.create()

// Routing json resource server
const router=jsonServer.router('db.json')

// Implementing default middleware(Middleware : A special function that can act btwn 2 application and it will act like a bridge)
// default middleware is inbulit function
const middleware=jsonServer.defaults()

// define port number for server
const PORT=3000||process.env.PORT

//Configuring router,middleware,port into server
MPserver.use(middleware)
MPserver.use(router)

//listen used to run the web browser
MPserver.listen(PORT,()=>{
    console.log(`Todo Server running at ${PORT}`);
})