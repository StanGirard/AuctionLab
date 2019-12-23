import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Clients SET identifier = :identifier , nom = :nom , prenom = :prenom, email = :email, pays = :pays, ville = :ville, code_postal= :code_postal, addresse = :addresse, acheteur = :acheteur, vendeur= :vendeur where identifier = :identifier;`;
        let result = await AuroraDB.query(query, {
            identifier: event.pathParameters.id, nom: data.nom, prenom: data.prenom, email: data.email, pays: data.pays,
            ville: data.ville, code_postal: data.code_postal, addresse: data.addresse, acheteur: data.acheteur, vendeur: data.vendeur
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}