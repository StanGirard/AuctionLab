export function success(body)
{
    return buildResponse(200, body);
}
export function failure(body)
{
    return buildResponse(500, body);
}
function buildResponse(statusCode, body) { return {
    statusCode: statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
    },
body: JSON.stringify(body) };
}