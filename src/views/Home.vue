<template>
  <div class="panel-principal">
    <CouchName />
    <PanelIndicators />
    <PanelAdvisers :advisers="advisers" />
	<LegendVue />
  </div>
</template>

<script>
// @ is an alias to /src
import CouchName from "../components/CouchName";
import PanelAdvisers from "@/components/PanelAdvisers.vue";
import PanelIndicators from "@/components/PanelIndicators.vue";
import { firestore } from "../firebase";
import LegendVue from '../components/Legend.vue';

export default {
  name: "Home",
  components: {
    PanelAdvisers,
    PanelIndicators,
	CouchName,
	LegendVue
  },
  data() {
    return {
      advisers: [],
    };
  },
  methods: {
    async getDataHome() {
      await firestore
        .collection("advisers")
        .get()
        .then((docs) => {
          const advisers = [];
          docs.forEach((doc) => {
			let dataAdviser = {};
			dataAdviser.name = doc.data().name;
			dataAdviser.state = doc.data().state;
			dataAdviser.KP1 = doc.data().KP1;
			dataAdviser.KP2 = doc.data().KP2;
			dataAdviser.KP3 = doc.data().KP3;
			dataAdviser.id = doc.id;
            advisers.push(dataAdviser);
          });
          console.log("Holi");
          this.advisers = advisers;
        });
    },
  },
  created() {
    this.getDataHome();
  },
};
</script>

<style lang="scss" scoped>
.panel-principal {
  display: flex;
  flex-direction: column;
}
</style>