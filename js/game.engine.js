class Engine {
    constructor() {
        this.gameObjects = [];
        this.dom = new Dom();
        this.random = new RandomGenerate();
    }

    run() {
        this.loadPlayerBattleShip();


        setInterval(() => {
            this.gameObjects.forEach((obj) => {
                if (this.random.canGenerate()) {
                    this.loadAsteroid();
                }
                this.dom.draw(obj);
                obj.move();
            });
        }, 30);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    loadAsteroid() {
        const x = this.getRandomInt(window.outerWidth, window.outerWidth / 8);
        const y = 0;

        const asteroid = new Asteroid(x, y, 'asteroid' + new Date());

        this.gameObjects.push(asteroid);

    }

    loadPlayerBattleShip() {
        const x = window.outerWidth / 2;
        const y = window.outerHeight / 2;

        const battleship = new BattleShip(x, y, 'player-battleship',
             new DefaultWeapon());

        this.gameObjects.push(battleship);

        document.onkeydown = (e) => {
            let playerLeft = 0;
            let playerTop = 0;
            const SPEED = 15;

            if (e.keyCode === 32) {
                const rocket = battleship.fire();
                this.gameObjects.push(rocket);
            }

            if (e.keyCode === 40) {
                playerTop = SPEED;
            }

            if (e.keyCode === 38) {
                playerTop = SPEED * (-1);
            }

            if (e.keyCode === 39) {
                playerLeft = SPEED;
            }

            if (e.keyCode === 37) {
                playerLeft = SPEED * (-1);
            }

            battleship.x += playerLeft;
            battleship.y += playerTop;
        };
    }
}

document.addEventListener('DOMContentLoaded', (ev) => {
    const engine = new Engine();
    engine.run();
});