const { awscdk } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.53.0',
  keywords: ['cdk', 'example', 'aws', 'custom resource'],
  defaultReleaseBranch: 'main',
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
    bundlingOptions: {
      externals: ['aws-sdk'],
      sourcemap: true,
    },
  },
  name: 'cdk-custom-resource-construct-example',
  license: 'MIT-0',
  release: true,
  majorVersion: 1,
  npmignoreEnabled: true,
  devDeps: ['@types/aws-lambda', 'aws-lambda', 'esbuild'],
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
  'yarn-error.log',
  'coverage',
  'venv',
  'node_modules',
];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'image');
project.synth();
