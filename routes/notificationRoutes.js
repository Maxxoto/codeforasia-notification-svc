/* eslint-disable object-curly-newline */
const mongoose = require('mongoose');

const surveyTemplate = require('../services/emailTemplates');

const Notification = mongoose.model('notification');

const Mailer = require('../services/Mailer');

module.exports = (app) => {
  app.post('/api/notification', async (req, res) => {
    const { date, time, title, subject, body, attendances } = req.body;

    try {
      const notification = new Notification({
        date,
        time,
        title,
        subject,
        body,
        attendances: attendances.split(',').map((email) => ({
          email: email.trim(),
        })),
        //   _user: req.user.id,
        dateSent: Date.now(),
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
