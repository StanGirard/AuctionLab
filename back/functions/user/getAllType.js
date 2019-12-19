import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function main(event, context) {
    const params = {
      TableName: process.env.userTable,
      // 'Key' defines the partition key and sort key of the item to be retrieved
      KeyConditionExpression: "typeUser = :typeId",
      ExpressionAttributeValues: {
        ":typeId": event.pathParameters.type
      }
    };

    try {
      const result = await dynamoDbLib.call("query", params);
      if (result.Items) {
        // Return the retrieved item
        return success(result.Items);
      } else {
        return failure({ status: false, error: "Item not found." });
      }
    } catch (e) {
      return failure({ status: false , error: e});
    }
  }