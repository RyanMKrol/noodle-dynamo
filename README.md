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

### Reading
```
import DynamoDBWrapper from 'noodle-dynamo'
import dynamoCredentials from '.../credentials/dynamo.json'

const dynamoDb = new DynamoDBWrapper(dynamoCredentials, 'us-east-2')

const table = 'DataTable'
const expression = 'itemId = :id'
const expressionData = {
  ':id': actual_id,
}

dynamoDb.readTable(table, expression, expressionData).then((data) => {
  ...
}).catch((error) => {
  ...
})
```

### Writing
```
import DynamoDBWrapper from 'noodle-dynamo'
import dynamoCredentials from '.../credentials/dynamo.json'

const dynamoDb = new DynamoDBWrapper(dynamoCredentials, 'us-east-2')

const table = 'DataTable'
const insertItem = {
  'id': actual_id,
  'dataKey': dataValue,
}

dynamoDb.writeTable(table, insertItem).then((data) => {
  ...
}).catch((error) => {
  ...
})
```

### Deleting

```
import DynamoDBWrapper from 'noodle-dynamo'
import dynamoCredentials from '.../credentials/dynamo.json'

const dynamoDb = new DynamoDBWrapper(dynamoCredentials, 'us-east-2')

const table = 'DataTable'
const deleteParams = {
  'id': actual_id,
}

dynamoDb.deleteItemFromTable(table, insertItem).then((data) => {
  ...
}).catch((error) => {
  ...
})
```
