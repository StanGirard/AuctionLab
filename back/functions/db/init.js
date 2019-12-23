import { success, failure } from '../../libs/response-lib';
import { AuroraDB } from '../../libs/aurora-lib';

const createUser = "CREATE TABLE IF NOT EXISTS MagaDB.User ( id INT PRIMARY KEY NOT NULL, nom VARCHAR(100), prenom VARCHAR(100), email VARCHAR(255), pays VARCHAR(255), ville VARCHAR(255), code_postal VARCHAR(5), addresse VARCHAR(255), acheteur BOOLEAN, vendeur BOOLEAN, created_at DATE);";

exports.handler = async (event, context) => {
    // Get the sqlStatement string value
    // TODO: Implement a more secure way (e.g. "escaping") the string to avoid SQL injection
    //var sqlStatement = event.sqlStatement;
    try {
        let result = await AuroraDB.query(createUser);
        return success(result);
    } catch (e) {
        console.log(e);
        //return failure({ status: false, error: e });
        failure({status: false, error: e});
    }
};