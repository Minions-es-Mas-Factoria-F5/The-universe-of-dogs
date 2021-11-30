<template>
  <v-app id="inspire">
    <v-header>
      <v-container>
        <h1>HelloWorld</h1>
      </v-container>
    </v-header>
    <v-main>
      <v-subheader>
        <h1>Hello World</h1>
      </v-subheader>
      <v-container>
        <v-row>
          <v-col v-for="n in 9" :key="n" cols="4">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Greyhound divisely hello coldly fonwderfully
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-btn outlined rounded text>Button</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
          <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12"
          >
            <strong class="">Copyright</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rasa:wght@300&display=swap");
</style>

<script>
export default {
  name: "App",

  data: () => ({
    links: ["Contact", "Follow", "About"],
  }),
};
</script>
