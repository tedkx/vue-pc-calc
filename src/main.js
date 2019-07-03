import Vue from 'vue';
import App from './App.vue';

import Radio from 'ant-design-vue/lib/radio';
import 'ant-design-vue/lib/radio/style/css';
import Switch from 'ant-design-vue/lib/switch';
import 'ant-design-vue/lib/switch/style/css';
import Row from 'ant-design-vue/lib/row';
import 'ant-design-vue/lib/row/style/css';
import Col from 'ant-design-vue/lib/col';
import 'ant-design-vue/lib/col/style/css';

Vue.component(Radio.name, Radio);
Vue.component(Switch.name, Switch);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
