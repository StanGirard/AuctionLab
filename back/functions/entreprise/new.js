import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Entreprise where identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "Identifier already used"});
    } else {
      const query = `INSERT INTO Entreprise (identifier,numero_rcs, numero_tva, telephone, email) VALUES (:identifier,:numero_rcs, :numero_tva,:telephone, :email)`;
      let result = await AuroraDB.transaction().query(query,{
        identifier: event.pathParameters.id, numero_rcs: data.numero_rcs, numero_tva: data.numero_tva, telephone: data.telephone, email: data.email})
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}