export function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}