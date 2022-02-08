import './Form.css';
import View from './View';
import React, {useState} from "react";

const Form =()=> {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [Phone, setPhone] = useState();
    const [message, setMessage] = useState();
  return (
    <section className="Form tausta">
    <h2>Fill the Form</h2>
    <from>
    <div className="mb-3">
            <label for="fistName" className="form-label">Etunimi: </label>
            <input className="form-control" aria-describedby="eNimi" id="eNimi" type="text" name="firsname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label for="lastName" className="form-label">Sukunimi: </label>
            <input className="form-control" aria-describedby="sNimi" id="sNimi" type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label for="phone" className="form-label">Puhelin: </label>
            <input className="form-control" aria-describedby="puh" id="puh" type="text" name='phone' value={Phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="message" className="form-label">viesti: </label>
            <input className="form-control" aria-describedby="msg" id="msg" type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>


    </from>
    <View firstName={firstName} lastName={lastName} Phone={Phone} message={message}  />
    </section>
  );
}

export default Form;
