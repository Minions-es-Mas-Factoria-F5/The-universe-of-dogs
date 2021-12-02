<template>
  <v-app id="inspire" font-family="Rasa">
    <v-header class="d-flex justify-center">
      <!--  <v-img class="logotype" src="./assets/logo.png"></v-img> -->
      <img src="./assets/logo-map.png" width="200px" />
    </v-header>
    <v-body>
      <v-main>
        <!-- <v-subheader class="views">
          <div>
            <v-btn class="btn-header btn-all" rounded text>Lista</v-btn>
          </div>
          <div>
            <v-btn class="btn-header btn-all" rounded text>Favoritos</v-btn>
          </div>
        </v-subheader> -->
        <v-container>
          <v-row>
            <v-col v-for="n in 9" :key="n" cols="4">
              <v-card class="mx-auto rounded-xl card-styles" color="#ffc086">
                <v-img
                  class="rounded-xl float-left"
                  width="184"
                  height="180"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  src="https://picsum.photos/id/11/500/300"
                ></v-img>
                <v-list-item class="breed">
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-h5 mb-1 d-flex justify-center mt-8"
                      display-font="auto"
                    >
                      Raza
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions class="d-flex justify-center">
                  <v-icon
                    ><span class="material-icons favorite_border" width></span
                  ></v-icon>
                  <!--  <v-btn class="btn-all" rounded text> Editar </v-btn> -->
                  <img src="./assets/heart-icon-dogs.svg" width="34px" />
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-body>
    <v-footer color="rgba(255, 224, 144, 1)" padless height="130px">
      <v-row justify="center" no-gutters>
        <!-- <v-btn
          class="btn-all my-2 links"
          v-for="link in links"
          :key="link"
          text
          rounded
        >
          {{ link }}
        </v-btn> -->
        <v-col class="text-center" cols="12">
          <strong class="copyright">Copyright &copy;</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
/* export default {
  name: "App",
  data: () => ({
    links: ["Contact", "Follow", "About"],
  }),
}; */
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rasa:wght@300&display=swap");

v-header {
  background-color: rgba(255, 224, 144, 1);
  height: 150px;
  padding: 1em;
  display: flex;
  /* .logotype {
    justify-content: center;
    text-align: center;
    width: 7px;
  } */
}
v-body {
  background-color: #ffeed4;
  padding: 4em;
  font-family: Rasa;
}
v-footer {
  padding: 4em;
  height: 130px;
  .links {
    widows: 37px;
    height: 112px;
  }
  .copyright {
    color: rgba(144, 83, 83, 1);
  }
}
.views {
  margin-bottom: 25px;
  justify-content: center;
  display: flex;
  .btn-header {
    width: 127px;
    height: 37px;
    margin: 18px;
  }
}
.btn-all {
  background: #bafefa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 7px;
}
.btn-all:hover {
  background: white;
}
.btn-all:focus {
  background: white;
}
.btn-all:active {
  background: white;
}
.card-styles {
  min-width: 357px;
  height: 180px;
  font-family: Rasa, "Rasa";
}
</style>
