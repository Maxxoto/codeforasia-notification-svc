module.exports = (mail) => `
    <html>
    <body>
        <div style="text-align: center">
          <p>${mail.body}</p>
        </div>
    </body>
    </html>
  `;
