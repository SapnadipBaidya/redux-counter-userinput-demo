let initialState = "HOLA HUMAN";

const reducer=(
    state=initialState,
    action)=>{
        switch(action.type){
            case "ISCAPS":
                return action.payload +" is in CAPITAL" ;
            case "NOTCAPS":
                return action.payload +" is in small";
            default:
                return state;        
        }
    }

    export default reducer;