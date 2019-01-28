import React, { Component } from 'react';
import {
    Mywrapper
} from './style';
class About extends Component {
    render() {
        return (
            <Mywrapper>
                <h1 className='title'>关于博主</h1>
                <div className='imgs'>
                    <img src={require('../../statics/imgs/fourstartball.jpg')} alt=""/>
                </div>
                <div className='introduction'>
                    <h2>简介：</h2>
                    <p>2016年3月初入前端，作为前端打杂人员一直想弄一个自己的网站，刚学vue的时候就写了一个比较垃圾的版本，自己都看不上那种，于是弃之。这次趁着自学完react刚好练练手重构一个响应式的个人博客网站。</p>
                    <p>2017年12月进入百脑汇（中国）投资有限公司工作今。期间独立完成百乐卡会员管理系统并成功上线等等。</p>
                    <p>此网站作为平时工作的记录，学习笔记分享，经验总结等。我会尽力把这博客做到好看，不定期更新。</p>
                </div>
                <div>
                    <h2>联系：</h2>
                    <p>Github：<a href="https://github.com/chanchunlei">chanchunlei</a></p>
                    <p>CSDN：<a href="https://blog.csdn.net/mo_jiu">mo_jiu</a></p>
                    <p>知乎：知乎就不放了，我从不写东西！</p>
                    <p>Email：mojiu.chan@gmail.com / 13569910687@163.com</p>
                </div>
                <div>
                    <h2>微信公众号：</h2>
                    <p>emmm...暂时没有</p>
                    <h2>微信小程序：</h2>
                    <p>emmm...暂时也没有</p>
                </div>
            </Mywrapper>
        )
    }
}
export default About;