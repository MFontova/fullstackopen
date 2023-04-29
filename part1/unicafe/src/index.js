import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

const Statistics = ({text, number}) => {
  return (
    <>
      <p>{text}: {number}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button text="Good" onClick={addGood} />
      <Button text="Neutral" onClick={addNeutral} />
      <Button text="Bad" onClick={addBad} />
      <Header text="statistics" />
      <Statistics text="good" number={good} />
      <Statistics text="neutral" number={neutral} />
      <Statistics text="bad" number={bad} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);