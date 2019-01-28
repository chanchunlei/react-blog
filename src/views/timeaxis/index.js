import React, { Component } from 'react';
import { Timeline } from 'antd';
import {
    TimeWrapper,

} from './style';
class Timeaxis extends Component {
    render() {
        return (
            <TimeWrapper>
                <Timeline mode="alternate" style={{ fontSize: '16px' }}>
                    <Timeline.Item>
                        <h2>第一个个人网站</h2>
                        <p>利用业余的时间写的一个个人网站，同时也锻炼一下学的react</p>
                        <p>2019-01-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <h2>百脑汇</h2>
                        <p>初来上海并进入百脑汇（中国）投资有限公司，担任前端技术课高级专员</p>
                        <p>2017-12</p>
                    </Timeline.Item>
                    <Timeline.Item>Sed ut perspiciatis unde omnis iste natus error sit</Timeline.Item>
                    <Timeline.Item >Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
            </TimeWrapper>

        )
    }
}
export default Timeaxis;