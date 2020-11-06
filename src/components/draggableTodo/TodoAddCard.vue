<template>
  <div>
    <div class="list-card">
      <div class="list-card-details">
        <textarea class="list-card-textarea" placeholder="Enter a title for this card" v-model="title" @keydown.enter="addCard"></textarea>
      </div>
    </div>
    <div class="add-card-control">
      <input type="button" class="green" value="Add card" @click="addCard">
      <span class="close-btn" @click="$emit('close')"><i class="fas fa-times fa-lg"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addCard(e) {
      e.preventDefault(); // enter not work
      if (this.title !== "") {
        this.$emit('add', this.title, e.type);
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
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
  cursor: pointer;
}
.list-card-details {
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
}
textarea.list-card-textarea, textarea.list-card-textarea:focus {
    background: none;
    border: none;
    box-shadow: none;
    height: auto; 
    max-height: 162px;
    min-height: 54px;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    outline: 0;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 54px;
}
.add-card-control {
  float: left;
}
input[type=button] {
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 10px 0;
  padding: 6px 12px;
  text-align: center;
  border-radius: 3px;
  outline: 0;
}
.close-btn {
  cursor: pointer;
  line-height: 20px;
  margin: 0 10px 10px 0;
  padding: 6px 12px;
}
</style>