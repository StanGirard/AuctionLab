import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Clients where identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "Identifier already used"});
    } else {
      const query = `INSERT INTO Clients (identifier,denomination, entreprise, acheteur, vendeur,commentaire,  vip, created_at) VALUES(:identifier,:denomination, :entreprise,:acheteur, :vendeur,:commentaire,:vip,  now())`;
      let result = await AuroraDB.transaction().query(query,{
        identifier: event.pathParameters.id, denomination: data.denomination, entreprise: data.entreprise, acheteur: data.acheteur, vendeur: data.vendeur, commentaire: data.commentaire, vip: data.vip, created_at: "now()"})
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}