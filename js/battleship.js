class BattleShip extends MovableObj {
    constructor(x, y, id, weapon) {
        super(x, y, id);

        this.weapon = weapon;
    }

    move() {
        const el = document.getElementById(this.id);
        el.style.left = this.x + 'px';
        el.style.top = this.y + 'px';
    }

    fire() {
        return this.weapon.fire(this.x + 12.5, this.y);
    }
}
