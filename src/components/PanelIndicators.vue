<template>
  <div class="panel-indicators">
    <p>Panel de indicadores</p>
    <div class="indicators">
      <div class="salesPerHour">
        <p class="title-salesPerHour">Cantidad de ventas x hora</p>
        <v-sparkline
          :fill="fill"
          :gradient="gradient"
          :line-width="width"
          :padding="padding"
          :smooth="radius || false"
          :value="value"
          auto-draw
        ></v-sparkline>
        <p class="average">{{average}}</p>
      </div>
      <div class="aht">
        <p>AHT</p>
        <v-progress-circular
          :rotate="360"
          :size="120"
          :width="15"
          :value="valueCircular"
          color="teal"
        >{{valueCircular}}</v-progress-circular>
      </div>
      <div class="sales-acumulated">
        <p>Ventas Acumuladas</p>
        <v-progress-linear v-model="skill" color="#79BB73" height="25">{{ valueAccumulated }}</v-progress-linear>
      </div>
      <div class="sales-completed">
        <p>Ventas Completadas</p>
        <v-progress-linear v-model="skill" color="#F382D3" height="25">{{ salesCompleted }}</v-progress-linear>
      </div>
    </div>
  </div>
</template>


<script>
import { firestore } from "../firebase";

const gradients = [["#00c6ff", "#F0F"]];
export default {
  data: () => ({
    valueCircular: "20",
    fill: false,
    gradient: gradients[0],
    gradients,
    padding: 8,
    radius: 10,
    valueAccumulated: "",
    salesCompleted: "",
    value: [],
    average: "",
    width: 2,
    skill: 20,
    knowledge: 33,
    power: 78,
  }),
  methods: {
    async getSalesPerHour() {
      await firestore
        .collection("salesPerHour")
        .get()
        .then((doc) => {
          const sales = [];
          doc.forEach((doc) => {
            sales.push(Object.values(doc.data()));
          });
          this.value = sales[0];
          return this.value;
        })
        .then((value) => {
          let average = 0;
          value.forEach((value) => {
            average += value;
          });
          const averageTotal = average / value.length;
          const averageTotal2 = averageTotal.toString().split(".")[0];
          this.average = averageTotal2;
        });
    },
    async getAccumulatedSales() {
      await firestore
        .collection(" accumulatedSales")
        .get()
        .then((doc) => {
          const total = [];
          doc.forEach((doc) => {
            total.push(Object.values(doc.data()));
          });
          this.valueAccumulated = total[0][0];
        });
    },
    async getSalesCompleted() {
      await firestore
        .collection("salesCompleted")
        .get()
        .then((doc) => {
          const total = [];
          doc.forEach((doc) => {
            total.push(Object.values(doc.data()));
          });
          this.salesCompleted = total[0][0];
        });
    },
  },
  created() {
    this.getAccumulatedSales();
    this.getSalesPerHour();
    this.getSalesCompleted();
  },
};
</script>

<style lang="scss" scoped>
.panel-indicators {
  height: 18rem;
  p {
    font-weight: bold;
    font-size: 2rem;
    color: #ff7900;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .indicators {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    margin-bottom: 3rem;
    height: 12rem;
    .salesPerHour {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 1rem;
      flex-grow: 1;
      p {
        color: #575757;
        font-size: 1rem;
        font-weight: 900;
        margin-bottom: 2rem;
        margin-top: -2rem;
      }
      .average {
        position: absolute;
        margin-top: 6rem;
      }
    }
    .aht {
      display: flex;
      flex-direction: column;
      margin: 0rem 3rem 0rem;
      align-items: center;
      flex-grow: 1;
      p {
        color: #575757;
        font-size: 1rem;
        font-weight: 900;
      }
    }
    .sales-acumulated {
      flex-grow: 1;
      padding: 0rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #575757;
        font-size: 1rem;
        font-weight: 900;
      }
    }
    .sales-completed {
      flex-grow: 1;
      padding: 0rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #575757;
        font-size: 1rem;
        font-weight: 900;
      }
    }
    svg {
      width: 13rem;
      height: 4.3rem;
    }
  }
}
</style>