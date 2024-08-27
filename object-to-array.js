const people = [
    { id: '00001', name: 'Ala', age: 25 },
    { id: '00002', name: 'Ola', age: 21 },
    { id: '00003', name: 'Ela', age: 28 },
    { id: '00004', name: 'Iza', age: 24 },
]

const peopleObject = {
    '00001': { name: 'Ala', age: 25 },
    '00002': { name: 'Ola', age: 21 },
    '00003': { name: 'Ela', age: 28 },
    '00004': { name: 'Iza', age: 24 },
}
const objectToArray = function(object) {
    let arrayFromObject = []

    for(const property in object) {
        const value = object[property]
        value['id'] = property
        arrayFromObject = arrayFromObject.concat(value)
    }
    return arrayFromObject
}

console.log(objectToArray(peopleObject))

