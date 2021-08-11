<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" class="pa-0">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12" lg="8" v-if="boat">
        <h1>{{ boat.name }} {{ $t('rent') }} in Groß Köris</h1>
        <v-divider class="mb-6"></v-divider>
        <v-img :src="imageLink(boat.image)" max-height="700"></v-img>
        <h2 class="text-center my-6">{{ $t('rates') }}</h2>

        <v-row>
          <v-col cols="4">
            <v-card color="grey lighten-3" class="text-center" outlined>
              <span class="text-h4">{{ boat.costs.hour }}€ </span><br />
              Stunde
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="grey lighten-3" class="text-center" outlined>
              <span class="text-h4">{{ boat.costs.halfDay }}€ </span><br />
              1/2 Tag
            </v-card></v-col
          >
          <v-col cols="4">
            <v-card color="grey lighten-3" class="text-center" outlined>
              <span class="text-h4">{{ boat.costs.day }}€ </span><br />
              Tag
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>

        <h2 class="text-center my-6">{{ $t('equipments') }}</h2>
        <v-list class="text-center">
          <v-list-item v-for="(item, index) in boat.equipments" :key="index">
            <v-list-item-content>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider class="my-6"></v-divider>
      </v-col>
      <v-col cols="12" lg="4">
        <OpeningHours class="mb-6" />
        <Info class="my-6" />
      </v-col>
    </v-row>
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
    imageLink: function (img) {
      return require('@/assets/boats/' + img)
    },
    getBoats: async function () {
      const messagesRef = this.$fire.firestore.collection('boat')

      const querySnapshot = await messagesRef.get()
      this.boats = querySnapshot.docs.map((doc) =>
        Object.assign({ id: doc.id }, doc.data())
      )
    },
  },
  mounted() {
    this.getBoats()
  },
  computed: {
    boat() {
      return this.boats.find((b) => b.id == this.$route.params.id)
    },
    breadcrumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.split('/')
      const crumbs = []
      let path = ''

      params.forEach((param, index, { length }) => {
        path = param == '' ? '' : `${path}/${param}`
        const match = this.$router.match(path)
        console.log(match)

        if (param !== this.$i18n.locale) {
          if (index === length - 1) {
            crumbs.push({
              text: this.boat ? this.boat.name.toUpperCase() : '',
              disabled: true,
            })
          } else {
            crumbs.push({
              text: param == '' ? '/' : param.toUpperCase(),
              disabled: false,
              href: `${path}/${
                param == '' && this.$i18n.locale !== this.$i18n.defaultLocale
                  ? this.$i18n.locale
                  : ''
              }`,
            })
          }
        }
      })

      return crumbs
    },
  },
}
</script>
