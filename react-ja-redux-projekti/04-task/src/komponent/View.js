import './View.css';

const View =(props)=> {
  return (
    <section className="View tausta-f">
    <h2>This is your input</h2>
          <p><span className='form-label'>Etunimi: </span> {props.firstName}</p>
          <p><span className='form-label'>Sukunimi: </span> {props.lastName}</p>
          <p><span className='form-label'>Puhelin: </span> {props.Phone}</p>
          <p><span className='form-label'>viesti: </span> {props.message}</p>
    </section>
  );
}

export default View;
