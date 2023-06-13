import { ref, computed } from 'vue';

let id = 0;
const newTodo = ref('');
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}


export {
  newTodo,
  hideCompleted,
  filteredTodos,
  todos,
  addTodo,
  removeTodo
};