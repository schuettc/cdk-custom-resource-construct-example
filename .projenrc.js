const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.3.0',
  defaultReleaseBranch: 'main',
  peerDependencies: ['aws-cdk-lib'],
  name: 'cdk-custom-resource-construct-example',
  license: 'MIT-0',
  release: true,
  npmignoreEnabled: true,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'PROJEN_GITHUB_TOKEN',
    },
  },
  autoApproveOptions: {
    allowedUsernames: ['schuettc'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  repositoryUrl:
    'https://github.com/schuettc/cdk-custom-resource-construct-example.git',
});
const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'coverage',
  'venv',
  'node_modules',
];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'image');
project.synth();
