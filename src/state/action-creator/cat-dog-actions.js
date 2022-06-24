export const cat = (AnimalType)=>{
    return (dispatch)=>{
        dispatch({
        type:"CAT",
        payload:AnimalType
        });
    }
}
export const dog = (AnimalType)=>{
    return (dispatch)=>{
        dispatch({
        type:"DOG",
        payload:AnimalType
        });
    }
}