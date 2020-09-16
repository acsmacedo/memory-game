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
    ranking: {
      easy: [],
      regular: [],
      hard: []
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
      if (state.validation.firstElement === '') {
        state.validation.firstElement = e.target.nextElementSibling.className;
      } else {
        state.validation.lastElement = e.target.nextElementSibling.className;
      }
    },
    validationCompare(state) {
      if (state.validation.firstElement && state.validation.lastElement) {
        const first = document.querySelectorAll(`.${state.validation.firstElement}`);
        const last = document.querySelectorAll(`.${state.validation.lastElement}`);

        if (state.validation.firstElement === state.validation.lastElement) {
          first.forEach( el => {
            
            el.addEventListener('click', ev => ev.stopPropagation());
            state.validation.correct.push(state.validation.firstElement);
            if (state.currentGame.level === 'easy') {
              if (state.validation.correct.length === 16) { 
                clearInterval(state.gameOn);
                state.ranking.easy.push({ user: state.currentGame.user, time: state.currentGame.time });
                setTimeout(() => {
                  state.gameOn = false;
                  state.currentGame.time = 0;
                  console.log(state.ranking)
                }, 1500)
              }
            }
            if (state.currentGame.level === 'regular') {
              if (state.validation.correct.length === 20) { 
                clearInterval(state.gameOn);
                state.ranking.regular.push({ user: state.currentGame.user, time: state.currentGame.time });
                setTimeout(() => {
                  state.gameOn = false;
                  state.currentGame.time = 0;
                  console.log(state.ranking)
                }, 1500)
              }
            }
            if (state.currentGame.level === 'hard') {
              if (state.validation.correct.length === 24) { 
                clearInterval(state.gameOn);
                state.ranking.hard.push({ user: state.currentGame.user, time: state.currentGame.time });
                setTimeout(() => {
                  state.gameOn = false;
                  state.currentGame.time = 0;
                  console.log(state.ranking)
                }, 1500)
              }
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
