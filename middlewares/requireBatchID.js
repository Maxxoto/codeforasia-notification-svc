const fetch = require('node-fetch');
const keys = require('../config/keys');

module.exports = async (req, res, next) => {
  const { type } = req.body;
  const checkContain = type.includes('mail');

  if (checkContain) {
    const batchID = await fetch('https://api.sendgrid.com/v3/mail/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${keys.sendGridKey}`,
      },
    });
    const data = await batchID.json();
    res.locals.batchID = data.batch_id;
  }

  next();
};
