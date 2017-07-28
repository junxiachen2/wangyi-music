/**
 * Created by junxiachen on 17/7/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common
    }
})
