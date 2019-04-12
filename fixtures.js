const buildSuccess = {
  id: '91cb789e-2839-4641-bd31-0b2aaa649f78',
  projectId: 'my-project-0000',
  status: 'SUCCESS'
};

const buildFailure = {
  id: '91cb789e-2839-4641-bd31-0b2aaa649f78',
  projectId: 'my-project-0000',
  status: 'FAILURE'
};

const buildViaGitHub = {
  id: '91cb789e-2839-4641-bd31-0b2aaa649f78',
  projectId: 'my-project-0000',
  status: 'SUCCESS',
  source: {
    storageSource: {
      bucket: '00000000.cloudbuild-source.googleusercontent.com',
      object:
        '947c201add0fef823ad26ef205940d1fa91538d6-73f80db2-b1dd-4f0d-bb6c-b9c52b31f704.tar.gz'
    }
  },
  steps: [
    {
      name: 'gcr.io/cloud-builders/gcloud',
      args: [],
      entrypoint: 'bash',
      timing: {},
      pullTiming: {},
      status: 'SUCCESS'
    }
  ],
  results: {
    buildStepImages: ['sha256:11111', '', 'sha256:00000'],
    buildStepOutputs: []
  },
  createTime: '2019-02-21T07:33:58.947414067Z',
  startTime: '2019-02-21T07:33:59.968630779Z',
  finishTime: '2019-02-21T07:36:57.839722Z',
  timeout: '600s',
  logsBucket: 'gs://111111.cloudbuild-logs.googleusercontent.com',
  sourceProvenance: {
    resolvedStorageSource: {
      bucket: '1111111.cloudbuild-source.googleusercontent.com',
      object:
        '947c201add0fef823ad26ef205940d1fa91538d6-73f80db2-b1dd-4f0d-bb6c-b9c52b31f704.tar.gz',
      generation: '11111111111'
    },
    fileHashes: {
      'gs://11111111.cloudbuild-source.googleusercontent.com/947c201add0fef823ad26ef205940d1fa91538d6-73f80db2-b1dd-4f0d-bb6c-b9c52b31f704.tar.gz#1550734438240334': {}
    }
  },
  buildTriggerId: 'default-github-checks',
  options: { substitutionOption: 'ALLOW_LOOSE', logging: 'LEGACY' },
  logUrl:
    'https://console.cloud.google.com/gcr/builds/91cb789e-2839-4641-bd31-0b2aaa649f78?project=0000000',
  substitutions: {
    BRANCH_NAME: 'test-branch',
    COMMIT_SHA: '9aac20sssssss6ef205940d1fa9dd1538d6',
    REPO_NAME: 'my_repo',
    REVISION_ID: '9ac201add0fef823adddddd1fa91538d6',
    SHORT_SHA: '9aac201',
    TAG_NAME: ''
  },
  tags: [
    'event-18785213-7dd8-479b-9395-2c17b38f291e',
    'trigger-default-github-checks'
  ],
  timing: {
    BUILD: {
      startTime: '2019-02-21T07:34:12.827149073Z',
      endTime: '2019-02-21T07:36:57.005682424Z'
    },
    FETCHSOURCE: {
      startTime: '2019-02-21T07:34:09.540653393Z',
      endTime: '2019-02-21T07:34:12.739791109Z'
    }
  }
};

const buildViaUserCreatedTrigger = {
  id: '3379b094-b08f-4df3-8c44-2a2e17a7049d',
  projectId: 'my-project-0000',
  status: 'SUCCESS',
  source: {
    repoSource: {
      projectId: 'my-project-0000',
      repoName: 'github_hogeuser_my-repo',
      branchName: 'master'
    }
  },
  steps: [
    {
      name: 'gcr.io/cloud-builders/gcloud',
      args: [],
      entrypoint: 'bash',
      timing: {},
      pullTiming: {},
      status: 'SUCCESS'
    }
  ],
  results: {
    buildStepImages: ['sha256:hogehoge', '', 'sha256:hoghoge'],
    buildStepOutputs: []
  },
  createTime: '2019-02-21T06:47:38.885146878Z',
  startTime: '2019-02-21T06:47:39.441904499Z',
  finishTime: '2019-02-21T06:50:26.804892Z',
  timeout: '600s',
  logsBucket: 'gs://111038385292.cloudbuild-logs.googleusercontent.com',
  sourceProvenance: {
    resolvedRepoSource: {
      projectId: 'my-project2-1132',
      repoName: 'github_hogeuser_my-repo',
      commitSha: '7a111fe914d3b3a111c243d6b8b43c1110340111'
    }
  },
  buildTriggerId: 'd688aaf7-43d3-4bf8-b47c-c01348cf7dd4',
  options: { substitutionOption: 'ALLOW_LOOSE', logging: 'LEGACY' },
  logUrl:
    'https://console.cloud.google.com/gcr/builds/3379b094-b08f-4df3-8c44-2a2e17a7049d?project=00000',
  tags: [
    'event-a1026322-89e2-4007-9ab8-20403abb5a99',
    'trigger-d688aaf7-43d3-4bf8-b47c-c01348cf7dd4'
  ],
  timing: {
    BUILD: {
      startTime: '2019-02-21T06:47:44.367909450Z',
      endTime: '2019-02-21T06:50:25.751502700Z'
    },
    FETCHSOURCE: {
      startTime: '2019-02-21T06:47:40.564255450Z',
      endTime: '2019-02-21T06:47:44.282838410Z'
    }
  }
};

const buildViaCli = {
  id: '1a1a45a4-0e7d-558a-a449-c554a1111111',
  projectId: 'my-project-0000',
  status: 'SUCCESS',
  source: {
    storageSource: {
      bucket: 'my-project-1111_cloudbuild',
      object: 'source/1111052222.96-08cb25db20174dfaa11110401111bcc6.tgz',
      generation: '1111118890211111'
    }
  },
  steps: [
    {
      name: 'gcr.io/cloud-builders/gcloud',
      args: [],
      entrypoint: 'bash',
      timing: {},
      pullTiming: {},
      status: 'SUCCESS'
    }
  ],
  results: {
    buildStepImages: ['sha256:11111', '', 'sha256:00000'],
    buildStepOutputs: []
  },
  createTime: '2019-04-12T08:48:10.752959242Z',
  startTime: '2019-04-12T08:48:11.562423831Z',
  finishTime: '2019-04-12T08:51:28.183099Z',
  timeout: '600s',
  logsBucket: 'gs://111111.cloudbuild-logs.googleusercontent.com',
  sourceProvenance: {
    resolvedStorageSource: {
      bucket: '1111111.cloudbuild-source.googleusercontent.com',
      object:
        '947c201add0fef823ad26ef205940d1fa91538d6-73f80db2-b1dd-4f0d-bb6c-b9c52b31f704.tar.gz',
      generation: '11111111111'
    },
    fileHashes: {
      'gs://11111111.cloudbuild-source.googleusercontent.com/947c201add0fef823ad26ef205940d1fa91538d6-73f80db2-b1dd-4f0d-bb6c-b9c52b31f704.tar.gz#1550734438240334': {}
    }
  },
  options: { logging: 'LEGACY' },
  logUrl:
    'https://console.cloud.google.com/gcr/builds/91cb789e-2839-4641-bd31-0b2aaa649f78?project=0000000',
  substitutions: {
    BRANCH_NAME: 'test-branch',
    REPO_NAME: 'my_repo'
  },
  secrets: [
    {
      kmsKeyName:
        'projects/my-project-0000/locations/global/keyRings/my-keyring/cryptoKeys/my-key',
      secretEnv: {}
    }
  ],
  timing: {
    BUILD: {
      startTime: '2019-04-12T08:48:15.404661589Z',
      endTime: '2019-04-12T08:51:26.889424039Z'
    },
    FETCHSOURCE: {
      startTime: '2019-04-12T08:48:12.719971137Z',
      endTime: '2019-04-12T08:48:15.320727032Z'
    }
  }
};

module.exports = {
  buildSuccess,
  buildFailure,
  buildViaGitHub,
  buildViaUserCreatedTrigger,
  buildViaCli
};
