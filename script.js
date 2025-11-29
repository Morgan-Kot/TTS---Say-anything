// Elements
let speedo = 1
let pitcho = 2
let StartText1 = `This is a free and easy to use text to speech tool`

const textInput = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn');
const clearBtn = document.getElementById('clearBtn');

// Speak function
function speakText(text) {
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speedo;   // speed
    utterance.pitch = pitcho;  // pitch
    speechSynthesis.speak(utterance);
}

// Button events
speakBtn.addEventListener('click', () => speakText(textInput.value));
clearBtn.addEventListener('click', () => textInput.value = "");

//document.getElementById("textInput").textContent = `${StartText1}`
