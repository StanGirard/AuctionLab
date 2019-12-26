import { success, failure } from '../../libs/response-lib';
import { AuroraDB } from '../../libs/aurora-lib';

const createUser = "CREATE TABLE IF NOT EXISTS MagaDB.Clients ( id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,identifier VARCHAR(10) NOT NULL, nom VARCHAR(100), prenom VARCHAR(100), email VARCHAR(255), pays VARCHAR(255), ville VARCHAR(255), code_postal VARCHAR(5), addresse VARCHAR(255), acheteur BOOLEAN, vendeur BOOLEAN, created_at DATE);";
//const createUserShort = "CREATE TABLE IF NOT EXISTS MagaDB.ClientsTest ( id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,identifier VARCHAR(10) NOT NULL, denomination VARCHAR(255), email VARCHAR(255), pays VARCHAR(255), ville VARCHAR(255), code_postal VARCHAR(5), addresse VARCHAR(255), entreprise BOOLEAN, acheteur BOOLEAN, vendeur BOOLEAN); "
exports.handler = async (event, context) => {
    try {
        let result = await AuroraDB.query(createUser);
        return success({status: true, result: result});
    } catch (e) {
        console.log(e);
        //return failure({ status: false, error: e });
        failure({status: false, error: e});
    }
};