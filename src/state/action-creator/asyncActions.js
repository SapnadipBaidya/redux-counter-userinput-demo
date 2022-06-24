
export const axiosRequested=()=>{
    return (dispatch)=>{
        dispatch({
        type:"AXIOS_REQUESTED"
    });
    }
}
export const axiosSuccess=(users)=>{
    return (dispatch)=>{
      dispatch ({ 
        type:"AXIOS_SUCCESS",
        payload: users
    });
    }
}

export const axiosError=(error)=>{
    return (dispatch)=>{
      dispatch({
        type:"AXIOS_FAILED",
        payload: error
    });
    }
}