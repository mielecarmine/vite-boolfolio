<script>
import axios from "axios";
import { store } from "./store/index";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppMain, AppHeader },
};
</script>
<template>
  <div class="container">
    <app-header />
    <app-main />
  </div>
</template>
<style lang="scss">
@use "./styles/general.scss";
</style>
