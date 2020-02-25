function filterBy(arr, type) {
    return arr.filter((value => typeof value !== type))
}

let arr = ['hello', 'world', 23, '23', null];

console.log(filterBy(arr, "string"));