<template>
  <div>
    <!-- <TodoWrapper v-for="wrapper in wrappers" :key="wrapper.listId" :listId="wrapper.listId" :listTitle="wrapper.listTitle" :todoData="data[wrapper.listId]" @update="updateData"></TodoWrapper> -->
    <TodoWrapper :listId="'TODO'" :listTitle="'Todo'" :todoData="data['TODO']" @update="updateData" @show="showDetailModal"></TodoWrapper>
    <TodoWrapper :listId="'DOING'" :listTitle="'Doing'" :todoData="data['DOING']" @update="updateData" @show="showDetailModal"></TodoWrapper>
    <TodoWrapper :listId="'DONE'" :listTitle="'Done'" :todoData="data['DONE']" @update="updateData" @show="showDetailModal"></TodoWrapper>

    <DetailModal v-if="showModal" :data="modalData" @close="showModal = false"></DetailModal>
  </div>
</template>

<script>
import TodoWrapper from '@/components/draggableTodo/TodoWrapper.vue';
import DetailModal from '@/components/draggableTodo/DetailModal.vue';
import uniqid from 'uniqid';

export default {
  components: {
    TodoWrapper, DetailModal
  },
  data() {
    return {
      showModal: false,
      modalData: {},
      // wrappers: [
      //   { listId: 'TODO', listTitle: 'Todo' },
      //   { listId: 'DOING', listTitle: 'Doing' },
      //   { listId: 'DONE', listTitle: 'Done' }
      // ],
      data: {
        TODO: [
          { id: uniqid(), title: 'test1', description: 'aaaa', createdBy: 'hyoseung', createdDate: new Date() },
          { id: uniqid(), title: 'test22222222222222222222222222223333333333333333333333333333333322222', description: 'test22222222222222222222222222223333333333333333333333333333333322222', createdBy: 'hyoseung', createdDate: new Date() }
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
    },
    showDetailModal(data) {
      this.modalData = data;
      this.showModal = true;
    }
  }
}
</script>

<style>

</style>