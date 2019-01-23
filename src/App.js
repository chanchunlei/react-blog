import React, { Component } from 'react';
import { GlobalStyle } from './style.js';//公共css
import { BrowserRouter, Route } from 'react-router-dom';//使用路由
import { Provider } from 'react-redux';//
import store from './store';
import Header from './common/header';
import Home from './views/home';
import Footer from './common/footer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <GlobalStyle/>
          <BrowserRouter>
              <div>
                  <Header/>
                  <Route path='/' exact component={Home}></Route>
              </div>
          </BrowserRouter>
          <Footer />
      </Provider>
    );
  }
}

export default App;
