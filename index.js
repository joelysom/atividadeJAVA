// Exercício 1 - Array de Números Aleatórios
function gerarArrayAleatorio(tamanho, minimo, maximo) {
    let array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
    }
    return array;
}

// Exercício 2 - Elemento Mais Frequente
function elementoMaisFrequente(array) {
    const frequencias = {};
    let maxFreq = 0;
    let elementoFreq = null;

    array.forEach(elemento => {
        frequencias[elemento] = (frequencias[elemento] || 0) + 1;
        if (frequencias[elemento] > maxFreq) {
            maxFreq = frequencias[elemento];
            elementoFreq = elemento;
        }
    });

    return maxFreq > 1 ? elementoFreq : "Não há elemento mais frequente";
}

// Exercício 3 - Tirar os Repetidos
function removerRepetidos(array) {
    const unica = [...new Set(array)];
    return unica.length < array.length ? unica : "Não há elementos repetidos";
}

// Exercício 4 - Concatenar
function concatenarArrays(array1, array2) {
    return array1.concat(array2);
}

// Exercício 5 - Junção das Funções
function main() {
    console.log('-----------------------------------');
    console.log('função do Exercício 1');
    const arrayAleatorio = gerarArrayAleatorio(10, 1, 100);
    console.log(`Entrada: array [${arrayAleatorio}]`);
    console.log(`Saída: array [${arrayAleatorio}]`);

    console.log('-----------------------------------');
    console.log('função do Exercício 2');
    const freqElemento = elementoMaisFrequente(arrayAleatorio);
    console.log(`Entrada: array [${arrayAleatorio}]`);
    console.log(`Saída: ${freqElemento}`);

    console.log('-----------------------------------');
    console.log('função do Exercício 3');
    const arraySemRepetidos = removerRepetidos(arrayAleatorio);
    console.log(`Entrada: array [${arrayAleatorio}]`);
    console.log(`Saída: array [${arraySemRepetidos}]`);

    console.log('-----------------------------------');
    console.log('função do Exercício 4');
    const arrayConcatenado = concatenarArrays(arrayAleatorio, arraySemRepetidos);
    console.log(`Entrada: array [${arrayAleatorio}] e array [${arraySemRepetidos}]`);
    console.log(`Saída: array [${arrayConcatenado}]`);
}

// ativar função
main();
