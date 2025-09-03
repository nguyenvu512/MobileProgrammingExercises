//Write a Promise that reads an array after 1 second and filters even numbers.
export function filterEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}