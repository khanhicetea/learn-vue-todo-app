<template>
  <li>
    <button @click="toggleCompleted(todo.id)">{{ todo.completed ? '✔️' : '' }}</button>
    <span :class="todo.completed ? 'done' : ''">{{todo.name}}</span>
  </li>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todo: Object
  },
  computed: {
    
  },
  methods: {
    toggleCompleted (id) {
      this.$store.dispatch('toggleCompleted', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li::before, li::after {
  display: table;
  content: '';
}
button {
  width: 46px !important;
  height: 46px  !important;
  font-size: 1em;
  display: inline-block;
}
span {
  display: inline-block;
  font-size: 2em;
  margin-left: 10px;
}
span.done {
  text-decoration: line-through;
}
li {
  display: flex;
  list-style: none;
  text-align: left;
  width: 100%;
  margin: 5px;
}
</style>
