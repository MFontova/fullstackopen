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

const Statistics = ({good, neutral, bad}) => {
  const sumAll = () => {
    return good + neutral + bad
  }

  const average = () => {
    return (good - bad)/sumAll()
  }

  const positive = () => {
    return ((good/sumAll())*100).toString() + '%'
  }

  if(sumAll() === 0){
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
      <Statistic text="good" number={good} />
      <Statistic text="neutral" number={neutral} />
      <Statistic text="bad" number={bad} />
      <Statistic text="all" number={sumAll()} />
      <Statistic text="average" number={average()} />
      <Statistic text="positive" number={positive()} />
      </tbody>
    </table>
  )
  // return (
  //   <>
  //     <Statistic text="good" number={good} />
  //     <Statistic text="neutral" number={neutral} />
  //     <Statistic text="bad" number={bad} />
  //     <Statistic text="all" number={sumAll()} />
  //     <Statistic text="average" number={average()} />
  //     <Statistic text="positive" number={positive()} />
  //   </>
  // )
}

const Statistic = ({text, number}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);