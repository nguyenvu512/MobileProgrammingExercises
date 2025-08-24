//20. Write a Vehicle interface and implement it in Car and Bike classes.
class Vehicle {
    constructor(public make: string, public model: string, public year: number) { }

    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
export class Car extends Vehicle {
    private doors: number;

    constructor(make: string, model: string, year: number, doors: number) {
        super(make, model, year);
        this.doors = doors;
    }

    getDetails(): string {
        return `${super.getDetails()} with ${this.doors} doors`;
    }
}
export class Bike extends Vehicle {
    private type: string;

    constructor(make: string, model: string, year: number, type: string) {
        super(make, model, year);
        this.type = type;
    }

    getDetails(): string {
        return `${super.getDetails()} of type ${this.type}`;
    }
}