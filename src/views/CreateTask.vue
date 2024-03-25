<template>
  <HomeButton />
  <TaskForm />
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import HomeButton from "@/components/HomeButton.vue";

export default {
  components: {
    TaskForm,
    HomeButton,
  },
};
</script>
