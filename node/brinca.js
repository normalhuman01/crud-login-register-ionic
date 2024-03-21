// procedural
function brinca(jogo){
    console.log("Estamos brincando de " + jogo);
}
brinca('Já Quem Pô');

// funcional - passando função como parâmetro
function funcional(funcao, jogo){
    funcao(jogo);
}
funcional(brinca, 'Par ou Ímpar');

// funcional - passando função anônima como parâmetro
function anonimo(funcao, jogo){
    funcao(jogo);
}
anonimo(function (jogo){
            console.log("Estamos brincando de " + jogo)
        }, "Fortnite");