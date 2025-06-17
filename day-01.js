// // const value= 1;
// // console.log(value);


// // const value2 = 2;
// // console.log(value2);



// // //SHEKHAR
// // console.log("HELLO WORLD!");

// // const a = (5,2);
// console.log("HELLO SHEKHAR!" || "HELLO WORLD!");
// console.log(0 && "HELLO WORLD!");


// console.log("HELLO WORLD");
// setTimeout(() => {
//     console.log("HELLO SHEKHAR");
// }, 1000);
// console.log("HELLO WORLD AGAIN");

// console.log("Hello world!");
// setInterval(() => {
//     console.log("Hello WORLD!");
//     clearInterval();
// },2000);

// console.log("Hello world again!");

function outer(c) {
    // let counter = 0;
    return function (b) {
        // counter= counter+b;
        // return counter;
        return c + b;
    }


}

let a = outer(2);
console.log(a(5));
console.log(a(6)); 
console.log(a(7));