export class Car{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
export function getCarDetails(car: Car): string {
    return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
}