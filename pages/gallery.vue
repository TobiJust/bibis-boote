<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="py-14">Gallery</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="6"
        lg="3"
        md="4"
        class="d-flex child-flex"
        v-for="(image, index) in images"
        :key="index"
      >
        <v-card
          class="mx-auto card"
          color="grey lighten-4"
          :width="'100%'"
          max-width="600"
          @click.stop="openDialog(index)"
        >
          <v-img :aspect-ratio="16 / 9" :src="image">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-2"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      content-class="elevation-0"
      v-model="dialog"
      max-width="900"
      overlay-opacity="0.99"
      class="dialog"
    >
      <v-carousel v-model="model" hide-delimiters>
        <v-carousel-item v-for="(n, i) in images" :key="i" :src="n">
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      images: [],
      dialog: false,
      model: 0,
    }
  },
  mounted() {
    this.importAll(require.context('../assets/gallery/', true, /\.jpeg$/))
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) => this.images.push(r(key)))
    },
    openDialog(index) {
      this.dialog = true
      this.model = index
    },
    prev() {
      this.model--
      if (this.model < 0) {
        this.model = this.images.length - 1
      }
    },
    next() {
      this.model++
      if (this.model > this.images.length - 1) {
        this.model = 0
      }
    },
  },
}
</script>
