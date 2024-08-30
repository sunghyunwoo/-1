const questions = [
    { question: "다음 중 맞는 표현은?", options: ["어의없다", "어이없다"], answer: 1, explanation: "‘어이없다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["금새", "금세"], answer: 1, explanation: "‘금세’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["되요", "돼요"], answer: 1, explanation: "‘돼요’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["알맞는", "알맞은"], answer: 1, explanation: "‘알맞은’이 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["맞추다", "마추다"], answer: 0, explanation: "‘맞추다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["한참", "한창"], answer: 1, explanation: "‘한창’이 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["헛갈리다", "헷갈리다"], answer: 1, explanation: "‘헷갈리다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["꺼꾸로", "거꾸로"], answer: 1, explanation: "‘거꾸로’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["낫다", "낳다"], answer: 0, explanation: "‘낫다’가 맞는 표현입니다. ‘낳다’는 아기를 출산하다를 의미합니다." },
    { question: "다음 중 맞는 표현은?", options: ["묵혀두다", "묵여두다"], answer: 0, explanation: "‘묵혀두다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["개다", "게다"], answer: 0, explanation: "‘개다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["되려", "도리어"], answer: 1, explanation: "‘도리어’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["짜증나다", "짜증스러워하다"], answer: 1, explanation: "‘짜증스러워하다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["얻다 대고", "어따 대고"], answer: 1, explanation: "‘어따 대고’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["몽땅", "몽당"], answer: 0, explanation: "‘몽땅’이 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["보라다", "보라하다"], answer: 0, explanation: "‘보라다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["머릿말", "머리말"], answer: 1, explanation: "‘머리말’이 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["넋없다", "넉없다"], answer: 0, explanation: "‘넋없다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["노랗다", "노래다"], answer: 0, explanation: "‘노랗다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["되살리다", "되살아나다"], answer: 1, explanation: "‘되살아나다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["맞다", "맞추다"], answer: 0, explanation: "‘맞다’가 맞는 표현입니다. ‘맞추다’는 비교하거나 조정할 때 사용하는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["되물림", "대물림"], answer: 1, explanation: "‘대물림’이 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["수치스럽다", "수취스럽다"], answer: 0, explanation: "‘수치스럽다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["말끔히", "말끔이"], answer: 0, explanation: "‘말끔히’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["도무지", "도무초"], answer: 0, explanation: "‘도무지’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["만들어라", "만들어 봐라"], answer: 1, explanation: "‘만들어 봐라’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["뜨겁다", "뜨거웁다"], answer: 0, explanation: "‘뜨겁다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["어떻해", "어떡해"], answer: 1, explanation: "‘어떡해’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["잊어버리다", "잊어버리다"], answer: 0, explanation: "‘잊어버리다’가 맞는 표현입니다." },
    { question: "다음 중 맞는 표현은?", options: ["어른스럽다", "어른답다"], answer: 1, explanation: "‘어른답다’가 맞는 표현입니다." }
];

const quizForm = document.getElementById("quizForm");

// 퀴즈 문제를 동적으로 생성합니다.
questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<strong>${index + 1}. ${q.question}</strong><br>`;
    q.options.forEach((option, i) => {
        div.innerHTML += `
            <input type="radio" name="question${index}" value="${i}">
            <label>${option}</label><br>
        `;
    });
    quizForm.appendChild(div);
});

// 사용자의 답변을 검사하고 결과를 표시합니다.
function checkAnswers() {
    const resultsDiv = document.getElementById("results");
    let score = 0;
    resultsDiv.innerHTML = "";

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (userAnswer && parseInt(userAnswer.value) === q.answer) {
            score++;
        } else {
            resultsDiv.innerHTML += `
                <div>
                    <strong>문제 ${index + 1}: 틀렸습니다.</strong><br>
                    <span class="explanation">${q.explanation}</span>
                </div>
            `;
        }
    });

    resultsDiv.innerHTML = `<p>총 점수: ${score} / ${questions.length}</p>` + resultsDiv.innerHTML;
}
