<template>

  <v-app id="inspire">
    <appheader></appheader>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-content>
  <appfooter></appfooter>
  </v-app>



</template>

<script>
  import Vue from 'vue'
  import header from './staticComp/header.vue'
  import footer from './staticComp/footer.vue'

  Vue.component('appheader', header);
  Vue.component('appfooter', footer);

  
  export default {
    data: () => ({
      drawer: null

    }),
    props: {
      source: String
    }
  }
</script>
