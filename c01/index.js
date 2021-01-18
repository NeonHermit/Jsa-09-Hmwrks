/*

    промисификација на следниве операции

*/


//Собирање на 2 броја, success ако е парен, fail aко е непарен

// const addNums = (a, b) => {
//     return new Promise((success, fail) => {
//         let suma = a + b;
//         if (suma % 2 == 0) {
//             return success(suma);
//         } else {
//             return fail("Непарен број");
//         }
//     });
// }


//Конверзија на температура од целзиусови во фаренхајтови степени / success е ако степените се помалку од 100, fail ако се еднакви или повеќе од 100

// const converTemper = (c) => {
//     return new Promise((success, fail) => {
//         let fahrenheit = c * 9 / 5 + 32;
//         if (fahrenheit < 100) {
//             return success(fahrenheit);
//         }
//         return fail('Повеќе од 100 F');
//     });
// }


//Да се изброи во текст колку пати се појавува буквата "a", ако бројот е поволем од 0 во тој случај враќаме success, ако е === 0 во тој случај fail

const aCounter = (str) => {
    return new Promise((success, fail) => {
        let regex = (str.match(/a/gi) || []).length;
        if (regex > 0) {
            return success(regex);
        } else if (regex === 0) {
            return fail("No a's");
        }
    });
}

const asawfn = async () => {
    try {
        // let numbers = await addNums(5, 8);
        // console.log('Success: ', numbers);
        // let temperatura = await converTemper(20);
        // console.log('Success, температурата е: ', temperatura, 'F');
        let zbor = await aCounter("CocA Cola");
        console.log('Success: ', zbor);
    } catch (err) {
        console.log('Error: ', err);
    }
}

asawfn();
