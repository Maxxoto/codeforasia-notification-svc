/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
const moment = require('moment');

const mongoose = require('mongoose');

const surveyTemplate = require('../services/emailTemplates');

const Notification = mongoose.model('notification');

const Mailer = require('../services/Mailer');

module.exports = (app) => {
  app.post('/api/notification', async (req, res) => {
    const { send_at, title, subject, body, attendances } = req.body;

    const RFC2822 = 'ddd, DD MMM YYYY HH:mm:ss [GMT]'; // Setup format RFC to avoid deprecated momentjs

    // Convert local time to UTC and formatting to RFC2822
    const ISOdate = moment.utc(new Date(send_at)).format(RFC2822);
    // Convert Unix
    const unixDate = moment(ISOdate).unix();

    // NOTE : Sendgrid only allow 48 Hours scheduled send
    try {
      const notification = new Notification({
        dateSent: send_at,
        dateSentUnix: unixDate,
        title,
        subject,
        body,
        attendances: attendances.split(',').map((email) => ({
          email: email.trim(),
        })),
        //   _user: req.user.id,
      });

      const mailer = new Mailer(notification, surveyTemplate(notification));

      try {
        await mailer.send();
        await notification.save();

        res.send({ message: 'Sucessfully send an email' });
      } catch (e) {
        res.status(422).send(e);
      }
    } catch (error) {
      res.send({ message: `Error ${error}` });
    }
  });
};
