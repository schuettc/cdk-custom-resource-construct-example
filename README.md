# CDK Custom Resource Construct Example

This is an updated example of how to create a Custom Resource Construct for CDK. This example will walk you through the process of creating a [CDK Construct](https://constructs.dev/) that uses Typescript Custom Resources.

## Custom Resources

[Custom Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html) allow you to deploy and invoke Lambda functions during the deployment of a CDK. This can be used to supplement CDKs with features that are not natively part of CloudFormation or CDK.

In this example, our Lambda function is simply multiplying an input and returning the result

```typescript
try {
  const multiplyResult = event.ResourceProperties.customResourceNumber * 2;
  response.Status = 'SUCCESS';
  response.Data = { Result: multiplyResult };
  return response;
} catch (error) {
  if (error instanceof Error) {
    response.Reason = error.message;
  }
  response.Status = 'FAILED';
  response.Data = { Result: error };
  return response;
}
```

## Bundling

Because we are using Typescript for our Lambda, we must transpile it before we use it. To do this, we will use [projen](https://github.com/projen/projen) to execute an `esbuild` on our Lambda source code during the build.

To do this, in the `.projenrc.ts` we use `bundler.addBundle`:

```typescript
project.bundler.addBundle('./resources/lambda/', {
  platform: 'node',
  target: 'node18',
});
```

This will create an `index.js` in the `assets/resources/lambda` directory. This is the what we will use in the Custom Resource.

## Custom Resource Provider

To create the Custom Resource we will use [`CustomResourceProvider`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.CustomResourceProvider.html). This is different from [`Provider`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources.Provider.html) which is what is normally used within a CDK.

```typescript
const customResourceProvider = CustomResourceProvider.getOrCreateProvider(
  this,
  'Custom::Resource',
  {
    codeDirectory:
      'node_modules/cdk-custom-resource-construct-example/assets/resources/lambda',
    runtime: CustomResourceProviderRuntime.NODEJS_18_X,
    timeout: Duration.seconds(60),
    policyStatements: [
      {
        Effect: 'Allow',
        Action: [
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
          'logs:PutLogEvents',
        ],
        Resource: '*',
      },
    ],
  },
);
```

By using []`getOrCreateProvider`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.CustomResourceProvider.html#static-getwbrorwbrcreatewbrproviderscope-uniqueid-props) we can ensure that the Lambda function is created only once even if it used multiple times. The `codeDirectory` used here is the output directory of the bundling. This is what will be used in the CDK that uses this Construct.

## Custom Resource

Finally, we will create the Custom Resource using the previously created Provider.

```typescript
const customResourceResult = new CustomResource(this, 'customResourceResult', {
  serviceToken: customResourceProvider.serviceToken,
  properties: {
    customResourceNumber: props.customResourceNumber,
  },
});

this.customResourceResult = customResourceResult.getAttString('Result');
```

This Custom Resource will take a `prop` when called and return the result.

## Using the Custom Resource

To use this Construct, we will import the `CustomResourceExample`, implement it, and pass it a prop.

```typescript
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceExample } from 'cdk-custom-resource-construct-example';

export class CdkCustomResourceConstructDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const result = new CustomResourceExample(this, 'customResourceResult', {
      customResourceNumber: 5,
    });

    new CfnOutput(this, 'customResourceOutput', {
      value: result.customResourceResult,
    });
  }
}
```

When used this way, the Custom Resource will deploy the Lambda, invoke it, and return the result to the calling CDK.

## Developing

It can be difficult to develop and test a Construct. [`yalc`](https://github.com/wclr/yalc) is a tool that can help with this by allowing us to "publish" locally. To use `yalc`, it should be installed as a `devDep` in the `.projenrc.ts` of the source Construct.

```typescript
  devDeps: ['yalc', 'esbuild'],
```

After building the construct using `yarn projen build`, you can use `yalc publish --push --sig` to push this package to the local store. This should result in an output similar to:

```bash
cdk-custom-resource-construct-example@0.0.0+80079907 published in store.
```

By adding `--sig` we can differentiate versions. In this example `+80079907` is the sig.

Next, you can create a project that uses this package. To do this, you can add the package with yalc: `yalc add cdk-custom-resource-construct-example`. This will add the package to the `package.json` file that can be used like any other package. If needed, you can use `yalc update`. The output should be similar to:

```bash
Package cdk-custom-resource-construct-example@0.0.0+80079907 added
```
