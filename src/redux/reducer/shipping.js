let intialState = {};

export const shipping = (state = intialState, action) => {
    switch (action.type) {
        case "SAVE-SHIPPING-INFO":
            return {
                shippingMethodDetails: action.payload
            }
        default:
            return state;
            break;
    }
}
