import React from 'react';

const Laskuri = () => {
    const [lkm, asetaLkm] = React.useState(0);
    const [lkm2, asetaLkm2] = React.useState(0);
      return (
        <div>
          <p>Olet lisänny {lkm}</p>
          <p>Olet vähentänyt {lkm2}</p>
          <p>Yhteensä {lkm - lkm2}</p>
          <h1 data-testid="laskuri">{ lkm }</h1>
          <button data-testid="nappi-ylos" onClick={() => asetaLkm(lkm + 1)}>lisää</button>
          <button disabled data-testid="nappi-alas" onClick={() => asetaLkm(0)}>Nollaa</button>    
        </div>
      );
  }
export default Laskuri;