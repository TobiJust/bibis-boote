<template>
  <v-row justify="center" align="center">
    <v-col
      cols="6"
      lg="4"
      v-for="(boat, index) in boats"
      :key="index"
      class="boat"
    >
      <v-card
        class="mx-auto"
        max-width="500"
        elevation="10"
        :to="localePath({ name: 'boats-id', params: { id: boat.id } })"
      >
        <v-img :src="imageLink(boat.image)" height="350px"></v-img>
        <v-card-text class="text-center text-body-1 py-8">
          <h2 class="mb-4">{{ boat.name }}</h2>
          + {{ $t('optional_waterbag') }}
        </v-card-text>

        <v-card-actions class="justify-space-around grey lighten-3">
          <div>{{ boat.seats }} Pers.</div>
          <v-divider vertical></v-divider>
          <v-btn color="orange lighten-2" text>
            {{ boat.costs.hour }}€ {{ $t('per') }} {{ $t('hour') }}
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn color="orange lighten-2" text>
            {{ boat.costs.day }}€ {{ $t('per') }} {{ $t('day') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      boats: [],
      q: '',
    }
  },
  methods: {
    imageLink: function (img) {
      return require('@/assets/boats/' + img)
    },
    getBoats: async function () {
      const messagesRef = this.$fire.firestore.collection('boat')

      const querySnapshot = await messagesRef.get()
      console.log(querySnapshot)
      this.boats = querySnapshot.docs.map((doc) =>
        Object.assign({ id: doc.id }, doc.data())
      )
      console.log(this.boats)
    },
  },
  mounted() {
    this.getBoats()
  },
}
</script>
<style scoped>
.boat:hover {
  transform: scale(1.01) !important;
}
</style>
