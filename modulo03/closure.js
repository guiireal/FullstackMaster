// COM CLOSURE É POSSÍVEL TRAVAR O CONTEXTO DE UMA APLICAÇÃO

function functionOne(initialValue) {
    let counter = initialValue

    return () => {
        counter++
        return counter
    }
}

const callFunctionOne = functionOne(10)
const callFunctionOne2 = functionOne(30)
console.log(callFunctionOne());
console.log(callFunctionOne());
console.log(callFunctionOne());
console.log(callFunctionOne2());
console.log(callFunctionOne2());

function animal(name) {
    let count = 0
    return {
        getCount: () => count,
        increment: function() {
            count++
        },
        getName: () => name
    }
}

const cat = animal('Garfield')

console.log(cat.getCount(), cat.getName())
cat.increment()
console.log(cat.getCount(), cat.getName())