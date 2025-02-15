import React, { useState } from 'react';

const App = () => {
  const [response, setResponse] = useState(null);
  const [showNoButton, setShowNoButton] = useState(true);

  const handleYes = () => setResponse('yes');
  const handleNo = () => {
    setResponse('no');
    setShowNoButton(false);
  };

  return (
    <div className="app-container">
      <h1 className="mia">Mia,</h1>
      <h1 className="title">
        will you be my <span className="valentine">Valentine</span>?
      </h1>
      <div className="button-container">
        <button className="btn" onClick={handleYes}>Yes</button>
        {showNoButton ? (
          <button className="btn" onClick={handleNo}>No</button>
        ) : (
          <p className="try-again">Try again!</p>
        )}
      </div>

      {response === 'yes' && (
        <div className="pdf-container">
          <p>Yay! 🎉 Download your special surprise:</p>
          <a
            href="/assets/valentine.pdf"
            download="valentine-surprise.pdf"
            className="download-link"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
