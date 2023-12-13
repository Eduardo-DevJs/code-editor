const stringDados = [
  {
    id: 1,
    string: `
      let str1 = "Olá, ";
      let str2 = "mundo!";
      let resultado = str1.concat(str2);
      console.log(resultado); // Saída: Olá, mundo!
    `,
    subtitulo: 'Concatenando Strings',
    desc: 'É utilizado para unir duas ou mais strings em uma única string. Exemplo:',
  },
  {
    id: 3,
    string: `
      let texto = "JavaScript É INCRÍVEL!";
      let minusculo = texto.toLowerCase();
      console.log(minusculo); // Saída: javascript é incrível!
    `,
    subtitulo: 'Transformando para Minúsculas',
    desc: 'Converte todos os caracteres de uma string para letras minúsculas. Exemplo:',
  },
  {
    id: 4,
    string: `
      let palavra = "JavaScript";
      let quartoCaractere = palavra.charAt(3);
      console.log(quartoCaractere); // Saída: a
    `,
    subtitulo: 'Obtendo Caracteres por Índice',
    desc: 'Retorna o caractere de uma string em uma posição específica. Exemplo:',
  },
  {
    id: 5,
    string: `
      let frase = "JavaScript é poderoso e JavaScript é flexível.";
      let posicao = frase.indexOf("JavaScript");
      console.log(posicao); // Saída: 0 (posição da primeira ocorrência)
    `,
    subtitulo: 'Encontrando a Posição de uma Substring',
    desc: 'Retorna a posição da primeira ocorrência de uma substring em uma string. Exemplo:',
  },
  {
    id: 6,
    string: `
      let texto = "Manipulando Strings em JavaScript";
      let parte = texto.substring(5, 15);
      console.log(parte); // Saída: ulando Stri
    `,
    subtitulo: 'Extraindo Substrings',
    desc: 'Permite extrair uma parte de uma string com base em índices. Exemplo:',
  },
  {
    id: 7,
    string: `
      let frase = "A programação em JavaScript é divertida!";
      let novaFrase = frase.replace("divertida", "incrível");
      console.log(novaFrase); // Saída: A programação em JavaScript é incrível!
    `,
    subtitulo: 'Substituindo Substrings',
    desc: 'Substitui a primeira ocorrência de uma substring por outra. Exemplo:',
  },
  {
    id: 8,
    string: `
      let lista = "maçã,banana,uva,morango";
      let frutas = lista.split(",");
      console.log(frutas); // Saída: ['maçã', 'banana', 'uva', 'morango']
    `,
    subtitulo: 'Dividindo Strings em Arrays',
    desc: 'Divide uma string em um array de substrings com base em um delimitador. Exemplo:',
  },
  {
    id: 9,
    string: `
      let textoComEspacos = "   JavaScript   ";
      let textoSemEspacos = textoComEspacos.trim();
      console.log(textoSemEspacos); // Saída: JavaScript
    `,
    subtitulo: 'Removendo Espaços em Branco',
    desc: 'Remove espaços em branco no início e no final de uma string. Exemplo:',
  },
  {
    id: 10,
    string: `
      let texto = "JavaScript é poderoso";
      let comecaComJS = texto.startsWith("JavaScript");
      console.log(comecaComJS); // Saída: true
    `,
    subtitulo: 'Verificando o Início da String',
    desc: 'Verifica se uma string começa com determinada substring. Exemplo:'
  },
];

export default stringDados;