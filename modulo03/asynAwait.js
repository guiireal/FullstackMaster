function time(milisseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(milisseconds), milisseconds)
    })
}


async function otherFunction(milisseconds) {
    const timing = await time(milisseconds)
    console.log('Finish !', timing)
}

console.log(otherFunction(2222))