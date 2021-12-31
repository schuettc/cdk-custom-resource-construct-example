import AWS = require('aws-sdk');
import { Callback, Context } from 'aws-lambda';
import {
  CustomResource,
  Event,
  LambdaEvent,
  StandardLogger,
} from 'aws-cloudformation-custom-resource';

const logger = new StandardLogger();

export const handler = function (
  event: LambdaEvent,
  context: Context,
  callback: Callback,
) {
  new CustomResource(context, callback, logger)
    .onCreate(Create)
    .onUpdate(Update)
    .onDelete(Delete)
    .handle(event);
};

function Create(event: Event): Promise<Event | AWS.AWSError> {
  logger.info('Creating');
  return new Promise(function (resolve, reject) {
    try {
      const multiplyResult = event.ResourceProperties.customResourceNumber * 2;
      event.addResponseValue('Result', multiplyResult);
      resolve(event);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

function Update(event: Event): Promise<Event | AWS.AWSError> {
  logger.info('Updating');
  return new Promise(function (resolve, reject) {
    try {
      event.addResponseValue('Result', 'Nothing to do');
      resolve(event);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

function Delete(event: Event): Promise<Event | AWS.AWSError> {
  logger.info('Deleting');
  return new Promise(function (resolve, reject) {
    try {
      event.addResponseValue('Result', 'Nothing to do');
      resolve(event);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
