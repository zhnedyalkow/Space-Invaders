class RandomGenerate {
    canGenerate() {
        const min = 1;
        const max = 1000;
        const DESIRED_NUMBER = this.getRandom(min, max);
        const first = this.getRandom(min, max);
        // const second = this.getRandom(min, max);
        // const third = this.getRandom(min, max);
        // const four = this.getRandom(min, max);
        // const five = this.getRandom(min, max);

        const validator = () => {
            if (
                first === DESIRED_NUMBER
                // second === DESIRED_NUMBER ||
                // third === DESIRED_NUMBER ||
                // four === DESIRED_NUMBER ||
                // five === DESIRED_NUMBER
            ) {
                return true;
            }
            return false;
        };

        if (validator()) {
            return true;
        }
        return false;
    }


    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}