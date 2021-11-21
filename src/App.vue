<template>
  <div class="wrapper">
    <div class="wrapper_content">
      <section>
        <div class="container">
          <!-- first modal -->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
            Show first modal
          </button>

          <modals
            title="First modal"
            v-show="modalFirst"
            @close="modalFirst = false"
          >
            <template v-slot:body>
              <p>text text text</p>
              <button class="btn btnPrimary" @click="modalFirst = false">
                Well Done
              </button>
            </template>
          </modals>

          <!-- second modal -->
          <button
            class="btn btnPrimary"
            @click="modalSecond.show = !modalSecond.show"
          >
            Show modal with form
          </button>

          <modals
            title="Modal with form"
            v-show="modalSecond.show"
            @close="modalSecond.show = false"
          >
            <template v-slot:body>
              <form @submit.prevent="submitSecondForm">
                <label>Name:</label>
                <input type="text" v-model="modalSecond.name" />
                <label>Email:</label>
                <input type="text" v-model="modalSecond.email" />
                <button class="btn btnPrimary" @click="modalFirst = false">
                  Submit
                </button>
              </form>
            </template>
          </modals>

          <!-- modal with validate -->
          <button
            class="btn btnPrimary"
            @click="modalValidate = !modalValidate"
          >
            Show modal with form + validate
          </button>

          <modalValidate v-if="modalValidate" @close="modalValidate = false" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modalValidate from "./components/ModalValidate.vue";
import modals from "./components/UI/Modal.vue";
export default {
  name: "App",
  components: {
    modals,
    modalValidate,
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
    };
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      });
      this.modalSecond.name = "";
      this.modalSecond.email = "";
      this.modalSecond.show = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
