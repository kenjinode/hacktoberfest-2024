class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        // Initialize properties here
    }

    getInstance() {
        return this;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2); // true
