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

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(note => note.id === id)

    if(note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})