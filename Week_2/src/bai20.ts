//Add a timeout: if the API call takes more than 2 seconds, throw an error.
export async function fetchUserWithTimeout(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, 2000);

        setTimeout(() => {
            clearTimeout(timeout);
            resolve({ id, name: `User${id}` });
        }, 1000); // Simulate API call taking 1 second
    });
}