import './App.css';
import react, {useState} from "react"
export default function App(){   
    
  
      const anekdootit =[ 
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
      ];
      const [index, setIndex] = useState() 
     function lisaa(){
      const random = Math.floor(Math.random() * anekdootit.length);
      const indexi = anekdootit[random]
      setIndex(random)
      return indexi;
     }
     const [count, setCount] = useState(lisaa) 
     
     const [vote, setVote] = useState(0) 
     const [vote0, setVote0] = useState(0) 
     const [vote1, setVote1] = useState(0) 
     const [vote2, setVote2] = useState(0) 
     const [vote3, setVote3] = useState(0) 
     const [vote4, setVote4] = useState(0) 
     const [vote5, setVote5] = useState(0) 
     const [vote6, setVote6] = useState(0) 
     function post(){
      switch (index){
        case 0:
        setVote0(vote0+1)
        break;
        case 1:
        setVote1(vote1+1)
        break;
        case 2:
        setVote2(vote2+1)
        break;
        case 3:
        setVote3(vote3+1)
        break;
        case 4:
        setVote4(vote4+1)
        break;
        case 5:
         setVote5(vote5+1)
        break;
        case 6:
        setVote6(vote6+1)
        break;
        default:
        break;
      }
     }
     
     
  return (
    <div className="App">
    <h1>Päivän anekdootti</h1>
    <div className='anekdootit'>
      <p>{count}</p>
   </div>
   
   <button onClick ={()=> setCount(lisaa)} >random anekdootti</button>
   <button onClick ={()=> setVote(post)} >äänestä tätä anekdoottia</button>
   <div>
    <div className='votes'>
  <p>1. {anekdootit[0]}</p>
  <p>votes:{vote0}</p>
  <p>2. {anekdootit[1]}</p>
  <p>votes:{vote1}</p>
  <p>3. {anekdootit[2]}</p>
  <p>votes:{vote2}</p>
  <p>4. {anekdootit[3]}</p>
  <p>votes:{vote3}</p>
  <p>5. {anekdootit[4]}</p>
  <p>votes:{vote4}</p>
  <p>6. {anekdootit[5]}</p>
  <p>votes:{vote5}</p>
  <p>7. {anekdootit[6]}</p>
  <p>votes:{vote6}</p>
  </div>
   </div>
    </div>
    
  );
}


