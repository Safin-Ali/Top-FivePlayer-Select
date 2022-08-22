//  1. Select All Button by the Class Name

const buttonClassesSelect = document.getElementsByClassName('selectBtn');
const buttonClassesLength = document.getElementsByClassName('selectBtn').length;

let i = 0;

for (i; i < buttonClassesLength; i++) {
    const buttonClass = buttonClassesSelect[i];
    // const buttonIndex = i;
    const clickButton = buttonClass.addEventListener('click', function () {
        const getPlayerName = buttonClass.parentElement.childNodes[1].innerText;
        const playerList = document.getElementsByTagName('li').length;
        if(playerList < 5){
            const callSelectedPlayer = setSelectedPlayer(getPlayerName);
            const disabledButton  = buttonClass.setAttribute('disabled',true)
            const buttonActiveColor  = buttonClass.classList.add('blue-button-active',true)
            const buttonTextChange  = buttonClass.innerText = 'Selected'
        }
        else if(playerList >= 5){
            alert('Error')
            return
        }
        console.log(playerList)
    })
}

//  2. Set Player name To The Selected Player Body

function setSelectedPlayer(playerName) {
    const parentTag = document.querySelector('ol');
    const liTagCreate = document.createElement('li');
    const liTagClass = liTagCreate.classList.add('my-4', 'ps-3');
    const setPlayerName = liTagCreate.innerText = playerName;
    parentTag.appendChild(liTagCreate);
}