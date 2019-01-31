import React, { Component } from 'react';
import marked from 'marked';//解析Markdown文件
import hljs from 'highlight.js'; //Markdown文件高亮
import { Articlewrapper } from './style';
class Detail extends Component {
    render() {
        return (
            <Articlewrapper>
                文章
            </Articlewrapper>
        )
    }
}
export default Detail;