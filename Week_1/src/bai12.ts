interface Flyable {
    fly(): string;
}
interface Swimmable {
    swim(): string;
}
export class Brid implements Flyable, Swimmable {
    fly(): string {
        return "The bird is flying";
    }

    swim(): string {
        return "The bird is swimming";
    }
}
export class Fish implements Swimmable {
    swim(): string {
        return "The fish is swimming";
    }
}