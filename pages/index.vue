<template>
  <v-container class="py-8">
    <v-row
      justify="center"
      align="center"
      class="my-8 text-justify text-h6 font-weight-light"
    >
      <v-col cols="6">
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
      <v-col cols="6">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-8">
      <v-col cols="2">
        <h3 class="mb-4">Boote immer vor Ort</h3>
        Einfach vorbeikommen und los paddeln oder telefonisch vorbestellen.
      </v-col>
      <v-col cols="2">
        <h3 class="mb-4">Einzigartige Lage</h3>
        Mitten in der Dahme-Seen-Platte können sie die Natur auf den Wasserwegen
        befahren.
      </v-col>
      <v-col cols="2">
        <h3 class="mb-4">Immer offen</h3>
        365 Tage im Jahr für Sie geöffnet. <br />
        Von 9:00 - 18:00 Uhr.
      </v-col>
    </v-row>
    <Boats />
  </v-container>
</template>
