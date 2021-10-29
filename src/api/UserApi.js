import {useContext, useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {isLogin, removeToken, setToken} from "../utils/Common";
import {GlobalState} from "../GlobalState";

function UserApi(token) {
    const [user, setUser] = useState([]);
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get(`${LOCAL_LINK}/api/user/infor`, {
                        headers: {Authorization: `Bearer ${token}`}
                    })
                    await res.data.roles.forEach((role) => {
                        if (role.id === "ADMIN_ROLE") {
                            setIsAdmin(true)
                        }
                    })
                    console.log(res.data)
                    setUser(res.data)
                    setIsLogged(true)
                } catch (err) {
                    console.log(err)
                    localStorage.clear()
                    window.location.href = "/login"
                }
            }
            getUser();
        }
    }, [token])


    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        personal: [user, setUser]
    }
}

export default UserApi