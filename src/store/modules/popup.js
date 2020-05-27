const state = {
  isPopupShown: false
};

const getters = {
  isPopupShown(state) {
    return state.isPopupShown;
  }
};

const mutations = {
  togglePopupVisibility(state) {
    state.isPopupShown = !state.isPopupShown;
  }
};

const actions = {
  togglePopupVisibility({commit}) {
    commit('togglePopupVisibility');
  }
};

export default {
	state,
	getters,
	mutations,
	actions
};