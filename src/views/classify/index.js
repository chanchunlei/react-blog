import React, {Component} from 'react';
import {
    ClassifyWrapper
} from './style';
class Classify extends Component {
    render() {
        return (
            <ClassifyWrapper>
                <div>
                    <img src={require('../../statics/imgs/javascript.png')} alt=""/>
                    <p>JAVASCRIPT（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/html.png')} alt=""/>
                    <p>HTML（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/css.png')} alt=""/>
                    <p>CSS（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/vue.jpg')} alt=""/>
                    <p>VUE（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/react.png')} alt=""/>
                    <p>REACT（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/node.png')} alt=""/>
                    <p>NODE（20）</p>
                </div>
                <div>
                    <img src={require('../../statics/imgs/wechart.png')} alt=""/>
                    <p>微信小程序（20）</p>
                </div>
            </ClassifyWrapper>
        )
    }
}
export default Classify;