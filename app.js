import ora from 'ora';

// Declare Variables
const hagridChoiceOptions = ['Rock', 'Paper', 'Scissors']
const userChoice = process.argv.slice(2)
const hagridChoice = hagridChoiceOptions[randomNumber()]

// Random Number Generator
function randomNumber(){
  return Math.floor(Math.random() * hagridChoiceOptions.length)
}


// Rock Paper Scissors Timer
const spinner = ora('Rock').start();
const gameRun = function(){
  setTimeout(() => {
    spinner.text = 'Paper'
      setTimeout(() => {
        spinner.text = 'Scissors'
          setTimeout(() => {
            spinner.info('SHOOT')
              setTimeout(() => {
                result()       
              }, 1000)
          }, 1000)
      }, 1000)
  }, 1000)
}


// Conditions to run timer
const game = function() {
    if (userChoice[0] == null) { 
      spinner.fail('Please enter valid option (Rock, Paper or Scissors)')
  } else if (userChoice[0].toLowerCase() === 'rock') {
      gameRun()
  } else if (userChoice[0].toLowerCase() === 'scissors') {
      gameRun()
  } else if (userChoice[0].toLowerCase() === 'paper') {
      gameRun()
  }  else {
      spinner.fail('Please enter valid option (Rock, Paper or Scissors)')
  }
}

game()


// Conditions on results
const result = function(){

  hagridChoiceOptions[randomNumber()]

  if (hagridChoice.toLowerCase() == userChoice[0].toLowerCase()) {
    console.log(`Hagrid:${hagridChoice} --- You:${userChoice[0]}`)
    spinner.warn('Its A DRAW!')
  } else if (hagridChoice == 'Rock' && userChoice[0].toLowerCase() == 'paper'){
    console.log(`Hagrid:${hagridChoiceOptions[0]} --- You:${userChoice[0]}`)
    spinner.succeed('You WON!')
  } else if (hagridChoice == 'Rock' && userChoice[0].toLowerCase() == 'scissors'){
    console.log(`Hagrid:${hagridChoiceOptions[0]} --- You:${userChoice[0]}`)
    spinner.fail('You LOST!')
  } else if (hagridChoice == 'Paper' && userChoice[0].toLowerCase() == 'rock'){
    console.log(`Hagrid:${hagridChoiceOptions[1]} --- You:${userChoice[0]}`)
    spinner.fail('You LOST!')
  } else if (hagridChoice == 'Paper' && userChoice[0].toLowerCase() == 'scissors'){
    console.log(`Hagrid:${hagridChoiceOptions[1]} --- You:${userChoice[0]}`)
    spinner.succeed('You WON!')
  } else if (hagridChoice == 'Scissors' && userChoice[0].toLowerCase() == 'paper'){
    console.log(`Hagrid:${hagridChoiceOptions[2]} --- You:${userChoice[0]}`)
    spinner.fail('You LOST!')
  } else if (hagridChoice == 'Scissors' && userChoice[0].toLowerCase() == 'rock'){
    console.log(`Hagrid:${hagridChoiceOptions[2]} --- You:${userChoice[0]}`)
    spinner.succeed('You WON!')
  } else {
    spinner.fail('Please enter valid option(Rock, Paper or Scissors)')
  }
}
