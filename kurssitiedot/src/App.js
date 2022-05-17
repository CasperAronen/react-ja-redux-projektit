import Course from './components/Course';
import Total from './components/Total'
import './App.css';



const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      },
      {
        name: 'Tuleeko uusi kohta näkyviin',
        exercises: 10,
        id:4
      }
    ]
  },
  {
    id: 2,
    name: "Node.js",
    parts: [
      {
        name: "routing",
        id: 1,
        exercises: 3
      },
      {
        name: "midlewares",
        id: 2,
        exercises: 7
      }
    ]
   }
  ]

  
  return (
    <div>
    <h1>react App selaimessa</h1>
    {course.map((course) =>(
      <Course key={course.id} course={course} />
    ))}
    </div>
  );
}

export default App;
