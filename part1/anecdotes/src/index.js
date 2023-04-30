import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({text}) => {
  return (
    <h1> {text} </h1>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  console.log(selected)
  console.log(votes)

  function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const nextAnecdote = () => {
    setSelected(getRandomIntInclusive(0, anecdotes.length - 1))
    console.log(selected)
  }

  const voteAnecdote = () => {
    console.log('Anecdota votada')
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy[selected])
    setVotes(copy)
  }

  const mostVoted = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return anecdotes[index]
  }

  const getNVotesMostVoted = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    return votes[index]
  }

  return (
    <div>
      <Header text = "Anecdote of the day" />
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={nextAnecdote} >Next anecdote</button>
      <button onClick={voteAnecdote} >Vote</button>
      <Header text = "Anecdote with most votes" />
      <p>{mostVoted()}</p>
      <p>{getNVotesMostVoted()}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes = {anecdotes} />
  </React.StrictMode>
);