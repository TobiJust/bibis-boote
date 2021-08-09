<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Gallery</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="6"
        lg="3"
        md="4"
        v-for="(image, index) in images"
        :key="index"
      >
        <v-img :src="image"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
        require('@/assets/intro.jpg'),
      ],
    }
  },
}
</script>
