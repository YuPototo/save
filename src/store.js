import Vue from "vue";
import Vuex from "vuex";

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
    UPDATE_SAVING: (state, savingUpdated) => state.savings = state.savings.map(saving => saving.time === savingUpdated.time ? savingUpdated : saving),
    REMOVE_SAVING: (state, savingDeleted) => state.savings = state.savings.filter(saving => saving.time !== savingDeleted.time)
  },
  actions: {
    addSaving: (context, saving) => context.commit("ADD_SAVING", { ...saving, time: Date.now() }),
    updateSaving: (context, savingUpdated) => context.commit("UPDATE_SAVING", savingUpdated),
    removeSaving: (context, saving) => context.commit("REMOVE_SAVING", saving)
  }
});
