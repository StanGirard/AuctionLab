import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Employe SET identifier = :identifier, titre = :titre, email = :email, telephone = :telephone, nom= :nom, prenom= :prenom where id = :id;`;
        let result = await AuroraDB.query(query, {
            id: event.pathParameters.id, identifier: data.identifier, titre: data.titre, email: data.email,
            telephone: data.telephone, nom: data.nom, prenom: data.prenom
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}