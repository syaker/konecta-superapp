<template>
  <v-app>
    <Navigation app />
    <v-app-bar app color="#03dac5"></v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.v-main {
  background-color: #F5F6F9;
}
.container {
  background-color: #F5F6F9;
  padding: 1rem 4rem;
}
</style>
