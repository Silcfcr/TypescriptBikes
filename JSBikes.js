class Bike {
    constructor(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Maximum speed: ${this.max_speed} kph, miles = ${this.miles}`);
        return this;
    }
    ride() {
        console.log("Ridding");
        this.miles += 10;
        return this;
    }
    reverse() {
        if (this.miles < 5) {
            console.log("can't reverse");
        }
        else {
            this.miles -= 5;
        }
        return this;
    }
}
let MtbBike = new Bike(3000, 50);
let RoadBike = new Bike(2000, 80);
let GravelBike = new Bike(4000, 65);

MtbBike.ride().ride().ride().reverse().displayInfo();
RoadBike.ride().ride().reverse().reverse().displayInfo();
GravelBike.reverse().reverse().reverse().displayInfo();