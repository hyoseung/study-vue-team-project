<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="list-body">
        <draggable :group="{name: 'todo'}" @start="onStart" @end="onEnd" :move="onMove">
          <transition-group name="list-cards" tag="div">
            <TodoCard v-for="element in todoCards" :key="element.id" :todoCard="element" @remove="removeCard"></TodoCard> <!-- emit 사용 -->
          </transition-group>
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
    },
    onStart(evt) {
      console.log("onStart");
      console.log(evt.oldIndex);
    },
    onEnd(evt) {
      let obj = {
        item: evt.item,
        to: evt.to,
        from: evt.from,
        oldIndex: evt.oldIndex,
        newIndex: evt.newIndex,
        oldDraggableIndex: evt.oldDraggableIndex, // element's old index within old parent, only counting draggable elements
        newDraggableIndex: evt.newDraggableIndex ,// element's new index within new parent, only counting draggable elements
        clone: evt.clone, // the clone element
        pullMode: evt.pullMode
      }
      console.log("onEnd");
      console.log(obj);
    },
    onMove(evt, originalEvt) {
      let obj = {
        dragged: evt.dragged, // dragged HTMLElement
        draggedRect: evt.draggedRect, // DOMRect {left, top, right, bottom}
        related: evt.related, // HTMLElement on which have guided
        relatedRect: evt.relatedRect, // DOMRect
        willInsertAfter: evt.willInsertAfter, // Boolean that is true if Sortable will insert drag element after target by default
        clientY: originalEvt.clientY // mouse position
      }
      console.log("onMove");
      console.log(obj);
      
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

.list-cards-enter-active, .list-cards-leave-active {
  transition: all 1s;
}
.list-cards-enter, .list-cards-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>