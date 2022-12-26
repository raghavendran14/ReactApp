export const actions ={
    SAVE_USER_DETAILS:"SAVE_USER_DETAILS"
}

export const onStore = data =>{
    return {
        type:actions.SAVE_USER_DETAILS,
        data
    }
}

export const saveHomeDetails =()=>async dispatch=>{
    dispatch(onStore(true))
}