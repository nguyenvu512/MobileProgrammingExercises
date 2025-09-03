//Write an async function batchProcess() that processes 5 async tasks at once (usePromise.all).
// Fake async task (simulating API call or work)
async function fakeTask(id: number, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} completed after ${delay}ms`);
        }, delay);
    });
}
// Run 5 async tasks in parallel
export async function batchProcess() {
    const tasks = [
        fakeTask(1, 1000),
        fakeTask(2, 2000),
        fakeTask(3, 1500),
        fakeTask(4, 500),
        fakeTask(5, 1200),
    ];

    try {
        const results = await Promise.all(tasks);
        console.log("All tasks completed:", results);
    } catch (error) {
        console.error("Error in batchProcess:", error);
    }
}

// Example usage
