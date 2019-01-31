import React, { Component } from 'react';
import { GlobalStyle } from './style.js';//公共css
import { GlobalIcon } from './statics/iconfont/iconfont';//公共css
import { BrowserRouter, Route } from 'react-router-dom';//使用路由
import { Provider } from 'react-redux';//
import store from './store';
import Header from './common/header';//头部
import Home from './views/home';//首页
import Classify from './views/classify'; //分类
import Timeaxis from './views/timeaxis'; //历程
import About from './views/about'; //历程
import Detail from './views/detail'; //历程
import Sidebar from './common/sidebar';//侧边栏
import Multibtn from './common/multibtn';//多功能按钮
import Footer from './common/footer';//底部
class App extends Component {
  render() {
      return (
      <Provider store={store}>
          <GlobalStyle/>
          <GlobalIcon/>
          <BrowserRouter>
              <div>
                  <Header/>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/classify' exact component={Classify}></Route>
                  <Route path='/timeaxis' exact component={Timeaxis}></Route>
                  <Route path='/about' exact component={About}></Route>
                  <Route path='/detail' exact component={Detail}></Route>
              </div>
          </BrowserRouter>
          <Sidebar />
          <Multibtn />
          <Footer />
      </Provider>
    );
  }
}

export default App;
