import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function CommentsApi(token, info) {
    const [comments, setComments] = useState([])
    const user = info.personal[0]
    useEffect(() => {
        if (token && user) {

        }
    }, [token, user])

    const getCommentsByUsername = async () => {
        await axios.get(`${LOCAL_LINK}/api/comments/?username=${user.username}`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }
    const getCommentsByProductId = async (productId) => {
        await axios.get(`${LOCAL_LINK}/api/comments/product/${productId}`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    const getCommentsById = async (id) => {
        await axios.get(`${LOCAL_LINK}/api/comments/${id}`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    const getCommentsByUserUsernameAndProductId = async (productId) => {
        await axios.get(`${LOCAL_LINK}/api/comments/get-by?username=${user.username}&productId=${productId}`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    return {
        comments: [comments, setComments],
        action: {
            getCommentsByUsername,
            getCommentsByProductId,
            getCommentsById,
            getCommentsByUserUsernameAndProductId
        }
    }

}

export default CommentsApi