//29. Create an interface Movable with method move(). Implement it in Car and Robot.
interface Movable {
    move(): string;
}
export class Car implements Movable {
    move(): string {
        return "The car is moving.";
    }
}
export class Robot implements Movable {
    move(): string {
        return "The robot is moving.";
    }
}
