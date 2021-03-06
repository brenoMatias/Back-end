// Sobre a estrutura: 

// Nossa função deverá receber um parâmetro "media";
// Responder com "reprovado" ou "aprovado".
// Sobre os comportamentos esperados:
// 1 - Se passado um valor menor que 7 , por exemplo 4 , a resposta deve ser "reprovado" ; 2 - Se passado um valor maior que 7 , por exemplo 9 , a resposta ser "aprovado" ; 3 - E, não podemos esquecer do "OU", sendo assim, se passado 7 , a resposta deve ser "aprovado" ;
// Essa estrutura é tudo o que precisamos para escrever nossos testes, antes mesmo de falarmos sobre código.


// O mocha é um framework de testes para JS, isso significa que ele nos ajuda a arquitetar os nossos testes, nos fornecendo a estrutura e interface para escrevermos os nossos testes.


describe('Quando a média for menor que 7', () => {
    it('retorna "reprovado"', () => {
      //
    });
  });

//   Perceba que o describe aceita dois parâmetros: o primeiro é a descrição e o segundo uma função para executar o cenário de teste. Outro ponto de atenção é que não é necessário importar o mocha em nosso arquivo, suas palavras reservadas serão interpretadas quando executamos o testes, mas veremos mais adiante como fazê-lo.
//   Descrito nosso comportamento, vamos adicionar o que será testado de fato, ou seja, o que é esperado. Para isso, temos o it :