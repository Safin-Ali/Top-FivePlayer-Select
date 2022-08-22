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
        if (playerList < 5) {
            const callSelectedPlayer = setSelectedPlayer(getPlayerName);
            const disabledButton = buttonClass.setAttribute('disabled', true)
            const buttonActiveColor = buttonClass.classList.add('blue-button-active', true)
            const buttonTextChange = buttonClass.innerText = 'Selected'
        } else if (playerList >= 5) {
            alert('Error')
            return
        }
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

//  3. Calculate Button

const clickCalculateBtn = document.getElementById('totalExpense').addEventListener('click',function(){
    const getPlayerBudget = inputFeildValue('perPlayerFeild');
    const getPlayersList = document.getElementsByTagName('li').length;
    const totalExpense = getPlayersList * getPlayerBudget;
    const NewValue = setNewValue('totalExpenseValue',totalExpense);
})

// 4. Get Player Budget To The Feild And Calculate selected player length with Entered Budget And Set Total Expense value

function inputFeildValue(inputID,setvalueID) {
    const selectFeild = document.getElementById(inputID);
    const feildValue = parseInt(selectFeild.value);
    return feildValue;
}

// Set New Value To The Document

function setNewValue (setValueID,setNewData) {
    const setNewValue = document.getElementById(setValueID).innerText = setNewData;
}

//  5. Calculate Total Cost Button

    const clickTotalCostBtn = document.getElementById('totalCostBtn').addEventListener('click',function(){
        const getManagerFee = inputFeildValue('managerFeild');
        const getCourseFee = inputFeildValue('courseFeild');
        const getPlayersTotalBudget = parseInt(document.getElementById('totalExpenseValue').innerText);
        const calculateTotalCost = getCourseFee + getManagerFee + getPlayersTotalBudget;
        const totalCost = setNewValue('totalCostValue',calculateTotalCost);
        return totalCost
    })

//  6. Get Manager & Course Feild Value