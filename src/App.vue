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
            <v-card
              class="mx-auto rounded-xl"
              max-width="357"
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
                <v-icon large mdi-Heart></v-icon>
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
            <strong>Copyright</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
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
