<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        console.log(res.data);
      });
    },
  },

  //   mounted: {
  //     getProjects() {
  //       axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
  //         console.log(res);
  //       });
  //     },
  //   },
};
</script>
<template>
  <div class="container">
    <h1 @click="getProjects()">Click</h1>
  </div>
</template>
<style lang="scss">
@use "./styles/general.scss";
</style>
