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
        id: 1,
        name: "Roger Fontova",
        number: "666999333"
    },
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})




const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})