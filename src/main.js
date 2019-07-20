// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { NavBar,Icon,Cell, CellGroup,Image,Swipe, SwipeItem,Row, Col,Divider,Step, Steps  } from 'vant';

Vue.use(Cell).use(CellGroup).use(Image).use(Icon).use(NavBar).use(Swipe).use(SwipeItem).use(Row).use(Col).use(Divider).use(Step).use(Steps);
import 'lib-flexible'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
