// 1

const numbers = [2, 3, 5, 7, 11, 13, 17];

function currentSums(numbers) {
   var arr = [];

   numbers.reduce(function(sum, current, i) {
      return arr[i] = sum + current;
   }, 0);

   console.log(arr);
}

currentSums(numbers);


// 2
const str = "Каждый охотник желает знать, где сидит фазан.";

function firstLetter(str) {
    let arr = str.split(' ');
    let newArr = [];

    arr.filter(function (item, i) {
        newArr[i] = item[0];
        return newArr;
    });

    return newArr;
}

console.log(firstLetter(str));


// 3
const arr = [1, 2, 3, 4, 5];

const changeArray = num => {
        let len = num.length / 2;
        let hlen = Math.trunc(len);
        let cpos = hlen + num.length % 2;

        for (let i = 0; i < hlen; i++) {
            let t = num[i];
            num[i] = num[cpos + i];
            num[cpos + i] = t;
        }

    return num;
}

console.log(changeArray(arr)); //[ 4, 5, 3, 1, 2 ]


