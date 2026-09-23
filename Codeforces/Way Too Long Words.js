const n = Number(prompt());

for (let i = 0; i < n; i++) {
    const word = prompt();

    if (word.length > 10) {
        console.log(
            word[0] + (word.length - 2) + word[word.length - 1]
        );
    } else {
        console.log(word);
    }
}