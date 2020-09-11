<template>
  <div>
    <div class="point out">
      <div class="div-out"></div>
      <p>Fuera de Objetivo</p>
    </div>
    <div class="point neutral">
      <div class="div-neutral"></div>
      <p>Neutro</p>
    </div>
    <div class="point positive">
      <div class="div-positive"></div>
      <p>En objetivo</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend",
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;
  .point {
    margin: 1.3rem 10px 0rem;
    .div-out {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
      margin: 0rem 10px 0rem;
    }
    .div-neutral {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: yellow;
      margin: 0rem 5px 0rem;
    }
    .div-positive {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: green;
      margin: 0rem 5px 0rem;
    }
    p {
      margin-top: -4px;
      font-weight: bold;
    }
  }
  .out {
    display: flex;
    justify-content: center;
  }
  .neutral {
    display: flex;
  }
  .positive {
    display: flex;
  }
}
</style>