const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    console.log(s.exercises, p.exercises)
    return s.exercises + p.exercises
  })
  return total
} 
{/* <p>Number of exercises {parts.reduce((s, p) => {
  console.log('what is happening', s, p)
})}</p> */}

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => {
  return(
    parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
  )
}
  // <>
  //   <Part
  //     part={parts[0]} 
  //   />
  //   <Part
  //     part={parts[1]} 
  //   />
  //   <Part
  //     part={parts[2]} 
  //   />      
  // </>

const Course = ({course}) =>
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Another part',
        exercises: 19,
        id: 4,
      },
    ],
  }

  return (
    <Course course={course} />
  )
}

export default App