export const SET_PERMISSION_USER_TYPE = "SET_PERMISSION_USER_TYPE";
export const SET_PERMISSION_USER_USERNAME = "SET_PERMISSION_USER_USERNAME";
export const SET_PERMISSION_USER_PASSWORD = "SET_PERMISSION_USER_PASSWORD";
export const SET_PERMISSION_USER_PASSWORD_COMFIRM = "SET_PERMISSION_USER_PASSWORD_COMFIRM";
export const SET_PERMISSION_USER_CAPTION = "SET_PERMISSION_USER_CAPTION";
export const SET_OLD_PASSWORD_MODIFY = "SET_OLD_PASSWORD_MODIFY";
export const SET_NEW_PASSWORD_MODIFY = "SET_NEW_PASSWORD_MODIFY";
export const SET_NEW_PASSWORD_COMFIRM_MODIFY = "SET_NEW_PASSWORD_COMFIRM_MODIFY";
export const SET_CAPTION_MODIFY = "SET_CAPTION_MODIFY";

export function setPermissionUserType(temp) {
    return {type: SET_PERMISSION_USER_TYPE,
        temp:temp}
}
export function setPermissionUserUsername(temp) {
    return {type: SET_PERMISSION_USER_USERNAME,
        temp:temp}
}
export function setPermissionUserPassword(temp) {
    return {type: SET_PERMISSION_USER_PASSWORD,
        temp:temp}
}
export function setPermissionUserPasswordComfirm(temp) {
    return {type: SET_PERMISSION_USER_PASSWORD_COMFIRM,
        temp:temp}
}
export function setPermissionUserCaption(temp) {
    return {type: SET_PERMISSION_USER_CAPTION,
        temp:temp}
}

export function setOldPasswordModify(temp) {
    return {type: SET_OLD_PASSWORD_MODIFY,
        temp:temp}
}
export function setNewPasswordModify(temp) {
    return {type: SET_NEW_PASSWORD_MODIFY,
        temp:temp}
}
export function setNewPasswordComfirmModify(temp) {
    return {type: SET_NEW_PASSWORD_COMFIRM_MODIFY,
        temp:temp}
}
export function setCaptionModify(temp) {
    return {type: SET_CAPTION_MODIFY,
        temp:temp}
}
