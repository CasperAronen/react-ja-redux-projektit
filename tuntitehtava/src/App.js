
import './App.css';

import React, { useState } from 'react';
 
const Laskuri = () => {
  const [lkm, asetaLkm] = useState(0);
  const [lkm2, asetaLkm2] = useState(0);
    return (
      <div>
        <p>Olet lisänny {lkm}</p>
        <p>Olet vähentänyt {lkm2}</p>
        <p>Yhteensä {lkm - lkm2}</p>
        <button onClick={() => asetaLkm(lkm + 1)}>lisää</button>
        <button onClick={() => asetaLkm2(lkm2 + 1)}>vähennä</button>
        <button onClick={() => asetaLkm(0)}>Nollaa</button>
        <button onClick={() => asetaLkm2(0)}>Nollaa</button>
      </div>
    );
}

export default Laskuri;
