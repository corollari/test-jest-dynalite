const AWS = require('aws-sdk');

test('put database', async () => {
    jest.setTimeout(10000);

    const config = true ? {
        endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
        sslEnabled: false,
        region: "local"
    } : {};
    console.log(config);
    let dynamoDB = new AWS.DynamoDB.DocumentClient(config);

    await dynamoDB.put({
        TableName: 'table',
        Item: {phone: 123},
        ConditionExpression: `#pid <> :partitionKey`,
        ExpressionAttributeNames: {
            '#pid': 'phone',
        },
        ExpressionAttributeValues: {
            ':partitionKey': '123',
        }
    }).promise();
});

