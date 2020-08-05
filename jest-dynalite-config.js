module.exports = {
  tables: [
    {
      TableName: "table",
      KeySchema: [{ AttributeName: "phone", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "phone", AttributeType: "N" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }
  ],
  basePort: 8000
};
