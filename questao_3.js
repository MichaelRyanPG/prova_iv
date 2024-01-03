// Escreva uma função chamada verificarNumero que retorne uma Promise. A função deve gerar um número aleatório entre 1 e 10.
// Se o número gerado for maior que 5, a Promise deve ser resolvida com a mensagem "Número alto!".Se for 5 ou menor, a Promise deve  ser rejeitada com a mensagem "Número baixo!".

const verificarNumero = () => {
    return new Promise((resolve, reject) => {
      let numeroAleatorio = Math.floor(Math.random() * 10);
      if (numeroAleatorio > 5) {
        console.log(numeroAleatorio);
        resolve("Número alto!");
      }
      else{
        console.log(numeroAleatorio);
        reject("Número baixo!");
      }
    });
  };
verificarNumero().then(console.log);