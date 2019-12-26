import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Particulier SET   titre = :titre, email = :email, telephone = :telephone, nom = :nom, prenom= :prenom, nationalite = :nationalite, numero_identite = :numero_identite where identifier = :identifier;`;
        let result = await AuroraDB.query(query, {
            identifier: event.pathParameters.id, titre: data.titre, email: data.email, telephone: data.telephone, nom: data.nom,
            prenom: data.prenom, nationalite: data.nationalite, numero_identite: data.numero_identite
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}