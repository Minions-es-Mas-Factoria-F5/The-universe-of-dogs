<template>
  <v-app id="inspire" font-family="Rasa">
    <v-header class="d-flex justify-center">
      <img src="./assets/logo-map.png" width="200px" />
    </v-header>
    <v-body>
      <main>
        <v-subheader class="views">
          <div>
            <router-link to="/List" class="btn-header btn-all" rounded text
              >Lista</router-link
            >
          </div>
          <div>
            <router-link
              to="/Favourites"
              class="btn-header btn-all"
              rounded
              text
              >Favourites</router-link
            >
          </div>
        </v-subheader>
        <v-container grid-list-sm>
          <v-layout row wrap>
            <v-flex>
              <v-row>
                <v-col v-for="n in 9" :key="n" cols="4" md="6" sm="12" lg="4">
                  <v-card
                    class="mx-auto rounded-xl card-styles"
                    color="#ffc086"
                  >
                    <v-img
                      src="https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2072.jpg"
                      id="dogs-img"
                      class="rounded-xl float-left"
                      width="184"
                      height="180"
                    ></v-img>
                    <v-list-item class="breed">
                      <v-list-item-content>
                        <v-list-item-title
                          id="dogs-text"
                          class="text-h7 mb-1 d-flex justify-fi mt-8"
                          display-font="auto"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-actions class="d-flex justify-center">
                      <v-icon
                        ><span
                          class="material-icons favorite_border"
                          width
                        ></span
                      ></v-icon>
                      <img src="./assets/heart-icon-dogs.svg" width="34px" />
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-flex>
          </v-layout>
        </v-container>
      </main>
    </v-body>
    <v-footer color="rgba(255, 224, 144, 1)" padless height="130px">
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          <p class="text-h7 copyright">Minions es Más &copy;</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
  created: () => {
    function api() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          let url = data.message;
          let dogText = document.getElementById("dogs-text");
          let image = document.getElementById("dogs-img");
          let urlCutter = url.split("/")[4].split("-");
          let first =
            typeof urlCutter[1] == "undefined"
              ? ""
              : urlCutter[1].charAt(0).toUpperCase() +
                urlCutter[1].split("").slice(1, urlCutter[1].length).join("");
          let second =
            urlCutter[0].charAt(0).toUpperCase() +
            urlCutter[0].split("").slice(1, urlCutter[0].length).join("");
          image.src = url;
          console.log(image.src);
          dogText.innerHTML = first + " " + second;
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    api();
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rasa:wght@300&display=swap");

v-header {
  background-color: rgba(255, 224, 144, 1);
  height: 150px;
  padding: 1em;
  display: flex;
  .logotype {
    justify-content: center;
    text-align: center;
    width: 7px;
  }
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
