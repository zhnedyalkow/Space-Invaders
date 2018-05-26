class DefaultWeapon {
    fire(x, y) {
        const rocket = new DefaultRocket(x, y, 'default-rocket' + new Date());
        return rocket;
    }
}