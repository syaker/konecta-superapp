<template>
  <header>
    <p>Hola, {{name}}</p>
  </header>
</template>

<script>
export default {
  name: "CouchName",
  data() {
    return { name: "Jimena" };
  },
};
</script>

<style lang="scss" scoped>
header {
	background-color: white;
	p {
      padding: 0.5rem 0.9rem;
      font-family: Roboto;
      font-size: 1.3rem;
      color: #2276bb;
      margin: 0px;
      font-weight: bold;
    }
  }
</style>