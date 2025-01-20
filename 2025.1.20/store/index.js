import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import countAbout from './count.js'
import personAbout from './people.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})