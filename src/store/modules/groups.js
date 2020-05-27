const state = {
  groups: ['Incoming'],
  currentIndex: 0,
  deletedGroupIndex: 0,
  isDeleteGroupAlertShown: false
};

const getters = {
  groups(state) {
    return state.groups;
  },
  currentIndex(state) {
    return state.currentIndex;
  },
  isDeleteGroupAlertShown(state) {
    return state.isDeleteGroupAlertShown;
  },
  deletedGroupIndex(state) {
    return state.deletedGroupIndex;
  }
};

const mutations = {
  addNewGroup(state, payload) {
    state.groups.push(payload);
  },
  changeGroup(state, index) {
    state.currentIndex = index;
  },
  deleteGroup(state) {
    state.groups.splice(state.deletedGroupIndex, 1);
  },
  showDeleteGroupAlert(state, payload) {
    state.isDeleteGroupAlertShown = true;
    state.deletedGroupIndex = payload;
  },
  closeDeleteGroupAlert(state) {
    state.isDeleteGroupAlertShown = false;
  } 
};

const actions = {
  addNewGroup({commit}, payload) {
    commit('addNewGroup', payload);
  },
  changeGroup({commit}, index) {
    commit('changeGroup', index);
  },
  deleteGroup({commit}) {
    commit('deleteGroup');
  },
  showDeleteGroupAlert({commit}, payload) {
    commit('showDeleteGroupAlert', payload);
  },
  closeDeleteGroupAlert({commit}) {
    commit('closeDeleteGroupAlert');
  }
};

export default {
	state,
	getters,
	mutations,
	actions
};