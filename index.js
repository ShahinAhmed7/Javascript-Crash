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
// while loop end

// For loop start
for (let forVar = 0; forVar <= 10; forVar++) {
    console.log('For Loop Number ' + forVar);
}
// For loop end

// Date output start
let val;
val = String(new Date()); //for string convert number to string. if you remove string date showing only number
console.log(val);

// Date output end



// Template string html start
let name = 'Shahin';
let lName = 'Ahmed';
let html; // Its empty variable for output html

html = `
    <ul>
        <li>My name is: ${name}</li>
        <li>My last name is: ${lName}</li>
    </ul>
`;
//document.body.innerHTML = html;

// Template string html start


// switch start
let color = 'green';

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    default:
        console.log('Color not found');
}

let day = 'Monday';

switch (day) {
    case 'Sunday':
        console.log('This is sunday');
        break;
    case 'Monday':
        console.log('This is monday');
        break;
    default:
        console.log('None of them');
}
// switch end

// Array start
let helloArray = [
    'Shahin',
    'SObir',
    50,
]

for (let forArray = 0; forArray < helloArray.length; forArray++) {
    console.log(helloArray[forArray]);
}
// Array end

// Function start
function myNum(a, b) {
    let fNum = a + b;
    return fNum;
};
console.log(myNum(20, 70));
// Function end