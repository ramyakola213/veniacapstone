let intialState = {}

export const payment = (state = intialState, action) => {
    switch (action.type) {
        case "SAVE-PAYMENT-INFO":
            return {
                paymentDetails: action.payload
            }
        default:
            return state;
            break;
    }
}