function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

sum([1, 2, 3])

function sumReduce(array) {
    return array.reduce(function (curr, prev) {
        return curr + prev
    })
}

sumReduce([1, 2, 3])

function sumRecursive(array) {
    if (array.length === 1) return array[0]
    return array[0] + sumRecursive(array.slice(1))
}

sumRecursive([1, 2, 3])

function recursiveSum(array) {
    if (array.length === 0) return 0
    return 1 + recursiveSum(array.slice(1))
}

recursiveSum([1, 2, 3, 4, 5, 6, 0])

function alternativeSolutionMax(array, max = 0) {
    return array.length === 0
        ? max
        : alternativeSolutionMax(array.slice(1),
            array[0] > max ? array[0] : max
        )
}

alternativeSolutionMax([1, 33, 22, 54, 11, 7, 99])

function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1]
    let sub_max = max(array.slice(1))
    return array[0] > sub_max
        ? array[0]
        : sub_max
}

max([77, 5, 8, 13, 4, 55])

function quicksort(array) {
    if (array.length < 2) return array
    let pivot = array[0]
    console.log({pivot})
    let less = array.slice(1).filter(function (el) {
        return el <= pivot
    })
    console.log({less})
    let greater = array.slice(1).filter(function (el) {
        return el > pivot
    })
    console.log({greater})
    return quicksort(less).concat([pivot], quicksort(greater))
}

console.log(quicksort([1,2,6,5]))











