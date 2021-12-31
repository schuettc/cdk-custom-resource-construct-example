import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface CdkCustomResourceExampleProps extends cdk.ResourceProps {
  readonly customResourceNumber: number;
}

export class CustomResourceExample extends Construct {
  public readonly customResourceResult: string;

  constructor(
    scope: Construct,
    id: string,
    props: CdkCustomResourceExampleProps,
  ) {
    super(scope, id);

    const role = new iam.Role(this, 'CustomResourceRole', {
      description: 'Custome Resource Construct Example',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    const fn = new lambda.Function(this, 'CustomResourceLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '../resources')),
      handler: 'index.handler',
      architecture: lambda.Architecture.ARM_64,
      role: role,
      timeout: cdk.Duration.minutes(1),
    });

    const customResourceResult = new cdk.CustomResource(
      this,
      'customResourceResult',
      {
        serviceToken: fn.functionArn,
        properties: {
          customResourceNumber: props.customResourceNumber,
        },
      },
    );

    this.customResourceResult = customResourceResult.getAttString('Result');
  }
}
