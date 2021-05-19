// For loops

//   begin;  condition, statement
for(x = 0; x < 10; x++){
    //console.log(x)
}

// Looping on Array
var techs = ['Python', "Html", "Css", "Javascript"];

for(x = 0; x < techs.length ; x++){
    console.log(x)
    console.log(techs[x])
}

// Looping on Object
var person = {
    Name : "Adam",
    Age : 22,
    skills : techs,
    Name : "Sam"
}

console.log(person)


for(prop in person ){
    console.log(prop)
    console.log(person[prop])
}


var blogs = [
    {
        "title" : "Blog 1 title",
        "description" : "Description",
        "date" : "19-05-2021"
    },
    {
        "title" : "Blog 2 title",
        "description" : "Description",
        "date" : "19-05-2021"
    },
    {
        "title" : "Blog 3 title",
        "description" : "Description",
        "date" : "19-05-2021"
    }
]


console.log(blogs)