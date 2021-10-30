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


    return {
        addresses: [address, setAddress]
    }
}

export default AddressApi