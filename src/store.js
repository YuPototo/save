import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);

const state = {
  savings: []
};

export default new Vuex.Store({
  state,
  mutations: {
    SET_SAVING: (state, savings) => state.savings = savings,
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
    async fetchSavings({commit}) {
      const res = await axios.get('http://localhost:3000/qinyu')
      commit('SET_SAVING', res.data.savings)
    },
    async addSaving({commit}, saving) {
      const newSaving = {...saving, time:Date.now()}
      const newSavings = _.cloneDeep(state.savings)
      newSavings.unshift(newSaving)
      const data =  {
        username: 'qinyu', 
        savings: newSavings
      }
      await axios.post('http://localhost:3000/', data)
      commit('ADD_SAVING', newSaving)
    },
    async editSaving({commit}, savingToEdit) {
      const newSavings = _.cloneDeep(state.savings)
      const index = newSavings.findIndex(
        saving => saving.time == savingToEdit.time
      );
      if (index !== -1) {
        newSavings.splice(index, 1, savingToEdit);
      }
      const data = {
        username: 'qinyu',
        savings: newSavings
      }
      await axios.post('http://localhost:3000/', data)
      commit('EDIT_SAVING', savingToEdit)
    },
    async removeSaving({commit}, savingToDelete) {
      const newSavings = _.cloneDeep(state.savings)
      let index = newSavings.indexOf(savingToDelete);
      newSavings.splice(index, 1);
      const data =  {
        username: 'qinyu', 
        savings: newSavings
      }
      await axios.post('http://localhost:3000/', data)
      commit('REMOVE_SAVING', savingToDelete)
    }
  }
});
