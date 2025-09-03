//Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
// Fake async API call (success hoặc failure ngẫu nhiên)
async function fakeApiCall(id: number, delay: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(`✅ API ${id} success after ${delay}ms`);
            } else {
                reject(`❌ API ${id} failed after ${delay}ms`);
            }
        }, delay);
    });
}

export async function handleApiCalls() {
    const apiCalls = [
        fakeApiCall(1, 1000),
        fakeApiCall(2, 1500),
        fakeApiCall(3, 500),
        fakeApiCall(4, 2000),
        fakeApiCall(5, 1200),
    ];

    const results = await Promise.allSettled(apiCalls);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} Success:`, result.value);
        } else {
            console.error(`API ${index + 1} Failed:`, result.reason);
        }
    });

    console.log("👉 Tất cả API đã xử lý xong!");
}

    