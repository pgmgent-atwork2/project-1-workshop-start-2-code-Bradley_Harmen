document.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowLeft') {
        MoveLeft();
    }
    if (e.key == 'ArrowRight') {
        MoveRight();
    }
});

function MoveLeft() {
    let hero = document.querySelector('#hero');
    let leftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'));
    leftPos -= 100;
    if (leftPos >= 0) {
        hero.style.left = leftPos + 'px';
    }
}

function MoveRight() {
    let hero = document.querySelector('#hero');
    let rightPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'));
    rightPos += 100;
    if (rightPos < 400) {
        hero.style.left = rightPos + 'px';
    }
}

let road = document.querySelector('#road');
let villain = document.querySelector('#villian');
document.addEventListener('animationiteration', function() {
    let randomNumber = (Math.floor(Math.random() *4 )); // Random getal tussen 0 en 4
    let newPosition = randomNumber * 100; // Verplaatsen met 100, 200, 300 of 400 pixels
    villain.style.left = newPosition + 'px';
    console.log('Nieuwe positie voor villain: ' + newPosition);
});

let score = 0;
let checkDead = setInterval(function() {
    score++;
    let heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'));
    let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue('left'));
    let villainTop = parseInt(window.getComputedStyle(villain).getPropertyValue('top'));
    document.querySelector('#score').innerHTML = 'Score: ' + score;
    if (heroLeft == villainLeft && villainTop >= 400) {

        location.reload();
        alert('Game over, Jouw score: ' + score);
        villain.style.animation = 'none';
        road.style.animation = 'none';
        villain.style.top = villainTop + 'px';
        clearTimeout(checkDead);
    }   
}, 100);