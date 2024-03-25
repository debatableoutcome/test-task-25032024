<template>
  <section
    v-if="allTasks.length > 0"
    class="w-5/6 mx-auto gap-0.5 overflow-y-scroll h-full task-list"
  >
    <TaskCard v-for="task in allTasks" :key="task.id" :task="task" />
  </section>
  <section v-else class="w-5/6 mx-auto gap-0.5 relative h-full">
    <p class="text-xl absolute top-20 right-36">The task list is empty</p>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TaskCard from "@/components/TaskCard.vue";
import { formatDate } from "@/utils/utils";

export default {
  components: {
    TaskCard,
  },
  computed: {
    ...mapState(["selectedTaskId", "selectedDate"]),
    ...mapGetters(["allTasks"]),
    filteredTasks() {
      if (!this.selectedDate) return this.allTasks;
      return this.allTasks.filter((task) => {
        const taskDateFormatted = formatDate(new Date(task.date));
        return taskDateFormatted === this.selectedDate;
      });
    },
  },
  methods: {},
};
</script>

<style>
.task-list::-webkit-scrollbar {
  display: none;
}

.task-list {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
