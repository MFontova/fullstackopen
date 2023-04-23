import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const parts = props.parts
  const displayParts = parts.map((item) => {
    return (
      <p key={item.id}> {item.part} : {item.exercises} </p>
    )
  })

  return (
    <div>
      {displayParts}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.map((item) => {
    return item.exercises
  })
  let sum = 0
  for (const num in total) {
    if (Object.hasOwnProperty.call(total, num)) {
      sum = total[num] + sum;
    }
  }
  return (
    <p>Number of exercises: {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const parts = [
    {part: 'Fundamentals of React', exercises: 10, id: 0},
    {part: 'Using props to pass data', exercises: 7, id: 1},
    {part: 'State of a component', exercises: 14, id: 2}
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
