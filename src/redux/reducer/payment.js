let intialState = {}

export const payment = (state = intialState, action) => {
    // debugger
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