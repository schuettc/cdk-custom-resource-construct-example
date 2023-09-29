const { awscdk } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.96.0',
  keywords: ['cdk', 'example', 'aws', 'custom resource'],
  defaultReleaseBranch: 'main',
  name: 'cdk-custom-resource-construct-example',
  license: 'MIT-0',
  release: true,
  jest: false,
  workflowNodeVersion: '18.x',
  projenrcTs: true,
  majorVersion: 1,
  npmignoreEnabled: true,
  deps: ['@types/aws-lambda', 'aws-lambda'],
  devDeps: ['yalc', 'esbuild'],
  bundledDeps: ['aws-lambda', '@types/aws-lambda'],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
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
  '_DS_Store',
  'yarn-error.log',
  'coverage',
  'venv',
  'node_modules',
];

project.bundler.addBundle('./resources/lambda/', {
  platform: 'node',
  target: 'node18',
});

project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'image');
project.synth();
