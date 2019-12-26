import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const params = event.queryStringParameters;
        var query = `SELECT * from Employe`;
        if (params) {
            if (params.filter != null) {
                // Filter example: filter={"vip":"Normal", "denomination":"Stanislas Girard", "vendeur": "false"}
                query += " WHERE ";
                const filters = JSON.parse(params.filter);
                var number = 0;
                for (const filt in filters) {
                    if (!Array.isArray(filters[filt])) {
                        if (number != 0) { query += " AND "; }
                        number++;
                        if (filters[filt] == "true" || filters[filt] == "false") {
                            query += filt + " IS " + filters[filt] + " ";
                        } else {
                            query += filt + " LIKE '%" + filters[filt] + "%' ";
                        }
                    } else {
                        if (number != 0) { query += " AND "; }
                        number++;
                        query += filt + " IN " + "(";
                        const arr = filters[filt];
                        var number2 = 0;
                        for (var val in arr){
                            var el = val;
                            if (number2 != 0) {
                                query += ",";
                            }
                            if (typeof arr[val] === 'string') {
                                 el = "'" + arr[val] + "'";
                            }
                            query += el;
                            number2++;
                        }
                        query += ") ";
                    }
                }
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
        let result = await AuroraDB.query(query);
        return success({ status: true, result: result });
    } catch (e) {
        return failure({ status: false, error: e });
    }
}