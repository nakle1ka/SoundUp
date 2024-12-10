const enum routes {
    LOGIN = "/api/PostRequestsUsers/Login",
    REGISTER = "/api/PostRequestsUsers/CreateUser",
    VALIDATE_TOKEN = "/api/GetRequestsUsers/ValidateAccessToken",
    GET_NEW_TOKEN = "/api/PostRequestsUsers/GetNewRefreshAndJwtToken",
    GET_USER = "/api/GetRequestsUsers/GetUser",
}

export default routes;
