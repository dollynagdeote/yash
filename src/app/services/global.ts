import { environment} from '../../environments/environment';

export class Global {
    public static HOST_ROOT_URL = environment.apiURL;

    public static ST_USER_LOGIN_URL = Global.HOST_ROOT_URL+"api/auth/login";
    public static ST_USER_REGISTRATION_URL = Global.HOST_ROOT_URL+"api/auth/register";

    public static ST_USER_LIST = Global.HOST_ROOT_URL+"api/user/list";
    public static ST_USER_UPDATE_URL = Global.HOST_ROOT_URL+"api/user/update";
    public static ST_USER_DELETE_URL = Global.HOST_ROOT_URL+"api/user/delete";

}