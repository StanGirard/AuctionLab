import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Addresse SET identifier = :identifier, titre = :titre, pays= :pays, ville= :ville, code_postal= :code_postal, addresse = :addresse where id = :id;`;
        let result = await AuroraDB.query(query, {
            id: event.pathParameters.id, identifier: data.identifier, denomination: data.denomination, entreprise: data.entreprise,
            acheteur: data.acheteur, vendeur: data.vendeur, vip: data.vip
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}