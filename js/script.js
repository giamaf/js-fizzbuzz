// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

// - per i multipli di 3 stampi “Fizz” al posto del numero
// - per i multipli di 5 stampi “Buzz”
// - per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

// ANALISI

// 1 - utilizzo FOR per creare un ciclo di stampa da 1 a 100
// 2 - individuo le condizioni per stabilire i multipli di 3, di 5, di 3 e 5 all'interno del ciclo

// --------------------------------------------------------------------- \\

// 1 - utilizzo FOR per creare un ciclo di stampa da 1 a 100

for (let i = 1; i <= 100; i++) {

    // 2 - individuo le condizioni per stabilire i multipli di 3, di 5, di 3 e 5 all'interno del ciclo

    // Numeri non multipli di 3, 5, 3 e 5
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }

    // Multipli di 3 e 5 con FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }

    // Multipli SOLO di 3 con FIZZ
    if (i % 3 == 0 && i % 5 != 0) {
        console.log('Fizz');
    }

    // Multipli SOLO di 5 con BUZZ
    if (i % 5 == 0 && i % 3 != 0) {
        console.log('Buzz');
    }
}
