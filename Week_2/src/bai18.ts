////Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
export async function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}