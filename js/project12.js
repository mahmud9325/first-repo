document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "A Journey of a thousand miles begins with a single step.",
        "To be or bot to be, that is the question.",
        "All that glitters is not gold.",
        "The quick brown fox jumps over the lazy dog.",
        "The only thing we have a fear is fear itself.",
        "My name is Mahmudul Hoque Maruf.",
        "My Father Name is Nrurl Hoque Suttu.",
        "My Mother Name is Kamrun nahar Maya.",
        "My Brother Name is Mahirul Hoque Mahir.",
        "My Sister Name is Jannatun nahar Esha."
    ];

    const quotesDisplay = document.getElementById('quate');
    const inputBox = document.getElementById('inputBox');
    const startBtn = document.getElementById('startBtn');
    const resultDiv = document.getElementById('resultDiv');
       

    inputBox.addEventListener('input', checkInput);
    let startTime;
    let randominput;

    startBtn.addEventListener('click', startTest);

    function startTest(){
        const ranodmBox = Math.floor(Math.random() * quotes.length);
        randominput = quotes[ranodmBox];
        quotesDisplay.innerText = randominput;
        inputBox.value = '';
        inputBox.removeAttribute('disabled');
        inputBox.focus();
        resultDiv.innerText = '';
        startTime = new Date().getTime();
    }

    function checkInput() {
        const typedText = inputBox.value;
        
        if (typedText === randominput) {
           const endTime = new Date().getTime();
           const timeTest = (endTime - startTime) / 1000;
           const wordsperminute = typedText.split(' ').length / timeTest * 60;
           resultDiv.innerText = `Your are Skill Test ${wordsperminute.toFixed(2)} Per Minute`;
           
        }
        
    }
})