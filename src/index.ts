import {
  Duration,
  CustomResource,
  ResourceProps,
  CustomResourceProvider,
  CustomResourceProviderRuntime,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

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
