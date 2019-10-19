const buildSuccess = {
  id: '91cb789e-2839-4641-bd31-0b2aaa649f78',
  projectId: 'my-project-0000',
  status: 'SUCCESS',
  substitutions: {
    BRANCH_NAME: 'test-branch',
    COMMIT_SHA: '9aac20sssssss6ef205940d1fa9dd1538d6',
    REPO_NAME: 'my_repo',
    REVISION_ID: '9ac201add0fef823adddddd1fa91538d6',
    SHORT_SHA: '9aac201',
    TAG_NAME: ''
  }
};

const buildFailure = {
  id: '91cb789e-2839-4641-bd31-0b2aaa649f78',
  projectId: 'my-project-0000',
  status: 'FAILURE',
  substitutions: {
    BRANCH_NAME: 'test-branch',
    COMMIT_SHA: '9aac20sssssss6ef205940d1fa9dd1538d6',
    REPO_NAME: 'my_repo',
    REVISION_ID: '9ac201add0fef823adddddd1fa91538d6',
    SHORT_SHA: '9aac201',
    TAG_NAME: ''
  }
};

module.exports = {
  buildSuccess,
  buildFailure
};
