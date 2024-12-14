import { getData } from "./utils";

export const getUser = getData<User>(
    "http://83.222.24.157/api/GetRequestsUsers/GetUser"
);
