// ================= QUIZ =================
const quizData = [
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        question: "Which method fetches API data?",
        options: ["get()", "fetch()", "call()", "request()"],
        answer: "fetch()"
    },
    {
        question: "Which tag is used for JavaScript?",
        options: ["<script>", "<js>", "<code>", "<link>"],
        answer: "<script>"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option=>{
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = function(){
            if(option === q.answer){
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
        };
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        document.getElementById("score").textContent = "Final Score: " + score;
    }
}

loadQuestion();


// ================= CAROUSEL =================
let imgIndex = 1;

function nextImage(){
    imgIndex++;
    document.getElementById("carouselImage").src = 
    "https://picsum.photos/600/300?" + imgIndex;
}

function prevImage(){
    if(imgIndex > 1){
        imgIndex--;
        document.getElementById("carouselImage").src = 
        "https://picsum.photos/600/300?" + imgIndex;
    }
}


// ================= API FETCH =================
function getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        document.getElementById("joke").textContent =
        data.setup + " - " + data.punchline;
    })
    .catch(error => {
        document.getElementById("joke").textContent =
        "Failed to fetch joke.";
    });
}
