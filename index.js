const card = document.querySelectorAll('.column');
let score = 0;
const scoreEl = document.getElementById('score');
let clickedCard = null;
showScore();

function showScore(){
    scoreEl.innerText = 'Socore : '+score;
}


card.forEach(card => {

    card.addEventListener('click', (e) => {

        const cardEl = e.currentTarget;
        cardEl.classList.remove('color-hidden');
        console.log(cardEl.getAttribute('data-color'));

        if (!clickedCard) {
            clickedCard = cardEl;
        }
        else {
            let color = clickedCard.getAttribute('data-color');

            if (cardEl.classList.contains(color)) {
                console.log('same color');
                score += 10;
                scoreEl.innerText = 'Socore : '+score;
                clickedCard = null;
            }
            else {
                console.log('different color');
                setTimeout(() => {
                    clickedCard.classList.add('color-hidden');
                    cardEl.classList.add('color-hidden');
                    clickedCard = null;
                }, 500);

            }
        }
    })
})

const btn = document.getElementById('rBtn');

btn.addEventListener('click', (e) => {

    clickedCard = null;
    card.forEach(card => {
        card.classList.add('color-hidden');
    })
    score = 0;
    showScore();
})