// HIGH ORDER FUNCTIONS SÃO FUNÇÕES DENTRO DE OUTRAS FUNÇÕES COMO: "forEach" OU "map"

const list = [1, 2, 3, 4]
list.forEach(elementOfList => console.log(elementOfList))

const double = list.map(value => value * 2)
console.log(double);

const reducer = list.reduce((prev, current) =>  prev + current, 0)

console.log(reducer);
const foo = {one: '1', two: '2'}

const keys = Object.keys(foo)
const values = Object.values(foo)

console.log(keys);
console.log(values);

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersBetterThanFive = number => number >= 5

console.log(tbNumbers.filter(numbersBetterThanFive))

