var slider_img = document.querySelector('.slider-img');
var images = ['images/placeholder-2.png', 'images/placeholder-1.jpg'];
var i = 0;

function prev(){
  if(i <= 0) i = images.length;  
  i--;
  return setImg();       
}

function next(){
  if(i >= images.length-1) i = -1;
  i++;
  return setImg();       
}

function setImg(){
  return slider_img.setAttribute('src', images[i]);
  
}

const questions = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest moon of Saturn?",
    options: ["Titan", "Ganymede", "Io", "Enceladus"],
    correctAnswer: "Titan"
  },
  {
    question: "Which galaxy is the Milky Way a part of?",
    options: ["Andromeda", "Triangulum", "Sombrero", "Whirlpool"],
    correctAnswer: "Andromeda"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    question: "What is the largest moon of Jupiter?",
    options: ["Io", "Europa", "Ganymede", "Callisto"],
    correctAnswer: "Ganymede"
  },
  {
    question: "Which spacecraft was the first to reach interstellar space?",
    options: ["Voyager 1", "Pioneer 10", "New Horizons", "Cassini"],
    correctAnswer: "Voyager 1"
  },
  {
    question: "How many planets are there in our solar system?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "8"
  },
  {
    question: "What is the name of the largest volcano in our solar system, located on Mars?",
    options: ["Olympus Mons", "Mauna Loa", "Mount Everest", "Vesuvius"],
    correctAnswer: "Olympus Mons"
  },
  {
    question: "Which famous comet completes an orbit around the Sun roughly every 76 years?",
    options: ["Hale-Bopp", "Halley's Comet", "Comet NEOWISE", "Comet ISON"],
    correctAnswer: "Halley's Comet"
  },
  {
    question: "What is the largest asteroid in the asteroid belt between Mars and Jupiter?",
    options: ["Ceres", "Vesta", "Eros", "Pallas"],
    correctAnswer: "Ceres"
  },
  {
    question: "Which space agency launched the Hubble Space Telescope?",
    options: ["NASA", "ESA", "Roscosmos", "ISRO"],
    correctAnswer: "NASA"
  },
  {
    question: "What is the Great Red Spot on Jupiter?",
    options: ["A storm", "A volcano", "A desert", "A giant flower"],
    correctAnswer: "A storm"
  },
  {
    question: "In what year did humans first set foot on the Moon?",
    options: ["1965", "1969", "1975", "1982"],
    correctAnswer: "1969"
  },
  {
    question: "How many planets in the solar system can fit between the Earth and the Moon (at apogee)",
    options: ["5", "6", "7", "8"],
    correctAnswer: "8"
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  score = 0;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = currentQuestion.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
  });

  document.getElementById("question-text").innerText = `Score: ${score}\n\n${currentQuestion.question}`;
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
      alert("Correct!");
      score++
  } else {
      alert("Wrong! The correct answer is " + currentQuestion.correctAnswer);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      alert("Game Over! You completed the trivia.");
      resetGame();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      alert("Game Over! You completed the trivia.");
      resetGame();
  }
}

function resetGame() {
  currentQuestionIndex = 0;
  showQuestion();
}

// Start the game when the page loads
startGame();
