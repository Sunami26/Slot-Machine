const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spin-button');
const resultDisplay = document.getElementById('result');

const symbols = ['🍒', '🍊', '🍇', '🔔', '💎'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
    reels.forEach(reel => {
        reel.textContent = getRandomSymbol();
    });

    // Check for a win (all symbols match)
    const firstSymbol = reels[0].textContent;
    const win = Array.from(reels).every(reel => reel.textContent === firstSymbol);

    if (win) {
        resultDisplay.textContent = 'You Win!';
    } else {
        resultDisplay.textContent = 'Try Again!';
    }
}

spinButton.addEventListener('click', spin);