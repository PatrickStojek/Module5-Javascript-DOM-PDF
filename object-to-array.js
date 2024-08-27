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

const namesObject = {
    '00001': 'Ala', 
    '00002': 'Ola',
    '00003': 'Ela',
    '00004': 'Iza'
}
/////////object to array usung entries propertys
const objectToArray2 = function(object, keyPropertyName = 'id') {
    const entries = Object.entries(object || {})
    console.log(entries)
    return entries.map((entry) => {
        key = entry[0]
        value = entry[1]
        if(typeof value === 'object') {
            value[keyPropertyName] = key
            return value
        } 
            return {
                [keyPropertyName]: key,
                value: value,
            }  
    })
}
console.log(objectToArray2(peopleObject))
console.log(objectToArray2(namesObject))