import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import {
    Sidebarwapper
} from './style';
class Sidebar extends Component {
    render() {
        return (
            <Sidebarwapper className={this.props.classtoggle ? 'show' : 'hide'}>
                <div className='title'>
                    <span>概览</span>
                </div>
                <div className='msgBox'>
                    <div><img src={require('../../statics/imgs/fourstartball.jpg')} alt=""/></div>
                    <p>chenchunlei</p>
                    <div>
                        <a href="https://github.com/chanchunlei">· <Icon type="github" theme="filled" />Github</a>
                        <a href="https://blog.csdn.net/mo_jiu">· <Icon type="folder-open" theme="filled" />CSDN</a>
                    </div>
                </div>
            </Sidebarwapper>
        )
    }
}
const mapStateToProps = state => ({
    classtoggle: state.multibtn.get('classtoggle')
});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);