export class Bike {
    price: number;
    max_speed: number;
    miles: number;

    constructor(price: number, max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Maximum speed: ${this.max_speed} kph, miles = ${this.miles}`);

    }
    ride() {
        console.log("Ridding");
        this.miles += 10;
        return this;


    }
    reverse() {
        console.log("Reversing");
        if (this.miles > 5) {
            console.log("can't reverse")
        } else {
            this.miles -= 5;
        }
        return this;


    }
}

const MtbBike = new Bike(3000, 50)
const RoadBike = new Bike(2000, 80)
const GravelBike = new Bike(4000, 65)

MtbBike.ride().ride().ride().reverse().displayInfo();
RoadBike.ride().ride().reverse().reverse().displayInfo();
GravelBike.reverse().reverse().reverse().displayInfo();
