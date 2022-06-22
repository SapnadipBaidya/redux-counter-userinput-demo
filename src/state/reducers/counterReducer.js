const initialState = 0;

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "UPGRADE":
            return state + action.payload;
        case "DOWNGRADE":
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;