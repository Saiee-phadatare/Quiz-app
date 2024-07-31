const quizData = {
  "Pipes and Cisterns": [
      { question: "What is the time taken to fill a cistern with two pipes?", options: ["1 hour", "2 hours", "3 hours", "4 hours"], answer: "2 hours" },
      { question: "If a pipe fills a tank in 3 hours, how long will it take to fill half?", options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"], answer: "1.5 hours" },
      { question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is ?", options:["50 minutes ", "12 minutes ", "25 minutes ", "15 minutes"], answer: "12 minutes"},
      { question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank ?", options: ["10 min. 20 sec.", "11 min. 45 sec.", "12 min. 30 sec.", "14 min. 40 sec."], answer: "14 min. 40 sec."},
      { question: "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?", options: ["20 hrs", "28 hrs", "36 hrs", "40 hrs "], answer: " 20 hrs"},
      { question: "A tap can empty a tank in one hour. A second tap can empty it in 30 minutes. If both the taps operate simultaneously, how much time is needed to empty the tank ?", options: ["20 minutes ", "30 minutes ", "40 minutes ", "45 minutes "], answer: "20 minutes"},
      { question: "Three Taps A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is ?", options: ["10 ", "12", "14 ", "16"], answer: "16"},
      { question: "Two pipes can fill a cistern in 3 hours and 4 hours respectively and a waste pipe can empty it in 2 hours. If all the three pipes are kept open, then the cistern will be filled in ?", options: ["5 hours", "8 hours ", "10 hours ", "12 hours "], answer: "12 hours"},
      { question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in ?", options: ["81 min ", "108 min ", "144 min ", "192 min"], answer: "144 min"},
      { question: "A tap can fill a cistern in 8 hours and another tap can empty it in 16 hours. If both the taps are open, the time (in hours) taken to fill the tank will be ?", options: ["8 ", "10 ", "16", "24"], answer: "16"},
  ],
  "Probability": [
      { question: "What is the probability of getting a head when a coin is tossed?", options: ["1/4", "1/2", "3/4", "1"], answer: "1/2" },
      { question: "What is the probability of drawing a red card from a deck?", options: ["1/2", "1/4", "1/3", "2/3"], answer: "1/2" },
      { question: " The probability of event equal to zero is called;", options: [" Unsure event", "Sure Event", " Impossible event", " Independent event"], answer: "Impossible event"},
      { question: "The probability that cannot exist among the following:", options: [" ⅔", "-1.5", "15%", "0.7"], answer: "-1.5"},
      { question: "If P(E) = 0.07, then what is the probability of ‘not E’?", options: [" 0.93", "0.95", "0.89", "0.90"], answer: "0.93"},
      { question: "A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?", options: ["3", "8", "⅜", "8/3"], answer: " ⅜"},
      { question: "A bag has 5 white marbles, 8 red marbles and 4 purple marbles. If we take a marble randomly, then what is the probability of not getting purple marble?", options: ["0.5", "0.77", "0.56", "0.10"], answer: "0.77"},
      { question: "A dice is thrown in the air. The probability of getting odd numbers is", options: [" ½", "3/2", "4", "3"], answer: " ½"},
      { question: "A fish tank has 5 male fish and 8 female fish. The probability of fish taken out is a male fish:", options: ["5/34", "5/10", "5/20", "5/13"], answer: "5/13"},
      { question: "A card is selected at random from a well shuffled deck of 52 playing cards. The probability of its being a face card is", options: [ "3/13", "3/10", "3/25", "3/30"], answer: " 3/13"},
  ],
  "Problems on Age": [
      { question: "If John's age is 2 times that of his son, and the sum of their ages is 60, how old is John?", options: ["20", "30", "40", "50"], answer: "40" },
      { question: "If A is twice as old as B and B is 5 years older than C, what is the age difference between A and C?", options: ["5", "10", "15", "20"], answer: "15" },
      { question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?", options: ["4 years", "2 years", "5 years", "3 years"], answer: "4 years"},
      { question: "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?", options: ["6.5 years", " 13.3 years", "7.7 years", "10 years"], answer: " 13.3 years"},
      { question: "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age?", options: ["3 times", "1 times", " 1.6 times", ". 2.5 times"], answer: ". 2.5 times"},
      { question: "Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.", options: ["27.5 years", "20 years", "25.6 years", "20 years"], answer: "27.5 years"},
      { question: " One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?", options: ["15 years", "5 years", "10 years", "13 years"], answer: "10 years"},
      { question: "Ten years ago, the age of mother was three times the age of her son. After ten years, mother’s age will be twice that of his son. Find the ratio of their present ages.", options: ["6 : 3", "7 : 3", "5 : 2", "7 : 9"], answer: "7 : 3"},
      { question: " Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?", options: [" 20 years", " 10 years", " 15 years", " 24 years"], answer: " 20 years"},
      { question: "The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)", options: ["40, 50", "20, 25", "30, 25", "50, 10"], answer: "40, 50"},
  ],
  "Profit and Loss": [
      { question: "If the cost price is $50 and the selling price is $60, what is the profit?", options: ["$5", "$10", "$15", "$20"], answer: "$10" },
      { question: "What is the loss percentage if the cost price is $100 and the selling price is $80?", options: ["10%", "15%", "20%", "25%"], answer: "20%" },
      { question: " A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?", options: ["Rs. 400", "Rs. 486", "Rs. 257", "372"], answer: "Rs. 486"},
      { question: "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was", options: ["Rs. 20000", "Rs. 25000", "Rs. 40000", "Rs. 50000"], answer: "Rs. 50000"},
      { question: " Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.", options: [" Rs. 6000", "Rs. 4500", " Rs. 5000", " Rs. 10000"], answer: "Rs. 4500"},
      { question: "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is", options: ["0.25% loss", "0.55% loss", "0.30% gain", "Neither gain nor loss"], answer: "0.25% loss"},
      { question: "If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is", options: [" Rs. 3500", " Rs. 1000", " Rs. 4500", " Rs. 4000"], answer: " Rs. 4000"},
      { question: " Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?", options: ["26%", "22%", "20%", "25%"], answer: "20%"},
      { question: " If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is", options: ["25% gain", "20% gain", "25% loss", "20% loss"], answer: "25% gain"},
      { question: "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is", options: ["20%", "50%", "70%", "10%"], answer: "20%"},
  ]
};

let currentCategory;
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeTaken = 0;
let attemptedQuestions = 0;
const timePerQuestion = 10;

function enterUser() {
  const username = document.getElementById('username').value;
  if (username === "") {
      alert("Please enter your name");
      return;
  } 
}



function selectCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    timeTaken = 0;
    attemptedQuestions = 0;

    document.getElementById('section-heading').innerText = `${category}`;

    document.getElementById('heading').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion(){
  const quizCategory = quizData[currentCategory];
  const questionData = quizCategory[currentQuestionIndex];
  const questionContainer = document.getElementById('question-container');

  questionContainer.innerHTML = `
      <p class="Qnumber">${currentQuestionIndex + 1}/10</p>
      <p class="ques">${questionData.question}</p>
      ${questionData.options.map((option) => `<button class="option" onclick="selectAnswer('${option}')">${option}</button>`).join('')}
  `;
  startTimer();
}

function selectAnswer(selectedAnswer) {
  clearInterval(timer);
  const correctAnswer = quizData[currentCategory][currentQuestionIndex].answer;

  if (selectedAnswer === correctAnswer) {
      score++;
  }
  attemptedQuestions++;

  if (currentQuestionIndex < quizData[currentCategory].length - 1) {
      currentQuestionIndex++;
      loadQuestion();
  } else {
      endQuiz();
  }
}

function selectAnswer(selectedAnswer) {
  clearInterval(timer);
  const correctAnswer = quizData[currentCategory][currentQuestionIndex].answer;

  if (selectedAnswer === correctAnswer) {
      score+=10;
  }
  attemptedQuestions++;

  // Update the score display
  document.getElementById('score').innerText = `Score: ${score}`;

  if (currentQuestionIndex < quizData[currentCategory].length - 1) {
    currentQuestionIndex++;
    loadQuestion();
} else {
    endQuiz();
}
}


function startTimer() {
  let timeLeft = timePerQuestion;
  document.getElementById('timer').innerText = `Time: ${timeLeft}`;

  timer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').innerText = `Time: ${timeLeft}`;
      timeTaken++;

      if (timeLeft <= 0) {
          clearInterval(timer);
          attemptedQuestions++;
          if (currentQuestionIndex < quizData[currentCategory].length - 1) {
              currentQuestionIndex++;
              loadQuestion();
          } else {
              endQuiz();
          }
      }
  }, 1000);
}

function endQuiz() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');

  const username = document.getElementById('username').value;
  const totalQuestions = quizData[currentCategory].length;
  const correctAnswers = score;
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;

  document.getElementById('result-username').innerText = `${username} your result is:`;
  document.getElementById('total-time').innerText = `${timeTaken} seconds`;
  document.getElementById('total-questions').innerText = `${totalQuestions}`;
  document.getElementById('attempted-questions').innerText = `${attemptedQuestions}`;
  document.getElementById('correct-answers').innerText = `${correctAnswers}`;
  document.getElementById('wrong-answers').innerText = `${wrongAnswers}`;
  document.getElementById('percentage').innerText = `${percentage.toFixed(2)}`;
}

function startAgain() {
  score = 0;
  timeTaken = 0;
  attemptedQuestions = 0;
  currentQuestionIndex = 0;
  document.getElementById('result').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  loadQuestion();
}

function backToHome() {
  score = 0;
  timeTaken = 0;
  attemptedQuestions = 0;
  currentQuestionIndex = 0;
  document.getElementById('result').classList.add('hidden');
  document.getElementById('heading').classList.remove('hidden');
  document.getElementById('user-details').classList.remove('hidden');
  document.getElementById('username').value = '';
}

function nextQuestion() {
  clearInterval(timer);

  attemptedQuestions++;
  if (currentQuestionIndex < quizData[currentCategory].length - 1) {
      currentQuestionIndex++;
      loadQuestion();
  } else {
      endQuiz();
  }
}
