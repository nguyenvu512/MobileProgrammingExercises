export function getError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}
