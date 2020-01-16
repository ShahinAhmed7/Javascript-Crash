//console.log('Hello World');



// let age = 32;
// let low = 30;
// const age = "26";
// console.log(`My age is ${age}`);



//Array Start
const fruit = [
    'Apple',
    'Orange'
];

// new added value
fruit[3] = 'Malta',

    // Push new value
    fruit.push('mango');

// Unshift Always array value top 
fruit.unshift('pears');

// use pop for last one hide
fruit.pop();

// Output value
console.log(fruit);

//Array End



// Object start

const person = {
    firstName: 'Shahin',
    lastName: 'Ahmed',
    age: 30,
    hobbies: ['Music', 'Travel'], //thia is array
    address: { //object inside object
        street: 'dhaka bangladesh',
        district: 'Faridpur',
    }
}

console.log(person.address.district, person.age);

// Object end


// Array with object start
const todos = [{
        id: 1,
        text: 'Metting with boss',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Its coffee time',
    },
    {
        id: 3,
        text: 'Its lunch time',
    }
]

console.log(todos[0].isCompleted);


// Array with object end



// For loop start
for (let forLoopVar = 0; forLoopVar <= 10; forLoopVar++) {
    console.log('For loop number:' + forLoopVar);
    forLoopVar++;
}

// For loop end



// while loop start
let whileVar = 0;
while (whileVar <= 10) {
    console.log('While loop number:' + whileVar);
    whileVar++;
}
// while loop stendart

// Date output start
let val;
val = String(new Date()); //for string convert number to string. if you remove string date showing only number
console.log(val);

// Date output end