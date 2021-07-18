function findSmallest(array) {
    let smallestIndex = 0
    let smallestElement = array[0]

    for (var i = 1; i < array.length; i++){
        if (smallestElement > array[i]){
            smallestElement = array[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

function selectionSort(arr) {
    if (!arr.length) return []

    let smallest = arr.splice(findSmallest(arr), 1)
    return smallest.concat(selectionSort(arr))
}

selectionSort([5, 3, 6, 2, 10])

function countDown(value) {
    if (value <= 0) return
    countDown(value - 1)
}

countDown(5)

function Factorial(i) {
    if (i <= 0) return 1
    return i * Factorial(i - 1)

}

console.log(Factorial(5))