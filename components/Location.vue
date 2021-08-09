<template>
  <div>
    <v-row>
      <v-col cols="6"> asdasd </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="6">
        <iframe
          width="700"
          height="440"
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
  </div>
</template>

<style>
#gmap_canvas img {
  max-width: none !important;
  background: none !important;
}
</style>
