exports.handler = function (event, context) {
  console.log('REQUEST RECEIVED:\n' + JSON.stringify(event));

  const responseData = {
    Status: '',
    Reason: '',
    LogicalResourceId: event.LogicalResourceId,
    PhysicalResourceId: 'CustomResourceExample',
    RequestId: event.RequestId,
    StackId: event.StackId,
  };

  if (event.RequestType == 'Delete') {
    responseData.Status = 'SUCCESS';
    responseData.Reason = 'Nothing to do.';
    console.log({ responseData });
    return responseData;
  }

  try {
    const multiplyResult = event.ResourceProperties.customResourceNumber * 2;
    responseData.Status = 'SUCCESS';
    responseData.Reason = 'Successfully multipled';
    responseData['Data'] = {};
    responseData['Data']['Result'] = multiplyResult;
    console.log({ responseData });
    return responseData;
  } catch (error) {
    console.log(error);
    responseData.Status = 'FAILURE';
    responseData.Reason = JSON.stringify(error);
    console.log({ responseData });
    return responseData;
  }
};
