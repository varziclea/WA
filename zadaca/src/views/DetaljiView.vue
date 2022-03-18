<template>
<div>
  <div>IME: {{Data.Ime}} </div>
  <div>EMAIL: {{Data.Email}} </div>
  <div>PORUKA: {{Data.Poruka}} </div>
  <div>DATUM: {{Data.Datum}} </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      Data: {},
    };
  },
  props: ["podaci"],
  mounted() {
    this.sha = this.$route.params.sha;
    this.Data = this.podaci.find((Data) => Data.Sha == this.sha);
  },
};
</script>