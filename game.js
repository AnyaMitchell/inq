import inquirer from 'inquirer';

function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

async function getUserChoice() {
  const userChoicePrompt = await inquirer.prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'Choose rock, paper, or scissors:',
      choices: ['rock', 'paper', 'scissors'],
    },
  ]);

  return userChoicePrompt.userChoice;
}

async function playRound() {
  const userChoice = await getUserChoice();
  const computerChoice = getRandomChoice();

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  const playAgainPrompt = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'playAgain',
      message: 'Do you want to play again?',
      default: true,
    },
  ]);

  if (playAgainPrompt.playAgain) {
    playRound();
  } else {
    console.log('Thanks for playing!');
  }
}

playRound();
