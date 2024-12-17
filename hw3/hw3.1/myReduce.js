const numbers = [175, 50, 25]

function myFunc(acc, ele, i, arr) {
    return acc + ele;
}

Array.prototype.myReduce = function (fn, initAcc) {
    let acc = initAcc;
    let i = 0

    if (initAcc === undefined) {
        acc = this[0];
        i = 1;
    }

    for (; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }

    return acc;
}

console.log("With initial accumulator value (numbers.myReduce(myFunc, 0)) " + numbers.myReduce(myFunc, 0));
console.log("Without initial accumulator value (numbers.myReduce(myFunc)) " + numbers.myReduce(myFunc));