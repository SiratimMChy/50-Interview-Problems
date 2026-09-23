const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

const t = input[index++];

while (t--) {
    const a = input[index++];
    const b = input[index++];
    const c = input[index++];

    const c1 = Math.abs(a - b);
    const c2 = Math.abs(a + c - b);

    if (c1 > c2) {
        console.log(c1);
    } else {
        console.log(c2);
    }
}