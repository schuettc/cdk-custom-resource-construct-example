"use strict";
exports.__esModule = true;
exports.handler = void 0;
var aws_cloudformation_custom_resource_1 = require("aws-cloudformation-custom-resource");
var logger = new aws_cloudformation_custom_resource_1.StandardLogger();
var handler = function (event, context, callback) {
    new aws_cloudformation_custom_resource_1.CustomResource(context, callback, logger)
        .onCreate(Create)
        .onUpdate(Update)
        .onDelete(Delete)
        .handle(event);
};
exports.handler = handler;
function Create(event) {
    logger.info('Creating');
    return new Promise(function (resolve, reject) {
        try {
            var multiplyResult = event.ResourceProperties.customResourceNumber * 2;
            event.addResponseValue('Result', multiplyResult);
            resolve(event);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
function Update(event) {
    logger.info('Updating');
    return new Promise(function (resolve, reject) {
        try {
            event.addResponseValue('Result', 'Nothing to do');
            resolve(event);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
function Delete(event) {
    logger.info('Deleting');
    return new Promise(function (resolve, reject) {
        try {
            event.addResponseValue('Result', 'Nothing to do');
            resolve(event);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}
