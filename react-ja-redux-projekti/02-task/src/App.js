import './App.css';
import Person from './person/Person.js';

const Peroson = [
    {name: "Hermanni", age: 66},
    {name: "Uuno", age: 46}
]

const App =() => {
  return (
    <div className="App">
    <Person name={Peroson[0].name} age={Peroson[0].age} />
    <Person name={Peroson[1].name} age={Peroson[1].age} />

    </div>
  );
}

export default App;
