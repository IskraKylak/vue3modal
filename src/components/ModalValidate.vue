<template>
  <modal title="Modal with form + validate" @close="$emit('close')">
    <template v-slot:body>
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ errorInput: v$.name.$error }">
          <p class="errorText" v-if="v$.name.required.$invalid">
            Filed is required
          </p>
          <p class="errorText" v-if="v$.name.minLength.$invalid">
            Name mast have at least {{ v$.name.minLength.$params.min }} !
          </p>
          <label>Name:</label>
          <input
            v-model="name"
            :class="{ error: v$.name.$error }"
            @change="v$.name.$touch()"
          />
        </div>
        <div class="form-item" :class="{ errorInput: v$.email.$error }">
          <p class="errorText" v-if="v$.email.required.$invalid">
            Filed is required
          </p>
          <p class="errorText" v-if="v$.email.email">Email is not correct</p>
          <label>Email:</label>
          <input
            :class="{ error: v$.email.$error }"
            v-model="email"
            @change="v$.email.$touch()"
          />
        </div>
        <button class="btn btnPrimary" @click="modalFirst = false">
          Submit
        </button>
      </form>
    </template>
  </modal>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import modal from "./UI/Modal.vue";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { modal },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  validations() {
    return {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
    };
  },
  methods: {
    onSubmit() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
        };
        console.log(user);
        this.name = "";
        this.email = "";
        this.v$.$reset();
        this.$emit("close");
      }
    },
  },
};
</script>

<style>
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13px;
  color: rgb(207, 86, 86);
}

.form-item.errorInput .errorText {
  display: block;
}

input.error {
  border: 1px solid rgb(207, 86, 86);
}
</style>