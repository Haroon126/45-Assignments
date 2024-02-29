"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Quaid e Azam";
console.log(personName.toLowerCase());
console.log(personName.toLocaleUpperCase());
let Capitalize = personName.split(' ');
const titleCase = Capitalize.map(function (personName) {
    return personName.charAt(0).toUpperCase() + personName.slice(1);
});
console.log(titleCase.join(' '));
