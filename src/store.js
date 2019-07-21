import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  savings: [
    {
      wantBuy: {
        name: '可乐',
        cost: 5
      },
      time: 1562803200
    },
    {
      wantBuy: {
        name: '星巴克',
        cost: 30
      },
      didBuy: {
        name: '全家咖啡',
        cost: 5
      },
      time: 1562803201
    }
  ]
};

export default new Vuex.Store({
  state,
  mutations: {
    ADD_SAVING: (state, saving) => state.savings.unshift(saving),
    EDIT_SAVING: (state, savingToEdit) => {
      const index = state.savings.findIndex(
        saving => saving.time == savingToEdit.time
      );
      if (index !== -1) {
        state.savings.splice(index, 1, savingToEdit);
      }
    },
    REMOVE_SAVING: (state, delSaving) => {
      let index = state.savings.indexOf(delSaving);
      state.savings.splice(index, 1);
    }
  },
  actions: {
    addSaving: (context, saving) => context.commit("ADD_SAVING", {...saving, time:Date.now()} ),
    editSaving: (context, saving) => context.commit("EDIT_SAVING", saving),
    removeSaving: (context, saving) => context.commit("REMOVE_SAVING", saving)
  }
});
