/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
const sg = require('@sendgrid/mail');
const { classes } = require('@sendgrid/helpers');
const client = require('@sendgrid/client');
// const helper = sendgrid.mail;
const keys = require('../config/keys');

client.setApiKey(keys.sendGridKey);

class Mailer extends classes.Mail {
  constructor({ subject, attendances, dateSentUnix, batch_id }, content) {
    super();

    this.setFrom('event@codefor.asia');
    this.setSubject(subject);
    this.setSendAt(dateSentUnix); // Scheduled send email
    this.setBatchId(batch_id);
    this.setCustomArgs({ batch_id });
    this.body = this.addHtmlContent(content);
    this.attendances = this.formatAddresses(attendances);
    this.addAttendances();
  }

  formatAddresses(attendances) {
    return attendances.map(({ email }) => new classes.EmailAddress(email));
  }

  addAttendances() {
    const personalize = new classes.Personalization();
    this.attendances.forEach((attendance) => {
      personalize.addTo(attendance.email);
    });
    // personalize.setSendAt(send_at); // You can use date_sent inside here or global

    this.addPersonalization(personalize.toJSON());
  }

  async send() {
    try {
      const request = {
        method: 'POST',
        url: '/v3/mail/send',
        body: this.toJSON(),
      };
      return await client.request(request);
    } catch (e) {
      console.log(`Error ${e}`);
    }
  }
}

module.exports = Mailer;
