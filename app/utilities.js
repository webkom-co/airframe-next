export function randomArray(arr) {
    const index = Math.round(Math.random() * (arr.length - 1));
    return arr[index];
}