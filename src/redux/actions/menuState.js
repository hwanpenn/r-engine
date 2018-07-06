export const SET_MENU_FIRST = "SET_MENU_FIRST";
export const SET_MENU_SECOND = "SET_MENU_SECOND";
export const SET_MENU_THIRD = "SET_MENU_THIRD";
export const SET_CLOSE_MODEL = "SET_CLOSE_MODEL";
export const SET_SHOW_MODEL = "SET_SHOW_MODEL";
export const SET_OPEN_KEYS = "SET_OPEN_KEYS";
export const SET_REFLASH = "SET_REFLASH";


export function setShowModel() {
    return {
        type: SET_CLOSE_MODEL,
    }
}
export function setCloseModel() {
    return {
        type: SET_SHOW_MODEL,
    }
}
export function setMenuFirst(firstTemp) {
    return {
        type: SET_MENU_FIRST,
        firstTemp:firstTemp
    }
}
export function setMenuSecond(secondTemp) {
    return {
        type: SET_MENU_SECOND,
        secondTemp:secondTemp,
    }
}
export function setMenuThird(thirdTemp) {
    return {
        type: SET_MENU_THIRD,
        thirdTemp:thirdTemp
    }
}
export function setOpenKeys(temp) {
    return {
        type: SET_OPEN_KEYS,
        temp:temp
    }
}
export function setReflash(temp) {
    return {
        type: SET_REFLASH,
        temp:temp
    }
}

