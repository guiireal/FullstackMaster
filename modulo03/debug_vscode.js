function teste1() {
    console.log('Teste 1')
    const t = 1
    const t2 = this
    teste2('Chamando o teste 2 pelo teste1')
}

function teste2(param) {
    console.log(param)
}

teste1()


