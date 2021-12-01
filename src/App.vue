<template>
  <v-app id="inspire" font-family="Rasa">
    <v-header>
      <div class="logotype">
        <h1>Logotype</h1>
      </div>
    </v-header>
    <v-main>
      <v-subheader class="views">
        <div>
          <v-btn
            class="btn-list"
            color="rgba(144, 83, 83, 1)"
            outlined
            rounded
            text
            >Lista</v-btn
          >
        </div>
        <div>
          <v-btn
            class="btn-favourites"
            color="rgba(144, 83, 83, 1)"
            outlined
            rounded
            text
            >Favoritos</v-btn
          >
        </div>
      </v-subheader>
      <v-container>
        <v-row>
          <v-col v-for="n in 9" :key="n" cols="4">
            <v-card
              class="mx-auto rounded-xl"
              min-width="357"
              height="180"
              color="#FFC086"
            >
              <v-img
                class="rounded-xl float-left"
                width="184"
                height="180"
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://picsum.photos/id/11/500/300"
              ></v-img>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    Raza
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn
                  class="btn-edit"
                  color="rgba(144, 83, 83, 1)"
                  outlined
                  rounded
                  text
                >
                  Editar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="rgba(255, 224, 144, 1)" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="rgba(144, 83, 83, 1)"
          text
          rounded
          class="my-2 links"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center" cols="12">
          <strong class="copyright">Copyright</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: ["Contact", "Follow", "About"],
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rasa:wght@300&display=swap");
v-app {
  font-family: Rasa, "Rasa";
}
v-header {
  background-color: rgba(255, 224, 144, 1);
  height: 100px;
  .logotype {
    justify-content: center;
    display: flex;
  }
}
.views {
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
  display: flex;
  .btn-list {
    width: 127px;
    height: 37px;
    margin-right: 20px;
    background: #bafefa;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .btn-favourites {
    background: #bafefa;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
.btn-edit {
  background: #bafefa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.links {
  widows: 37px;
  height: 112px;
  margin-right: 10px;
  background: #bafefa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.copyright {
  color: rgba(144, 83, 83, 1);
}
</style>
