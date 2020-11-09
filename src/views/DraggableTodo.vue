<template>
  <div>
    <TodoWrapper :listId="'TODO'" :listTitle="'Todo'" :todoData="data['TODO']" @drag="dragData" @show="showDetailModal"></TodoWrapper>
    <TodoWrapper :listId="'DOING'" :listTitle="'Doing'" :todoData="data['DOING']" @drag="dragData" @show="showDetailModal"></TodoWrapper>
    <TodoWrapper :listId="'DONE'" :listTitle="'Done'" :todoData="data['DONE']" @drag="dragData" @show="showDetailModal"></TodoWrapper>

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
      data: {
        TODO: [
          { id: uniqid(), title: 'test1', description: 'test1 description', createdBy: 'hyoseung', createdDate: new Date() },
          { id: uniqid(), title: 'test2222222222222222222222222222222222222222222222222222', description: 'test2222222222222222222222222222222222222222222222222222 description', createdBy: 'hyoseung', createdDate: new Date() }
        ],
        DOING: [
          { id: uniqid(), title: 'test3', description: 'test3 description', createdBy: 'hyoseung', createdDate: new Date() }
        ],
        DONE: [
          { id: uniqid(), title: 'test4', description: 'test4 description', createdBy: 'hyoseung', createdDate: new Date() }
        ]
      }
    }
  },
  methods: {
    dragData(listId, data) {
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