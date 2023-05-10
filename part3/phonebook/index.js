const express = require('express')
const app = express()

app.use(express.json())

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
    console.log(id)

    return id

    // const maxId = persons.length > 0
    //     ? Math.max(...persons.map(p => p.id))
    //     : 0

    // return maxId + 1
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

    console.log(persons)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)

    console.log(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})