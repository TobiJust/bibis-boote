<template>
  <v-container fluid class="primary lighten-4 py-8">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="py-14">{{ $t('our_prices') }}</h1>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          lg="4"
          v-for="(boat, index) in boats"
          :key="index"
          class="cost"
        >
          <v-card class="mx-auto" max-width="500" elevation="10">
            <v-card-text class="text-center text-body-1 py-8 black--text">
              <h2 class="mb-4 font-weight-light">
                {{ boat.name }} {{ $t('rent') }} {{ $t('from') }}
              </h2>
              <h1 class="my-8 text-bold">{{ boat.costs.hour }}€</h1>
              <v-list class="mx-14">
                <v-list-item v-for="(cost, time) in boat.costs" :key="time">
                  <v-list-item-action>
                    <v-icon color="green lighten-2">mdi-check</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="`${cost}€ ${$t('per')} ${$t(time)}`"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-right">
          <v-btn :to="localePath({ name: 'boats' })" color="secondary" large>
            Boats <v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
    getBoats: async function () {
      const messagesRef = this.$fire.firestore.collection('boat')

      const querySnapshot = await messagesRef.get()
      console.log(querySnapshot)
      this.boats = querySnapshot.docs
        .map((doc) => Object.assign({ id: doc.id }, doc.data()))
        .sort((a, b) => a.costs.hour - b.costs.hour)
    },
  },
  mounted() {
    this.getBoats()
  },
}
</script>
<style scoped>
.cost:hover {
  transform: scale(1.01) !important;
}
</style>
