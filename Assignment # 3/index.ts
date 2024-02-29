// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Quaid e Azam"
console.log(personName.toLowerCase());


console.log(personName.toUpperCase());

let Capitalize : string[] = personName.split(' ')

 const titleCase  : string []=    Capitalize.map(function(personName:string) :string{
    return personName.charAt(0).toUpperCase() + personName.slice(1)
})

console.log(titleCase.join(' '));




