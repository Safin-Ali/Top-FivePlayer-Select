//  1. Selected All Button by the Class Name

const buttonClassesSelect = document.getElementsByClassName('selectBtn');
const buttonClassesLength = document.getElementsByClassName('selectBtn').length;

let i = 0;

for (i; i < buttonClassesLength; i++) {
    const buttonClass = buttonClassesSelect[i];
    //  Select Button Event Handler
    const clickButton = buttonClass.addEventListener('click', function () {
        const getPlayerName = buttonClass.parentElement.childNodes[1].innerText;
        const playerList = document.getElementsByTagName('li').length;
        if (playerList < 5) {
            const callSelectedPlayer = setSelectedPlayer(getPlayerName);
            const disabledButton = buttonClass.setAttribute('disabled', true)
            const buttonActiveColor = buttonClass.classList.add('blue-button-active', true)
            const buttonTextChange = buttonClass.innerText = 'Selected'
        } else if (playerList >= 5) {
            alert('Sorry! You Already Selected 5 Players')
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

//  3. Calculate Total Player Budget Button Event Handler

const clickCalculateBtn = document.getElementById('totalExpense').addEventListener('click', function () {
    const getPlayerBudget = inputFeildValue('perPlayerFeild');
    if(isNaN(getPlayerBudget)){
        alert('Please Type Only Number')
    }
    else{
        const getPlayersList = document.getElementsByTagName('li').length;
        if(getPlayersList === 0){
            alert('Please Select Any Five Players')
        }
        const totalExpense = getPlayersList * getPlayerBudget;
        const NewValue = setNewValue('totalExpenseValue', totalExpense);
    }
})

// 4. Get Player Budget To The Feild And Calculate selected player length with Entered Budget And Set Total Expense value

function inputFeildValue(inputID, setvalueID) {
    const selectFeild = document.getElementById(inputID);
    const feildValue = parseInt(selectFeild.value);
    return feildValue;
}

// Set New Value To The Document

function setNewValue(setValueID, setNewData) {
    const setNewValue = document.getElementById(setValueID).innerText = setNewData;
}

//  5. Calculate Total Cost Button Event Handler

const clickTotalCostBtn = document.getElementById('totalCostBtn').addEventListener('click', function () {
    const getManagerFee = inputFeildValue('managerFeild');
    const getCoachFee = inputFeildValue('coachFeild');
    const getPlayersTotalBudget = parseInt(document.getElementById('totalExpenseValue').innerText);
    if(isNaN(getManagerFee) && isNaN(getCoachFee) == true){
        alert('Please Enter Manager And Coach Fee Amonut')
    }
    else if(isNaN(getManagerFee)){
        alert('Please Enter Manager Fee Amonut')
    }
    else if(isNaN(getCoachFee)){
        alert('Please Enter Coach Fee Amonut')
    }
    else if(getPlayersTotalBudget === 0){
        alert('Please First Calculate Five Players Total Expense Amount')
    }
    else{
        const calculateTotalCost = getCoachFee + getManagerFee + getPlayersTotalBudget;
        const totalCost = setNewValue('totalCostValue', calculateTotalCost);
        return totalCost
    }
})