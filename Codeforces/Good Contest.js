const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

const t = input[index++];

while (t--) {
    const n = input[index++];

    const p1 = input[index++];
    const p2 = input[index++];
    const p3 = input[index++];

    const allThree = Math.min(p1, p2, p3);

    const weak = n - allThree;

    console.log(weak);
}