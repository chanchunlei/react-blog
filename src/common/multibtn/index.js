import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon,BackTop } from 'antd';
import { actionCreators } from './store'
import {
    Btnwapper
} from './style';
class Multibtn extends Component {
    render() {
        return (
            <Btnwapper>
                <div>
                    <button onMouseEnter={this.props.handlemouseenter} onMouseLeave={this.props.handlemouseleave} onClick={this.props.handleclicktoggle}>
                        {
                            this.props.classtoggle ? <Icon type="close" /> : <Icon type={this.props.show ? "arrow-left" : "menu-fold"} />
                        }
                    </button>
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
    show: state.multibtn.get('show'),
    classtoggle: state.multibtn.get('classtoggle')
})
const mapDispatchToProps = (dispatch) => ({
    handlemouseenter() {
        dispatch(actionCreators.mouseenter());
    },
    handlemouseleave() {
        dispatch(actionCreators.mouseleave());
    },
    handleclicktoggle() {
        dispatch(actionCreators.clicktoggle());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Multibtn);