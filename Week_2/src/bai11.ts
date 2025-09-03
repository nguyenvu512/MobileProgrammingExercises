//11. Convert Exercise 1 into async/await.
export async function asyncFunction(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}