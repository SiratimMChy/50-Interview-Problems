var sortedSquares = function (nums) {
    const squared = nums.map(num => num * num);
    return squared.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));