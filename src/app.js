'use strict';

console.log('Loading function');

exports.handler = async (event, context) => {
    
    return {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world!!!'
        })
    };
    
};