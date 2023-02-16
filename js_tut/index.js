// const message = function() {
//     console.log('Hey this message is getting displayed on console')
// }

// setTimeout(message, 5000);

// setTimeout(function() { 
//     console.log("Hey I am also being displayed")
// }, 5000)

// setTimeout(() => {
//     console.log("Me too!!")
// }, 6000)

// let promise = new Promise(function(resolve, reject) {
//     resolve('I am resolved!')
// });

// promise.then(
//     (result) => {
//         console.log(result)
//     },
//     (error) => {
//         console.log(error)
//     }
// )
// console.log(promise);
// var city = 'Pune'
// {
//     let city = ['Abu', 'Jaipur']
//     city.push('Jodhpur')
//     console.log(city);
// }
// console.log(city);

// a = 10;
// var a;
// console.log(a);


// Call by value and call by reference
// var x = 10;
// var y =x; // the value 10 is assigned a memory space for y variable and different for x
// console.log(y);
// x = 20;
// console.log(y);


// var arr = [34, 55, 2, 44]
// var arr2 = arr; // the memory space of array object is assigned same to both the declared variables
// console.log(arr);
// arr.push(45);
// console.log(arr);
// console.log(arr2);

function sayHello(){
    return "Hello " + this.name;
  }
          
var obj = {name: "Sandy"};
        
console.log(sayHello.call(obj));