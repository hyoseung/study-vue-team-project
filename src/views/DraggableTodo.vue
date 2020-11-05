<template>
  <div>
    <!-- <TodoWrapper v-for="wrapper in wrappers" :key="wrapper.listId" :listId="wrapper.listId" :listTitle="wrapper.listTitle" :todoData="data[wrapper.listId]" @update="updateData"></TodoWrapper> -->
    <TodoWrapper :listId="'TODO'" :listTitle="'Todo'" :todoData="data['TODO']" @update="updateData"></TodoWrapper>
    <TodoWrapper :listId="'DOING'" :listTitle="'Doing'" :todoData="data['DOING']" @update="updateData"></TodoWrapper>
    <TodoWrapper :listId="'DONE'" :listTitle="'Done'" :todoData="data['DONE']" @update="updateData"></TodoWrapper>
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
      // wrappers: [
      //   { listId: 'TODO', listTitle: 'Todo' },
      //   { listId: 'DOING', listTitle: 'Doing' },
      //   { listId: 'DONE', listTitle: 'Done' }
      // ],
      data: {
        TODO: [
          { id: uniqid(), title: 'test1', description: 'aaaa', createdBy: 'hyoseung', createdDate: new Date() },
          { id: uniqid(), title: 'test222222222222222222222222222222222', description: 'bbbbb', createdBy: 'hyoseung', createdDate: new Date() }
        ],
        DOING: [
          { id: uniqid(), title: 'test3', description: 'cccc', createdBy: 'hyoseung1', createdDate: new Date() }
        ],
        DONE: [
          { id: uniqid(), title: 'test4', description: 'dddd', createdBy: 'hyoseung2', createdDate: new Date() }
        ]
      }
    }
  },
  methods: {
    updateData(listId, data) {
      this.data[listId] = data;
    }
  }
}
</script>

<style>

</style>