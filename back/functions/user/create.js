import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
  try {
    const data = JSON.parse(event.body);
    const verifyQuery = "SELECT * from Clients where email = :email;";
    let resultVerify = await AuroraDB.query(verifyQuery, {email:data.email});
    if (resultVerify.records.length > 0){
      return success({status: true, result: [], error: "Email already used"});
    } else {
      const query = `INSERT INTO Clients (nom, prenom, email, pays, ville, code_postal, addresse, acheteur, vendeur, created_at) VALUES(:nom, :prenom, :email, :pays, :ville, :code_postal, :addresse, :acheteur, :vendeur, now())`;
      let result = await AuroraDB.query(query,{
        nom: data.nom, prenom: data.prenom, email: data.email, pays: data.pays,
        ville: data.ville, code_postal: data.code_postal, addresse: data.addresse, acheteur: data.acheteur, vendeur: data.vendeur, created_at: "now()"});
        return success(result);
    }
} catch (e) {
    console.log(e);
    return failure({status: false, error: e});
}
}