import React, { Fragment } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    HeaderConent,
    HeaderImg,
    HeaderNav,
    Headernavigation,
    Modelblock
} from './style';
const widthClient =  window.innerWidth;
console.log(widthClient);
const Header = (props) => {
    return (
        <Fragment>
            <HeaderWrapper>
                <HeaderConent>
                    <HeaderImg>
                        <Link to='/'>
                            <img src={require('../../statics/fourstartball.jpg')} alt=""/>
                        </Link>
                    </HeaderImg>
                    <HeaderNav>
                        <div className='NavBtn'>
                            <button onClick={props.handleToggle}>
                                <Icon type="bars" style={{ fontSize: '24px', color: '#999'}}/>
                            </button>
                        </div>
                    </HeaderNav>
                    <Headernavigation className={props.toggle ? 'seeIt' : 'dispIt'}>
                        <li><Icon type="home" theme="filled" /> 首页</li>
                        <li><Icon type="appstore" theme="filled" /> 分类</li>
                        <li><Icon type="hourglass" theme="filled" /> 历程</li>
                        <li><Icon type="idcard" theme="filled" /> 关于</li>
                        <li>
                            <button className='signIn'>登录</button>
                        </li>
                        <li>
                            <button className='signUp'>注册</button>
                        </li>
                    </Headernavigation>
                </HeaderConent>
            </HeaderWrapper>
            <Modelblock onClick={props.handleToggle} className={props.toggle ? 'show' : 'disappear'}/>
        </Fragment>
    )
}
const mapStateToProps = state => ({
       toggle: state.header.get('toggle')
})
const mapDispatchToProps = dispatch => ({
    handleToggle(){
        dispatch(actionCreators.doToggle());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);