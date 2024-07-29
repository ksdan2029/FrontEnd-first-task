document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('main-window');
    const resultContainer = document.getElementById('result-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const correctCountElement = document.getElementById('correct-count');
    const totalQuestionsElement = document.getElementById('total-questions');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestionIndex, correctAnswers;

    const questions = [
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Geography",
          "question": "Which of these Japanese islands is the largest by area?",
          "correct_answer": "Shikoku",
          "incorrect_answers": [
            "Iki",
            "Odaiba",
            "Okinawa"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Musicals & Theatres",
          "question": "Who played Marquis de Lafayette and Thomas Jefferson in the original Broadway run of Hamilton?",
          "correct_answer": "Daveed Diggs",
          "incorrect_answers": [
            "Lin-Manuel Miranda",
            "Javier Muñoz",
            "Wayne Brady"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Mythology",
          "question": "What is the name of the first human being in Norse mythology?",
          "correct_answer": "Ask",
          "incorrect_answers": [
            "Asmund",
            "Ake",
            "Asger"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Video Games",
          "question": "How old is Chloe Price in Life is Strange: Before the Storm?",
          "correct_answer": "16",
          "incorrect_answers": [
            "24",
            "19",
            "15"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "General Knowledge",
          "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
          "correct_answer": "Kilt",
          "incorrect_answers": [
            "Skirt",
            "Dress",
            "Rhobes"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Music",
          "question": "Which famous 90's rap album is commonly referred to as \"The Bible of Hip Hop\"?",
          "correct_answer": "Illmatic",
          "incorrect_answers": [
            "The Low End Theory",
            "The Chronic",
            "Enter The Wu-Tang (36 Chambers)"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Music",
          "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
          "correct_answer": "Unknown Pleasures",
          "incorrect_answers": [
            "The Dark Side of the Moon",
            "London Calling",
            "The Velvet Underground & Nico"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Video Games",
          "question": "Who was the first jedi that Starkiller had to kill in Star Wars: The Force Unleashed?",
          "correct_answer": "Rahm Kota",
          "incorrect_answers": [
            "Ahsoka Tano",
            "Kazdan Paratus",
            "Kento Marek"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "History",
          "question": "The United States Army Air Corps became the United States Air Force on what date?",
          "correct_answer": "September 18, 1947",
          "incorrect_answers": [
            "December 14, 1946",
            "October 27, 1945",
            "November 08, 1944"
          ]
        },
        {
          "type": "multiple",
          "difficulty": "medium",
          "category": "Entertainment: Video Games",
          "question": "In Call of Duty: Modern Warfare 2, how many consecutive kills does it require to earn the \"Tactical Nuke\" killstreak?",
          "correct_answer": "25",
          "incorrect_answers": [
            "20",
            "30",
            "35"
          ]
        }
    ];

    const startGame = () => {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        totalQuestionsElement.innerText = questions.length;
        questionContainer.classList.remove('hide');
        resultContainer.classList.add('hide');
        setNextQuestion();
        correctCountElement.innerText = correctAnswers;
    };

    const setNextQuestion = () => {
        resetState();
        showQuestion(questions[currentQuestionIndex]);
    };

    const showQuestion = (question) => {
        questionElement.innerHTML = question.question;
        const answers = [...question.incorrect_answers, question.correct_answer];
        answers.sort(() => Math.random() - 0.5);
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(button, question.correct_answer));
            answerButtonsElement.appendChild(button);
        });
    };

    const resetState = () => {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    };

    const selectAnswer = (selectedButton, correctAnswer) => {
        const selectedAnswer = selectedButton.innerText;
        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setNextQuestion();
        } else {
            showResult();
        }
    };

    const showResult = () => {
        questionContainer.classList.add('hide');
        resultContainer.classList.remove('hide');
        correctCountElement.innerText = correctAnswers;
    };

    restartButton.addEventListener('click', startGame);

    startGame();
});
