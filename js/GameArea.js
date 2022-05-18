let game = {
    controls: {
        left: false,
        right: false,
        up: false,
        down: false,
        space: false,
    },
    world: null,
    player: null,
}
let gameSettings = {
    fps: null,
    interval: null,
    step: null,
};
class rectangle {
    constructor(left, top, width, height) {
        this.left = left || 0;
        this.top = top || 0;
        this.width = width || 0;
        this.height = height || 0;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;

        this.set = (left, top, width, height) => {
            this.left = left;
            this.top = top;
            this.width = width || this.width;
            this.height = height || this.height
            this.right = (this.left + this.width);
            this.bottom = (this.top + this.height);
        }
        this.within = (rect) => {
            return (this.left >= rect.left &&
                this.right <= rect.right &&
                this.top >= rect.top &&
                this.bottom <= rect.bottom);
        }
        this.overlap = (rect) => {
            return !(this.right < rect.left ||
                this.left > rect.right ||
                this.bottom < rect.top ||
                this.top > rect.bottom);
        }
    }
}
class world {
    constructor(width, height, name) {
        this.name = name
        this.width = width
        this.height = height
    }
}
class camera {

    constructor(xView, yView, viewportWidth, viewportHeight, worldWidth, worldHeight, axis) {
        this.xView = xView || 0;
        this.yView = yView || 0;
        this.xDeadZone = 0;
        this.yDeadZone = 0;
        this.viewportWidth = viewportWidth
        this.viewportHeight = viewportHeight
        this.worldWidth = worldWidth
        this.worldHeight = worldHeight
        this.axisOptions = {
            none: 1,
            horizontal: 2,
            vertical: 3,
            both: 4
        }
        this.axis = this.axisOptions[axis] || this.axisOptions.none;
        this.viewportRect = new rectangle(this.xView, this.yView, this.viewportWidth, this.viewportHeight);
        this.worldRect = new rectangle(0, 0, this.worldWidth, this.worldHeight);
        this.follow = (object, xDeadZone, yDeadZone) => {
            this.followed = object;
            this.xDeadZone = xDeadZone;
            this.yDeadZone = yDeadZone;
        }
        this.update = () => {
            if (this.followed != null) {
                if (this.axis == this.axisOptions.horizontal || this.axis == this.axisOptions.both) {
                    if (this.followed.x - this.xView + this.xDeadZone > this.viewportWidth) {
                        this.xView = this.followed.x - (this.viewportWidth - this.xDeadZone);
                    } else if (this.followed.x - this.xDeadZone < this.xView) {
                        this.xView = this.followed.x - this.xDeadZone;
                    }
                }
                if (this.axis == this.axisOptions.vertical || this.axis == this.axisOptions.both) {

                    if (this.followed.y - this.yView + this.yDeadZone > this.viewportHeight) {
                        this.yView = this.followed.y - (this.viewportHeight - this.yDeadZone);
                    } else if (this.followed.y - this.yDeadZone < this.yView) {
                        this.yView = this.followed.y - this.yDeadZone;
                    }
                }
            }

            this.viewportRect.set(this.xView, this.yView);
           
            if (!this.viewportRect.within(this.worldRect)) {
                if (this.viewportRect.left < this.worldRect.left)
                    this.xView = this.worldRect.left;
                if (this.viewportRect.top < this.worldRect.top)
                    this.yView = this.worldRect.top;
                if (this.viewportRect.right > this.worldRect.right)
                    this.xView = this.worldRect.right - this.viewportWidth;
                if (this.viewportRect.bottom > this.worldRect.bottom)
                    this.yView = this.worldRect.bottom - this.viewportHeight;
            }
            
        }
    }
}

class map {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.image = null;
        this.set = (imagePath) => {
            let img = new Image();
            img.src = imagePath;
            this.image = img;
        }
        this.draw = (context, xView, yView) => {
            let sx, sy, dx, dy;
            let sWidth, sHeight, dWidth, dHeight;
            sx = xView;
            sy = yView;
            sWidth = context.canvas.width;
            sHeight = context.canvas.height;

            if (this.image.width - sx < sWidth) {
                sWidth = this.image.width - sx;
            }
            if (this.image.height - sy < sHeight) {
                sHeight = this.image.height - sy;
            }
            dx = 0;
            dy = 0;
            dWidth = sWidth;
            dHeight = sHeight;
            context.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }
    }
}
function prepareGame(game, fps) {
    game.canvas = document.getElementById("gameCanvas");
    game.context = game.canvas.getContext("2d");
    gameSettings.fps = fps;
    gameSettings.interval = 1000 / fps;
    gameSettings.step = (1000 / fps) / 1000;
    game.world = {
        width: 3735,
        height: 2160,
        map: new map(3735, 2160)
    }
    game.world.map.set("../Assets/GameArea/GameBackground.png");
    game.player = new player(game.world.width / 2, game.world.height / 2, 50, 50);
    game.vWidth = Math.min(game.world.width, game.canvas.width);
    game.vHeight = Math.min(game.world.height, game.canvas.height);
    
    game.camera = new camera(0, 0, game.vWidth, game.vHeight, game.world.width, game.world.height, "both");
    game.camera.follow(game.player, game.vWidth / 2, game.vHeight / 2);
    game.update = () => {
        game.player.update(gameSettings.step, game.world.width, game.world.height);
        let enemiesToRemove = [];
        enemies.forEach(enemy => {
            enemy.update(gameSettings.step, game.world.width, game.world.height);
            if(checkIfObjectIsOutOfBounds(enemy, game.world.width, game.world.height)){
                
                    enemiesToRemove.push(enemy);
            }
                    


        });
        enemiesToRemove.forEach(enemy => {
            enemies.splice(enemies.indexOf(enemy), 1);
        });
        game.camera.update();

    }
    game.render = () => {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.world.map.draw(game.context, game.camera.xView, game.camera.yView);
        game.player.draw(game.context, game.camera.xView, game.camera.yView);
        enemies.forEach(enemy => {
            enemy.draw(game.context, game.camera.xView, game.camera.yView, game.camera);
        })
    }
    game.gameLoop = () => {
        game.update();
        game.render();
        // console.log(game.player.x, game.player.y, game.camera.xView, game.camera.yView);
    }
    game.state = -1;
    game.play = () => {
        if (game.state == -1) {
            game.state = setInterval(() => {
                game.gameLoop();
            }, gameSettings.interval);
            console.log("Play");

        }

    }
    game.pause = () => {
        if(game.state == -1){
            game.play();
        }else{
            clearInterval(game.state);
            game.state = -1;
            console.log("Paused");
        }
    }
    setTimeout(() => {
        game.update();
        game.render();
    }, 1000);
}
prepareGame(game, 60);