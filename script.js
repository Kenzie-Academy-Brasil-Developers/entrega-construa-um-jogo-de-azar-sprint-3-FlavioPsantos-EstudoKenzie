const body = document.querySelector("body")
const tabela = document.getElementById("tabela")
tabela.className = "tabela_principal"
let posicao = document.querySelector("td")
body.appendChild(tabela)


const palavrasVet = [
    "PERSPICAZ", "RECÍPROCO", "IMPRESSÃO", "CONCESSÃO", "SUPÉRFLUO",
    "ESCRÚPULO", "RETIFICAR", "PRESUNÇÃO", "CONCEPÇÃO", "IMPLÍCITO",
    "PARADIGMA", "ESSENCIAL", "PLENITUDE", "HIPÓCRITA", "DICOTOMIA",
    "HEGEMONIA", "COROLÁRIO", "PROPÓSITO", "RATIFICAR", "ESDRÚXULO",
]
const letrasAleatorias = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
let matrizCacaPalavra = []
    // gerar tres palavras aleatorias
let palavra1 = Math.floor(Math.random() * 19)
let palavra2 = Math.floor(Math.random() * 10)
let palavra3 = Math.floor(Math.random() * 7)
let palavrasVetor1 = palavrasVet[palavra1].split('');
let palavrasVetor2 = palavrasVet[palavra2].split('');
let palavrasVetor3 = palavrasVet[palavra3].split('');

if (palavrasVetor1.length < 11) {
    palavrasVetor1.push(letrasAleatorias[2])
}
if (palavrasVetor2.length < 11) {
    palavrasVetor2.push(letrasAleatorias[0])
}
if (palavrasVetor3.length < 11) {
    palavrasVetor3.push(letrasAleatorias[7])
}


for (let linha = 0; linha < 10; linha++) {
    matrizCacaPalavra[linha] = []
    for (let coluna = 0; coluna < 10; coluna++) {
        matrizCacaPalavra[linha][coluna] = letrasAleatorias[coluna];
        if (linha === 1) {
            matrizCacaPalavra[linha][coluna] = palavrasVetor1[coluna]
        } else if (linha === 3) {
            matrizCacaPalavra[linha][coluna] = palavrasVetor2[coluna]
        } else if (linha === 7) {
            matrizCacaPalavra[linha][coluna] = palavrasVetor3[coluna]
        } else {
            matrizCacaPalavra[linha][coluna] = letrasAleatorias[coluna + linha];
        }

    }


}
imprimeResulado(matrizCacaPalavra)

function imprimeResulado() {
    for (let i = 0; i < matrizCacaPalavra.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < matrizCacaPalavra.length; j++) {
            let td = document.createElement("td");
            let resultado = document.createTextNode(matrizCacaPalavra[i][j])
            tr.appendChild(td)
            td.appendChild(resultado);
            tabela.appendChild(tr)
        }
    }
}