# CDK Custom Resource Construct Example

This is an example of how to create a Custom Resource Construct for CDK.

### Resource Structure

```
├── src
│   ├── index.ts
├── resources
│   ├── index.js
├── test
│   ├── customResource.test.ts
└── .projenrc.js
```

The `src` directory contains the Typescript CDK Construct that will be used in the demo. This CDK creates a Lambda, Role, and Custom Resource.

The `resources` directory contains the code for the Lambda that is created and used as the Custom Resource

The `test` directory contains the unit test for the package.

`.projenrc.js` contains all of the information for using projen to create and deploy the package.

### To use

Create an Access Token within npm to allow GitHub to publish to npm. Add this Access Token to GitHub in the Secrets section of the repository Settings as `NPM_TOKEN`

```
npx projen build
git add .
git commit -m 'commit comment'
npx projen release
git push
```

This will start a GitHub workflow action that will publish to npm.
