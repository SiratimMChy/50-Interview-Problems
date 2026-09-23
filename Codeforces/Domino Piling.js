const input = prompt().split(" ");

const m = Number(input[0]);
const n = Number(input[1]);

const squares = m * n;

console.log(Math.floor(squares / 2));