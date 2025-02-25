<template>
    <v-app>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My Vuetify App</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
  
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }} My Vuetify App</span>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        menuItems: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'About', icon: 'mdi-information', to: '/about' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  </style>