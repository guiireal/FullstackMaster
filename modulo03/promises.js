function time(milisseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, milisseconds)
    })
}

// SE RESOLVER, A ARROW FUNCTION VAI PARAR NA VARIÁVEL "resolve"
time(2000).then(() => console.log('opa'))