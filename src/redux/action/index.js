export const addCart = (product) => {
        return {
                type: "ADDITEM",
                payload: product
        }
}
//Delete from cart
export const delCart = (product) => {
        return {
                type: "DELITEM",
                payload: product
        }
}

export const saveContactInfo = (info) => {
        return {
                type: 'SAVE-CONTACT',
                payload: info
        }
}

export const saveShippingInfo = (info) => {
        return {
                type: 'SAVE-SHIPPING-INFO',
                payload: info
        }
}

export const paymentCardInfo = (info) => {
        return {
                type: 'SAVE-PAYMENT-INFO',
                payload: info
        }
}