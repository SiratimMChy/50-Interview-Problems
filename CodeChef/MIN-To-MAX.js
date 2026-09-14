function minToMax(tests) {
    const T = parseInt(tests[0]);
    let line = 1;

    for (let t = 0; t < T; t++) {
        const N = parseInt(tests[line++]);
        const array = tests[line++].trim().split(' ').map(Number);

        let minimum = Math.min(...array);
        let operations = 0;

        for (let number of array) {
            if (number > minimum) {
                operations++;
            }
        }

        console.log(operations);
    }
}