let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = `imagens/dice${num1}.png`;
document.querySelector(".img2").src = `imagens/dice${num2}.png`;

let titulo = document.querySelector("h1");

if (num1 > num2) {
    titulo.textContent = "🚩 Jogador 1 Venceu!";
} else if (num1 < num2) {
    titulo.textContent = "Jogador 2 Venceu! 🚩";
} else {
    titulo.textContent = "Empate!";
}
