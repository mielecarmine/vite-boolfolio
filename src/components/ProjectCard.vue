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
      <h4 class="card-title">{{ this.project.name }}</h4>
      <hr>
      <p class="card-text">
        {{ this.getAbstract(this.project.description) }}
      </p>
      <span v-if="this.project.type.label == 'Frontend'"  class="badge-frontend">{{ this.project.type.label }}</span>
      <span v-else-if="this.project.type.label == 'Backend'"  class="badge-backend">{{ this.project.type.label }}</span>
      <span v-else-if="this.project.type.label == 'Full-stack'"  class="badge-fullstack">{{ this.project.type.label }}</span>
      
      <a href="<!-- BIND SHOW ROUTE -->" class="btn btn-primary">Mostra dettaglio</a>
    </div>
  </div>
</template>
<style lang="scss">
@use "../styles/general.scss";

.badge-frontend {
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: baseline;
  border-radius: 10px;
  line-height: 1;
  padding: 5px 15px;
  background-color: #a51ad6;
  color: white;
  margin-bottom: 10px;
}

.badge-backend {
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: baseline;
  border-radius: 10px;
  line-height: 1;
  padding: 5px 15px;
  background-color: #b6bc90;
  color: white;
  margin-bottom: 10px;
}

.badge-fullstack {
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: baseline;
  border-radius: 10px;
  line-height: 1;
  padding: 5px 15px;
  background-color: #9096bb;
  color: white;
  margin-bottom: 10px;
}

</style>
