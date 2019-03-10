const obj = {
    var1: 10,
    get: function() {
        return this.var1
    }
}

// MUDANÇA DE CONTEXTO DO VALOR "var1"

console.log(obj.get.bind({ var1: 20 })());