const initialState = {
    loading:false,
    users:[],
    error:''
}
const reducer=(state=initialState,
    action
    )=>{
        switch (action.type) {
            case "AXIOS_REQUESTED":
                return {
                    ...state,
                    loading : true,
                    users:[],
                    error:''
                }
            case "AXIOS_SUCCESS":
                return {
                    ...state,
                    loading:false,
                    users:action.payload,
                    error:''
                }
            case "AXIOS_FAILED":
                return {
                    ...state,
                    loading:false,
                    users:[],
                    error:action.payload
                }

            default:
                 return state;   
           
        
            
        }
    }

    export default reducer;