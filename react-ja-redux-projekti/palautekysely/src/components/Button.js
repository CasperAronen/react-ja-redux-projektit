import "./Button.css"
import react,{useState} from "react";



const Button =(props)=>{
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [thirdNumber, setThirdNumber] = useState(0);
   
    return (
        <div className="Button">
        <button onClick={() => setFirstNumber(firstNumber + 1)}>Hyvää</button>
        <button onClick={() => setSecondNumber(secondNumber + 1)}>Kohtalaista</button>
        <button onClick={() => setThirdNumber(thirdNumber + 1)}>Huonoa</button>
        
        <h1>Palautteet</h1>

        <p>Hyvää: {firstNumber}</p>
        <p>Kohtalaista: {secondNumber}</p>
        <p>Huonoa: {thirdNumber}</p>
        <p>Palautemäärä: {firstNumber + secondNumber + thirdNumber}</p>
        <p>Keskiarvo: {((firstNumber + secondNumber + thirdNumber) / 3).toFixed(2)}</p>
        <p>Positiivinen palaute: {(firstNumber / (firstNumber + secondNumber + thirdNumber) * 100).toFixed(1)}%</p>
        </div>
    );
}

export default Button;