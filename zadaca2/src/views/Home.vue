<template>
  <div class="home">
    <v-text-field
      v-model="inputName"
      id="reqData"
      name="name"
      label="Unesi ime"
      counter="15"
      style="width: 400px; padding: 30px"
    ></v-text-field>
    <div class="table" style="padding: 20px">
      <v-btn @click="getData()" id="p_button" color="green">Podnesi</v-btn>
      <v-data-table :headers="headers" :items="info"></v-data-table>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      info: [],
      inputName: "",
    };
  },
  methods: {
    getData() {
      var request = this.inputName;
      let reqone = "https://api.nationalize.io/?name=" + request;
      let reqtwo = "https://api.agify.io/?name=" + request;
      let reqthree = "https://api.genderize.io/?name=" + request;

      const requestOne = this.$http.get(reqone);
      const requestTwo = this.$http.get(reqtwo);
      const requestThree = this.$http.get(reqthree);

      this.$http
        .all([requestOne, requestTwo, requestThree])
        .then((response) => {
          this.info.push({
            name: response[0].data.name,
            country: {
              country1: response[0].data.country[0].country_id,
              country2: response[0].data.country[1].country_id,
              country3: response[0].data.country[2].country_id,
            },
            countryProbability: {
              probability1: response[0].data.country[0].probability,
              probability2: response[0].data.country[1].probability,
              probability3: response[0].data.country[2].probability,
            },
            age: response[1].data.age,
            gender: response[2].data.gender,
            genderProbability: response[2].data.probability,
          });
        });
    },
  },
  components: {},
  computed: {
    headers() {
      return [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Age",
          value: "age",
        },
        { text: "Gender", value: "gender" },
        { text: "Gender Probability", value: "genderProbability" },
        {
          text: "Country",
          value: "country.country1",
        },
        {
          text: "Country Probability",
          value: "countryProbability.probability1",
        },
        {
          text: "Country",
          value: "country.country2",
        },
        {
          text: "Country Probability",
          value: "countryProbability.probability2",
        },
        {
          text: "Country",
          value: "country.country3",
        },
        {
          text: "Country Probability",
          value: "countryProbability.probability3",
        },
      ];
    },
  },
};
</script>
<style></style>
