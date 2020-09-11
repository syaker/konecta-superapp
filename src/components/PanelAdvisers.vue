<template>
  <div class="panel-advisers">
    <div class="header-advisers">
      <p>Resultados del equipo</p>
      <div>
        <v-btn color="#FF7900" dark large @click="download" height="40">Generar Reporte</v-btn>
        <v-text-field append-icon="mdi-magnify" v-model="search" label="Buscar"></v-text-field>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="advisers"
      :search="search"
      :items-per-page="10"
      :active="this.$props.advisers"
      item-key="id"
    >
      <template v-slot:item.state="{ item }">
        <img :src="item.state" />
      </template>
      <template v-slot:item.create-diagnostic="{ item }">
        <router-link :to="'/home/' + item.id">
          <v-btn class="btn-create-diagnostic" color="#00B8AD">Crear diagnostico</v-btn>
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: ["advisers"],
  data() {
    return {
      search: "",
      headers: [
        { text: "Nombre y Apellido", value: "name" },
        { text: "Estado", value: "state" },
        { text: "KP1", value: "KP1" },
        { text: "KP2", value: "KP2" },
        { text: "KP3", value: "KP3" },
        { text: "", value: "create-diagnostic" },
      ],
    };
  },
  methods: {
    download() {
      import("../vendor/Export2Excel").then((excel) => {
        const filterVal = ["name", "state", "KP1", "KP2", "KP3"];
        const data = this.formatJson(filterVal, this.advisers);
        excel.export_json_to_excel({
          header: [
            this.headers[0].text,
            this.headers[1].text,
            this.headers[2].value,
            this.headers[3].value,
            this.headers[4].value,
          ],
          data,
          filename: "Advisers",
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
};
</script>

<style lang="scss" scoped>
.panel-advisers {
  .header-advisers {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: bold;
      font-size: 1.8rem;
      color: #ff7900;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      width: 27rem;
      margin-top: 1.8rem;
      .v-text-field {
        margin: 0px;
      }
      .v-btn {
        margin-right: 1rem;
      }
    }
  }
  .v-data-table {
    button {
      color: white;
    }
  }
}
</style>