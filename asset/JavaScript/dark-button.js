// 0. Dark Mode Button

document.getElementById('darkMode').addEventListener('click', function () {
    document.body.classList.add('dark-body');
    const cardsBody = document.getElementsByClassName('card-body');
    const cards = document.getElementsByClassName('card');
    const budgetBody = document.querySelector('.budget-body');
    const olBody = document.querySelector('.selected-player');
    const olColor = document.querySelector('.selected-player ol');
    const inputTags = document.getElementsByTagName('input');
    olColor.style.color = '#888888'
    olBody.setAttribute('id', 'dark-player-list-budget-body')
    budgetBody.setAttribute('id', 'dark-player-list-budget-body')
    //  Selec all card-body Class
    for (const cardBody of cardsBody) {
        cardBody.setAttribute('id', 'dark-card-body', 'dark-card-body p')
    }
    //  Select all card class
    for (const card of cards) {
        card.setAttribute('id', 'dark-card')
    }
    //  Select ll input tag
    for (const inputTag of inputTags) {
        inputTag.style = `border: 1px solid #efefef; background: #151515; caret-color: #efefef`
    }

})