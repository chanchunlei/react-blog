import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon,BackTop } from 'antd';
import {
    Btnwapper
} from './style';
class Multibtn extends Component {
    render() {
        return (
            <Btnwapper>
                <div>
                    <button onMouseOver={this.props.handlemouseover}><Icon type="menu-fold" /></button>
                </div>
                <div>
                    <BackTop className='Up'>
                        <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                </div>
            </Btnwapper>
        )
    }
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    handlemouseover() {},
    handlemouseleabe() {},
    handleclicktoggle() {}
})
export default connect(mapStateToProps,mapDispatchToProps)(Multibtn);