import * as actionTypes from './actions';

const initialState = {
        counter: 0,
        results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT :
            return {...state,
                counter: state.counter +1
            }
        case actionTypes.DECREMENT :
            return {...state,
                counter: state.counter - 1}
        
        case actionTypes.ADD_VALUE :
            return {...state,
                counter: state.counter + action.payload
            }
        case actionTypes.SUBTRACT_VALUE:
            return {...state,
                counter: state.counter - action.payload
        }

        case actionTypes.STORE_RESULT :
            return {
                ...state,
                results: state.results.concat({id:new Date(), value:state.counter})
            }
        
        case actionTypes.DELETE_RESULT :
                const newArray = state.results.filter(result => result.id !== action.resultElId);
                return {
            ...state,
                    results: newArray              

                }

        default:
            return state

    }


}



export default reducer;