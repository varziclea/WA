<template>
  <div id="app">
    <router-view v-if="podaci" :podaci="podaci"></router-view>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return {
      podaci: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://api.github.com/repos/vuejs/vue/commits")
        .then((funk) => {
          funk.data.forEach((pod) => {
            this.podaci.push({
              Sha: pod.sha,
              Ime: pod.commit.author.name,
              Email: pod.commit.author.email,
              Poruka: pod.commit.message,
              Datum: pod.commit.author.date,
            });
          });
        });
    },
  },
};
</script>