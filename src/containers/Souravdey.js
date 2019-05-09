import React from 'react';
import './Souravdey.css';
import '../textTypewriterEffect'

function Souravdey() {
  return (
    <div className="Souravdey">
      <header className="App-header">
        <h2>Hi Sourav here.</h2>
        <h1>I 'm &nbsp;
          <b>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "coder.", "developer.", "designer.", "leader.", "Amazing Person! ;P" ]'></span>
          </b>
        </h1>
      </header>
    </div>
  );
}

export default Souravdey;
