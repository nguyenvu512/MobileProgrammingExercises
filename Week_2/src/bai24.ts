export async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // phương thức POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "This is a test post",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }

    const data = await response.json();
    console.log("Response from server:", data);
    return data;
  } catch (error: any) {
    console.error("Error posting data:", error.message);
    return null;
  }
}
