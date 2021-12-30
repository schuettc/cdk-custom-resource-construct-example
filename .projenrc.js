const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.3.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-custom-resource-construct-example',
  repositoryUrl:
    'https://github.com/schuettc/cdk-custom-resource-construct-example.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
