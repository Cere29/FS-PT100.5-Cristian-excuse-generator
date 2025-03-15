// 1. ¿Que tengo que hacer?
// 2. ¿Que datos tengo?
// 3. Estrategia
// 3.1 Generar numero aleatorio a partir de los arrays. 
// 3.2 Extraer de cada array un valor aleatorio.
// 3.3 Concatenar mis valores.
// 3.4 Mostrar la oracion en el HTML.

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const ArrayValue = (array, index) => {
    return array[index];
}

const Generator = (array) => {
    return Math.floor(Math.random() * array.length);
}

let randomWho = ArrayValue(who, Generator(who));
let randomAction = ArrayValue(action, Generator(action));
let randomWhat = ArrayValue(what, Generator(what));
let randomWhen = ArrayValue(when, Generator(when));

const Concatenar = (`${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`)
console.log(Concatenar);