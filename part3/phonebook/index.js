const express = require('express')
var morgan = require("morgan")
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

morgan.token('body', function (req, res) {return JSON.stringify(req.body)})
app.use(morgan(function(tokens, req, res) {
    console.log(req)
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.body(req, res)
    ].join(' ')
}))

let persons = [
    {
        id: 1,
        name: "Marc Fontova",
        number: "669953954"
    },
    {
        id: 2,
        name: "Mariona Martí",
        number: "666555444"
    },
    {
        id: 3,
        name: "Roger Fontova",
        number: "666999333"
    },
]

const generateId = () => {
    const id = Math.floor(Math.random() * 100000)
    return id
}

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)

    if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    // console.log(persons)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }else if(!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }else if(persons.map(person => person.name).includes(body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)

    // console.log(persons)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})