function LARGESECOND(tests) {
    const T = parseInt(tests[0]);
    let result = [];

    for (let t = 1; t <= T; t++) {
        const N = parseInt(tests[t * 2 - 1]);
        const array = tests[t * 2].trim().split(' ').map(Number);

        let largest = -Infinity;
        let secondLargest = -Infinity;

        for (let number of array) {
            if (number > largest) {
                secondLargest = largest;
                largest = number;
            } else if (number < largest && number > secondLargest) {
                secondLargest = number;
            }
        }

        result.push(largest + secondLargest);
    }

    console.log(result.join('\n'));
}

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    const tests = input.trim().split('\n');
    LARGESECOND(tests);
});