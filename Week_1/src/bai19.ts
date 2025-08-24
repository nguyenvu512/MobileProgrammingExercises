//19. Demonstrate method overriding using polymorphism with Animal and subclasses.

import { Animal } from "./bai11";
import { Cat } from "./bai11";
import { Dog } from "./bai9";

const animals: Animal[] = [
    new Cat("Whiskers", 2),
    new Dog("Buddy", 3)
];
animals.forEach(animal => {
    console.log(`${animal.name} (${animal.age} years old) says: ${animal.sound()}`);
});
