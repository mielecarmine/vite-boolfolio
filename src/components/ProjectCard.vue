<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    getAbstract(string) {
      return string.substr(0, 40) + '...';
    }
  },

  props: ["project"],

  //   created() {
  //     console.log(this.project);
  //   },
};
</script>
<template>
  <div class="card" style="width: 18rem; height: 300px;" >
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">{{ this.project.name }}</h5>
      <p class="card-text">
        {{ this.getAbstract(this.project.description) }}
      </p>
      
      <a href="<!-- BIND SHOW ROUTE -->" class="btn btn-primary">Mostra dettaglio</a>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/general.scss";
</style>
