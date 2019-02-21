const DEFAULT_GITHUB_CHECK = 'default-github-checks';

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
    },
    {
      title: 'Project',
      value: build.projectId,
      short: true
    }
  ];

  if (build.buildTriggerId === DEFAULT_GITHUB_CHECK) {
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
    if (build.substitutions.TAG_NAME) {
      fields.push({
        title: 'Tag',
        value: build.substitutions.TAG_NAME,
        short: true
      });
    }
  } else if (build.source) {
    fields.push(
      {
        title: 'Repository',
        value: build.source.repoSource.repoName,
        short: true
      },
      {
        title: 'Branch',
        value: build.source.repoSource.branchName,
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

module.exports = createSlackMessage;
