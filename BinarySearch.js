// O (log n)

console.time()

function binarySearch(massiv,hedefEdedi) {
    let left =0
    let right = massiv.length-1

// dovr left right kicik olan muddete qeder 
    while(left <=right) {

        // Build in function
        // Math.random()
        // Math.floor(4.8) //4
        // Math.ceil(4.2) //5
        // Math.round()
        let middle = Math.floor((left+right)/2)

        if(massiv[middle]===hedefEdedi) {
            return middle
        }

        if(massiv[middle] <hedefEdedi) {
            left = middle+1 // hedef sagdadi
        } else {
            right = middle-1 //hedef ededimiz soldadi
        }


    }

    return -1 //hedef ededimiz tapilmadi
}

const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 45

console.log(binarySearch(array, target))

console.timeEnd()

