import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function DiscountsApi(token) {
    const [discounts, setDiscounts] = useState([]);
    const [code, setCode] = useState('');


    const getDiscountByCode = async () => {
        await axios.get(`${LOCAL_LINK}/api/discount/${code}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setDiscounts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return {
        code: [code, setCode],
        discounts: [discounts, setDiscounts],
        action: {getDiscountByCode}
    }


}

export default DiscountsApi