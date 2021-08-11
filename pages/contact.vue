<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-14">Kontakt & Anfahrt</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4" md="6" class="my-auto">
        <Info class="mb-3" />
        <OpeningHours class="mt-3" />
      </v-col>
      <v-divider :vertical="!$vuetify.breakpoint.mobile"></v-divider>
      <v-col cols="12" lg="4" md="6" class="my-auto">
        <iframe
          height="550"
          width="100%"
          :src="
            'https://maps.google.com/maps?width=700&amp;height=440&amp;hl=' +
            $i18n.locale +
            '&amp;q=Am%20Hornungsee%204%2C%20Gro%C3%9F%20K%C3%B6ris%2C%20Germany+(Titel)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
          "
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        >
        </iframe>
        <div
          style="
            position: absolute;
            width: 80%;
            bottom: 10px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            color: #000;
            text-align: center;
          "
        ></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
.mail:hover,
.phone:hover {
  transform: scale(1.05);
}
</style>
