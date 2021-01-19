'use strict';

console.log('Loading function');

exports.handler = async (event, context) => {
    
    /* console.log('DEBUG: event name is ', event.name);
    return {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world!!!'
        })
    }; */

    const done = (err, res) => {

        return {
            statusCode: err ? '400' : '200',
            body: err ? err.message : JSON.stringify(res),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };

    return done(null, 'hello world!!!');


};