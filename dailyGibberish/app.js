// List of gibberish phrases and their real answers
const phrases = [
    { gibberish: "Door Her Tex Pull Horror", real: "Dora The Explorer" },
    { gibberish: "Eye Ran Ma Hen", real: "Iron Man" },
    { gibberish: "Bla Yak Paint Here", real: "Black Panther" },
    { gibberish: "Why And Ran Holds", real: "Ryan Reynolds" },
    { gibberish: "Bat Chill Harp Arty", real: "Bachelor Party" },
    { gibberish: "Canned Ache My High Saw Few", real: "Can't Take My Eyes Off You" },
    { gibberish: "Cart He Pea", real: "Cardi B" },
    { gibberish: "Dock Dier Stray Age", real: "Doctor Strange" },
    { gibberish: "Eggs Pox Solve Live", real: "Xbox Live" },
    { gibberish: "Real Agents Ship Gulls", real: "Relationship Goals" },
    { gibberish: "Gem Me Fell In", real: "Jimmy Fallon" },
    { gibberish: "Pull Ease Leaf Mia Lone", real: "Please Leave Me Alone" },
    { gibberish: "Stir Range Earth Inks", real: "Stranger Things" },
    { gibberish: "Fort Com Buh", real: "Food Coma" },
    { gibberish: "Burr Had Leak Hoop Her", real: "Bradley Cooper" },
    { gibberish: "Foyer Inn Form Hay Shun", real: "For Your Information" },
    { gibberish: "Huge Act Man", real: "Hugh Jackman" },
    { gibberish: "A Taco Think Loans", real: "Attack Of The Clones" },
    { gibberish: "Sew Fiat Tune Yawn", real: "Soviet Union" },
    { gibberish: "Moor Nim Bur Wrath", real: "Morning Breath" },
    { gibberish: "Fish Hits Bin Hers", real: "Fidget Spinners" },
    { gibberish: "Fizz Shaun", real: "Vision" },
    { gibberish: "Spy Dare Main", real: "Spider Man" },
    { gibberish: "Bah Te Ma Hen", real: "Batman" },
    { gibberish: "Ewe Night Ted Kind Dum", real: "United Kingdom" },
    { gibberish: "Pie Rate Soft Care Hip Been", real: "Pirates Of The Caribbean" },
    { gibberish: "Pop Hair Yhatzee", real: "Paparazzi" },
    { gibberish: "Hoop Heard Rife Fair", real: "Uber Driver" },
    { gibberish: "Gar Deans Offsa Gaw Lax See", real: "Guardians Of The Galaxy" },
    { gibberish: "Wrist Muck Air Hull", real: "Christmas Carol" },
    { gibberish: "Thirst Rug El Isreal", real: "The Struggle Is Real" },
    { gibberish: "Sew Pop Hurrarhs", real: "Soap Opera" },
    { gibberish: "Ache Hatter Mid Words", real: "Academy Awards" },
    { gibberish: "Hand Hub Hair", real: "Panda Bear" },
    { gibberish: "Whole Imp Pig Aims", real: "Olympic Games" },
    { gibberish: "Pace Salve Kick", real: "Piece Of Cake" },
    { gibberish: "Abe Less Sing", real: "A Blessing" },
    { gibberish: "Ban Gake Sand Sir Rup", real: "Pancakes And Syrup" },
    { gibberish: "Gem Me Fell In", real: "Jimmy Fallon" },
    { gibberish: "Knit Flick Sand Shill", real: "Netflix And Chill" },
    { gibberish: "Pretty Shack Scent", real: "British Accent" },
    { gibberish: "Whole Avant Fork Wrist Mist Issue", real: "All I Want For Christmas Is You" },
    { gibberish: "We Loaf Ore Chin", real: "Wheel Of Fortune" },
    { gibberish: "Dawn Dutch Mice Tough", real: "Don't Touch My Stuff" },
    { gibberish: "Pull Ease Leaf Mia Lone", real: "Please Leave Me Alone" },
    { gibberish: "Dawn Peek Yearn Hose", real: "Don't Pick Your Nose" },
    { gibberish: "Dawn Ways To Might I'm", real: "Don't Waste My Time" },
    { gibberish: "Weed Owns Tan Ditch Ants", real: "We Don't Stand A Chance" },
    { gibberish: "Mike Lion Tis Inner Scent", real: "My Client Is Innocent" },
    { gibberish: "Tanks Ford Deem Emma Reese", real: "Thanks For The Memories" },
    { gibberish: "Chest Who It", real: "Just Do It" },
    { gibberish: "Thief Act Huff Them Mat Her", real: "The Fact Of The Matter" },
    { gibberish: "Fizz Shaun", real: "Vision" },
    { gibberish: "Ditch Chews Haze Hum Thin", real: "Did You Say Something" },
    { gibberish: "Jock Lit Hip Goo Keys", real: "Chocolate Chip Cookies" },
    { gibberish: "Ditch Chews Haze Hum Thin", real: "Did You Say Something" },
    { gibberish: "Pats Width Fly Eyeing Coolers", real: "Pass With Flying Colors" },
    { gibberish: "Sea Yule Hater", real: "See You Later" },
    { gibberish: "Veer Off Mess Sing Oat", real: "Fear Of Missing Out" },
    { gibberish: "Hide Scroll Muse Icicle", real: "High School Musical" },
    { gibberish: "Essay Madder Rough Act", real: "As A Matter Of Fact" },
    { gibberish: "Disguise They'll Him It", real: "The Sky's The Limit" },
    { gibberish: "Inks High Sped", real: "King Size Bed" },
    { gibberish: "Laws Din Trance Lay Sjin", real: "Lost In Translation" },
    { gibberish: "Chest Who It", real: "Just Do It" },
    { gibberish: "Says Amy's Treat", real: "Sesame Street" },
    { gibberish: "Mise Whims Hoot", real: "My Swimsuit" },
    { gibberish: "Thief Hears Late He", real: "The First Lady" },
    { gibberish: "Buffers Toll Led Meat Ache Us Elf Fee", real: "But First Let me Take A Selfie" },
    { gibberish: "Hoop Heard Rife Fair", real: "Uber Driver" },
    { gibberish: "Pie Juan Kit Won Furry", real: "Buy One Get One Free" },
    { gibberish: "Birch Who'll Ray Yell Lid He", real: "Virtual Reality" },
    { gibberish: "Nosed Ring Sat Hatched", real: "No String Attached" },
    { gibberish: "Abe Less Sing", real: "A Blessing" },
    { gibberish: "Ape Arrows Uncle As Is", real: "A Pair Of Sunglasses" },
    { gibberish: "Crawl Shore Hard", real: "Cross Your Heart" },
    { gibberish: "Gar Deans Offsa Gaw Lax See", real: "Guardians Of The Galaxy" },
    { gibberish: "Nosed Ring Sat Hatched", real: "No String Attached" },
    { gibberish: "Sew Pop Hurrarhs", real: "Soap Opera" },
];
// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor((i + 1) * Math.random());
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// To keep track of whether we're in a new cycle and shuffle accordingly
let isCycleNew = false;
let cycleOrder = [...phrases]; // Make a copy of the phrases array for the cycle

// Shuffle the cycle order when a new cycle starts
function startNewCycle() {
    shuffleArray(cycleOrder);
    isCycleNew = true;
}

// Variables
let startTime;
let timerInterval;
let correctAnswer = '';
let revealedLetters = [];
let currentLetterPosition = 0;
let currentWordIndex = 0;
let hintCount = 0;
let finalTime = 0;

// Function to start the timer
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('time').textContent = elapsedTime;
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    finalTime = Math.floor((Date.now() - startTime) / 1000);
}

// Function to get today's gibberish phrase based on the date
function getTodaysGibberish() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const phraseIndex = dayOfYear % cycleOrder.length;

    // Check if it's time to start a new cycle
    if (phraseIndex === 0 && !isCycleNew) {
        startNewCycle();
    }

    return cycleOrder[phraseIndex];
}

// Display today's gibberish
document.addEventListener('DOMContentLoaded', () => {
    const gibberishText = document.getElementById('gibberish-text');
    const wordCount = document.getElementById('word-count');
    const todayPhrase = getTodaysGibberish();

    correctAnswer = todayPhrase.real.toLowerCase();
    const words = correctAnswer.split(' ');
    revealedLetters = words.map(word => ' '.repeat(word.length).split(''));

    gibberishText.textContent = todayPhrase.gibberish;
    wordCount.textContent = `(${words.length} words)`;

    updateParDisplay(todayPhrase.real);
    startTimer();
});

// Function to calculate the par
function calculatePar(answer) {
    return answer.split(" ").length;
}

// Function to update the "Par" display
function updateParDisplay(answer) {
    const par = calculatePar(answer);
    const parElement = document.getElementById("par");
    parElement.textContent = `Par: ${par} hints`;
}

// Function to reveal letters in the correct sequence
function revealLetter() {
    const words = correctAnswer.split(' ');
    let displayText = ''; // Stores the formatted answer with revealed letters

    // Ensure we only reveal up to the length of the longest word
    if (currentLetterPosition < Math.max(...words.map(word => word.length))) {
        // Skip fully revealed words and find the next letter to reveal
        while (currentLetterPosition >= words[currentWordIndex].length) {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            if (currentWordIndex === 0) {
                currentLetterPosition++;
            }
        }

        // Reveal the letter at current position in the current word
        if (currentLetterPosition < words[currentWordIndex].length) {
            revealedLetters[currentWordIndex][currentLetterPosition] = words[currentWordIndex][currentLetterPosition];
        }

        // Build the display text based on revealed letters
        for (let i = 0; i < words.length; i++) {
            let wordDisplay = '';
            for (let j = 0; j < words[i].length; j++) {
                wordDisplay += revealedLetters[i][j] !== ' ' 
                    ? `<strong style="color:grey;">${revealedLetters[i][j]}</strong>`
                    : '&nbsp;';
            }
            displayText += wordDisplay + ' ';
        }

        // Update the display with the current state of revealed letters
        document.getElementById('revealed-letters').innerHTML = displayText.trim();

        // Move to the next word for the next reveal, or advance the letter position if all words are done
        currentWordIndex = (currentWordIndex + 1) % words.length;
        if (currentWordIndex === 0) {
            currentLetterPosition++;
        }

        hintCount++;
    }
}

// Function to handle guess submission
function checkGuess() {
    const userGuess = document.getElementById('user-guess').value.toLowerCase().trim();
    const feedback = document.getElementById('feedback');
    const gameContainer = document.getElementById('game-container');

    if (userGuess === correctAnswer) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = 'green';
        stopTimer();
        triggerScroll();
        showResultScreen();
    } else {
        feedback.textContent = "Incorrect! Try again.";
        feedback.style.color = 'red';
        gameContainer.classList.add('shake');
        setTimeout(() => gameContainer.classList.remove('shake'), 300);
    }
}

// Function to trigger scroll effect
function triggerScroll() {
    document.getElementById('wrapper').style.transform = "translateY(-100vh)";
}

// Function to display the result screen
function showResultScreen() {
    const par = calculatePar(correctAnswer);
    const resultText = document.getElementById('result-text');
    const resultHints = document.getElementById('result-hints');

    document.getElementById('result-time').textContent = `${finalTime} seconds`;

    let resultMessage = "Well Done!";
    if (par >= 4) {
        resultMessage = "Well Done. That was a tough one!";
    }

    let performance = "Beginner";
    if (hintCount < par) {
        performance = "Advanced";
    } else if (hintCount === par) {
        performance = "Par";
    }

    resultHints.textContent = `${hintCount} hints (${performance})`;
    resultText.textContent = resultMessage;
}

// Function to copy results to clipboard
function copyToClipboard() {
    const par = calculatePar(correctAnswer);
    let resultType = "Beginner";

    if (hintCount < par) {
        resultType = "Advanced";
    } else if (hintCount === par) {
        resultType = "Par";
    }

    const text = `I solved the gibberish in ${finalTime} seconds! I used ${hintCount} hints (${resultType}).`;
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('copied-message').style.display = 'block';
    });
}

// Toggle Help modal
function toggleHelpModal() {
    const modal = document.getElementById("help-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Submission Panel for new Questions/Answers
function toggleSubmissionPanel() {
    const panel = document.getElementById("submission-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

// Function to handle question and answer submission
function submitNewPhrase() {
    const newQuestion = document.getElementById('new-question').value.trim();
    const newAnswer = document.getElementById('new-answer').value.trim();

    if (newQuestion && newAnswer) {
        phrases.push({ gibberish: newQuestion, real: newAnswer });
        document.getElementById('submission-status').textContent = "Submitted!";
        setTimeout(() => {
            document.getElementById('submission-status').textContent = "";
        }, 3000);
    } else {
        alert('Please fill both the Question and Answer fields.');
    }
}

function toggleFormPanel() {
    const formPanel = document.getElementById("form-panel");
    const helpModal = document.getElementById("help-modal");
    const body = document.body;

    if (formPanel.style.display === "block") {
        formPanel.style.display = "none";
        body.classList.remove("panel-open");
    } else {
        formPanel.style.display = "block";
        helpModal.style.display = "none";
        body.classList.add("panel-open");
    }
}

function toggleHelpModal() {
    const helpModal = document.getElementById("help-modal");
    const formPanel = document.getElementById("form-panel");
    const body = document.body;

    if (helpModal.style.display === "block") {
        helpModal.style.display = "none";
        body.classList.remove("panel-open");
    } else {
        helpModal.style.display = "block";
        formPanel.style.display = "none";
        body.classList.add("panel-open");
    }
}

// Intercept form submission to prevent page redirect
document.getElementById('gibberish-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        document.getElementById('form-status').style.display = 'block';
        form.reset();
        setTimeout(() => {
            document.getElementById('form-status').style.display = 'none';
        }, 3000);
    })
    .catch((error) => alert('Form submission failed. Please try again.'));
});
