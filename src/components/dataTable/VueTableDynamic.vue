<template>
  <div class="v-table-dynamic">
 
  </div>
</template>

<script>
export default {
    name: "VueTableDynamic"
}
</script>

<style lang="scss" scoped>
$textColor: rgba(0,0,0,0.85);
$normalColor: rgba(0,0,0,0.65);
$disabledColor: rgba(0,0,0,0.25);
$borderColor: rgba(217,217,217,1);
$activeColor: #046FDB;
$fontFamily: Arial, Helvetica, sans-serif;

.v-table-dynamic{
  width: 100%;
  display: block;
  box-sizing: border-box;
  font-family: $fontFamily;
  font-size: 13px;
  color: $textColor;
  padding-bottom: 10px;
  overflow: hidden;
}
.v-table{
  position: relative;
  box-sizing: border-box;
  border: none;
}
.v-table::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  z-index: 1;
  border-bottom: 1px solid $borderColor;
}
.v-table.v-show-border{
  border-top: 1px solid $borderColor;
}
.v-table-left-line, .v-table-right-line{
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  z-index: 1;
}
.v-table-left-line{
  left: 0;
  border-left: 1px solid $borderColor;
}
.v-table-right-line{
  right: 0;
  border-right: 1px solid $borderColor;
}

.v-table-scrollbar{
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -8px;
  height: 8px;
  background: transparent;
}

.v-table-header-wrap{
  display: block;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.v-table-fixed{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
  border-bottom: 1px solid $borderColor;
}
.v-table-fixed.is-show-shadow{
  -webkit-box-shadow: 1px 0px 6px rgba(0,0,0,.12);
  box-shadow: 1px 0px 6px rgba(0,0,0,.12);
}
.v-table-body-fixed{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.v-table-row{
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid $borderColor;
  background-color: #FFFFFF;
}
.v-table-row.is-header{
  overflow: hidden;
}
.v-table-row.is-header, 
.table-cell.is-header {
  font-weight: 600;
}
.v-table-row.is-striped{
  background-color: #F9F9F9;
}
.v-table-row.is-hovering{
  background-color: #F3F5F7;
}

.table-check{
  box-sizing: border-box;
  height: 100%;
  padding: 0 8px;
  overflow: hidden;
  -webkit-flex: 0 0 50px;
  -ms-flex: 0 0 50px;
  flex: 0 0 50px;
  border: none;
}

.table-check-all,
.table-check-row{
  box-sizing: border-box;
  height: 12px;
  width: 12px;
  font-weight: 400;
  color: $textColor;
  border: 1px solid $borderColor;
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  i.iconfont{
    font-size: 12px;
  }
}
.table-check-all:hover,
.table-check-row:hover{
  border-color: $activeColor;
}
.table-check-all{
  margin-right: 8px;
}
.table-check-all.is-checked,
.table-check-row.is-checked{
  border-color: $activeColor;
  background-color: $activeColor;
  color: #FFFFFF;
}

.table-cell{
  box-sizing: border-box;
  height: 100%;
  padding: 0 8px;
  overflow: hidden;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: none;
}

.table-check.v-show-border,
.table-cell.v-show-border{
  border-left: 1px solid $borderColor;
}

.table-cell-inner{
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: none;
}

.table-cell-content{
  box-sizing: border-box;
  min-width: 12px;
  min-height: 10px;
  outline: 0;
  text-align:left;
}
.table-cell-content.fill-width{
  width: 100%;
}

.table-cell-content{
  position: relative;
  overflow: hidden;
}

.v-table-tools{
  padding: 8px 0px;
}

.tools-search{
  width: 280px;
  margin-right: 8px;
}

.table-sort{
  width: 20px;
  margin-left: 2px;
  position: relative;
  vertical-align: middle;
  .sort-btns{
    width: 0;
    height: 0;
    border: 5px solid transparent;
    position: absolute;
    left: 5px;
    cursor: pointer;
  }
  .sort-ascending{
    border-bottom-color: #C0C4CC;
    top: 4px;
  }
  .sort-descending{
    border-top-color: #C0C4CC;
    bottom: 4px;
  }
  .sort-ascending.activated{
    border-bottom-color: $activeColor;
  }
  .sort-descending.activated{
    border-top-color: $activeColor;
  }
}

.table-filter{
  position: relative;
  margin-left: 2px;
  line-height: 100%;
  vertical-align: middle;
  cursor: pointer;
  color: $normalColor;
  i.iconfont{
    font-size: 12px;
  }
  i.iconfont.activated{
    color: $activeColor;
  }
}

.table-pagination{
  padding: 0px;
  padding-top: 10px;
}
</style>