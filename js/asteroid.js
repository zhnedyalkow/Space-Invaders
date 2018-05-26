class Asteroid extends MovableObj {
    constructor(x, y, id, speed) {
        super(x, y, id);
        this.speed = 1;
    }

    move() {
        const el = document.getElementById(this.id);
        el.style.left = this.x + 'px';
        el.style.top = this.y + 'px';

        this.y += this.speed;
    }
}