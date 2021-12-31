exports.handler = function (event, context) {
  console.log('REQUEST RECEIVED:\n' + JSON.stringify(event));

  responseData = {};
  if (event.RequestType == 'Delete') {
    var responseData = { Result: 'None' };
    send(event, context, 'SUCCESS', responseData);
  }

  try {
    const multiplyResult = event.ResourceProperties.customResourceNumber * 2;
    var responseData = { Result: multiplyResult };
    send(event, context, 'SUCCESS', responseData);
  } catch (error) {
    console.log(error);
    var responseData = { Result: error };
    send(event, context, 'FAILURE', responseData);
  }
};

function send(
  event,
  context,
  responseStatus,
  responseData,
  physicalResourceId,
  noEcho,
) {
  var responseBody = JSON.stringify({
    Status: responseStatus,
    Reason:
      'See the details in CloudWatch Log Stream: ' + context.logStreamName,
    PhysicalResourceId: physicalResourceId || context.logStreamName,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: noEcho || false,
    Data: responseData,
  });

  console.log('Response body:\n', responseBody);

  var https = require('https');
  var url = require('url');

  var parsedUrl = url.parse(event.ResponseURL);
  var options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: 'PUT',
    headers: {
      'content-type': '',
      'content-length': responseBody.length,
    },
  };

  var request = https.request(options, function (response) {
    console.log('Status code: ' + response.statusCode);
    console.log('Status message: ' + response.statusMessage);
    context.done();
  });

  request.on('error', function (error) {
    console.log('send(..) failed executing https.request(..): ' + error);
    context.done();
  });

  request.write(responseBody);
  request.end();
}
