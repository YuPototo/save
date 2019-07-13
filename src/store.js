import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const state = {
  savings: [
    {
      wantBuy: {
        name: "可乐",
        cost: 5
      },
      time: 1562803200
    },
    {
      wantBuy: {
        name: "星巴克",
        cost: 30
      },
      didBuy: {
        name: "全家咖啡",
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
    EDIT_SAVING: (state, updSaving) => {
      const index = state.savings.findIndex(
        saving => saving.time == updSaving.time
      );
      if (index !== -1) {
        state.savings.splice(index, 1, updSaving);
      }
    },
    REMOVE_SAVING: (state, delSaving) => {
      let index = state.savings.indexOf(delSaving);
      state.savings.splice(index, 1);
    }
  },
  actions: {
    addSaving: (context, saving) => {
      let newSaving;
      newSaving = _.cloneDeep(saving);
      newSaving.time = Date.now();
      context.commit("ADD_SAVING", newSaving);
    },
    editSaving: (context, updSaving) => {
      context.commit("EDIT_SAVING", updSaving);
    },
    removeSaving: (context, saving) => {
      context.commit("REMOVE_SAVING", saving);
    }
  }
});
