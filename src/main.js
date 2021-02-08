import Vue from 'vue'
import App from './App.vue'
// DESCRIBE: This error is raised to highlight the use of a technique commonly
// regarded as bad practice.By defining custom properties on native prototypes
// you can easily introduce problems in old browsers (in particular Internet
// Explorer 8 and below). It's also very easy to accidentally shadow custom
// native prototype methods.
// eslint-disable-next-line no-extend-native
Object.prototype.customObject = {
  str: 'string',
  func: (e) => console.log(e)
}
new Vue({
  render: h => h(App)
}).$mount('#app')
