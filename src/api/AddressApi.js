import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function AddressApi(token, info) {
    const [address, setAddress] = useState([]);
    const user = info.personal[0]

    useEffect(() => {
        if (token && user) {
            const getAddressByUsername = async () => {
                try {
                    await axios.get(`${LOCAL_LINK}/api/address?username=${user.username}`, {
                            headers: {Authorization: `Bearer ${token}`}
                        }
                    ).then(res => {
                        setAddress(res.data)
                    })

                } catch (err) {
                    console.log(err)
                }
            }
            getAddressByUsername();
        }
    }, [token, user])

    const addAddress = async (item) => {
        const address = JSON.stringify({
            "fullname": item.fullname,
            "phone": item.phone,
            "address": item.address,
            "type": item.type,
            "status": item.status,
            "user": {
                "username": user.username
            }
        });

        await axios.post(`${LOCAL_LINK}/api/address/`, address, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }

    const updateAddress = async (id,item) => {
        const address = JSON.stringify({
            "fullname": item.fullname,
            "phone": item.phone,
            "address": item.address,
            "type": item.type,
            "status": item.status,
            "user": {
                "username": user.username
            }
        });

        await axios.put(`${LOCAL_LINK}/api/address/${id}`, address, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }




    return {
        address: [address, setAddress],
        action: {addAddress, updateAddress,}
    }
}

export default AddressApi