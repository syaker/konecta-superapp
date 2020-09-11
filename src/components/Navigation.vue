<template>
  <v-navigation-drawer absolute permanent left width="320" app>
    <p>COACHING</p>
    <div class="prof-couch">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/konecta-98.appspot.com/o/LOGO-CLUBKONECTA-sombra%201.png?alt=media&token=2ee5b83b-92f3-4f00-8eb5-fbd84587f82c"
      />
      <p>Jimena Lozano</p>
    </div>
    <div class="navigation-btn">
      <router-link to="/home">
        <v-btn class="home" height="70" color="white">Inicio</v-btn>
      </router-link>
      <v-btn height="70" color="white">Seguimiento</v-btn>
      <v-btn height="70" color="white">Notificaciones</v-btn>
      <v-btn height="70" color="white">Perfil</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navigation-btn {
  display: flex;
  flex-direction: column;
  button {
    font-family: Roboto;
    background: white;
  }
  a {
    text-decoration: none;
    .home {
      min-width: 320px;
    }
  }
  a.router-link-exact-active {
    button {
      color: #00968f;
      background: linear-gradient(
        90deg,
        #03dac5 -71.81%,
        rgba(3, 218, 197, 0.0001) 40.33%,
        rgba(3, 218, 197, 0.186725) 100%
      );
      mix-blend-mode: normal;
      opacity: 0.7;
    }
  }
}
P {
  display: flex;
  justify-content: center;
  padding: 1.5rem 0rem 5rem;
  font-weight: bold;
}
.prof-couch {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  p {
    color: #2276bb;
    padding: 16px;
    font-size: 1.2rem;
    font-weight: 400;
  }
  img {
    width: 7rem;
    height: 7rem;
  }
}
</style>
