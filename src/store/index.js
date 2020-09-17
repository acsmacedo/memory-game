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
    ranking: [
      /*
      {user: 'dffsd', level: 'easy', time: 25},
      
      {user: 'dffsdfsd', level: 'regular', time: 80},
      {user: 'dfsfsdfd', level: 'regular', time: 120},
      {user: 'dfvxcvxcsd', level: 'easy', time: 2665},
  
      {user: 'dffsd', level: 'easy', time: 55},

      {user: 'dffsdfsd', level: 'regular', time: 158},
      {user: 'dfsfsdfd', level: 'regular', time: 1258},
      {user: 'dfvxcvxcsd', level: 'easy', time: 85},
      */
    ],
    rankingView: 'easy'
  },
  getters: {
    timeMinutes(state) {
      const time = state.currentGame.time;
      const s = time % 60;
      const m = ((time - s) % 3600) / 60;
      const h = ((time - s - (m * 60)) % 86400) / 3600;

      const s1 = !m && !h ? `${s}s` : s > 0 && s < 10 ? `0${s}s` : s >= 10 ? `${s}s` : h || m ? '00s' : '0s';
      const m1 = !h && m != 0 ? `${m}m ` : h && m > 0  && m < 10 ? `0${m}m ` : h && m >= 10 ? `${m}m ` : h ? '00m ' : '';
      const h1 = h != 0 ? `${h}h ` : h > 0  && h < 10 ? `0${h}h ` : h >= 10 ? `${h}h ` : '';
  
      return `${h1}${m1}${s1}`;
    },
    rankingViewTable(state) {
      const table = [...state.ranking];
      const tableLevel = table.filter( item => item.level === state.rankingView);
      const tableSort = tableLevel.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
      return tableSort.filter((item, i) => i < 3);
    }
  },
  mutations: {
    startGame(state, e) {
      const easy = e.target.easy.checked ? e.target.easy.value : false;
      const regular = e.target.regular.checked ? e.target.regular.value  : false;
      const hard = e.target.hard.checked ? e.target.hard.value  : false;

      state.currentGame.user = e.target.user.value;
      state.currentGame.level = easy || regular || hard;
      state.gameOn = setInterval(() => {
        state.currentGame.time++
      }, 1000)
    },
    validationChange(state, e) {
      const isSpan =  e.target.tagName === 'SPAN';
      const isIcon = e.target.tagName === 'I';

      const div = e.target.lastElementChild;
      const span = e.target.nextElementSibling;
      const icon = e.target.parentElement.nextElementSibling;

      const el = isSpan ? span : isIcon ? icon : div;
  
      if (state.validation.firstElement === '') {
        state.validation.firstElement = el.className;
      } else {
        state.validation.lastElement = el.className;
      }
    },
    validationCompare(state) {
      if (state.validation.firstElement && state.validation.lastElement) {
        const first = document.querySelectorAll(`.${state.validation.firstElement}`);
        const last = document.querySelectorAll(`.${state.validation.lastElement}`);
        const quantity = state.currentGame.level === 'easy' ? 16 : state.currentGame.level === 'regular' ? 20 : 24;
        const correct = document.querySelectorAll('.invert').length;

        if (state.validation.firstElement === state.validation.lastElement) {
          first.forEach( el => {
            el.addEventListener('click', ev => ev.stopPropagation());
            document.body.classList.add('bingo');
            setTimeout(() => { document.body.classList.remove('bingo')}, 100);
          })

          if (correct === quantity) { 
            clearInterval(state.gameOn);
            state.ranking.push({ user: state.currentGame.user, time: state.currentGame.time, level: state.currentGame.level });
            state.validation.finish = true;
            console.log(state);
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
      state.ranking = []
    },
    resetFinish(state) {
      state.validation.finish = false;
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
