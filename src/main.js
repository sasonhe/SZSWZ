// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { NavBar,Icon,Cell, CellGroup,Image,Row, Col,Divider,Step, Steps,Tab, Tabs,Button,Field,Toast   } from 'vant';
import axios from 'axios'
Vue.use(Cell).use(CellGroup).use(Image).use(Icon).use(NavBar).use(Row).use(Col).use(Divider).use(Step).use(Steps).use(Tab).use(Tabs).use(Button).use(Field).use(Toast );
import 'lib-flexible'
import '@/assets/css/public.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
