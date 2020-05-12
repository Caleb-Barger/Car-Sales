const initalState = {
    name: "I am the state"
}

export const ultimateReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SWAG":
            return state
        default:
            return state
    }
}