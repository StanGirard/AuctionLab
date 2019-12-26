import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const query = `SELECT * from Clients where identifier = :identifier`;
        let result = await AuroraDB.query(query, {
            identifier: event.pathParameters.id
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}