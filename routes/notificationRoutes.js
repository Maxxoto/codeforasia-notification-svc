/* eslint-disable comma-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
const moment = require('moment');

const uid = require('uid');

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
        sendgridId: uid(16),
        dateSent: send_at,
        dateSentUnix: unixDate,
        message_id: 'null',
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

        res.send({
          message: 'Successfully send an email',
        });
      } catch (e) {
        res.status(422).send(e);
      }
    } catch (error) {
      res.send({ message: `Error ${error}` });
    }
  });

  app.post('/api/notification/webhooks', async (req, res) => {
    const result = req.body;

    // Version 1 All Sendgrid Object

    // const { sendgridId } = result[0];
    // const notification = await Notification.findOneAndUpdate(
    //   { sendgridId },
    //   { events: result },
    //   { new: true, useFindAndModify: false }
    // ).exec();

    // Version 2 Minify Sendgrid Object
    const obj = result.map((val) => {
      const { sendgridId, event, email, reason } = val;
      const statusObj = {
        sendgridId,
        email,
        status: event,
        reason,
      };
      return statusObj;
    });
    const { sendgridId } = obj[0];

    try {
      await Notification.findOneAndUpdate(
        { sendgridId },
        { events: obj },
        { new: true, useFindAndModify: false }
      ).exec();
    } catch (error) {
      res.status(422).send({ message: error });
    }
    console.log(result);
  });

  app.get('/api/notification', async (req, res) => {
    try {
      const result = await await Notification.find()
        .sort({ updatedAt: -1 })
        .exec();
      res.send({
        code: '200',
        message: 'Successfully fetch notification',
        data: result,
      });
    } catch (error) {
      res.status(422).send({ message: error });
    }
  });

  app.get('/api/notification/:notificationID', async (req, res) => {
    const { notificationID } = req.params;
    try {
      const result = await Notification.findOne({ _id: notificationID }).exec();
      res.send({
        code: '200',
        message: 'Successfully fetch notification',
        data: result,
      });
    } catch (error) {
      res.status(422).send({ message: error });
    }
  });
};
