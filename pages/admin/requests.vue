<template>
  <v-container class="py-8">
    <v-row justify="center">
      <h1>Requests</h1>
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(request, i) in requests"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px" color="teal">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-if="request.name" v-html="request.name"> </strong>
                <div v-else>unknown</div>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  color="green lighten-4"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  new
                </v-chip>
                <strong v-html="request.title"></strong>

                {{
                  $dateFns.formatDistanceToNow(
                    $dateFns.add(0, {
                      seconds: request.time.seconds,
                    })
                  )
                }}
              </v-col>

              <v-col class="grey--text text-truncate hidden-sm-and-down">
                {{ request.email }}
              </v-col>
              <v-col class="grey--text text-truncate hidden-sm-and-down">
                {{ request.phoneNumber }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="request.message"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    requests: [],
  }),
  methods: {
    setToday() {},
    getRequests: async function () {
      const messagesRef = this.$fire.firestore.collection('message')

      const querySnapshot = await messagesRef.get()
      this.requests = querySnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => b.time.seconds - a.time.seconds)
    },
  },
  mounted() {
    this.getRequests()
  },
}
</script>
