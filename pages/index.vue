<template>
  <div>
    <v-row class="intro"></v-row>
    <v-container class="py-8">
      <v-row justify="center" align="center" class="my-8 text-justify text-h6 font-weight-light">
        <v-col cols="12" lg="6">
          <h2 class="mb-4">{{ $t('title') }} in Groß Köris</h2>
          Herzlich Willkommen! Mit uns kannst du die Gewässer im Dahme-Seenland
          erkunden und das Land Brandenburg aus einem anderen Blickwinkel erleben.
          Sämtliche Boote liegen an unserem Standort Am Hornungsee 4, 15746 Groß
          Köris.
          <br />
          <br />
          Macht euch einen schönen Tag auf dem Wasser, wir freuen uns auf Euch!
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" lg="6">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row justify="center" class="my-8">
        <v-col cols="12" md="4" lg="2">
          <h3 class="mb-4">Boote immer vor Ort</h3>
          Am besten Ihr ruft vorher durch um sicherzustellen, dass Boote da sind für Euren gewünschten Zeitraum.
        </v-col>
        <v-col cols="12" md="4" lg="2">
          <h3 class="mb-4">Einzigartige Lage</h3>
          Von unserem Standort könnt Ihr die Teupitzer Gewässer erkunden oder, wenn Ihr mehrtägige Fahrten
          machen möchtet, geht es Richtung Berlin oder den Spreewald. Unsere Kanadier bieten viel Platz für eine
          ganze Campingausrüstung.
        </v-col>
        <v-col cols="12" md="4" lg="2">
          <h3 class="mb-4">Anreise</h3>
          Wir sind sehr einfach per Auto, Bus und Bahn zu erreichen. <br> <br>
          Weitere Infos unter <nuxt-link :to="localePath('contact')">Kontakt & Anfahrt</nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.intro {
  height: 25vh;
  background: url('@/assets/intro1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 70%;
}

@media screen and (min-width:768px) {
  .intro {
    height: 35vh;
  }
}

@media screen and (min-width:1024px) {
  .intro {
    height: 45vh;
  }
}
</style>
