<template>
  <div>
    <h1>Asesor: {{ name }}</h1>
  </div>
</template>

<script>
import { firestore } from "../firebase";
export default {
  name: "AdviserName",
  data() {
    return { name: "" };
  },
  methods: {
    async getNameAdviser() {
      await firestore
        .collection("advisers")
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          const nameAdviser = [];
          let dataAdviser = {};
          dataAdviser.name = doc.data().name;
          dataAdviser.id = doc.id;
          nameAdviser.push(dataAdviser);
          this.name = nameAdviser[0].name;
        });
    },
  },
  created() {
    this.getNameAdviser();
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
  h1 {
    padding: 0.5rem 0.9rem;
    font-family: Roboto;
    font-size: 1.3rem;
    color: black;
    margin: 0px;
    font-weight: bold;
  }
}
</style>