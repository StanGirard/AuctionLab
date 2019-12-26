import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Employe where email = :email AND identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {email: data.email, identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "Identifier already used"});
    } else {
      const query = `INSERT INTO Employe (identifier,titre, email, telephone, nom, prenom) VALUES(:identifier,:titre, :email,:telephone, :nom,:prenom)`;
      let result = await AuroraDB.transaction().query(query,{
        identifier: event.pathParameters.id, titre: data.titre, email: data.email, telephone: data.telephone, nom: data.nom, prenom: data.prenom})
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}