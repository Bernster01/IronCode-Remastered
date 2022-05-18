
window.document.addEventListener("keydown", (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 65:
            game.controls.left = true;
            game.player.direction = "left";
            break;
        case 68:
            game.controls.right = true;
            game.player.direction = "right";
            break;
        case 87:
            game.controls.up = true;
            break;
        case 83:
            game.controls.down = true;
            break;
        case 16:
            game.player.isRunning = true;
            break;
        case 13:
            game.play();
            break;

    }
});
window.document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
        case 65:
            game.controls.left = false;
            break;
        case 68:
            game.controls.right = false;
            break;
        case 87:
            game.controls.up = false;
            break;
        case 83:
            game.controls.down = false;
            break;
        case 16:
            game.player.isRunning = false;
            break;
        case 80:
            game.pause();
            break;
    }
});