<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  props: ["project"],

  //   created() {
  //     console.log(this.project);
  //   },
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ this.project.name }}</h5>
      <p class="card-text">
        {{ this.project.description }}
      </p>
      <
      <a href="<!-- BIND SHOW ROUTE -->" class="btn btn-primary"
        >Mostra dettaglio</a
      >
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/general.scss";
</style>
