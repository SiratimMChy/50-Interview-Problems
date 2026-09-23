const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

const n = input[index++];

let count = 0;

for (let i = 0; i < n; i++) {
    const p = input[index++];
    const v = input[index++];
    const t = input[index++];

    if (p + v + t >= 2) {
        count++;
    }
}

console.log(count);