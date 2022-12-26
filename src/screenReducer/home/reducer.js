import {actions} from './actions';


const initState={
    homeState :false
}

export default function homeReducer(state = initState,action){
    try {
        switch (action.type) {
            case actions.SAVE_USER_DETAILS:
                return {
                    ...state,
                    homeState:!state.homeState
                };
            default:
                return state;
        }
    
        return state;
    } catch (error) {
        console.log("Error ++", error)
    }
    
}