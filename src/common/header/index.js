import React, { Fragment } from 'react';
import { Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
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
                    <CSSTransition
                        in={props.toggle}
                        timeout={200}
                        classNames='listNav'
                    >
                        <Headernavigation className={props.toggle ? 'listNav, seeIt' : 'listNav, dispIt'}>
                            <li>
                                <Link to='/'>
                                    <Icon type="home" theme="filled" /> 首页
                                </Link>
                            </li>
                            <li>
                                <Link to='/classify'>
                                    <Icon type="appstore" theme="filled" /> 分类
                                </Link>
                            </li>
                            <li><i className='iconfont icon-shijianzhou'/> 历程</li>
                            <li><i className='iconfont icon-guanyuwomen2'/> 关于</li>
                            <li>
                                <button className='signIn'><i className='iconfont icon-denglu'/> 登录</button>
                            </li>
                            <li>
                                <button className='signUp'><i className='iconfont icon-zhuce'/> 注册</button>
                            </li>
                        </Headernavigation>
                    </CSSTransition>
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