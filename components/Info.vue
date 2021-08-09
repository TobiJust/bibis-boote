<template>
  <v-card class="pa-6">
    <h2 class="mb-6">
      <v-icon large>mdi-map-marker</v-icon> {{ $t('location') }}
    </h2>

    <p>
      {{ $t('title') }} <br />
      Am Hornungsee 4 <br />
      15746 Groß Köris <br />
    </p>
    <p>
      <v-icon>mdi-phone</v-icon>
      <a href="tel: +4917683403614" class="secondary--text"> 0176 83403614 </a>
      <br />

      <v-icon>mdi-email</v-icon>
      <a href="mailto: mkbhrns@ymail.com" class="secondary--text">
        mkbhrns@ymail.com
      </a>
    </p>
  </v-card>
</template>
<style scoped></style>
