//24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
abstract class Appliance {
    abstract turnOn(): string;
}
export class Fan extends Appliance {
    turnOn(): string {
        return "Fan is now ON.";
    }
}
export class AirConditioner extends Appliance {
    turnOn(): string {
        return "Air Conditioner is now ON.";
    }
}