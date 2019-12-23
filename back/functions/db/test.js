import { success, failure } from '../../libs/response-lib';
import { AuroraDB } from '../../libs/aurora-lib';

exports.handler = async (event, context,callback) => {
    // Get the sqlStatement string value
    // TODO: Implement a more secure way (e.g. "escaping") the string to avoid SQL injection
    //var sqlStatement = event.sqlStatement;
    try {
        let result = await AuroraDB.query("select * from information_schema.tables;");
        return success(result);
    } catch (e) {
        console.log(e);
        //return failure({ status: false, error: e });
        failure({status: false, error: e});
    }
};