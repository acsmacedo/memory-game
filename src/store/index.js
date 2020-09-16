import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameOn: false,
    currentGame: {
      user: '',
      level: '',
      time: 0
    }
  },
  mutations: {
    startGame(state, e) {
      const easy = e.target.easy.checked ? e.target.easy.value : false;
      const regular = e.target.regular.checked ? e.target.regular.value  : false;
      const hard = e.target.hard.checked ? e.target.hard.value  : false;

      state.currentGame.user = e.target.user.value;
      state.currentGame.level = easy || regular || hard;
      state.gameOn = true;
    }
  }
})
