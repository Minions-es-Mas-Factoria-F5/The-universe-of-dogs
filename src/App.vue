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
            <v-card height="200"></v-card>
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
