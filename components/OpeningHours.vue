<template>
  <v-card class="pa-6">
    <h2 class="mb-6">
      <v-icon large>mdi-calendar-check</v-icon> {{ $t('opening_hours') }}
    </h2>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.monday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.tuesday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.wednesday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.thursday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.friday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.saturday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="auto" class="mr-auto py-0">
        {{ $t('weekdays.sunday') }}
      </v-col>
      <v-col cols="auto" class="py-0"> 9:00 - 18:00 </v-col>
    </v-row>
  </v-card>
</template>
