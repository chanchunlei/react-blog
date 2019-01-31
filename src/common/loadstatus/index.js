//加载
import React from 'react';
import { connect } from 'react-redux'; //使用redux
import { Spin, Divider } from 'antd';
import {
    Loadwapper
} from './style'
const LoadStatus = (props) => {
    return (
        <Loadwapper>
            <Spin />
            <Divider className='lineBottom'>到底了大兄弟~</Divider>
        </Loadwapper>
    )
}
const mapStateToProps = (props) => ({

});
const mapDisPatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps,mapDisPatchToProps)(LoadStatus);