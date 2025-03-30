const containerEl = document.querySelector('.container');
const careers = ["Youtube", "Web Developer", "Freelancer", "Instructor"];
let careersIndex = 0;

let characterIndex = 0;

updateText();
function updateText() {
    containerEl.innerHTML = `<h1>I am ${careers[careersIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careersIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++
    if(characterIndex === careers[careersIndex].length){
        careersIndex++;
        characterIndex = 0;
    }
    if(careersIndex === careers.length){
        careersIndex = 0;
    }
    setTimeout(updateText,300);
}

