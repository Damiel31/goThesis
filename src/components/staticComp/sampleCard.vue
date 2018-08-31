<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="product.image"
          height="200px"
          :alt="product.name"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{product.name}}</div>
            <span class="grey--text">{{product.subinfo}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn color="primary"> Add Product
            <v-icon light right>check_circle</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
        <v-card-text v-show="show">
            <ul v-for="elem in product.descrip">
              <li>{{elem.item}}</li>
            </ul>
         </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      show: false,
      product: {
        image:'https://firebasestorage.googleapis.com/v0/b/fukthesis.appspot.com/o/cctv1.png?alt=media&token=07547908-b19e-44d0-b02e-57af7001c920',
        name: 'HAC-PFW3601-A180-AC24',
        subinfo: '3X2MP Multi-Sensor Panoramic HDCVI IR-Bullet Camera',
        descrip: [
          {item: 'Three 1/2.8 2Megapixel progressive scan CMOS'},
          {item: '1 panoramic view &3 individual 2MP video output simultaneously'},
          {item: 'Max. 15fps@4K,25fps@4M'},
          {item: '120db true WDR,2D&3D NR'},
          {item: 'HDCVI starlight technology'},
          {item: 'Max.20m IR distance'},
          {item: 'IP67&IK10 ingress protection'},
          {item: 'Up to 500m transmission with RG59 coaxial cable'}
        ]
      }
    })
  }
</script>
