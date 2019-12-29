import { success, failure } from "../../libs/response-lib";
import { AuroraDB } from '../../libs/aurora-lib';

export async function main(event, context) {
    try {
        const data = JSON.parse(event.body);
        const query = `UPDATE Entreprise SET  denomination= :denomination, numero_rcs = :numero_rcs, numero_tva = :numero_tva, telephone = :telephone, email = :email where identifier = :identifier;`;
        let result = await AuroraDB.query(query, {
            identifier: event.pathParameters.id, denomination: data.denomination, numero_rcs: data.numero_rcs, numero_tva: data.numero_tva,
            telephone: data.telephone, email: data.email
        });
        return success({ status: true, result: result });
    } catch (e) {
        console.log(e);
        return failure({ status: false, error: e });
    }
}