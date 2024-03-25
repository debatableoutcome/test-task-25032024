<template>
  <Button
    @click="navigateHomeView"
    icon="pi pi-home"
    class="absolute left-80 bottom-20 m-4 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
    severity="secondary"
  />
</template>

<script>
import { useRouter } from "vue-router";
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  methods: {
    navigateHomeView() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>
