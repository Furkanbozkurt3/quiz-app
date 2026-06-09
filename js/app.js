const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnStart.addEventListener("click" , function() {
    startTimer(10);
    startTimerLine();
    ui.quizBox.classList.add("active");
    ui.buttonBox.classList.remove("active");
    ui.scoreBox.classList.remove("active");
    ui.btnNext.classList.remove("show");

    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length);
})

ui.btnNext.addEventListener("click" , function() {
    if(quiz.sorular.length != quiz.soruIndex)
    {
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1 , quiz.sorular.length);
        ui.btnNext.classList.remove("show");
    }
    else 
    { 
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active"); 
        ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    }
});

function optionSelected(e){
    clearInterval(counter);
    clearInterval(counterLine);
    let selectedElement = e.target;

    if(selectedElement.nodeName == "SPAN")
    {
        selectedElement = selectedElement.parentElement;
    }

    const cevap = selectedElement.textContent[0];
    const soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap))
    {
        quiz.dogruCevapSayisi += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
    else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    quiz.soruIndex += 1;
    ui.disableAllOptions();
    ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click" , function(){
    window.location.reload();
})

ui.btnReplay.addEventListener("click" , function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btnStart.click();
    ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
})

let counter;

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer(){
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0)
        {
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";
            ui.disableAllOptions();
            quiz.soruIndex += 1;
            ui.btnNext.classList.add("show");
        }
        else { ui.timeText.textContent = "Kalan Süre";}
    }
}

let counterLine;

function startTimerLine() {
    ui.timeLine.style.width = "0%";
    let totalMs = 11000;
    let currentMs = 0;
    let intervalTime =25;

    counterLine = setInterval(timer , intervalTime);

    function timer() {
        currentMs += intervalTime;
        let percent = (currentMs / totalMs) * 100;
        ui.timeLine.style.width = percent + "%";

        if(currentMs >= totalMs)
        {
            clearInterval(counterLine);
        }
    }
}