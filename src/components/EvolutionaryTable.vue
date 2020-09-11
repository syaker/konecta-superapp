<template>
  <div>
    <div class="header-table">
      <h1>Cuadro Evolutivo</h1>
    </div>
    <v-data-table :headers="headers" :items="dataTable" :items-per-page="1"></v-data-table>
  </div>
</template>

<script>
import { firestore } from "../firebase";
export default {
  name: "EvolutionaryTable",
  data() {
    return {
      headers: [
        { text: "Nombre del Indicador", value: "nameIndicator" },
        { text: "Semana 1", value: "week1" },
        { text: "Cuartil", value: "week1Value" },
        { text: "Semana 2", value: "week2" },
        { text: "Cuartil", value: "week2Value" },
        { text: "Semana 3", value: "week3" },
        { text: "Cuartil", value: "week3Value" },
        { text: "Semana 4", value: "week4" },
        { text: "Cuartil", value: "week4Value" },
      ],
      dataTable: [],
    };
  },
  methods: {
    async getAdviser() {
      await firestore
        .collection("advisers")
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          const adviser = [];
          let dataAdviser = {};
          dataAdviser.week1 = doc.data().evolutionaryTable.week1;
          dataAdviser.week2 = doc.data().evolutionaryTable.week2;
          dataAdviser.week3 = doc.data().evolutionaryTable.week3;
          dataAdviser.week4 = doc.data().evolutionaryTable.week4;
          dataAdviser.week1Value = doc.data().evolutionaryTable.week1Value;
          dataAdviser.week2Value = doc.data().evolutionaryTable.week2Value;
          dataAdviser.week3Value = doc.data().evolutionaryTable.week3Value;
          dataAdviser.week4Value = doc.data().evolutionaryTable.week4Value;
          adviser.push(dataAdviser);
          this.dataTable = adviser;
        });
    },
  },
  created() {
    this.getAdviser();
  },
};
</script>

<style lang="scss" scoped>
div {
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #ff7900;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .header-listIndicator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 3rem;
    .v-btn {
      align-self: flex-end;
    }
  }
}
</style>