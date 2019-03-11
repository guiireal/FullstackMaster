const findAll = connection => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM PESSOA', (error, pessoas) => {
            if (error) reject(error)
            else resolve(pessoas)
        })
    })
    
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM PESSOA WHERE ID = ${id} LIMIT 1`, (error) => {
            if (error) reject(error)
            else resolve()
        })
    })
}

module.exports = {
    findAll,
    deleteOne
}