// définir un tableau de questions
const questions = [
  {
    question: "Quelle est la capitale de la France?",
    choices: ["Paris", "Londres", "Rome", "New York"],
    correctAnswer: "Paris"
  },
  {
    question: "Combien y a-t-il de pays dans l'Union européenne?",
    choices: ["15", "20", "25", "28"],
    correctAnswer: "28"
  },
  {
    question: "Combien y a-t-il de planètes dans notre système solaire?",
    choices: ["8", "9", "10", "11"],
    correctAnswer: "8"
  },
  {
    question: "Combien font 1+1?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },
{
    question: "qui est pytagore",
    choices: ["c'est un fdp", "un mec pour les math"],
    correctAnswer: "un mec pour les math"
  }
];

// définir un compteur de points
let totalPoints = 0;

// afficher chaque question et vérifier si la réponse est correcte
for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  const userAnswer = prompt(question.question);

  // convertir la réponse de l'utilisateur en minuscule avant de la comparer
  if (userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
    totalPoints++;
  }
}

// afficher le nombre total de points
alert(`Vous avez obtenu ${totalPoints} points sur ${questions.length}`);
