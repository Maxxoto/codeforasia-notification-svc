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
  constructor({ subject, attendances }, content) {
    super();

    this.setFrom('admin@codefor.asia');
    this.setSubject(subject);
    this.body = this.addHtmlContent(content);
    this.attendances = this.formatAddresses(attendances);
    this.addAttendances();
  }

  formatAddresses(attendances) {
    return attendances.map(({ email }) => new classes.EmailAddress(email));
  }

  addAttendancess() {
    const personalize = new classes.Personalization();
    this.attendances.forEach((attendance) => {
      personalize.addTo(attendance);
    });

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
