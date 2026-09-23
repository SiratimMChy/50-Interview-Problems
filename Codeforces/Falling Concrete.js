const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

const t = input[index++];

while (t--) {
    const n = input[index++];

    const arr = [];

    for (let i = 0; i < n; i++) {
        const a = input[index++];

        arr.push(a - (i + 1));
    }

    arr.sort((a, b) => a - b);

    let result = 1;
    let current = 1;

    for (let i = 1; i < n; i++) {

        if (arr[i] === arr[i - 1]) {
            continue;
        }

        if (arr[i] === arr[i - 1] + 1) {
            current++;
        } else {
            current = 1;
        }

        result = Math.max(result, current);
    }

    console.log(result);
}