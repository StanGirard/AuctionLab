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
      const query = `INSERT INTO Clients (identifier,nom, prenom, email, pays, ville, code_postal, addresse, acheteur, vendeur, created_at) VALUES(:identifier, :nom, :prenom, :email, :pays, :ville, :code_postal, :addresse, :acheteur, :vendeur, now())`;
      let result = await AuroraDB.query(query,{
        identifier: event.pathParameters.id, nom: data.nom, prenom: data.prenom, email: data.email, pays: data.pays,
        ville: data.ville, code_postal: data.code_postal, addresse: data.addresse, acheteur: data.acheteur, vendeur: data.vendeur, created_at: "now()"});
        return success({status:true, result:result});
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}