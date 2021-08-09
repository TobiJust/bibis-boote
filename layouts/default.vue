<template>
  <v-app>
    <v-app-bar fixed flat app>
      <v-toolbar-title>
        <nuxt-link :to="localePath('index')">
          <v-img src="/logo2.png" max-height="100" max-width="100" contain>
          </v-img>
        </nuxt-link>
        <!-- <nuxt-link :to="localePath('index')">{{ $t('title') }}</nuxt-link> -->
      </v-toolbar-title>
      <v-spacer />
      <v-tabs hide-slider centered>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      right
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <nuxt-link :to="localePath('index')">{{ $t('title') }}</nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(locale, i) in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          router
          exact
        >
          <v-list-item-action>
            <country-flag :country="locale.flag" />
          </v-list-item-action>
          <v-list-item-content>
            {{ locale.name.toUpperCase() }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-banner
        elevation="10"
        color="primary"
        class="white--text text-center text-h5"
      >
        {{ $t('banner_text') }}
        <v-btn
          color="secondary"
          elevation="8"
          href="tel:+4917683403614"
          x-large
          class="text-h5 phone"
        >
          <v-icon left large> mdi-phone </v-icon>
          0176 83403614
        </v-btn>
      </v-banner>
      <!-- <v-container class="my-8"> -->
      <Nuxt />
      <!-- </v-container> -->
      <v-container fluid class="accent white--text pa-8">
        <v-container>
          <v-row justify="center">
            <v-col cols="3">
              <h1>{{ $t('title') }}</h1>
              <p>
                Am Hornungsee 4 <br />
                15746 Groß Köris <br />
              </p>
              <p>
                Öffnungszeiten <br />
                Täglich 9:30 - 18:00
              </p>
            </v-col>
            <v-col cols="6"> <ContactForm dense /> </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-currency-eur',
          title: 'Preise',
          to: '/prices',
        },
        {
          icon: 'mdi-sail-boat',
          title: 'Boote',
          to: '/boats',
        },
        {
          icon: 'mdi-image',
          title: 'Gallery',
          to: '/gallery',
        },
        {
          icon: 'mdi-email',
          title: 'Kontakt',
          to: '/contact',
        },
      ],
      miniVariant: false,
      right: true,
    }
  },
  components: {
    CountryFlag,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style>
.container--fluid {
  padding: 0 !important;
}

a,
.nuxt-link,
.nuxt-link-active {
  text-decoration: none !important;
  color: black !important;
}
.phone:hover {
  transform: scale(1.05);
}
</style>
