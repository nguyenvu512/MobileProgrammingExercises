export const promiseChain = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 60000); // 60000ms = 1 phút
}).then((num) => {
  return num * num * num; // 2^3 = 8
});