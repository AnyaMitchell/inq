import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: "question",
        type: "confirm",
        message: "Do you want to watch a film?"
    },
    {
        name: "film",
        type: "list",
        message: "Pick a film:",
        choices: ["Die Hard", "Donnie Darko", "The Big Lebowski", "Fight Club"]
    },
    {
        name: "snack",
        type: "checkbox",
        message: "Choose some snacks:",
        choices: ["Popcorn", "Sweets", "Nachos", "Chocolate"]
    }
  ])
  .then(function(answer) {
        console.log(answer.question);
        console.log(answer.film);
        console.log(answer.snack);
  });