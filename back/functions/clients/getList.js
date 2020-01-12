import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context, callback) {
    try {
        const params = event.queryStringParameters;
        var query = `SELECT * from Clients`;
        if (params) {
            if (params.filter != null) {
                // Filter example: filter={vip:Normal, denomination":"Stanislas Girard", "vendeur": "false"}
                const filters = params.filter;
                console.log(filters);
                query += " WHERE " + filters + " IS true";
            }
            if (params.sort != null) {
                // sort example: sort=["identifier","DESC"]
                const sort = JSON.parse(params.sort);
                query += "ORDER BY " + sort[0] + " " + sort[1] + " ";
            }
            if (params.range != null) {
                //range example: range=[0, 1]
                const range = JSON.parse(params.range);
                query += " LIMIT " + range[0] + " , " + range[1];
            }
        }
        console.log(query);
        let result = await AuroraDB.query(query);
        return success({ status: true, result: result, lol: "Prout" });
    } catch (e) {
        return failure({ status: false, result: "", error: e, msg: event.queryStringParameters.filter });
    }
}