import React from 'react'

const CheckOutButton = (payment) => {
    console.log(payment)
    if (payment.payment.selected === "paypal")
    return <button>Add a trip</button>
    else return null
}

export default CheckOutButton