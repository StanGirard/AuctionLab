import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Documents where type = :type AND identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {type: data.type, identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "Type already used"});
    } else {
      const query = `INSERT INTO Documents (identifier,type, url, date_added,status, valid_until) VALUES(:identifier,:type, :url,now(), :status, :valid_until)`;
      let result = await AuroraDB.transaction().query(query,{
        identifier: event.pathParameters.id, type: data.type, url: data.url, status: data.status, valid_until: data.valid_until})
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}