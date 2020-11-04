<template>
  <div>
    <div class="list-card-details" @click="detailCard">{{todoCard.text}}</div>
    <span class="remove-card-btn" @click="removeCard"><i class="fas fa-trash-alt"></i></span>
  </div>
</template>

<script>
export default {
  props: ['todoCard'],
  methods: {
    removeCard() {
      this.$emit('remove', this.todoCard);
    },
    detailCard() {
      alert(JSON.stringify(this.todoCard));
    }
  }
}
</script>

<style scoped>
.remove-card-btn {
  opacity: .5;
  padding: 4px;
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 40px;
}
.list-card-details {
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;

  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  width:260px;
  overflow:hidden;
}
</style>