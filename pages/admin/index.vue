<template>


  <v-container>


    <v-row>


      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >


        <v-slide-item v-slot="{ active }">


          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="200"
            @click="newBoat(0)"
          >


            <v-row class="fill-height" align="center" justify="center">


              <v-icon
                color="white"
                size="48"
                v-text="'mdi-plus-circle-outline'"
              ></v-icon>


            </v-row>


          </v-card>


        </v-slide-item>


        <v-slide-item v-for="(boat, n) in boats" :key="n" v-slot="{ active }">


          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="200"
            @click="selectBoat(boat, n + 1)"
          >


            <v-img
              :src="boat.image"
              :height="active ? '195px' : '200px'"
              width="200px"
              class="white--text align-end"
            >


              <v-card-title> {{ boat.name }} </v-card-title>


            </v-img>


          </v-card>


          <!-- <SingleBoat :boat="boat" /> -->


        </v-slide-item>


      </v-slide-group>


    </v-row>


    <v-divider class="my-4" />


    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      top
      :color="isAdded ? 'success' : 'info'"
      elevation="24"
    >
       {{ snackbarText }}
    </v-snackbar>


    <v-row v-if="selectedBoat == null" align="center" justify="center">


      <v-col cols="12" class="py-8 text-center">


        <h2>No boat selected</h2>


      </v-col>


    </v-row>


    <v-row v-if="selectedBoat != null" class="mb-8">


      <v-col cols="12">


        <v-hover v-slot="{ hover }">


          <v-card
            color="grey lighten-1"
            class="ma-4"
            height="250"
            @click="click1"
          >


            <v-row
              v-if="selectedBoat.image == null"
              class="fill-height"
              align="center"
              justify="center"
            >


              <v-icon
                color="white"
                size="48"
                v-text="'mdi-plus-circle-outline'"
              ></v-icon>


              <div>Upload image for new boat</div>


            </v-row>


            <v-img
              v-if="selectedBoat.image"
              :src="selectedBoat.image"
              height="250px"
            >


              <div
                v-if="hover"
                class="
                  foo
                  d-flex
                  transition-fast-in-fast-out
                  grey
                  darken-2
                  v-card--reveal
                  text-h5
                  white--text
                "
                style="height: 100%"
                align="center"
                justify="center"
              >


                <v-icon color="white" size="48" v-text="'mdi-autorenew'">


                </v-icon>


                <div>Upload new image for selected boat</div>


              </div>


            </v-img>


          </v-card>


        </v-hover>


      </v-col>


      <v-col cols="6">


        <v-text-field
          label="Title"
          outlined
          v-model="selectedBoat.name"
        ></v-text-field>


        <v-textarea
          label="Description"
          outlined
          v-model="selectedBoat.description"
          class="text-pre"
        ></v-textarea>


        <v-text-field
          label="Number of Seats"
          outlined
          v-model="selectedBoat.seats"
        ></v-text-field>


      </v-col>


      <v-col cols="6">


        <v-text-field
          label="Hour"
          prefix="€"
          outlined
          v-model="selectedBoat.costs.hour"
        ></v-text-field>


        <v-text-field
          label="Half Day"
          prefix="€"
          outlined
          v-model="selectedBoat.costs.halfDay"
        ></v-text-field>


        <v-text-field
          label="Day"
          prefix="€"
          outlined
          v-model="selectedBoat.costs.day"
        ></v-text-field>


        <v-divider class="my-4" />


        <div v-for="(equipment, i) in selectedBoat.equipments" :key="i">


          <v-text-field
            :label="'Equipment ' + (i + 1)"
            outlined
            :append-icon="
              i || (!i && selectedBoat.equipments.length > 1)
                ? 'mdi-delete'
                : null
            "
            @click:append="removeEquipment(i)"
            v-model="selectedBoat.equipments[i]"
          ></v-text-field>


          <v-btn
            plain
            secondary
            @click="addEquipment(i)"
            v-show="i == selectedBoat.equipments.length - 1"
          >
             Add equipment
          </v-btn>


        </div>


        <input
          type="file"
          ref="input1"
          style="display: none"
          @change="previewImage"
          accept="image/*"
        />


      </v-col>


    </v-row>


    <v-bottom-navigation fixed grow>


      <v-btn @click="save()" :disabled="!selectedBoat">


        <span>Save</span>


        <v-icon>mdi-content-save</v-icon>


      </v-btn>


      <v-btn @click="remove()" :disabled="!selectedBoat || !selectedBoat.id">
         Delete
        <v-icon>mdi-delete</v-icon>


      </v-btn>


    </v-bottom-navigation>


  </v-container>


</template>


<script>
export default {
  data: () => ({
    boats: [],
    model: null,
    selectedBoat: null,
    uploadValue: 0,
    img1: null,
    imageData: null,
    isAdded: false,
    snackbar: false,
    snackbarText: "",
    value: "recent",
    initialData: {
      type: null,
      costs: {
        day: null,
        halfDay: null,
        hour: null,
      },
      equipments: [""],
      image: null,
      name: "",
      seats: null,
    },
  }),
  methods: {
    removeEquipment: function (index) {
      this.selectedBoat.equipments.splice(index, 1)
    },
    addEquipment: function () {
      this.selectedBoat.equipments.push("")
    },
    selectBoat(boat, index) {
      this.selectedBoat = boat
      this.model = index
    },
    newBoat(index) {
      this.selectedBoat = { ...this.initialData }
      this.model = index
    },
    getBoats: async function () {
      const messagesRef = this.$fire.firestore.collection(
        process.env.firestoreCollection
      )

      const querySnapshot = await messagesRef.get()
      this.boats = querySnapshot.docs
        .map((doc) => Object.assign({ id: doc.id }, doc.data()))
        .sort((a, b) => a.costs.hour - b.costs.hour)
      console.log(this.boats)
    },
    click1() {
      this.$refs.input1.click()
    },

    previewImage(event) {
      this.uploadValue = 0
      this.img1 = null
      this.imageData = event.target.files[0]
      this.onImageUpload()
    },
    onImageUpload() {
      this.img1 = null
      const storageRef = this.$fire.storage
        .ref(`${process.env.firestoreCollection}/${this.imageData.name}`)
        .put(this.imageData)
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (error) => {
          console.log(error.message)
        },
        () => {
          this.uploadValue = 100
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.selectedBoat.image = url
          })
        }
      )
    },
    remove() {
      this.$fire.firestore
        .collection(process.env.firestoreCollection)
        .doc(this.selectedBoat.id)
        .delete()
        .then(() => {
          this.$fire.storage
            .refFromURL(this.selectedBoat.image)
            .delete()
            .then(() => {
              console.log("Deleted image from storage")
            })
            .catch((error) => {
              console.error("Error during deletion of image from storage")
            })
          this.snackbar = true
          this.isAdded = false
          this.snackbarText = `Boat ${this.selectedBoat.name} deleted`
          this.selectedBoat = null
          this.model = null
          this.getBoats()
        })
    },
    save() {
      console.log(this.selectedBoat?.image)
      console.log(this.imageData?.name)
      console.log(!this.imageData?.name)
      if (!this.imageData?.name || !this.selectedBoat.name) {
        this.snackbar = true
        this.isAdded = false
        this.snackbarText = !this.imageData?.name
          ? "No image selected"
          : "No title set"
        return
      }
      // delete old image file location
      this.$fire.storage.refFromURL(this.selectedBoat.image).delete()
      this.$fire.storage
        .ref(
          `${process.env.firestoreCollection}/${this.selectedBoat.name}/${this.imageData.name}`
        )
        .put(this.imageData)
        .then((snapshot) => {
          console.log(snapshot)
          snapshot.ref.getDownloadURL().then((url) => {
            console.log(url)
            this.selectedBoat.image = url
            var storageRef = this.$fire.firestore.collection(
              process.env.firestoreCollection
            )
            if (this.selectedBoat.id != null) {
              // update
              storageRef = storageRef
                .doc(this.selectedBoat.id)
                .update(this.selectedBoat)
            } else {
              // add new
              storageRef = storageRef.add(this.selectedBoat)
            }
            storageRef
              .then((doc) => {
                console.log(doc)
                console.log("Document successfully written!")
                this.snackbar = true
                this.isAdded = true
                this.snackbarText = `New boat ${this.selectedBoat.name} added`
                this.selectedBoat = null
                this.model = null
                this.imageData = null
                this.getBoats()
              })
              .catch((error) => {
                console.error("Error writing document: ", error)
              })
          })
        })
    },
  },
  mounted() {
    console.log(process.env.GMAIL_PASSWORD)
    this.getBoats()
  },
}
</script>


<style scoped>
.foo {
  opacity: 0.6;
}
</style>


