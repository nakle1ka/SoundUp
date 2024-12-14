const enum routes {
    LOGIN = "/api/PostRequestsUsers/Login",
    REGISTER = "/api/PostRequestsUsers/CreateUser",
    VALIDATE_TOKEN = '/api/GetRequestsUsers/ValidateAccessToken',
    VALIDATE_REFRESH_TOKEN = '/api/PostRequestsUsers/GetNewRefreshAndJwtToken'
}

export default routes