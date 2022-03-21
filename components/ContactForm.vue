<template>
  <div>
    <h1 :class="{ 'text-center': !dense }">Contact Us</h1>
    <v-alert v-if="alert" color="green lighten-2" dark>
      Nachricht erfolgreich gesendet
    </v-alert>
    <v-form
      ref="form"
      v-model="valid"
      method="POST"
      lazy-validation
      @submit.prevent="saveContactMessage"
    >
      <v-container :class="{ 'pa-0': dense }">
        <v-row>
          <v-col cols="12">
            Möchtest Du ein Kanadier oder Kajak mieten? Du hast Anregungen zur
            Verbesserung oder Wünsche, dann schreib uns.
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="dense ? 6 : 12" :class="{ 'pr-4': dense }">
            <v-text-field
              v-model="name"
              :rules="rules.name"
              :background-color="dark ? 'grey darken-2' : ''"
              :dark="dark"
              filled
              label="Name"
              color="white"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="rules.email"
              :background-color="dark ? 'grey darken-2' : ''"
              :dark="dark"
              filled
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              :error-messages="errors"
              :background-color="dark ? 'grey darken-2' : ''"
              :dark="dark"
              filled
              label="Phone Number"
            ></v-text-field>
          </v-col>
          <v-col :cols="dense ? 6 : 12">
            <v-textarea
              v-model="message"
              auto-grow
              :background-color="dark ? 'grey darken-2' : ''"
              :dark="dark"
              filled
              label="Message"
              rows="5"
            ></v-textarea>
            <v-checkbox
              v-model="agreement"
              :rules="rules.required"
              :dark="dark"
              color="secondary"
            >
              <template v-slot:label>
                I agree to the&nbsp;
                <a href="#" @click.stop.prevent="goTo('impressum')">
                  Terms of Service
                </a>
                &nbsp;and&nbsp;
                <a href="#" @click.stop.prevent="goTo('privacy')">
                  Privacy Policy </a
                >*
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-divider v-show="!dense"></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          :disabled="!valid"
          :loading="isLoading"
          class="white--text"
          color="secondary accent-4"
          depressed
          :dark="dark"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    dense: Boolean,
    dark: Boolean,
  },
  data: () => ({
    agreement: false,
    alert: false,
    message: "",
    errors: "",
    form: false,
    isLoading: false,
    valid: false,
    name: "",
    phoneNumber: "",
    email: "",
    rules: {
      name: [(v) => !!v || "Name is required"],
      email: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      required: [(v) => !!v || "This field is required"],
    },
  }),
  methods: {
    goTo: function (name) {
      this.$router.push(this.localePath(name))
    },
    saveContactMessage: function (e) {
      e.preventDefault()
      let valid = this.$refs.form.validate()
      if (!valid) {
        return
      }
      const messagesRef = this.$fire.firestore.collection("message")
      let sender = messagesRef.add({
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message,
        time: new Date(),
      })
      sender.then(() => {
        this.$refs.form.reset()
        this.alert = true
      })
    },
  },
}
</script>
