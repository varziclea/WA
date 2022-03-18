<template>
  <div id="home">


    <ul v-for="po in podaci" :key="po.id"><li> <router-link
            class="button"
            :to="{ name: 'Detalji', params: { sha: po.Sha } }"
            >{{ po.Sha }}</router-link
          ></li></ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["podaci"], 
  data: function () {
    return {};
  },
};

</script>