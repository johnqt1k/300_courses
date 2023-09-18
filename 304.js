function findTarget (arr, target) {
    const index = arr.findIndex(element => element > target);

    if (index !== -1) {
        return {
            value: arr [index],
            Index: index
        };
    } else {
        return null;
    }
}

const numbers = [1, 4, 7, 10 ,15];
const targetNumber = 8;

const result = findTarget (numbers, targetNumber);

console.log(`Value: ${result.value}, Index: ${result.Index}`);

