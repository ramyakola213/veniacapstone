let intialState = {};

export const contactInfo = (state = intialState, action) => {
    switch (action.type) {
        case "SAVE-CONTACT":
            return {
                contactDetails: action.payload
            }
        default:
            return state;
            break;
    }
}