const socket = io.connect("http://localhost:3000");
let players = [];
socket.emit("joined");

socket.on("join",(data)=>{
    console.log("join",data);
    // players.push(new player(
    //     data.playerObject.x,
    //     data.playerObject.y,
    //     data.playerObject.width,
    //     data.playerObject.height,
    //     players.length,));
    // console.log(players);
});
socket.on("joined", (data)=>{
    console.log("joined",data);
    // data.forEach((aPlayer,index)=>{
    //     players.push(new player(
    //         aPlayer.playerObject.x,
    //         aPlayer.playerObject.y,
    //         aPlayer.playerObject.width,
    //         aPlayer.playerObject.height,
    //         index));
    //     // console.log(aPlayer.playerObject);
    //     console.log(aPlayer.playerObject);
    // });
    // console.log(players);
})
socket.on("playerUpdate",(data)=>{
    console.log(data)
    // players.forEach((player,index) => {
    //     if(player.id == data[index].playerObject.id){
    //         console.log(data[index].playerObject)
    //     }
    // });
});