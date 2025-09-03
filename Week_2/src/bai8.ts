//Create a Promise chain: square the number 2, then double it, then add 5.
export const promiseChain = new Promise<number>((resolve) => {
    resolve(2);
}).then((num) => {
    return num * num;
}).then((squared) => {
    return squared * 2; 
}).then((doubled) => {
    return doubled + 5; 
});