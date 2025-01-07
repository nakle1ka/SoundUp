const enum routes {
    LOGIN = "/api/PostRequestsUsers/Login",
    REGISTER = "/api/PostRequestsUsers/CreateUser",
    VALIDATE_TOKEN = "/api/GetRequestsUsers/ValidateAccessToken",
    GET_NEW_TOKEN = "/api/PostRequestsUsers/GetNewRefreshAndJwtToken",
    GET_USER = "/api/GetRequestsUsers/GetUser",
    GET_MUSIC = "/api/GetRequestsMusic/GetMusicById",
    ADD_MUSIC_TO_FAVOURITES = "/api/PutRequestsMusic/PutMusicInFavourite",
}

export default routes;
