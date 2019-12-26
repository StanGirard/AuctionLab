import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Particulier where identifier = :identifier;";
    let resultVerify = await AuroraDB.query(verifyQuery, {identifier: event.pathParameters.id});
    if (resultVerify.records.length > 0){
      return failure({status: false, result: [], error: "Identifier already used"});
    } else {
      const query = `INSERT INTO Particulier (identifier,titre, email, telephone, nom, prenom, nationalite, numero_identite) VALUES (:identifier,:titre, :email,:telephone, :nom,:prenom, :nationalite, :numero_identite)`;
      let result = await AuroraDB.query(query,{
        identifier: event.pathParameters.id, titre: data.titre, email: data.email, telephone: data.telephone, nom: data.nom, prenom: data.prenom, nationalite: data.nationalite, numero_identite: data.numero_identite  })
        .rollback((e,status) => { failure({status: false, result: status, error: e}); })
        .commit();
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}