<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="list-body">
        <draggable :group="{name: 'todo'}">
          <div class="list-card" v-for="element in todoCards" :key="element.id">
            <TodoCard :todoCard="element" @remove="removeCard"></TodoCard> <!-- emit 사용 -->
          </div>
        </draggable>
      </div>
      <div class="list-footer">
        <span class="add-card-btn" @click="addCard">
          <i class="fas fa-plus" aria-hidden="true"></i> Add Card
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TodoCard from '@/components/draggableTodo/TodoCard.vue';
import uniqid from 'uniqid';

export default {
  props: ['title', 'todoCards'],
  components: {
    draggable, TodoCard
  },
  methods: {
    addCard() {
      this.todoCards.push({
        id: uniqid(),
        text: 'add card',
        createdBy: 'hyoseung'
      });
    },
    removeCard(item) {
      let index = this.todoCards.indexOf(item);
      this.todoCards.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.list-wrapper {
    width: 300px;
    margin: 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
}
.list {
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
}
.list-header {
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;
}

.list-body {
  flex: 1 1 auto;
  margin-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
}
.list-card {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
}

.list-footer {
  min-height: 38px;
  max-height: 38px;
  display: flex;
  justify-content: space-between;
}
.add-card-btn:hover {
  background-color: rgba(9,30,66,.08);
  color: #172b4d;
}
.add-card-btn {
  margin: 2px 0 8px 8px;
  padding: 4px 8px;
  position: relative;
  cursor: pointer;
}
</style>