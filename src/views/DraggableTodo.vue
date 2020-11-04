<template>
  <div>
    <TodoWrapper :title="'Todo'" :todoCards="todoList"></TodoWrapper>
    <TodoWrapper :title="'Doing'" :todoCards="doingList"></TodoWrapper>
    <TodoWrapper :title="'Done'" :todoCards="doneList"></TodoWrapper>
  </div>
</template>

<script>
import TodoWrapper from '@/components/draggableTodo/TodoWrapper.vue';
import uniqid from 'uniqid';

export default {
  components: {
    TodoWrapper
  },
  data() {
    return {
      todoList: [
        { id: uniqid(), text: 'search npm', createdBy: 'hyoseung'},
        { id: uniqid(), text: 'searchnpm111qqqqqqqqqqqqqqqqqqqqqqqq22', createdBy: 'hyoseung'}
      ],
      doingList: [
        { id: uniqid(), text: 'example coding', createdBy: 'hyoseung1'}
      ],
      doneList: [
        { id: uniqid(), text: 'create git repository', createdBy: 'hyoseung2'}
      ]
    }
  }
}
</script>

<style>

</style>