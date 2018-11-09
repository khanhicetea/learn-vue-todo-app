<template>
  <div class="todo-list">
    <h3>{{ title }}</h3>
    <div class="container">
      <input type="text" v-model="newItem" @keyup.enter="addNew(newItem)" placeholder="Type your task here ..." />
    </div>
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      newItem: ""
    };
  },
  props: {
    title: String
  },
  computed: {
    todos () {
      return this.$store.state.todos;
    }
  },
  methods: {
    toggleCompleted (id) {
      this.$store.dispatch('toggleCompleted', id);
    },
    addNew (name) {
      this.$store.dispatch('addNew', name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-size: 3em;
  margin: 20px 0;
}
.container {
  padding: 5px;  
}
input[type="text"] {
  font-size: 2em;
  padding: 5px;
  width: 95%;
}
</style>
