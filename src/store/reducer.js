//将所有reducer引过来
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as multibtnReducer } from '../common/multibtn/store';
const reducer = combineReducers({
    header: headerReducer,
    multibtn: multibtnReducer
})
export default reducer;