const createSlackMessage = require('./createSlackMessage');

const {
  buildSuccess,
  buildFailure,
  buildViaGitHub,
  buildViaUserCreatedTrigger,
  buildViaCli
} = require('./fixtures');

describe('Create slack message for each build status', () => {
  test('Status: SUCCESS', () => {
    const message = createSlackMessage(buildSuccess);
    const attachment = message.attachments[0];

    expect(attachment.color).toBe('good');

    const statusField = attachment.fields[0];
    expect(statusField.value).toBe('SUCCESS :white_check_mark:');
  });

  test('Status: FAILURE', () => {
    const message = createSlackMessage(buildFailure);
    const attachment = message.attachments[0];

    expect(attachment.color).toBe('danger');

    const statusField = attachment.fields[0];
    expect(statusField.value).toBe('FAILURE :x:');
  });
});

describe('Get repo info from each trigger type', () => {
  test('Build via GitHub App', () => {
    const message = createSlackMessage(buildViaGitHub);
    const attachment = message.attachments[0];

    expect(attachment.fields[1].title).toBe('Project');
    expect(attachment.fields[1].value).toBeDefined();
    expect(attachment.fields[2].title).toBe('Repository');
    expect(attachment.fields[2].value).toBeDefined();
    expect(attachment.fields[3].title).toBe('Branch');
    expect(attachment.fields[3].value).toBeDefined();
    expect(attachment.fields[4].title).toBe('Commit');
    expect(attachment.fields[4].value).toBeDefined();
  });

  test('Build via user created trigger', () => {
    const message = createSlackMessage(buildViaUserCreatedTrigger);
    const attachment = message.attachments[0];

    expect(attachment.fields[1].title).toBe('Project');
    expect(attachment.fields[1].value).toBeDefined();
    expect(attachment.fields[2].title).toBe('Repository');
    expect(attachment.fields[2].value).toBeDefined();
    expect(attachment.fields[3].title).toBe('Branch');
    expect(attachment.fields[3].value).toBeDefined();
  });

  test('Build via CLI (gcloud builds submit)', () => {
    const message = createSlackMessage(buildViaCli);
    const attachment = message.attachments[0];

    expect(attachment.fields[1].title).toBe('Project');
    expect(attachment.fields[1].value).toBeDefined();
  });
});
