class DefaultRocket extends MovableObj {
    constructor(x, y, id) {
        super(x, y, id);
        this.speed = 2;
    }
    move() {
        const el = document.getElementById(this.id);
        el.style.left = this.x + 'px';
        el.style.top = this.y + 'px';

        this.y -= this.speed;
    }
}

