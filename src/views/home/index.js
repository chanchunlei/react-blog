import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeList,
    ListWrapper,
    ListImg
} from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeList>
                    <ListWrapper>
                        <h2> VUE+axios上传文件，下载文件中的一个坑。</h2>
                        <div className='tag'>
                            <span><span>发表于：</span><time>2018-12-17</time></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>分类于：</span><span>VUE</span></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>阅读数：</span><span>66</span></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>喜欢数：</span><span>30</span></span>
                        </div>
                        <div className='description'>
                            问题描述：最近一个项目中使用axios进行上传和下载，但是上传和下载是需要定义responseType和headers的，这样问题就出来了当你没有权限时候这个接口是抛出一个json数据的，同样上传格式错误也是一个json数据的；由于已经定义了responseType所以接到的数据是已经被转换的数据，它同样会进行下载这时候就需要我们判断返回数据时候的headers是否为文件以外的定义，然后将blob数据转化为json数据即可。
                        </div>
                        <div className='readAll'>
                            阅读全文
                        </div>
                    </ListWrapper>
                    <ListImg>
                        <img src={require('../../statics/vue.jpg')} alt=""/>
                    </ListImg>
                </HomeList>
                <HomeList>
                    <ListWrapper>
                        <h2> VUE+axios上传文件，下载文件中的一个坑。</h2>
                        <div className='tag'>
                            <span><span>发表于：</span><time>2018-12-17</time></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>分类于：</span><span>VUE</span></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>阅读数：</span><span>66</span></span>
                            <span className="post-meta-divider">|</span>
                            <span><span>喜欢数：</span><span>30</span></span>
                        </div>
                        <div className='description'>
                            问题描述：最近一个项目中使用axios进行上传和下载，但是上传和下载是需要定义responseType和headers的，这样问题就出来了当你没有权限时候这个接口是抛出一个json数据的，同样上传格式错误也是一个json数据的；由于已经定义了responseType所以接到的数据是已经被转换的数据，它同样会进行下载这时候就需要我们判断返回数据时候的headers是否为文件以外的定义，然后将blob数据转化为json数据即可。
                        </div>
                        <div className='readAll'>
                            阅读全文
                        </div>
                    </ListWrapper>
                    <ListImg>
                        <img src={require('../../statics/vue.jpg')} alt=""/>
                    </ListImg>
                </HomeList>
            </HomeWrapper>
        )
    }
}
export default Home;