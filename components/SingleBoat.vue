<template>
  <v-card
    class="mx-auto"
    max-width="500"
    elevation="10"
    :to="localePath({ name: 'boats-id', params: { id: boat.id } })"
  >
    <v-img :src="boat.image" height="350px"></v-img>
    <v-card-text class="text-center text-body-1 py-8">
      <v-sheet height="90" class="text--secondary">
        <h2 class="mb-4">{{ boat.name }}</h2>
        <div class="text-pre-wrap">{{ boat.description }}</div>
      </v-sheet>
    </v-card-text>

    <v-card-actions class="justify-space-around grey lighten-3">
      <div>{{ boat.seats }} Pers.</div>
      <v-divider vertical></v-divider>
      <v-btn color="orange lighten-2" text>
        {{ boat.costs.hour }}€ {{ $t("per") }} {{ $t("hour") }}
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn color="orange lighten-2" text>
        {{ boat.costs.day }}€ {{ $t("per") }} {{ $t("day") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    boat: Object,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped></style>
