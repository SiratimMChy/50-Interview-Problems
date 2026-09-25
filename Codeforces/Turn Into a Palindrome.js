const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
let index = 0;

const t = Number(input[index++]);

while (t--) {
    const n = Number(input[index++]);
    const ch = input[index++];
    const str = input[index++];

    let count = 0;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        const left = str[i];
        const right = str[n - i - 1];

        if (left === right) {
            continue;
        }

        if (left === ch || right === ch) {
            count++;
        } else {
            count += 2;
        }
    }

    console.log(count);
}