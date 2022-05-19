let enemies = [];
class enemy {
    constructor(x, y, width, height, speed, id) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.id = id
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.states = {
            idle: 0,
            run: 1,
            attack: 2,
            die: 3
        }
        this.lastUpdatedState;
        this.frameCount = 0
        this.state = this.states.idle
        this.image = playerAnimationInfo.idle.framesRight[1]
        this.timer = 0
        this.direction = "right"
        this.isEnraged = false
        this.isFollowing = false
        this.followed;
        this.runMultiplier = 1.5
        this.isAlive = true
        this.isDying = false
        this.aiTimer = 0;
        this.damage = 5;
        this.isAttacking = false;
        this.health = 100;
        this.deathFrame = 0;
        this.deathFrameCount = 5;
        this.kill = () => {
            this.isDying = true
            this.state = this.states.die
            socket.emit("enemyIsDying", { id: this.id });
            console.log(this.id)
        }
        //Logic update
        this.update = (step, worldWidth, worldHeight) => {
            if (this.isAlive && !this.isDying) {
                this.aiTimer++;
                if (this.isEnraged) {
                    step *= this.runMultiplier;
                }
                //get closest player in players
                let closestPlayer = players[0];
                let closestDistance = Math.sqrt(Math.pow(closestPlayer.x - this.x, 2) + Math.pow(closestPlayer.y - this.y, 2));
                for (let i = 0; i < players.length; i++) {
                    let distance = Math.sqrt(Math.pow(players[i].x - this.x, 2) + Math.pow(players[i].y - this.y, 2));
                    if (distance < closestDistance) {
                        closestPlayer = players[i];
                        closestDistance = distance;
                    }
                }
                let playerX = closestPlayer.x;
                let playerY = closestPlayer.y;
                //get distance between player and enemy
                let distanceX = playerX - this.x;
                let distanceY = playerY - this.y;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                //Deafult enemy speed

                //if player is close enough (500px) move towards player then if player is far away stop for 2 seconds then move right in a sinus wave



                if (distance < 300) {
                    this.xSpeed = this.speed * (distanceX / distance);
                    this.ySpeed = this.speed * (distanceY / distance);
                    this.isFollowing = true;

                    //check if this is on the player and if true attack after with cooldown of 2sec him and stop moving 
                    if (distance < 50) {

                        this.isFollowing = false;
                        this.xSpeed = 0;
                        this.ySpeed = 0;
                        if (this.aiTimer > 50) {
                            this.aiTimer = 0;
                            if (this.isAttacking) {
                                game.player.health -= this.damage;
                            } else {
                                this.isAttacking = true;
                            }
                        }
                    } else {
                        this.isAttacking = false;
                    }
                } else if (this.isFollowing) {
                    this.isFollowing = false;
                    this.aiTimer = 0;
                } else if (this.aiTimer > 50) {
                    //Set xSpeed and ySpeed to sinus wave where xSpeed never goes below 0;
                    this.xSpeed = this.speed * Math.sin(this.aiTimer / 500);
                    if (this.xSpeed < 0) {
                        this.xSpeed *= -1;
                    }
                    this.ySpeed = this.speed * Math.sin(this.aiTimer / 100);
                } else if (this.aiTimer < 50) {
                    this.xSpeed = 0;
                    this.ySpeed = 0;
                }





                this.x += this.xSpeed * step;
                this.y += this.ySpeed * step;


            }
        }

        //Render update
        this.draw = (context, xView, yView, camera) => {
            if (this.isAlive && !this.isDying) {
                // console.log(xView+camera.viewportWidth, yView+camera.viewportHeight);
                //Draw enemy if it is alive and inside the view
                if (this.x > xView - this.width && this.x < xView + camera.viewportWidth && this.y > yView - this.height && this.y < yView + camera.viewportHeight) {

                    context.drawImage(this.image, (this.x - this.width / 2) - xView, (this.y - this.height / 2) - yView, this.width * 2, this.height * 2);
                    context.restore();
                }








            }else if(this.isDying){
                if(this.deathFrameCount < this.deathFrame){
                    context.drawImage(this.image, (this.x - this.width / 2) - xView, (this.y - this.height / 2) - yView, this.width * 2, this.height * 2);
                    this.deathFrameCount++;
                } else{
                    this.isAlive = false;
                    this.deathFrameCount = 0;
                    socket.emit("enemyDied", { id: this.id });
                   
                }
            }
        }


    }
}
const enemyAi = {
    bat: batAi
}
function spawnEnemy(x, y, width, height, speed,id) {
    enemies.push(new enemy(x, y, width, height, speed,id));
}
function spawnEnemies(number, x, y) {
    //spawn enemies with random speed between 100-199
    for (let i = 0; i < number; i++) {
        socket.emit("spawnEnemy", {
            x: x,
            y: y,
            width: 50,
            height: 50,
            id:0,
            speed: Math.floor(Math.random() * 100) + 100
        });
    }
}
function getRandomNumberBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkIfObjectIsOutOfBounds(object, worldWidth, worldHeight) {
    if (object.x < 0 || object.x > worldWidth || object.y < 0 || object.y > worldHeight) {
        return true;
    }
    return false;
}
//Bat AI
function batAi(followed, step, worldWidth, worldHeight) {

}

