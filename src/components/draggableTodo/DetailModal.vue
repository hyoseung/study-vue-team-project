<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <span class="modal-close-btn" @click="$emit('close')">
            <i class="fas fa-times fa-lg"></i>
          </span>
          <div class="modal-header">
            <span class="modal-icon"><i class="far fa-credit-card fa-lg"></i></span>
            <div class="modal-text-line-break" v-if="!editTitle" @click="editTitle=true">
              <h3>{{data.title}}</h3>
            </div>
            <DetailEdit v-else :data="title" :target="'title'" @save="saveData" @close="closeEdit"></DetailEdit>
          </div>
          <div class="modal-body">
            <div class="modal-body-content">
              <span class="modal-icon"><i class="far fa-user fa-lg"></i></span>
              <div>{{data.createdBy}}</div>
            </div>
            <div class="modal-body-content">
              <span class="modal-icon"><i class="far fa-calendar-alt fa-lg"></i></span>
              <div>{{data.createdDate}}</div>
            </div>
            <div class="modal-body-content">
              <span class="modal-icon"><i class="far fa-file-alt fa-lg"></i></span>
              <div class="modal-text-line-break" v-if="!editDescription">
                <div v-if="data.description !== ''" @click="editDescription=true">{{data.description}}</div>
                <div v-else class="description-no-data" @click="editDescription=true">Add a more detailed description</div>
              </div>
              <DetailEdit v-else :data="description" :target="'description'" @save="saveData" @close="closeEdit"></DetailEdit>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DetailEdit from '@/components/draggableTodo/DetailEdit.vue';

export default {
  props: ['data'],
  data() {
    return {
      //title: this.data.title,
      //description: this.data.description,
      editTitle: false,
      editDescription: false
    }
  },
  computed: {
    title() {
      return this.data.title;
    },
    description() {
      return this.data.description;
    }
  },
  components: {
    DetailEdit
  },
  methods: {
    saveData(target, value) {
      this.data[target] = value;
      if(target === 'title') this.editTitle = false;
      else this.editDescription = false;
    },
    closeEdit(target) {
      switch (target) {
        case 'title':
          this.editTitle = false;
          break;
        case 'description':
          this.editDescription = false;
          break;
      }
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 600px;
  /* height: 500px; */
  /* max-height: 500px; */
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header {
  margin: 12px 40px 8px 56px;
  min-height: 32px;
  position: relative;
  z-index: 1;
}
.modal-body {
  margin: 12px 40px 8px 56px;
  position: relative;
}
.modal-body-content {
  margin: 20px 0px;
}
.description-no-data {
  background-color: rgba(9,30,66,.04);
  box-shadow: none;
  border: none;
  border-radius: 3px;
  display: block;
  min-height: 40px;
  padding: 8px 12px;
  text-decoration: none;
  cursor: pointer;
}

.modal-text-line-break {
  word-break: break-all; /* 줄바꿈 */
  white-space:normal; /* 줄바꿈 */
}
.modal-icon {
  left: -40px;
  position: absolute;
}
.modal-close-btn {
  color: #42526e;
  border-radius: 50%;
  position: relative;
  top: 0;
  right: 0;
  height: 32px;
  overflow: hidden;
  padding: 4px;
  margin: 4px;
  width: 32px;
  z-index: 2;
  float: right;
  cursor: pointer;
  text-align: right;
}
input[type=button] {
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 20px;
  margin: 0 10px 10px 0;
  padding: 6px 12px;
  text-align: center;
  border-radius: 3px;
  outline: 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>