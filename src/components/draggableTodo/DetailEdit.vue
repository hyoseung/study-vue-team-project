<template>
  <div>
    <textarea v-model="editData" placeholder="Add a more detailed description" @keydown.enter="keydownEnter"></textarea>
    <div>
      <input type="button" class="green" value="Save" @click="saveData">
      <span class="close-btn" @click="$emit('close', target)"><i class="fas fa-times fa-lg"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'target'],
  data() {
    return {
      editData: this.data
    }
  },
  methods: {
    keydownEnter(e) {
      if(this.target === 'title') e.preventDefault();
    },
    saveData() {
      this.$emit('save', this.target, this.editData);
    }
  }
}
</script>

<style>
.close-btn {
  cursor: pointer;
  line-height: 20px;
  margin: 0 10px 10px 0;
  padding: 6px 12px;
}
textarea {
  padding: 5px;
  width: 100%;
  background: rgba(9,30,66,.04);
  box-shadow: none;
  outline: 0;
}
</style>