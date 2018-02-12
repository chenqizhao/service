const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style={{text-align: 'center', backgroundColor: '#D3D3D3'}}>
          <h3>We want to hear from you!</h3>
          <p>${survey.body}</p>
          <p>Please answer the following question:</p>
          <div>
            <p>Do you like this product?</p>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes, I like it!</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No, I hate it!</a>
          </div>
          
        </div>
      </body>
    </html>
  `;
};
