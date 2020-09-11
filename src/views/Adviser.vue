<template>
  <div>
    <v-btn text>Regresar</v-btn>
    <AdviserNameVue />
    <IndicatorListVue class="indicator" />
    <Legend />
    <EvolutionaryTableVue />
    <div class="graphics">
      <GraphicsVue />
    </div>
  </div>
</template>

<script>
import AdviserNameVue from "../components/AdviserName.vue";
import EvolutionaryTableVue from "../components/EvolutionaryTable.vue";
import GraphicsVue from "../components/Graphics.vue";
import IndicatorListVue from "../components/IndicatorList.vue";
import Legend from "../components/Legend.vue";

export default {
  name: "Adviser",
  components: {
    IndicatorListVue,
    AdviserNameVue,
    EvolutionaryTableVue,
    GraphicsVue,
    Legend,
  },
};
</script>
<style lang="scss" scoped>
div {
  .v-btn {
    margin-bottom: 1rem;
  }
  .indicator {
    width: 40rem;
  }
}
.graphics {
  div {
    width: 27rem;
    height: 31rem;
  }
}
</style>