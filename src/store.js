import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        name: "Learn VueJS",
        completed: true,
      },
      {
        id: 2,
        name: "Build CTV",
        completed: false,
      },
      {
        id: 4,
        name: "Write Excel",
        completed: false,
      },
    ]
  },
  mutations: {
    toggleCompleted (state, id) {
      const updatedTodo = state.todos.find(function(todo) {
        return todo.id === id;
      })
      updatedTodo.completed = !updatedTodo.completed;
    },
    addNew (state, name) {
      const maxId = Math.max.apply(null, state.todos.map((todo) => {
        return todo.id;
      }));

      console.log(maxId);

      state.todos.push({
        id: maxId + 1,
        name: name,
        completed: false
      })
    }
  },
  actions: {
    toggleCompleted ({ commit }, id) {
      commit('toggleCompleted', id)
    },
    addNew ({ commit }, name) {
      commit('addNew', name)
    }
  },
  getters: {

  }
})
