const initialState = "Animal";

const reducer =(
    state = initialState,
    action
)=>{
    switch(action.type){
    case "DOG":
        return action.payload;
    case "CAT":
        return action.payload;
    default:
        return state;    
    }    
}
export default reducer;