<template>
  <div>
    <h3 class="text-3xl">Add a task</h3>
    <form
      class="flex align-start justify-center flex-col gap-8 mt-8"
      @submit.prevent="submitForm"
    >
      <div class="flex flex-col gap-2">
        <label class="text-xl" for="taskName">Title</label>
        <InputText id="taskName" type="text" v-model="task.name" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-xl" for="taskDescription">Details</label>
        <Textarea id="taskDescription" v-model="task.description" rows="5" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-xl" for="taskDate">Deadline</label>
        <Calendar id="taskDate" v-model="task.date" />
      </div>
      <Button type="submit" severity="secondary">Submit!</Button>
    </form>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import { formatDate } from "@/utils/utils";

import { mapActions } from "vuex";

export default {
  components: {
    InputText,
    Textarea,
    Calendar,
    Button,
  },
  data() {
    return {
      task: {
        name: "",
        description: "",
        date: null,
      },
    };
  },
  methods: {
    ...mapActions(["addTask"]),

    submitForm() {
      if (this.isFormValid()) {
        const formattedDate = formatDate(this.task.date);
        const newTask = { ...this.task, date: formattedDate };
        this.addTask(newTask);
        this.resetForm();
        this.$router.push("/");
      } else {
        alert("Please fill in al the fields");
      }
    },

    isFormValid() {
      return this.task.name && this.task.description && this.task.date;
    },

    resetForm() {
      this.task = { name: "", description: "", date: null };
    },
  },
};
</script>
