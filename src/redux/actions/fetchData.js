import axios from 'axios'
/*
如果没有安装webpack，就使用下面这种写法
*/

export const getData = (url, param) => {
    return (
        axios.get(`${url}`)
    )
}

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}