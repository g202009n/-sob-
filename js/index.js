let frases = [
    "Luke, eu sou seu pai! - Star Wars",
    "Vingadores, Avante! - Vingadores Ultimato",
    "O que fazemos na vida, ecoa na eternidade - Gladiador",
    "Apenas por que não funciona, não quer dizer que ela não possa ser aprimorada - Pantera Negra",
    "A felicidade pode ser encontrada mesmo nas horas mais difíceis, se você se lembrar de acender a luz - Harry Potter"
]


let cliques = 0;

function gerarFrases(){
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    cliques = cliques + 1;

    document.getElementById("frases").innerText = fraseEscolhida; 

    document.getElementById("contador").innerText = "Frases Geradas: " + cliques; 
}