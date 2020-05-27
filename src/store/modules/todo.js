const state = {
  todos: [],
  filteredTodos: [],
  currentId: 0,
  filter: 'All',
  deletedTodoId: 0,
  isDeleteTodoAlertShown: false,
  query: '',
  groupIndex: 0,
  deletedGroupIndex: 0,
  isEditTodoShown: false,
  allGroups: true,
};

const getters = {
  todos(state) {
    return state.todos;
  },
  filteredTodos(state) {
    if (state.filter === 'All') {
      return state.todos.filter(todo => {
        return state.allGroups ? true : todo.groupIndex === state.groupIndex
      });
    } 
    if (state.filter === 'Complete') {
      return state.todos.filter(todo => {
        return state.allGroups ? todo.completed : todo.completed && todo.groupIndex === state.groupIndex;
      });
    } 
    if (state.filter === 'Incomplete') {
      return state.todos.filter(todo => {
        return state.allGroups ? !todo.completed : !todo.completed && todo.groupIndex === state.groupIndex;
      });
    }
    if (state.filter === 'Search') {
      return state.todos.filter(todo => {
        console.log('1', todo.title.toLowerCase().includes(state.query.toLowerCase()));
        console.log('2', state.allGroups ? true : todo.groupIndex === state.groupIndex);
        console.log('3', state.allGroups);
        if (state.allGroups) {
          return todo.title.toLowerCase().includes(state.query.toLowerCase());
        } else {
          return todo.title.toLowerCase().includes(state.query.toLowerCase()) && todo.groupIndex === state.groupIndex;
        }
      });
    }
    
    return state.todos;
  },
  filter(state) {
    return state.filter;
  },
  isDeleteTodoAlertShown(state) {
    return state.isDeleteTodoAlertShown;
  },
  isEditTodoShown(state) {
    return state.isEditTodoShown;
  }
};

const mutations = {
  addNewTodo(state, payload) {
    state.todos.push({
      id: state.currentId,
      title: payload,
      groupIndex: state.groupIndex,
      completed: false,
      showMoreActivated: false
    });
    state.currentId++;
  },
  deleteTodo(state) {
    const index = state.todos.findIndex(todo => todo.id === state.deletedTodoId);
    state.todos.splice(index, 1);
  },
  updateFilter(state, filter) {
    state.filter = filter;
  },
  searchTodo(state, payload) {
    state.filter = 'Search';
    state.query = payload;
  },
  showDeleteTodoAlert(state, id) {
    state.isDeleteTodoAlertShown = true;
    state.deletedTodoId = id;
  },
  closeDeleteTodoAlert(state) {
    state.isDeleteTodoAlertShown = false;
  },
  toggleFullText(state, id) {
    const todo = state.todos.find(todo => todo.id === id);
    todo.showMoreActivated = !todo.showMoreActivated;
  },
  showConnectedTodos(state, index) {
    if (index === 0) {
      state.allGroups = true;
    } else {
      state.allGroups = false;
    }
    state.groupIndex = index;
  },
  deleteConnectedTodos(state, groupIndex) {
    const index = state.todos.findIndex(todo => todo.deletedGroupIndex === groupIndex);
    state.todos.splice(index, 1);
  },
  showEditTodoPopup(state, id) {
    state.isEditTodoShown = true;
    state.editingTodoId = id;
  },
  closeEditTodoPopup(state) {
    state.isEditTodoShown = false;
  },
  changeTodoGroupIndex(state, index) {
    const todo = state.todos.find(todo => todo.id === state.editingTodoId);
    todo.groupIndex = index;
  }
};

const actions = {
  addNewTodo({commit}, payload) {
    commit('addNewTodo', payload);
  },
  showDeleteTodoAlert({commit}, id) {
    commit('showDeleteTodoAlert', id);
  },
  closeDeleteTodoAlert({commit}, id) {
    commit('closeDeleteTodoAlert', id);
  },
  deleteTodo({commit}) {
    commit('deleteTodo');
  },
  updateFilter({commit}, filter) {
    commit('updateFilter', filter);
  },
  searchTodo({commit}, payload) {
    commit('searchTodo', payload);
  },
  toggleFullText({commit}, id) {
    commit('toggleFullText', id);
  },
  showConnectedTodos({commit}, index) {
    commit('showConnectedTodos', index);
  },
  deleteConnectedTodos({commit}, index) {
    commit('deleteConnectedTodos', index);
  },
  showEditTodoPopup({commit}, id) {
    commit('showEditTodoPopup', id);
  },
  closeEditTodoPopup({commit}) {
    commit('closeEditTodoPopup');
  },
  changeTodoGroupIndex({commit}, index) {
    commit('changeTodoGroupIndex', index);
  }
}

export default {
	state,
	getters,
	mutations,
	actions
};