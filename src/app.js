'use strict';

console.log('Loading function');

exports.handler = async (event, context) => {
    
    console.log('DEBUG: event name is ', event.name);
    return {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world!!!'
        })
    };
    
};