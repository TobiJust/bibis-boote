<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      lg="4"
      v-for="(boat, index) in boats"
      :key="index"
      class="boat"
    >
      <SingleBoat :boat="boat" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      boats: [],
    }
  },
  methods: {
    getBoats: async function () {
      const messagesRef = this.$fire.firestore.collection(process.env.firestoreCollection)

      const querySnapshot = await messagesRef.get()
      console.log(querySnapshot)
      this.boats = querySnapshot.docs
        .map((doc) => Object.assign({ id: doc.id }, doc.data()))
        .sort((a, b) => a.costs.hour - b.costs.hour)
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
