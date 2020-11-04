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
        { id: uniqid(), state: 'TODO', text: 'search npm', createdBy: 'hyoseung', createdDate: new Date() },
        { id: uniqid(), state: 'TODO', text: 'searchnpm111qqqqqqqqqqqqqqqqqqqqqqqq22', createdBy: 'hyoseung', createdDate: new Date() }
      ],
      doingList: [
        { id: uniqid(), state: 'DOING', text: 'example coding', createdBy: 'hyoseung1', createdDate: new Date() }
      ],
      doneList: [
        { id: uniqid(), state: 'DONE', text: 'create git repository', createdBy: 'hyoseung2', createdDate: new Date() }
      ]
    }
  }
}
</script>

<style>

</style>