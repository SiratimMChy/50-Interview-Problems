const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let index = 0;

const t = Number(input[index++]);

while (t--) {
    const n = Number(input[index++]);
    const str = input[index++];

    let zero = 0;
    let one = 0;

    for (const ch of str) {
        if (ch === "0") {
            zero++;
        } else {
            one++;
        }
    }

    if (str[0] === "1") {
        console.log(zero);
        continue;
    }

    let result = one;

    let leftOne = 0;
    let rightZero = zero;

    for (let i = 0; i < n; i++) {

        if (str[i] === "1") {
            leftOne++;
        } else {
            rightZero--;
        }

        const count = leftOne + rightZero;

        result = Math.min(result, count);
    }

    console.log(result);
}