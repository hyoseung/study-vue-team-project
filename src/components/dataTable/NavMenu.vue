<template>
  <div class="nav-menu dev-flex-c-b">
      <div class="nav-log dev-flex-c">
          <span class="nav-log-text">{{ logoText }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            logoText: 'DataTable Example'
        }
    }
}
</script>

<style scoped>
.nav-menu {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  color: #FFFFFF;
  transition: all 0.4s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  background-color: rgb(40,44,52);
  box-shadow: 1px 1px 4px 1px rgba(40,44,52, 0.7);
}

.nav-logo-img{
  width: 24px;
  height: 24px;
}
.nav-logo-text{
  margin-left: 14px;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 600;
}

.nav-content-item{
  margin: 0 12px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #FFFFFF;
  cursor: pointer;
}
.nav-content-item:hover{
  color: #E0D5D5;
}
</style>