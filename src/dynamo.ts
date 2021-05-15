import AWS from "aws-sdk";

class DynamoDBWrapper {
  constructor(dynamoCredentials: any, region: string) {
    validateCredentials(dynamoCredentials);

    AWS.config.update(dynamoCredentials);
    AWS.config.update({
      region
    });
  }

  async scanTable(table: string) {
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: table
    };

    return new Promise((resolve, reject) => {
      docClient.scan(params, function(err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async readTable(table: string, expression: string, expressionValues: object) {
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: table,
      KeyConditionExpression: expression,
      ExpressionAttributeValues: expressionValues
    };

    return new Promise((resolve, reject) => {
      docClient.query(params, function(err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async writeTable(table: string, item: object) {
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: table,
      Item: item
    };

    return new Promise((resolve, reject) => {
      docClient.put(params, function(err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async deleteItemFromTable(table: string, deleteParams: object) {
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: table,
      Key: deleteParams
    };

    return new Promise((resolve, reject) => {
      docClient.delete(params, function(err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

function validateCredentials(credentials: any) {
  if (!credentials.accessKeyId) {
    throw new Error("Could not find `accessKeyId` in credentials");
  }

  if (!credentials.secretAccessKey) {
    throw new Error("Could not find `secretAccessKey` in credentials");
  }
}

export default DynamoDBWrapper;
