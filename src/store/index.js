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
      correct: []
    },
    ranking: []
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
      const cond1 =  e.target.tagName === 'SPAN';
      const cond2 = e.target.tagName === 'I';
      const div = e.target.lastElementChild;
      const span = e.target.nextElementSibling;
      const i = e.target.parentElement.nextElementSibling;
      const el = cond1 ? span : cond2 ? i : div;
  
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

        if (state.validation.firstElement === state.validation.lastElement) {
          first.forEach( el => {
            el.addEventListener('click', ev => ev.stopPropagation());
            state.validation.correct.push(state.validation.firstElement);
            
            document.body.classList.add('bingo');
            setTimeout(() => { document.body.classList.remove('bingo')}, 100);
            
            if (state.validation.correct.length === quantity) { 
              const msg = document.querySelector('.finish');

              clearInterval(state.gameOn);

              state.ranking.push({ user: state.currentGame.user, time: state.currentGame.time, level: state.currentGame.level });

              setTimeout(() => {
                msg.style.display = 'flex';
              }, 1000)

              setTimeout(() => {
                msg.style.display = 'none';
                state.gameOn = false;
                state.currentGame.time = 0;
                state.correct = [];
              }, 4500)
            }
          })
        } else {
          setTimeout(() => {
            first.forEach( el => el.parentElement.classList.remove('invert'));
            last.forEach( el => el.parentElement.classList.remove('invert'));
          }, 1000)
        }

        state.validation.firstElement = '';
        state.validation.lastElement = '';
      }
    },
    loadRanking(state, ranking) {
      state.ranking = ranking;
    }
  }
})
