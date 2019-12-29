import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Documents SET identifier = :identifier, type = :type, url = :url, status = :status, valid_until = :valid_until where id = :id;`;
        let result = await AuroraDB.query(query, {
            id: event.pathParameters.id, identifier: data.identifier, type: data.type, url: data.url, status: data.status, valid_until: data.valid_until
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}