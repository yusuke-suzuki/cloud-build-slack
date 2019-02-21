const { IncomingWebhook } = require('@slack/client');

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

module.exports.subscribeBuilds = event => {
  const build = eventToBuild(event.data);
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

// eventToBuild transforms pubsub event message to a build object.
const eventToBuild = data => {
  return JSON.parse(new Buffer(data, 'base64').toString());
};

// createSlackMessage create a message from a build object.
const createSlackMessage = build => {
  let message = {
    text: `Build \`${build.id}\``,
    mrkdwn: true,
    attachments: [
      {
        title: 'Build logs',
        title_link: build.logUrl,
        color: statusColor(build.status),
        fields: createFields(build)
      }
    ]
  };
  return message;
};

const createFields = build => {
  let fields = [
    {
      title: 'Status',
      value: `${build.status} ${statusEmoji(build.status)}`,
      short: true
    }
  ];

  if (build.substitutions) {
    fields.push(
      {
        title: 'Repository',
        value: build.substitutions.REPO_NAME,
        short: true
      },
      {
        title: 'Branch',
        value: build.substitutions.BRANCH_NAME,
        short: true
      },
      {
        title: 'Commit',
        value: build.substitutions.SHORT_SHA,
        short: true
      }
    );
  }
  return fields;
};

const statusEmoji = status => {
  switch (status) {
    case 'SUCCESS':
      return process.env.SUCCESS_EMOJI
        ? process.env.SUCCESS_EMOJI
        : ':white_check_mark:';
    case 'FAILURE':
    case 'TIMEOUT':
      return process.env.FAILURE_EMOJI ? process.env.FAILURE_EMOJI : ':x:';
    case 'INTERNAL_ERROR':
    case 'STATUS_UNKNOWN':
      return ':interrobang:';
    default:
      return ':question:';
  }
};

const statusColor = status => {
  switch (status) {
    case 'SUCCESS':
      return 'good';
    case 'FAILURE':
    case 'TIMEOUT':
    case 'INTERNAL_ERROR':
    case 'STATUS_UNKNOWN':
      return 'danger';
    default:
      return '#ddd';
  }
};
