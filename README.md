# noodle-dynamo
A wrapper for integrating with DynamoDB in my node projects!

## Usage

Store your credentials somewhere the code can access them.

```
{
  "accessKeyId": "an access ID!",
  "secretAccessKey": "a secret access key!"
}

```


Create your wrapper, and then start making calls!

```
import DynamoDBWrapper from 'noodle-dynamo'
import dynamoCredentials from '.../credentials/dynamo.json'

const dynamoDb = new DynamoDBWrapper(dynamoCredentials, 'us-east-2')

const table = 'TickerData'
const expression = 'ticker = :ticker'
const expressionData = {
  ':ticker': ticker,
}

dynamoDb.readTable(table, expression, expressionData).then((data) => {
  ...
}).catch((error) => {
  ...
})
```
