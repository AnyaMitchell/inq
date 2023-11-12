import inquirer from 'inquirer';

const questions = [
  {
    name: "question1",
    type: "list",
    message: "In The Simpsons, which secret society does Homer join?",
    choices: ["Freemasons", "Illuminati", "Stonecutters", "Bullingdon"],
    correctAnswer: "Stonecutters"
  },
  {
    name: "question2",
    type: "list",
    message: "In Futurama, what is Bender's middle name?",
    choices: ["Bending", "Powers", "Clamps", "URL"],
    correctAnswer: "Bending"
  },
  {
    name: "question3",
    type: "list",
    message: "In I Dream of Jeannie, who is Jeannie's master?",
    choices: ["Jack Dixon", "Nick Preston", "John York", "Tony Nelson"],
    correctAnswer: "Tony Nelson"
  },
  {
    name: "question4",
    type: "list",
    message: "In Buffy the Vampire Slayer, what was Giles' nickname from his youth?",
    choices: ["Ruffles", "Gilly", "G-man", "Ripper"],
    correctAnswer: "Ripper"
  },
  {
    name: "question5",
    type: "list",
    message: "In The Jetsons, what is the daughter's name?",
    choices: ["Jane", "Judy", "Jill", "Juliet"],
    correctAnswer: "Judy"
  }
];

inquirer.prompt(questions)
  .then(function(answers) {
    // Check each answer and mark as correct or incorrect
    questions.forEach((question) => {
      const userAnswer = answers[question.name];
      const isCorrect = userAnswer === question.correctAnswer;

      console.log(`${question.message}\nYour Answer: ${userAnswer}\nCorrect Answer: ${question.correctAnswer}\nResult: ${isCorrect ? 'Correct' : 'Incorrect'}\n`);
    });
  });
