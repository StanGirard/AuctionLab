import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Clients SET  denomination = :denomination , entreprise = :entreprise, acheteur = :acheteur, vendeur = :vendeur, commentaire = :commentaire, vip = :vip where identifier = :identifier;`;
        let result = await AuroraDB.query(query, {
            identifier: event.pathParameters.id, denomination: data.denomination, entreprise: data.entreprise,
            acheteur: data.acheteur, vendeur: data.vendeur, commentaire: data.commentaire, vip: data.vip
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}