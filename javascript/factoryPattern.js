class Car {
    constructor(type) {
        this.type = type;
    }

    drive() {
        console.log(`Driving a ${this.type}`);
    }
}

class CarFactory {
    static createCar(type) {
        return new Car(type);
    }
}

const sportsCar = CarFactory.createCar('Sports');
const familyCar = CarFactory.createCar('Family');
sportsCar.drive(); // "Driving a Sports"
familyCar.drive(); // "Driving a Family"
