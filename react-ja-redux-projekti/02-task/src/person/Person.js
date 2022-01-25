import './Person.css';
const Person =(props) => {
  return (
    <div className="Person">
    <p>"Hello, my name is {props.name}, and i am {props.age} old"</p>
    </div>
  );
}

export default Person;