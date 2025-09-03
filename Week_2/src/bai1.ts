export const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});
