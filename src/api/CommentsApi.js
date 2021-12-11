import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function CommentsApi(token, info) {
    const [commentsBy, setCommentsBy] = useState([])
    const [comments, setComments] = useState([])
    const [ratingByProductId, setRatingByProductId] = useState([])
    const [ratings, setRatings] = useState([])
    const [ratingByUsernameAndProductId, setRatingByUsernameAndProductId] = useState([])
    const user = info.personal[0]

    useEffect(() => {
        getAllRating().then()
        getAllComments().then()
    }, [])
    //Comments
    const getAllComments = async () => {
        await axios.get(`${LOCAL_LINK}/api/comments/all`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    const getCommentsByUsername = async () => {
        await axios.get(`${LOCAL_LINK}/api/comments/?username=${user.username}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setCommentsBy(res.data))
            .catch(err => console.log(err))
    }
    const getCommentsByProductId = async (productId) => {
        await axios.get(`${LOCAL_LINK}/api/comments/product/${productId}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setCommentsBy(res.data))
            .catch(err => console.log(err))
    }

    const getCommentsById = async (id) => {
        await axios.get(`${LOCAL_LINK}/api/comments/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setCommentsBy(res.data))
            .catch(err => console.log(err))
    }

    const getCommentsByUserUsernameAndProductId = async (productId) => {
        await axios.get(`${LOCAL_LINK}/api/comments/get-by?username=${user.username}&productId=${productId}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setCommentsBy(res.data))
            .catch(err => console.log(err))
    }


    const addCommentByUser = async (comment) => {
        console.log(comment)
        await axios.post(`${LOCAL_LINK}/api/comments/`, comment, {
            headers: {Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'}
        })
            .then(res => getAllComments())
            .catch(err => console.log(err))
    }
    //Rating
    const getAllRating = async () => {
        await axios.get(`${LOCAL_LINK}/api/rating/all`)
            .then(res => setRatings(res.data))
            .catch(err => console.log(err))
    }

    const getRatingByProductId = async (productId) => {
        await axios.get(`${LOCAL_LINK}/api/rating/product/${productId}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setRatingByProductId(res.data))
            .catch(err => console.log(err))
    }

    const getRatingByUserUsernameAndProductId = async (username, productId) => {
        await axios.get(`${LOCAL_LINK}/api/rating/get-by?username=${username}&productId=${productId}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => setRatingByUsernameAndProductId(res.data))
            .catch(err => console.log(err))
    }

    const addRatingByUser = async (rating) => {
        console.log(rating)
        await axios.post(`${LOCAL_LINK}/api/rating/`, rating, {
            headers: {Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'}
        })
            .then(res => getAllRating())
            .catch(err => console.log(err))
    }



    return {
        commentsBy: [commentsBy, setCommentsBy],
        comments: [comments, setComments],
        ratingByProductId: [ratingByProductId, setRatingByProductId],
        ratings: [ratings, setRatings],
        action: {
            getCommentsByUsername,
            getCommentsByProductId,
            getCommentsById,
            getCommentsByUserUsernameAndProductId,
            getRatingByProductId,
            addCommentByUser,
            addRatingByUser
        }
    }

}

export default CommentsApi