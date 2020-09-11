<script>
import { Line } from "vue-chartjs";
import { firestore } from "../firebase";

export default {
  name: "GraphicsVue",
  extends: Line,
  data() {
    return {
      htc: [],
    };
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Semana1", "Semana2", "Semana3", "Semana4"],
        datasets: [
          {
            label: "Resultado grupal",
            backgroundColor:
              "linear-gradient(180deg, rgba(24, 54, 240, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
            width: 300,
            data: [23, 23, 43, 56, 67],
          },
        ],
      },
      { responsive: true }
    );
  },
  methods: {
    async getHTC() {
      await firestore
        .collection("HTC")
        .get()
        .then((doc) => {
          const htc = [];
          doc.forEach((doc) => {
            htc.push(Object.values(doc.data()));
          });
          this.htc = htc[0];
        });
    },
  },
  created() {
    this.getHTC();
  },
};
</script>


<style lang="scss" scoped>
</style>