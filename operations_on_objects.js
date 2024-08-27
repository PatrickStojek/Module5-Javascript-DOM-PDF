const people = [
    { name: 'Ala', age: 25, work: { experience: 3, salary: 4010 }, city: 'Lublin', favoriteColors: ['green', 'yellow'] },
    { name: 'Ola', age: 21, work: { experience: 3, salary: 5100 }, city: 'Warszawa', favoriteColors: ['black', 'yellow'] },
    { name: 'Ela', age: 28, work: { experience: 1, salary: 1600 }, city: 'Gdańsk', favoriteColors: ['green'] },
    { name: 'Iza', age: 24, work: { experience: 5, salary: 6020 }, city: 'Lublin', favoriteColors: ['white', 'red'] },
]

///filter by city
//filter by work experience
//add all salaries

const filterbyCity = function(city) {
    return function(person) {
        return person.city === city
    }
}

const filterbyWorkExperience = function(experience) {
    return function(person) {
        return person.work.experience > experience
    }
}
const sumSalaries = function(reduced,person){
    return reduced + person.work.salary
}
const salaries = (
    people
            .filter(filterbyCity('Lublin'))
            .filter(filterbyWorkExperience(2)) 
            .reduce(sumSalaries,0)
        );
console.log(salaries)