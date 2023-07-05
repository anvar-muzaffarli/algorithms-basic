// 1,2,4,5,6,7,8,9,10,

let numbers = "" //

for(let i=1; i<=10; i++) {
// numbers =numbers+ i
numbers +=i

if(i!==10) {
    numbers +=","
}

}

console.log(numbers)