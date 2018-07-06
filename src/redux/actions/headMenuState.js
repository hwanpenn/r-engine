export const SET_RULE_CHIOCE = "SET_RULE_CHIOCE";
export const SET_PERMISSION_CHIOCE = "SET_PERMISSION_CHIOCE";

export function setRuleChioce() {
    return {type: SET_RULE_CHIOCE}
}

export function setPermissionChioce() {
    return {type: SET_PERMISSION_CHIOCE}
}

export function setChioce(){
    return {
        types: [SET_RULE_CHIOCE, SET_PERMISSION_CHIOCE],
    }
}