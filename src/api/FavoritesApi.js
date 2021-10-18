import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {isLogin} from "../utils/Common";

function FavoritesApi(token, info) {
    const [favorites, setFavorites] = useState([])
    const user = info.personal[0]
    useEffect(() => {
        if (token && user) {
            const getFavoritesByUsername = async () => {
                try {
                    await axios.get(`${LOCAL_LINK}/api/favorite/?username=${user.username}`, {
                            headers: {Authorization: `Bearer ${token}`}
                        }
                    ).then(res => setFavorites(res.data))

                } catch (err) {
                    console.log(err)
                }
            }
            getFavoritesByUsername();
        }
    }, [token, user])


    const addFavorite = async (product) => {
        if (!user) return alert("Please login to continue buying")
        const favorite = JSON.stringify({
            "product": {
                "id": product.id,
                "sale_price": product.sale_price,
                "thumbnail": product.thumbnail,
                "name": product.name
            },
            "user": {
                "username": user.username
            }
        });
        const check = favorites.every(item => {
            return item.product.id !== product.id
        })
        if (check) {
            await axios.post(`${LOCAL_LINK}/api/favorite/`, favorite, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setFavorites([...favorites, res.data])
            }).catch(err => {
                console.log(err)
            })
        }

    }
    const deleteFavorite = async (id, username) => {
        await axios.delete(`${LOCAL_LINK}/api/favorite/${id}&${username}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => console.log(res.data))
        setFavorites(favorites.filter(c => c.id !== id))
    }
    return {
        favorites: [favorites, setFavorites],
        actionFavorite: {addFavorite, deleteFavorite}
    }


}

export default FavoritesApi