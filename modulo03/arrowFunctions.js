const speakName = name => name

console.log(speakName('Guilherme'));

const sum = (valueOne, valueTwo) => valueOne + valueTwo

console.log(sum(1, 2));

const animal = (name, noise) => `${name} sais: ${noise()}`
console.log(animal('Dog', () => 'Wooorf woorf !'));