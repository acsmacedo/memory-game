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
    },
    validation: {
      firstElement: '',
      lastElement: '',
      finish: false
    },
    ranking: [],
    rankingView: 'easy'
  },
  getters: {
    rankingViewTable(state) {
      const table = [...state.ranking];
      const tableLevel = table.filter( item => item.level === state.rankingView);
      const tableSort = tableLevel.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
      return tableSort.filter((item, i) => i < 3);
    }
  },
  mutations: {
    startGame(state) {
      state.currentGame.time = 0;
      state.gameOn = setInterval(() => { state.currentGame.time++ }, 1000);
    },
    currentGameChange(state, e) {
      const easy = e.target.easy.checked ? e.target.easy.value : false;
      const regular = e.target.regular.checked ? e.target.regular.value  : false;
      const hard = e.target.hard.checked ? e.target.hard.value  : false;

      state.currentGame.user = e.target.user.value;
      state.currentGame.level = easy || regular || hard;
    },
    validationChange(state, e) {
      const isSpan =  e.target.tagName === 'SPAN';
      const isIcon = e.target.tagName === 'I';

      const div = e.target.lastElementChild;
      const span = e.target.nextElementSibling;
      const icon = e.target.parentElement.nextElementSibling;

      const el = isSpan ? span : isIcon ? icon : div;
      const cond = state.validation.firstElement;
  
      cond === '' ? state.validation.firstElement = el.className : state.validation.lastElement = el.className;
    },
    validationCompare(state) {
      if (state.validation.firstElement && state.validation.lastElement) {
        const first = document.querySelectorAll(`.${state.validation.firstElement}`);
        const last = document.querySelectorAll(`.${state.validation.lastElement}`);
        const quantity = state.currentGame.level === 'easy' ? 16 : state.currentGame.level === 'regular' ? 20 : 24;
        const correct = document.querySelectorAll('.invert').length;

        if (state.validation.firstElement === state.validation.lastElement) {
          document.body.classList.add('bingo');
          setTimeout(() => { document.body.classList.remove('bingo')}, 100);

          if (correct === quantity) {
            const ranking = state.currentGame;
            state.ranking.push({ user: ranking.user, time: ranking.time, level: ranking.level });
            state.validation.finish = true;
          }
        } else {
          setTimeout(() => {
            first.forEach( el => el.parentElement.classList.remove('invert'));
            last.forEach( el => el.parentElement.classList.remove('invert'));
          }, 700)
        }
        state.validation.firstElement = '';
        state.validation.lastElement = '';
      }
    },
    rankingViewChange(state, ev) {
      state.rankingView = ev.target.value;
    },
    rankingViewReset(state) {
      state.rankingView = 'easy';
    },
    rankingClear(state) {
      state.ranking = [];
    },
    resetFinish(state) {
      state.validation.finish = false;
      clearInterval(state.gameOn);
    },
    loadRanking(state, ranking) {
      state.ranking = ranking;
    },
    loadUser(state, user) {
      state.currentGame.user = user;
    },
    loadLevel(state, level) {
      state.currentGame.level = level;
    }
  }
})
