import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filters'
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import Loader from "./components/app/Loader"
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
    apiKey: "AIzaSyB2TpnLL1RlP2OaPLfUoef7Q90Qa_GrU2U",
    authDomain: "crm-system-a66d3.firebaseapp.com",
    projectId: "crm-system-a66d3",
    storageBucket: "crm-system-a66d3.appspot.com",
    messagingSenderId: "518142667792",
    appId: "1:518142667792:web:f71fc435d645aedc4aee95",
    measurementId: "G-TV9BZK0D74"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
