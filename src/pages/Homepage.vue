<script>
import axios from "axios";
import { store } from "../store/index";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { ProjectCard },

  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        store.projects = res.data;
        console.log(store.projects);
      });
    },
  },

  mounted() {
    this.getProjects();
  },
};
</script>
<template>
  <div class="container">
    <div class="row gx-3 gy-3">
      <div class="col" v-for="project in store.projects">
        <project-card :project="project"></project-card>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/general.scss";
</style>
