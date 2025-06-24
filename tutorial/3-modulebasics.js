//Modules
//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const sayhii = (name) =>{
    console.log(`Hello ${name}`);
};

sayhii("Rakesh");

const greet = require('./4-module2');

namem = "Rakesh";
greet(namem);