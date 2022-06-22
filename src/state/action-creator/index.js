export const downgrade = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DOWNGRADE",
            payload: amount
        });
    }
}


export const upgrade = (amount) => {
    console.log(amount)
    return (dispatch) => {
        dispatch({
            type: "UPGRADE",
            payload: amount
        });
    }
}

export const isCaps =(word)=>{
console.log(word);
return  (dispatch)=>{
    dispatch({
         type:"ISCAPS",
         payload:word
    });
 }
}

export const notCaps =(word)=>{
    console.log(word);
    return  (dispatch)=>{
        dispatch({
             type:"NOTCAPS",
             payload:word
        });
     }
    }