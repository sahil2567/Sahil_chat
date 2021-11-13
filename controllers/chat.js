

export default(http)=>{
    const io=require("socket.io")(http,{
        cors:{
            origin:["http://localhost:3000"]
        },
    });
    io.on("connection",(socket)=>{
        //console.log(socket.id)
        socket.on("send-message",(message)=>{
            //console.log("message from client",message)
            socket.broadcast.emit("get-message",message)

        })
    });
};