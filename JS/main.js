// let numbersRight =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let numbersLeft =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let randomNumberRight ;
// let randomNumberLeft = numbersLeft[Math.floor(Math.random()*11)-1]

// function selectedAnswer(){
//    document.getElementById('numberLeft').innerHTML = randomNumberLeft;
// }

// function generateNumber(){
// randomNumberRight = numbersRight[Math.floor(Math.random()*11)-1]
// }

// console.log(numbersRight)
// console.log(numbersLeft)

//---------------------------------^ Failed attempt ^---------------------------


//-------------------------------------Variables--------------------------------

let innerNumberLeft;        // Saves generated number as a variable.
let innerNumberRight;        // -§-
let score = 0;               // Sets initial score to 0.

//--------------------------------------Numbers--------------------------------

function generateRandomNumber(){
     return Math.floor(Math.random() *100)-1            //  Generates a random whole number between 0-99 and subtracts "-1"
}


numberLeft()
function numberLeft(){
document.getElementById("numberLeft").innerHTML = generateRandomNumber()    // Updates "numberLeft" with a number.

innerNumberLeft = parseInt(document.getElementById("numberLeft").innerHTML)  // Makes sure there are no decimal in the number.
}

numberRight()
function numberRight(){
   document.getElementById("numberRight").innerHTML = generateRandomNumber()   // Updates "numberRight" with a number.
  
   
     innerNumberRight = parseInt(document.getElementById("numberRight").innerHTML)  // Makes sure there a no decimals in the number.
}

function nextNum(){     // Packaged "numberLeft(), numberRight()"
    numberLeft() ;
    numberRight() ;
}

//------------------------------------Functions-----------------------------------------


function lowerThan(){
    if (innerNumberLeft >= innerNumberRight) {    // If "numberLeft" is lower than "numberRight". 
            
        document.getElementById("outputScore").innerHTML = score += 1 ;     // Adds one point if true.
    
    nextNum() ;            // Updates numbers in "numberLeft", "numberRight".
} else 
    document.getElementById("outputScore").innerHTML = score -= 1 ;       // If wrong input was given, remove one point.
        nextNum() ;
}



function equalTo(){
    if (innerNumberLeft === innerNumberRight) {
                                                                        
        document.getElementById("outputScore").innerHTML = score += 1 ;
    
    nextNum() ;
} else 
    document.getElementById("outputScore").innerHTML = score -= 1 ;
        nextNum() ;
}


function greaterThan(){
    if (innerNumberLeft <= innerNumberRight) {
            
        document.getElementById("outputScore").innerHTML = score += 1 ;
    
    nextNum() ;
} else 
    document.getElementById("outputScore").innerHTML = score -= 1 ;
        nextNum() ;
}









console.log ( typeof (generateRandomNumber()))            // Checks what type generateRandomNumber() is (string, number, boolean). 

console.log(typeof (innerNumberLeft, innerNumberRight))   

console.log(score)


