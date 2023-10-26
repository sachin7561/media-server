//1 import json server
const jsonserver=require("json-server")
//2 create a server for media app
const MediaAppserver=jsonserver.create()

//3 setup up path for json file
const router =jsonserver.router('db.json')

//4 return middleware used by jsonserver
const middleware=jsonserver.defaults()

//setup port number
const port=process.env.port||3001// render->proce......  ,localhost port 3001

//use middleware in app
MediaAppserver.use(middleware)
MediaAppserver.use(router)


MediaAppserver.listen(port,()=>{
    console.log('listening on port' +port);
})