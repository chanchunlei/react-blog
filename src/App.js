import React, { Component } from 'react';
import { GlobalStyle } from './style.js';//公共css
import { GlobalIcon } from './statics/iconfont/iconfont';//公共css
import { BrowserRouter, Route } from 'react-router-dom';//使用路由
import { Provider } from 'react-redux';//
import store from './store';
import Header from './common/header';
import Home from './views/home';
import Classify from './views/classify'
import Footer from './common/footer';
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
              </div>
          </BrowserRouter>
          <Footer />
      </Provider>
    );
  }
}

export default App;
