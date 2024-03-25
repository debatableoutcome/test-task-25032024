<template>
  <div class="absolute right-0 top-0 m-4">
    <AddTaskButton />
  </div>
  <CalendarComponent />
  <TaskList />
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import CalendarComponent from "@/components/CalendarComponent.vue";
import AddTaskButton from "@/components/AddTaskButton.vue";

export default {
  name: "HomeView",
  components: {
    TaskList,
    CalendarComponent,
    AddTaskButton,
  },
  data() {
    return {};
  },
};
</script>
