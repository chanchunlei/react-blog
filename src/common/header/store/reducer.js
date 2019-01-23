import { actionTypes } from '../store';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    toggle: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.TOUCH_MENU:
            if(state.get('toggle')){
                return state.set('toggle',false);
            }else {
                return state.set('toggle',true);
            }
        default:
            return state;
    }
}