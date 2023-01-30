// Array of colors 
// let colors = ['red', 'blue', 'green', 'black', 'Yellow']
let colors = ['A ', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Access the button by an id
let btnChange = document.querySelector('#changeMe');



// Wired a click event to the button
btnChange.addEventListener('click',()=>{
    let generatedColor = '#'
    // Generate  Random Number 

    for(let i=0; i<6; i++){
        let generatedNumber = Math.floor( Math.random() * 16)
        generatedColor += colors[generatedNumber]
    }

    // Setting Changes
document.body.style.backgroundColor = generatedColor
document.querySelector('#innerText').innerText = generatedColor


    // let generatedNumber = Math.floor( Math.random() * 5 )
    // let generatedColor = colors[generatedNumber]


    // document.body.style.backgroundColor =  generatedColor

    // let textColor = document.querySelector('#innerText').innerText = generatedColor
   
    
    
});