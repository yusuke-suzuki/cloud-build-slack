const { IncomingWebhook } = require('@slack/client');
const createSlackMessage = require('./createSlackMessage');

const targetStatus = [
  //'QUEUED',
  //'WORKING',
  'SUCCESS',
  'FAILURE',
  'INTERNAL_ERROR',
  'TIMEOUT',
  'CANCELLED',
  'STATUS_UNKNOWN'
];

const notifySlack = build => {
  console.log(build);

  // Skip if the current status is not in the status list.
  if (targetStatus.indexOf(build.status) === -1) {
    console.log('Build status is not the target status.');
    return null;
  }

  const message = createSlackMessage(build);
  const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

  webhook.send(message, (err, res) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Message sent: ', res);
    }
  });
};

module.exports = notifySlack;
