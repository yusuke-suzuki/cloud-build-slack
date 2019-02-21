# cloud-build-slack

Slack integration for Google Cloud Build using Google Cloud Functions

## Set up

### 1. Set up your Incoming Webhook on slack and Get webhook URL

https://api.slack.com/incoming-webhooks

### 2. Set up Google Cloud Build GitHub App

https://cloud.google.com/cloud-build/docs/run-builds-on-github

### 3. Set environment variables

```
# .env.yaml
SLACK_WEBHOOK_URL: https://hooks.slack.com/services/T....CTC/BD...D7../DHr.....PDou...0Ro
SUCCESS_EMOJI: ":your-custom-emoji:"
FAILURE_EMOJI: ":your-custom-emoji:"
```

### 4. Deploy Cloud Function

```
gcloud config set project <Your Project ID>

gcloud functions deploy subscribeBuilds --trigger-topic cloud-builds --runtime nodejs8 --env-vars-file .env.yaml --region <Target region>
```
