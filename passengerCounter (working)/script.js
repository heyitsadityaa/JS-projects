

// let count = 0;

// console.log('count');

// let myAge = 1
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log("myDogAge");

// let bonouspoints = 50
// bonouspoints = bonouspoints +50;
// console.log(bonouspoints);
// bonouspoints = bonouspoints - 75
// console.log(bonouspoints);
// bonouspoints = bonouspoints + 45
// console.log(bonouspoints);

//camelCase
let countEl = document.getElementById("count-el"); //Reffered as working with DOM(document object model)
// console.log(countEl);
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
    count += 1;
    console.log(count);
    countEl.innerHTML = count;
}

function decrement(){
    count -= 1;
    console.log(count);
    countEl.innerHTML = count;
}

function reset(){
    count = 0;
    console.log(count);
    countEl.innerHTML = count;
}

function save(){
    let countStr = count + " - "
    console.log(count);
    saveEl.innerHTML += countStr; 
    
}

