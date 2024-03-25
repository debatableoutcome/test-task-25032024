<template>
  <Button
    @click="navigateToCreateTask"
    icon="pi pi-plus"
    class="absolute right-0 top-0 m-4 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
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
    navigateToCreateTask() {
      this.$router.push({ name: "CreateTask" });
    },
  },
};
</script>
