import axios from 'axios';

const state = {
  services: null,
};

const getters = {
  services: state => {
    return state.services;
  },
};

const mutations = {
  SET_TODO: (state, payload) => {
    state.services = payload;
  },

  ADD_TODO: (state, payload) => {
    state.services.push(payload);
  },
};

const actions = {
  GET_TODO: async (context, payload) => {
    let {data} = await axios.get('/api/services.json');
    context.commit('SET_TODO', data);
    console.log(payload); //temp - never used
  },

  SAVE_TODO: async (context, payload) => {
    let {data} = await axios.post('/api/services.json');
    context.commit('ADD_TODO', payload);
    console.log(data); //temp - never used
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};