import { actionTypes } from '../store';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    show: false,
    classtoggle: false
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.MOUSE_ENTER:
            if(state.get('classtoggle')) {
                return state.set('show', false);
            }else {
                return state.set('show', true);
            }
        case actionTypes.MOUSE_LEAVE:
            return state.set('show', false);
        case actionTypes.CLICK_TOGGLE:
            if(state.get('classtoggle')){
                return state.set('classtoggle', false);
            }else {
                return state.merge({
                    'classtoggle': true,
                    'show': false
                });
            }
        default:
            return state;
    }
}