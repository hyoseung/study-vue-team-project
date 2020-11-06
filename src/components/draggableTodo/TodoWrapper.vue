<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <h2>{{ listTitle }}</h2>
      </div>
      <div class="list-body">
        <draggable :group="{name: 'todo'}" v-model="list">
          <!-- <transition-group name="list-cards" tag="div"> -->
            <TodoCard v-for="element in list" :key="element.id" :todoCard="element" @remove="removeCard" @show="showDetailCard"></TodoCard>
          <!-- </transition-group> -->
        </draggable>
        <TodoAddCard v-if="showAddCard" @close="showAddCard = false" @add="addCard"></TodoAddCard>
      </div>
      <div class="list-footer" v-show="!showAddCard">
        <span class="add-card-btn" @click="showAddCard = true">
          <i class="fas fa-plus" aria-hidden="true"></i> Add Card
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import uniqid from 'uniqid';
import TodoCard from '@/components/draggableTodo/TodoCard.vue';
import TodoAddCard from '@/components/draggableTodo/TodoAddCard.vue';

export default {
  props: ['listId', 'listTitle', 'todoData'],
  components: {
    draggable, TodoCard, TodoAddCard
  },
  data() {
    return {
      showAddCard: false
    }
  },
  computed: {
    list: {
      get() {
        return this.todoData;
      },
      set(value) {
        this.$emit('update', this.listId, value);
      }
    }
  },
  methods: {
    addCard(title, eventType) {
      if(eventType === 'click') this.showAddCard = false;
      this.todoData.push({
        id: uniqid(),
        title: title,
        description: '',
        createdBy: 'hyoseung',
        createdDate: new Date()
      });
    },
    removeCard(item) {
      console.log('removeCard : '+this.listId);
      let index = this.todoData.indexOf(item);
      this.todoData.splice(index, 1);
    },
    showDetailCard(data) {
      this.$emit('show', data);
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.list-body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
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
/* .list-cards-enter-active, .list-cards-leave-active {
  transition: all 1s;
}
.list-cards-enter, .list-cards-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
</style>