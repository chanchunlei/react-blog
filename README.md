## blog

学完了react一直不知道写一个什么项目来练手巩固，找了一些案例之后决定将之前使用VUE写的博客网站重构一下；初步打算使用node写后台和接口。

#### 关于博客：

1. yarn add react-transition-group    安装第三方模块实现动画效果；
2. yarn add antd  安装阿里的一个成熟的组件库；
3. yarn add styled-components   安装CSS模块，组件声明式进行CSS的编写；
4. yarn add redux    &  yarn add react-redux  安装redux模块；
5. yarn add redux-saga   安装saga使用中间件；
6. yarn add axios   安装axios请求数据；
7. yarn add react-router-dom  安装路由模块；
8. yarn add react-loadable  安装组件懒加载模块；
9. yarn add immutable  安装immutable模块；
10. npm install marked --save  安装markd模块；
11. npm install highlight.js --save  安装highlight配合markd实现详情页代码高亮；

##### 小问题：

路由中activeClassName不生效：activeClassName 无效是因为导航组件未被激活，也就是该组件的路由并未被刷新，很有可能题者公用导航，导航组件并未路由，写死固定在哪里。点击导航时，只是在切换body中的路由，导航组件未被更新，activeClassName是根据导航组件所在的路由去改变的。解决方法就是使用withRouter并确保是最外层：

```
import { Link, NavLink, withRouter } from 'react-router-dom';
...
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
```

此时即可获取到history,location,match属性了。