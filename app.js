const p1 = {
    name: 'Player One',
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    name: 'Player two',
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
function appendscore(player, opponent) {
    const r = document.createElement('li');
    const q = document.createElement('li');
    const z = document.createElement('li');
    r.classList.add("text-capitalize")
    q.classList.add("text-capitalize")
    z.classList.add("text-capitalize")
    r.innerText = player.name;
    win.appendChild(r);
    q.innerText = opponent.name;
    lose.appendChild(q);
    z.innerText = `${player.score} - ${opponent.score}`;
    sc.appendChild(z);
}
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningscore) {
            isGameOver = true;
            player.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            appendscore(player, opponent);
        }
        player.display.textContent = player.score;
    }
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
const form1 = document.querySelector('#namesub1')
const inp1 = document.querySelector('#player1')
const form2 = document.querySelector('#namesub2')
const inp2 = document.querySelector('#player2')
let winningscore = 3;
let isGameOver = false;
const win = document.querySelector('#p1list')
const sc = document.querySelector('#scorelist')
const lose = document.querySelector('#p2list')

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
})
p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
})
resetButton.addEventListener('click', reset);
function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0;
        p.display.classList.remove('text-success', 'text-danger');
        p.button.disabled = false;
    }
}
winningScoreSelect.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    reset();
})
function inputname(p, inp) {
    const pname = inp.value;
    if (inp.value === "") {
        pname = p.name;
    }
    p.name = pname;
    p.button.textContent = `+1 ${p.name}`;
    inp.value = "";
}
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    inputname(p1, inp1);
})
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    inputname(p2, inp2);
})