//Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
export async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}