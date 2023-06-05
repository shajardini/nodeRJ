const express = require('express') // Importa o módulo do Express
const mysql = require('mysql2') // Importa o módulo do mysql2

const app = express() // Cria uma instância do aplicativo Express

const dbConfig = {
    host: 'localhost', // Nome do host do banco de dados
    user: 'root', // Nome do usuário do banco de dados
    password: 'salomao775', // Senha do banco de dados
    database: 'filmes' // Nome do banco de dados
}

const connection = mysql.createConnection(dbConfig) // Cria uma conexão com o banco de dados MySQL

connection.connect((err) => { // Estabelece a conexão com o banco de dados
    if (err) {
        console.error('Erro ao conectar o banco de dados: ', err)
        throw err
    }
    console.log('Conexão estabelecida com sucesso!')
})

// Rota para obter todos os filmes
app.get('/filmes', (req, res) => {
    connection.query('SELECT * FROM filme', (err, results) => { // Executa uma consulta para obter todos os filmes da tabela 'filmes'
        if (err) {
            console.error('Erro ao buscar filmes: ', err)
            res.status(500).send('Erro ao buscar filmes')
        } else {
            res.json(results) // Retorna os resultados da consulta como uma resposta JSON
        }
    })
})

// Iniciar o servidor
app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log('Servidor iniciado na porta 3000')
})
