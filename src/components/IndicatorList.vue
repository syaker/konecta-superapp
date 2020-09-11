<template>
  <div>
    <div class="header-listIndicator">
      <h1>Lista de Indicadores</h1>
      <v-btn color="#FF7900" dark large @click="download" width="180" heigth="80">Generar Reporte</v-btn>
    </div>
    <v-data-table :headers="headers" :items="adviser" :items-per-page="1">
      <template v-slot:item.state="{ item }">
        <img :src="item.state" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { firestore } from "../firebase";
export default {
  name: "IndicatorList",
  data() {
    return {
      headers: [
        { text: "Nombre y Apellido", value: "name" },
        { text: "Estado", value: "state" },
        { text: "KP1", value: "KP1" },
        { text: "KP2", value: "KP2" },
		{ text: "KP3", value: "KP3" },
		{ text: "KP4", value: "KP4" },
		{ text: "KP5", value: "KP5" },
      ],
      adviser: [],
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
          dataAdviser.name = doc.data().name;
          dataAdviser.state = doc.data().state;
          dataAdviser.KP1 = doc.data().KP1;
          dataAdviser.KP2 = doc.data().KP2;
          dataAdviser.KP3 = doc.data().KP3;
          dataAdviser.id = doc.id;
          adviser.push(dataAdviser);
          this.adviser = adviser;
        });
    },
    download() {
      import("../vendor/Export2Excel").then((excel) => {
        const filterVal = ["name", "state", "KP1", "KP2", "KP3"];
        const data = this.formatJson(filterVal, this.adviser);
        excel.export_json_to_excel({
          header: [
            this.headers[0].text,
            this.headers[1].value,
            this.headers[2].value,
            this.headers[3].value,
            this.headers[4].value,
          ],
          data,
          filename: `Adviser ` + this.adviser[0].name,
          autoWidth: true,
          bookType: "xlsx",
        });
      });
    },
    formatJson(filter, jsonData) {
      return jsonData.map((v) =>
        filter.map((j) => {
          return v[j];
        })
      );
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