const playerAnimationInfo = {
    idle: {
        framesLeft: {
            [1]: getImage("../playermove/Playeridleleft1.png"),
            [2]: getImage("../playermove/Playeridleleft2.png"),
            [3]: getImage("../playermove/Playeridleleft3.png"),
            [4]: getImage("../playermove/Playeridleleft4.png"),
            [5]: getImage("../playermove/Playeridleleft5.png"),
            [6]: getImage("../playermove/Playeridleleft6.png"),
            [7]: getImage("../playermove/Playeridleleft7.png"),
            [8]: getImage("../playermove/Playeridleleft8.png"),
            [9]: getImage("../playermove/Playeridleleft9.png"),
            [10]: getImage("../playermove/Playeridleleft10.png"),
            [11]: getImage("../playermove/Playeridleleft11.png"),
            [12]: getImage("../playermove/Playeridleleft12.png"),
            [13]: getImage("../playermove/Playeridleleft13.png"),
            [14]: getImage("../playermove/Playeridleleft14.png"),
            [15]: getImage("../playermove/Playeridleleft15.png"),
        },
        framesRight: {
            [1]: getImage("../playermove/Playeridle1.png"),
            [2]: getImage("../playermove/Playeridle2.png"),
            [3]: getImage("../playermove/Playeridle3.png"),
            [4]: getImage("../playermove/Playeridle4.png"),
            [5]: getImage("../playermove/Playeridle5.png"),
            [6]: getImage("../playermove/Playeridle6.png"),
            [7]: getImage("../playermove/Playeridle7.png"),
            [8]: getImage("../playermove/Playeridle8.png"),
            [9]: getImage("../playermove/Playeridle9.png"),
            [10]: getImage("../playermove/Playeridle10.png"),
            [11]: getImage("../playermove/Playeridle11.png"),
            [12]: getImage("../playermove/Playeridle12.png"),
            [13]: getImage("../playermove/Playeridle13.png"),
            [14]: getImage("../playermove/Playeridle14.png"),
            [15]: getImage("../playermove/Playeridle15.png"),
        },
        start: 1,
        end: 15,
        speed: 2,
        frameWidth: 32,
        frameHeight: 32,
    },
    run: {
        framesLeft: {
            [1]: getImage("../playermove/Playermoveleft1.png"),
            [2]: getImage("../playermove/Playermoveleft2.png"),
            [3]: getImage("../playermove/Playermoveleft3.png"),
            [4]: getImage("../playermove/Playermoveleft4.png"),
            [5]: getImage("../playermove/Playermoveleft5.png"),
            [6]: getImage("../playermove/Playermoveleft6.png"),
            [7]: getImage("../playermove/Playermoveleft7.png"),
            [8]: getImage("../playermove/Playermoveleft8.png"),
        },
        framesRight: {
            [1]: getImage("../playermove/Playermoveright1.png"),
            [2]: getImage("../playermove/Playermoveright2.png"),
            [3]: getImage("../playermove/Playermoveright3.png"),
            [4]: getImage("../playermove/Playermoveright4.png"),
            [5]: getImage("../playermove/Playermoveright5.png"),
            [6]: getImage("../playermove/Playermoveright6.png"),
            [7]: getImage("../playermove/Playermoveright7.png"),
            [8]: getImage("../playermove/Playermoveright8.png"),

        },
        start: 1,
        end: 8,
        speed: 4,
        frameWidth: 32,
        frameHeight: 32,
    },
    attack: {
        framesLeft: {
            [1]: getImage("../playermove/Playerattackleft1.png"),
            [2]: getImage("../playermove/Playerattackleft2.png"),
            [3]: getImage("../playermove/Playerattackleft3.png"),
            [4]: getImage("../playermove/Playerattackleft4.png"),
            [5]: getImage("../playermove/Playerattackleft5.png"),
            [6]: getImage("../playermove/Playerattackleft6.png"),
            [7]: getImage("../playermove/Playerattackleft7.png"),
            [8]: getImage("../playermove/Playerattackleft8.png"),
            [9]: getImage("../playermove/Playerattackleft9.png"),
            [10]: getImage("../playermove/Playerattackleft10.png"),
            [11]: getImage("../playermove/Playerattackleft11.png"),
            [12]: getImage("../playermove/Playerattackleft12.png"),
            [13]: getImage("../playermove/Playerattackleft13.png"),
            [14]: getImage("../playermove/Playerattackleft14.png"),
            [15]: getImage("../playermove/Playerattackleft15.png"),
            [16]: getImage("../playermove/Playerattackleft16.png"),
            [17]: getImage("../playermove/Playerattackleft17.png"),
            [18]: getImage("../playermove/Playerattackleft18.png"),
            [19]: getImage("../playermove/Playerattackleft19.png"),
        },
        framesRight: {
            [1]: getImage("../playermove/Playerattack1.png"),
            [2]: getImage("../playermove/Playerattack2.png"),
            [3]: getImage("../playermove/Playerattack3.png"),
            [4]: getImage("../playermove/Playerattack4.png"),
            [5]: getImage("../playermove/Playerattack5.png"),
            [6]: getImage("../playermove/Playerattack6.png"),
            [7]: getImage("../playermove/Playerattack7.png"),
            [8]: getImage("../playermove/Playerattack8.png"),
            [9]: getImage("../playermove/Playerattack9.png"),
            [10]: getImage("../playermove/Playerattack10.png"),
            [11]: getImage("../playermove/Playerattack11.png"),
            [12]: getImage("../playermove/Playerattack12.png"),
            [13]: getImage("../playermove/Playerattack13.png"),
            [14]: getImage("../playermove/Playerattack14.png"),
            [15]: getImage("../playermove/Playerattack15.png"),
            [16]: getImage("../playermove/Playerattack16.png"),
            [17]: getImage("../playermove/Playerattack17.png"),
            [18]: getImage("../playermove/Playerattack18.png"),
            [19]: getImage("../playermove/Playerattack19.png"),
        },
        start: 1,
        end: 19,
        speed: 2,
        frameWidth: 32,
        frameHeight: 32,
    }




}
function getImage(path) {
    let img = new Image();
    img.src = path;
    return img;
}
class player {
    constructor(x, y, width, height, id) {
        this.id = id
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 200
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
        this.isRunning = false
        this.runMultiplier = 1.5
        this.isAlive = true
        this.isDying = false
        this.attackTimer = 20;
        //player stat props
        this.maxHealth = 100
        this.health = this.maxHealth

        this.maxStamina = 100
        this.stamina = this.maxStamina
        this.staminaRegen = 0.1
        this.sprintCost = 0.5



        this.kill = () => {
            this.isDying = true
            this.state = this.states.die
        }
        //Logic update
        this.update = (step, worldWidth, worldHeight) => {
            if (!this.isDying) {
                if (!game.controls.attack) {
                    if (this.isRunning) {
                        if (this.stamina >= 2) {
                            this.running = false
                            step *= this.runMultiplier;
                        }
                        this.stamina -= this.sprintCost;
                        if (this.stamina < 0) {
                            this.stamina = 0
                        }
                    } else {
                        if (this.state == this.states.idle) {
                            this.stamina += this.staminaRegen * 2;
                        } else {
                            this.stamina += this.staminaRegen;

                        }
                        if (this.stamina > this.maxStamina) {
                            this.stamina = this.maxStamina
                        }
                    }
                    if (game.controls.left)
                        this.x -= this.speed * step;
                    if (game.controls.up)
                        this.y -= this.speed * step;
                    if (game.controls.right)
                        this.x += this.speed * step;
                    if (game.controls.down)
                        this.y += this.speed * step;

                    //Boundary check
                    if (this.x - this.width / 2 < 0) {
                        this.x = this.width / 2;
                    }
                    if (this.y - this.height / 2 < 0) {
                        this.y = this.height / 2;
                    }
                    if (this.x + this.width / 2 > worldWidth) {
                        this.x = worldWidth - this.width / 2;
                    }
                    if (this.y + this.height / 2 > worldHeight) {
                        this.y = worldHeight - this.height / 2;
                    }
                } else {
                    //Attack logic
                    this.attackTimer--;
                    if (this.attackTimer <= 0) {
                        console.log("attack");
                        this.attackTimer = 20;
                        //Check for collision with enemies
                        let enemiesToHit = enemies.filter(enemy => {
                            return (this.x - enemy.x) * (this.x - enemy.x) + (this.y - enemy.y) * (this.y - enemy.y) < (this.width / 2 + enemy.width / 2) * (this.width / 2 + enemy.width / 2)
                        })
                        enemiesToHit.forEach(enemy => {
                            enemy.health -= 10;
                            console.log(enemy.health)
                            if (enemy.health <= 0) {
                                enemy.kill();
                            }
                        })
                    }


                }
            }
        }
        //Animation update
        this.animate = (image) => {
            if (this.isAlive) {
                if (game.controls.attack) {
                    this.state = this.states.attack
                }
                else if (game.controls.left || game.controls.right || game.controls.up || game.controls.down) {
                    this.state = this.states.run
                }
                else {
                    this.state = this.states.idle
                }

                let img = image;
                if (this.state != this.lastUpdatedState) {
                    this.frameCount = 1;
                }
                let running = (this.isRunning) ? this.runMultiplier : 1;
                switch (this.state) {
                    case this.states.idle:
                        if (this.timer > playerAnimationInfo.idle.speed / running) {
                            if (this.direction == "right") {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.idle.end) {
                                    this.frameCount = playerAnimationInfo.idle.start;
                                }
                                img = playerAnimationInfo.idle.framesRight[this.frameCount];
                                this.lastUpdatedState = this.states.idle;
                            }
                            else {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.idle.end) {
                                    this.frameCount = playerAnimationInfo.idle.start;
                                }
                                img = playerAnimationInfo.idle.framesLeft[this.frameCount];
                                this.lastUpdatedState = this.states.idle;

                            }

                            this.timer = 0;
                        } else {

                            this.timer++;
                        }
                        break;
                    case this.states.run:
                        if (this.timer > playerAnimationInfo.run.speed / running) {

                            if (this.direction == "right") {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.run.end) {
                                    this.frameCount = playerAnimationInfo.run.start;
                                }
                                img = playerAnimationInfo.run.framesRight[this.frameCount];
                                this.lastUpdatedState = this.states.run;
                            }
                            else {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.run.end) {
                                    this.frameCount = playerAnimationInfo.run.start;
                                }
                                img = playerAnimationInfo.run.framesLeft[this.frameCount];
                                this.lastUpdatedState = this.states.run;


                            }
                            this.timer = 0;
                        } else {
                            this.timer++;
                        }
                        break;

                    case this.states.attack:
                        if (this.timer > playerAnimationInfo.attack.speed / running) {
                            if (this.direction == "right") {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.attack.end) {
                                    this.frameCount = playerAnimationInfo.attack.start;
                                }
                                img = playerAnimationInfo.attack.framesRight[this.frameCount];
                                this.lastUpdatedState = this.states.attack;
                            }
                            else {
                                this.frameCount++;
                                if (this.frameCount > playerAnimationInfo.attack.end) {
                                    this.frameCount = playerAnimationInfo.attack.start;
                                }
                                img = playerAnimationInfo.attack.framesLeft[this.frameCount];
                                this.lastUpdatedState = this.states.attack;

                            }
                            this.timer = 0;
                        } else {
                            this.timer++;
                        }
                        break;

                }
                return img;
            }
        }

        //Render update
        this.draw = (context, xView, yView) => {
            if (this.isAlive) {
                // context.translate((this.x - this.width / 2) - xView, (this.y - this.height / 2) - yView, this.width, this.height);

                this.image = this.animate(this.image);
                context.drawImage(this.image, (this.x - this.width / 2) - xView, (this.y - this.height / 2) - yView, this.width * 2, this.height * 2);
                // let pat = context.createPattern(this.image, 'no-repeat');
                // context.fillStyle = pat;
                // context.fill();
                context.restore();

            }
        }
        this.setMaxHealth = (number) => {
            this.maxHealth = number;
            uiStaticPropUpdate();
        }
        this.setMaxStamina = (number) => {
            this.maxStamina = number;
            uiStaticPropUpdate();
        }

    }
}