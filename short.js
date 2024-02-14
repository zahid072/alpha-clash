function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*26;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


function setBgColor(id){
    const alphabetKey = document.getElementById(id);

    alphabetKey.style.backgroundColor = "#FFA500"
}
function setDefaultBgColor(id){
    const alphabetKey = document.getElementById(id);

    alphabetKey.style.backgroundColor = "#FFf"
}


