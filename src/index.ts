import { Duration, CustomResource, ResourceProps } from 'aws-cdk-lib';
import { ServicePrincipal, Role, ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { CustomResourceFunction } from './custom-resource-function';

export interface CdkCustomResourceExampleProps extends ResourceProps {
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

    const customResourceRole = new Role(this, 'CustomResourceRole', {
      description: 'Custom Resource Construct Example',
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    const customResourceLambda = new CustomResourceFunction(
      this,
      'customResourceLambda',
      {
        role: customResourceRole,
        architecture: Architecture.ARM_64,
        timeout: Duration.seconds(60),
      },
    );

    const customResourceProvider = new Provider(
      this,
      'customResourceProvider',
      {
        onEventHandler: customResourceLambda,
      },
    );

    const customResourceResult = new CustomResource(
      this,
      'customResourceResult',
      {
        serviceToken: customResourceProvider.serviceToken,
        properties: {
          customResourceNumber: props.customResourceNumber,
        },
      },
    );

    this.customResourceResult = customResourceResult.getAttString('Result');
  }
}
