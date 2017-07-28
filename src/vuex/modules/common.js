/**
 * Created by junxiachen on 17/7/28.
 */
const state = {
  show_side_menu: false,
  show_loading: false
};

const getters = {
  showAsideMenu: state => state.show_side_menu,
  showLoading: state => state.show_loading
}

const mutations = {
  showAsideMenu(state, flag){
    state.show_side_menu = flag;
  },
  updateLoading(state, data){
    state.show_loading = data
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
