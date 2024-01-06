// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {
    login({ commit }) {
      // 로그인 성공 시에는 setLoggedIn을 true로 호출
      commit('setLoggedIn', true);
    },
    logout({ commit }) {
      // 로그아웃 시에는 setLoggedIn을 false로 호출
      commit('setLoggedIn', false);
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
  },
});
