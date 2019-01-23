//将所有saga引过来
// import { takeEvery, put } from 'redux-saga/effects';
// import { GET_INIT_LIST } from './actionType';
// import { initListAction } from './actionCreators';
// import axios from "axios/index";
// //generator函数
// function* getInitList() {
//     try{//监听状态
//         const res = yield axios.get('/data');
//         console.log(res);
//         const action = initListAction(res.data.list);
//         yield put(action);
//     }catch (e) {
//         console.log(e)
//     }
//
//     // axios.get('/data')
//     // .then((res) => {
//     //     const action = initListAction(res.data.list);
//     //     console.log(action)
//     //     //store.dispatch(action);
//     // })
//     // .catch((run) => {
//     //     console.log(run)
//     // })
// }
function* mySaga() {
    //yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;