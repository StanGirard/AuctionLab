import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Addresse where addresse = :addresse AND identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {addresse: data.addresse, identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "addresse already used"});
    } else {
      const query = `INSERT INTO Addresse (identifier,titre, pays, ville, code_postal, addresse) VALUES(:identifier,:titre, :pays, :ville, :code_postal, :addresse);`;
      let result = await AuroraDB.transaction().query(query,{
        identifier: event.pathParameters.id, titre: data.titre, pays: data.pays, ville: data.ville, code_postal: data.code_postal, addresse: data.addresse})
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}