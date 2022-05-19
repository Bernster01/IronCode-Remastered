const socket = io.connect("http://localhost:3000");
let players = [];
socket.emit("joined");

socket.on("join",(data)=>{
    console.log("join",data);
    players.push(new otherPlayer(
        data.playerObject.x,
        data.playerObject.y,
        data.playerObject.width,
        data.playerObject.height,
        players.length,));
    console.log(players);
});
socket.on("joined", (data)=>{
    // console.log("joined",data);
    data.forEach((aPlayer,index)=>{
        players.push(new otherPlayer(
            aPlayer.playerObject.x,
            aPlayer.playerObject.y,
            aPlayer.playerObject.width,
            aPlayer.playerObject.height,
            index));
        // console.log(aPlayer.playerObject);
        console.log(aPlayer.playerObject);
    });
    console.log(players);
})
socket.on("playerUpdate",(data)=>{
    
    players.forEach((player,index) => {
        if(player.id == data[index].playerObject.id){
            // console.log(data[index].playerObject)
            player.x = data[index].playerObject.x;
            player.y = data[index].playerObject.y;
            player.width = data[index].playerObject.width;
            player.height = data[index].playerObject.height;
            player.image = data[index].playerObject.imageText;
        }
    });
});
//General Enemy recive calls
socket.on("spawnEnemy",(data)=>{
    console.log("Server respondend with an enemy",data);
    spawnEnemy(data.x,data.y,data.width,data.height,data.speed,data.id);
});
socket.on("enemyIsDying",(data)=>{
    console.log("enemyIsDying",data);
    enemies.forEach((enemy)=>{
        if(enemy.id == data.id){
            enemy.isDying = true;
        }
    });
});
socket.on("enemyDied",(data)=>{
    console.log("enemyDied",data);
    enemies.forEach((enemy)=>{
        if(enemy.id == data.id){
            enemy.isAlive = false;
        }
    });
});





socket.on("stop",()=>{
    
    window.location.reload();
});