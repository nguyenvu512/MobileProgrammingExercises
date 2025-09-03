//Call the API multiple times and log the results.
export async function fetchMultipleData(ids: number[]) {
    try {
        const fetchPromises = ids.map((id) =>
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
        );
        const results = await Promise.all(fetchPromises);
        console.log("Fetched multiple data:", results);
    } catch (error) {
        console.error("Error fetching multiple data:", error);
    }
}