let enemies = [];
class enemy {
    constructor(x, y, width, height, speed) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
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
        this.runMultiplier = 1.5
        this.isAlive = true
        this.isDying = false
        this.aiTimer = 0;
        this.kill = () => {
            this.isDying = true
            this.state = this.states.die
        }
        //Logic update
        this.update = (step, worldWidth, worldHeight) => {
            if (this.isAlive) {
                this.aiTimer ++;
                if (this.isEnraged) {
                    step *= this.runMultiplier;
                }
                //get player position
                let playerX = game.player.x;
                let playerY = game.player.y;
                //get distance between player and enemy
                let distanceX = playerX - this.x;
                let distanceY = playerY - this.y;
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                //Deafult enemy speed
                
                //if player is close enough move towards player then if player is far away stop for 2 seconds then move right in a sinus wave
                if (distance < 300) {
                    this.xSpeed = this.speed * (distanceX / distance);
                    this.ySpeed = this.speed * (distanceY / distance);
                    this.isFollowing = true;
                } else if (this.isFollowing) {
                    this.isFollowing = false;
                    this.aiTimer = 0;
                } else if (this.aiTimer > 50) {
                    //Set xSpeed and ySpeed to sinus wave where xSpeed never goes below 0;
                    this.xSpeed = this.speed * Math.sin(this.aiTimer / 500);
                    if(this.xSpeed < 0) {
                        this.xSpeed *= -1;
                    }
                    this.ySpeed = this.speed * Math.sin(this.aiTimer / 100);
                }else if (this.aiTimer < 50) {
                    this.xSpeed = 0;
                    this.ySpeed = 0;
                }



                
                this.x += this.xSpeed * step;
                this.y += this.ySpeed * step;


            }
        }

        //Render update
        this.draw = (context, xView, yView,camera) => {
            if (this.isAlive) {
                // console.log(xView+camera.viewportWidth, yView+camera.viewportHeight);
                //Draw enemy if it is alive and inside the view
                if (this.x > xView-this.width && this.x < xView + camera.viewportWidth && this.y > yView-this.height && this.y < yView + camera.viewportHeight) {
                   
                    context.drawImage(this.image, (this.x - this.width / 2) - xView, (this.y - this.height / 2) - yView, this.width * 2, this.height * 2);
                    context.restore();
                }





               
               

            }
        }


    }
}
function spawnEnemy(x, y, width, height, speed) {
    enemies.push(new enemy(x, y, width, height, speed));
}
function spawnEnemies(number,x,y){
    //spawn enemies with random speed between 100-199
    for (let i = 0; i < number; i++) {
        spawnEnemy(x, y, 64, 64, getRandomNumberBetweenNumbers(100,199));
    }
}
function getRandomNumberBetweenNumbers(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkIfObjectIsOutOfBounds(object, worldWidth, worldHeight) {
    if (object.x < 0 || object.x > worldWidth || object.y < 0 || object.y > worldHeight) {
        return true;
    }
    return false;
}
