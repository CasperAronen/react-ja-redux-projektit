import './Form.css';
import View from './View';

const Form =()=> {
  return (
    <section className="Form">
    <from>
        <div className="mb-3">
            <label for="EtuNimi" className="form-label">Etu nimi</label>
            <input className="form-control" aria-describedby="EtuNimi" id="EtuNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="SukuNimi" className="form-label">Suku Nimi</label>
            <input className="form-control" aria-describedby="SukuNimi" id="SukuNimi" type="text" />
        </div>
        <div className="mb-3">
            <label for="Numero" className="form-label">Numero</label>
            <input className="form-control" aria-describedby="Numero" id="Numero" type="text" />
        </div>
        <div className="mb-3">
            <label for="Viesti" className="form-label">Viesti</label>
            <input className="form-control" aria-describedby="Viesti" id="Viesti" type="text" />
        </div>
    
    </from>
    <View />
    </section>
  );
}

export default Form;
