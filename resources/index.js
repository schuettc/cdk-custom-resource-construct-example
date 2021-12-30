exports.handler = function (event, context) {
  console.log('REQUEST RECEIVED:\n' + JSON.stringify(event));

  if (event.RequestType == 'Delete') {
    return {
      Status: 'SUCCESS',
      Reason: 'Nothing to do',
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: 'CustomResourceExample',
      RequestId: event.RequestId,
      StackId: event.StackId,
    };
  }

  try {
    responseData['Result'] = event.ResourceProperties.CustomResourceNumber * 2;
    return {
      Status: 'SUCCESS',
      Reason: 'Mulitplied',
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: 'CustomResourceExample',
      RequestId: event.RequestId,
      StackId: event.StackId,
      Data: responseData,
    };
  } catch (error) {
    return {
      Status: 'FAILURE',
      Reason: JSON.stringify(error),
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: 'CustomResourceExample',
      RequestId: event.RequestId,
      StackId: event.StackId,
    };
  }
};
