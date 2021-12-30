import * as cdk from 'aws-cdk-lib';
import { CustomResourceExample } from '../src';

test('test Create', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'testing-stack');
  new CustomResourceExample(stack, 'Test', {
    customResourceNumber: 5,
  });
});
