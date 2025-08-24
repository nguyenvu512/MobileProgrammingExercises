//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
export class Animal {
    protected makeSound(): string {
        return "Some generic animal sound";
    }
}
export class Cat extends Animal {
    protected makeSound(): string {
        return "Meow!";
    }
}
export class Dog extends Animal {
    protected makeSound(): string {
        return "Woof!";
    }
}