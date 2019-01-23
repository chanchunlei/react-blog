//将所有reducer引过来
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
const reducer = combineReducers({
    header: headerReducer
})
export default reducer;