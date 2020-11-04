<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>OW생산구매개발팀</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
        <v-list-item v-for="menu in menuList" :key="menu.title" :to="menu.to">
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item :to="{path: '/'}">
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{path: '/about'}">
          <v-list-item-title>ABOUT</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-main class="lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    menuList: [
      { title: 'HOME', to: {path: '/'}},
      { title: 'ABOUT', to: {path: '/about'}},
      { title: 'Draggable Todo', to: {path: '/draggableTodo'}}
    ]
  }),
};
</script>