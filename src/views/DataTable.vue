<template>
  <div class="home">
    <header>
      <nav-menu></nav-menu>
    </header>
    <aside>
        <vue-button class="aside-btns" size="mini" @click="setTable">setTable()</vue-button>
        <vue-button class="aside-btns" size="mini" @click="addRow">addRow()</vue-button>
        <vue-button class="aside-btns" size="mini" @click="deleteRow">deleteRow()</vue-button>
        <section>
          <vue-setting v-show="setFlag"></vue-setting>
          <vue-table-dynamic>
            
          </vue-table-dynamic> 
        </section>
    </aside>
  </div>
</template>

<script>

import NavMenu from '@/components/dataTable/NavMenu.vue'
import VueButton from '@/components/dataTable/VueButton.vue'
import VueSetting from '@/components/dataTable/VueSetting.vue'
import VueTableDynamic from '@/components/dataTable/VueTableDynamic.vue'

const random = (length) => {
  if (!(length > 0 && length < 10)) length = 5
  let num = parseInt(Date.now() + Math.random() * 10000000)
  return num.toString(16).slice(0 - length)
}

const dataTable={
  header: [],
  data: [
    ['Index', 'Data1', 'Data2', 'Data3']
  ]
}

for (let i = 0; i < 10; i++) {
  dataTable.data.push([i+1, `${random()}-Cell`, `${random()}-Cell`, `${random()}-Cell`])
}

export default {
  name: "DataTable",
  data() {
    return {
      setFlag: false
    }
  },
  methods: {
    setTable: function() {
        console.log('setTable');
    },
    addRow() {
        console.log('addRow');
    },
    deleteRow() {
        console.log('deleteRow');
    }
  },
  components: {
    NavMenu, 
    VueButton,
    VueSetting,
    VueTableDynamic
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 70px;
  }

  aside{
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 0;
    width: 140px;
    padding: 30px;
    background-color: rgb(33,37,43);
    border-right: 1px solid rgb(33,37,43);
    .aside-btns{
      display: block;
      width: 100%;
      margin-top: 12px;
      font-size: 12px;
      font-family: Arial;
    }
    .aside-line{
      display: block;
      width: calc(100% + 10px);
      margin: 12px -5px 6px -5px;
      border-bottom: 1px solid rgb(127, 130, 139);
    }

  section {
    position: absolute;
    top:70px;
    bottom: 0;
    left: 200px;
    right: 0;
    padding: 20px 25px;
  }
  .downloader{
    height: 0;
    width: 0;
    visibility: hidden;
  }
}

.aside-btns-slot{
  margin-right: 10px;
}
</style>

<style>
.cell--slot-1, .cell--slot-2{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>