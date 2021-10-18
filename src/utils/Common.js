

// export const getToken= () => {
//     return localStorage.getItem("token")
// }
// export const setToken = (token) => {
//     localStorage.setItem("token", token);
// }
// export const setUserInfo = (user) => {
//     sessionStorage.setItem("user", JSON.stringify(user))
// }

export const setLogin = (isLogin) => {
    localStorage.setItem("isLogin", isLogin);
}
export const isLogin= () => {
    return localStorage.getItem("isLogin")
}

export const setToken = (token) => {
    localStorage.setItem("tokens", JSON.stringify(token))
}
// export const setUser = (token) => {
//     localStorage.setItem("tokens", JSON.stringify(token))
// }
export const getToken = () => {
    const tokens = localStorage.getItem("tokens")
    if (tokens) {
        return JSON.parse(tokens)
    } else  return  "";
}
export const removeToken = () => {
    localStorage.removeItem("tokens")
}


export const reload= (url) => {
    window.location.href=url
}


