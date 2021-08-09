<template>
  <div>
    <v-card class="mx-auto">
      <h1 class="text-center">Contact Us</h1>
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
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                :rules="rules.name"
                filled
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="phoneNumber"
                :error-messages="errors"
                filled
                label="Phone Number"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="rules.email"
                filled
                label="E-mail"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                auto-grow
                filled
                label="Message"
                rows="5"
              ></v-textarea>
              <v-checkbox
                v-model="agreement"
                :rules="rules.required"
                color="deep-purple"
              >
                <template v-slot:label>
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="termsDialog = true"
                    >Terms of Service</a
                  >
                  &nbsp;and&nbsp;
                  <a href="#" @click.stop.prevent="policyDialog = true"
                    >Privacy Policy</a
                  >*
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            type="submit"
            :disabled="!valid"
            :loading="isLoading"
            class="white--text"
            color="secondary accent-4"
            depressed
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>

      <!-- Dialogs -->
      <v-dialog v-model="policyDialog" absolute max-width="400">
        <v-card>
          <v-card-title class="text-h5 grey lighten-3"> Legal </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="termsDialog" absolute max-width="400">
        <v-card>
          <v-card-title class="text-h5 grey lighten-3">
            Terms of Service
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    alert: false,
    message: '',
    policyDialog: false,
    termsDialog: false,
    errors: '',
    form: false,
    isLoading: false,
    valid: false,
    name: '',
    phoneNumber: '',
    email: '',
    rules: {
      name: [(v) => !!v || 'Name is required'],
      email: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      required: [(v) => !!v || 'This field is required'],
    },
  }),
  methods: {
    saveContactMessage: function (e) {
      e.preventDefault()
      let valid = this.$refs.form.validate()
      if (!valid) {
        return
      }
      const messagesRef = this.$fire.firestore.collection('message')
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
