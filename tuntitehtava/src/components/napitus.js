import React from 'react';

const Laskuri = () => {
    const [lkm, asetaLkm] = React.useState(0);
      return (
        <div>
          <h1 data-testid="laskuri">{ lkm }</h1>
          <button data-testid="nappi-ylos" onClick={() => asetaLkm(lkm + 1)}>lisää</button>
          <button data-testid="nappi-alas" onClick={() => asetaLkm(0)}>Nollaa</button>    
        </div>
      );
  }
export default Laskuri;