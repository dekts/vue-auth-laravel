
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('vue-flash-message/dist/vue-flash-message.min.css');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// This is the Vue whenever we need any library to use we need first this Vue to import
import Vue from 'vue'

// Start Validation //
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
// End Validation //

// Start Flash Messages //
import VueFlashMessage from 'vue-flash-message'
Vue.use(VueFlashMessage);
// End Flash Messages //

import router from './routes.js'
import AppComponent from './components/AppComponent'

const app = new Vue({
    components : { AppComponent },
    router
}).$mount('#app');
