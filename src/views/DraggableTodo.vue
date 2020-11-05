<template>
  <div>
    <TodoWrapper :title="'Todo'" :todoData="todoList" :state="'TODO'" @update="updateData"></TodoWrapper>
    <TodoWrapper :title="'Doing'" :todoData="doingList" :state="'DOING'" @update="updateData"></TodoWrapper>
    <TodoWrapper :title="'Done'" :todoData="doneList" :state="'DONE'" @update="updateData"></TodoWrapper>
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
        { id: uniqid(), state: 'TODO', text: 'searchnpm111qqqqqqqqqqqqq22', createdBy: 'hyoseung', createdDate: new Date() }
      ],
      doingList: [
        { id: uniqid(), state: 'DOING', text: 'example coding', createdBy: 'hyoseung1', createdDate: new Date() }
      ],
      doneList: [
        { id: uniqid(), state: 'DONE', text: 'create git repository', createdBy: 'hyoseung2', createdDate: new Date() }
      ]
    }
  },
  methods: {
    updateData(state, value) {
      console.log('updateData ' + state);
      switch (state) {
        case 'TODO':
          this.todoList = value;
          break;
        case 'DOING':
          this.doingList = value;
          break;
        case 'DONE':
          this.doneList = value;
          break;
      }
    }
  }
}
</script>

<style>

</style>