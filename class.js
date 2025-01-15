https://www.programiz.com/online-compiler/6lOmWLHGQXk6n

function Menu(){
    
    let method = prompt("Which function would you like to run: \n1.Guessing Games \n2.Calculator \n3.Youngest team member \n4.Password:  ")
    
    switch(method){
        case "1":
            guessGame()
        break;
        case "2":
            basicCalculator()
        break;
        case "3":
           getNames()
        break;
        
        case "4":
           password()
        break;
        
        default:
           console.log("You did not submit one of the 4 options")
        break;
    }
    
}

Menu()

function guessGame(){
    
    // initial variables for the function
    let counter = 2
    let chances = 3
    //Math floor rounds the number up or down
    //Math random provides a number between 1-10 because of the *11 and + 1 1-10
    let number = Math.floor(Math.random() * 11) + 1;
   
    
    //for loop that goes until three tries
    for(let i = 1; i<=chances; i++ ){
        //user response 
        let guess = prompt("Ingresa un numero entre 1-10:");
        //conditionals that will run up against the guess
        if(parseInt(guess) === number ){
            console.log("Congratulations you answered correctly");
            break
        }if(parseInt(guess) < number){
            console.log("Whoops try a higher number loser!");
        }if(parseInt(guess) > number){
            console.log("Whoops try a lower number loser!");
        }
       counter += 1
    }
    if(counter >= 3){
        console.log("You ran out of tries")
    }
}



function basicCalculator(){
   
  let usersFirstNumber  = prompt("Please enter your first number:"); 
  let usersSecondNumber  = prompt("Please enter your second number:"); 
  let operator  = prompt("Please enter one of the following operators + , - , *, /: "); 
  switch(operator){
  case "+":
      console.log(parseFloat(usersFirstNumber) + parseFloat(usersSecondNumber))
  break;
  case "-":
        console.log(parseFloat(usersFirstNumber) - parseFloat(usersSecondNumber))

  break;  
  case "*":    
      console.log(parseFloat(usersFirstNumber) * parseFloat(usersSecondNumber))

  break;      
  case "/":
      console.log(parseFloat(usersFirstNumber) / parseFloat(usersSecondNumber))

  break;    
  default:
  console.log("You did not click one of the operators mentioned")
  break;
  }
}






function getNames(){
    
    //Intial variables with user input
    let firstPerson = prompt("What's your name first person?: ")
    let firstAge = prompt("What's your age first person?: ")
    let secondPerson = prompt("What's your name second person?: ")
    let secondAge = prompt("What's your age second person?: ")
    let thirdPerson = prompt("What's your name third person?: ")
    let thirdAge = prompt("What's your age third person?: ")
    
    
    //Conditions to check if the user is youngest
    if(parseInt(firstAge) < parseInt(secondAge) && parseInt(firstAge) < parseInt(thirdAge)){
        console.log(`\nThe youngest is ${firstPerson}` )
    }
     if(parseInt(secondAge) < parseInt(firstAge) && parseInt(secondAge) < parseInt(thirdAge)){
        console.log(`\nThe youngest is ${secondPerson}` )
    }else{
        console.log(`\nThe youngest is ${thirdPerson}` )
    }
    
}




function password(){
      // Regular expressions to check if strintg has uppercases
      const uppercaseRegex = /[A-Z]/;
      // Regular expressions to check if strintg has lower
      const lowercaseRegex = /[a-z]/;
    // Regular expressions to check if strintg has numbers
      const numberRegex = /[0-9]/;
  
    
    let run = true

    
    while(run){
        
    let password = prompt("Hello please enter a password: ")
    
        
    if(password.length >= 8 && uppercaseRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password)){
        console.log("All criteria met");
        run = false
    }
    
    // if statements that advise of the criteria
    if(password.length <= 8){
        console.log("\nLength has to be at least 8 characters")
    }
    if(uppercaseRegex.test(password) === false){
        console.log("\nPassword has to have uppercase")
    }
     if(lowercaseRegex.test(password) === false){
        console.log("\nPassword has to have a lowercase")
    }
     if(numberRegex.test(password) === false){
        console.log("\nPassword has to have a number")
    }
    }
    
}






