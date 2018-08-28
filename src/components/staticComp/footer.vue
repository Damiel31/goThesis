<template>
<v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading" ><b>{{cardfooter}}</b></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;{{copyRight.year}} — <strong>{{copyRight.appName}}</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  data: () => ({
  cardfooter :'piste nah jud ni!!!',
  copyRight:{
    year: 2018,
    appName: 'hago kaau ni!'
  },
  icons: [
   'fab fa-facebook',
   'fab fa-twitter',
   'fab fa-google-plus',
   'fab fa-linkedin',
   'fab fa-instagram'
 ]
  })
}

</script>
<style scoped>

.vfooter{
  margin-left: auto;
  margin-top: 20px;
}

</style>
