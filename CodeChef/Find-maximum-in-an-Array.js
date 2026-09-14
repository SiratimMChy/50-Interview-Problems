function maxVal(tests) {
    const T = parseInt(tests[0]);

    for (let t = 1; t <= T; t++) {
        const N = parseInt(tests[t * 2 - 1]);
        const A = tests[t * 2].trim().split(" ").map(Number);

        let maxHeight = A[0];

        for (let i = 1; i < N; i++) {
            if (A[i] > maxHeight) {
                maxHeight = A[i];
            }
        }

        console.log(maxHeight);
    }
}

const fs = require("fs");

const tests = fs.readFileSync(0, "utf8").trim().split("\n");

maxVal(tests);