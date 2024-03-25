<template>
  <div
    v-show="shouldBeDisplayed"
    :style="cardStyle"
    class="mt-5"
    @mouseenter="showDeleteButton = true"
    @mouseleave="showDeleteButton = false"
  >
    <Card @click="selectCard(task.id)" class="cursor-pointer py-0">
      <template #header>
        <div class="w-full h-full bg-pink-200 relative">
          <Button
            v-show="showDeleteButton"
            style="position: absolute; top: 0.5rem; right: 0.5rem"
            icon="pi pi-times"
            @click.stop="removeTask(task.id)"
            aria-label="Delete"
            severity="secondary"
          />
        </div>
      </template>
      <template #title>
        <p class="text-3xl" :tabindex="tabIndex">{{ task.name }}</p>
      </template>
      <template #subtitle>
        <p :tabindex="tabIndex">{{ task.date }}</p>
      </template>
      <template #content v-if="isSelected">
        <div class="w-full flex justify-center align-end flex-col gap-6">
          <p class="text-2xl" :tabindex="tabIndex">{{ task.description }}</p>
        </div>
      </template>
      <template #footer v-if="isSelected">
        <Button
          @click.stop="goBackToCards"
          :tabindex="tabIndex"
          aria-label="Back"
          severity="secondary"
          >Back to tasks
        </Button>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  components: { Card, Button },
  props: {
    task: Object,
  },
  data() {
    return {
      showDeleteButton: false,
    };
  },
  computed: {
    ...mapState(["selectedTaskId"]),
    isSelected() {
      return this.selectedTaskId === this.task.id;
    },
    cardStyle() {
      return {
        visibility: this.shouldBeDisplayed ? "visible" : "hidden",
      };
    },
    shouldBeDisplayed() {
      if (this.selectedTaskId) {
        return this.selectedTaskId === this.task.id;
      } else if (this.$store.state.selectedDate) {
        return this.task.date === this.$store.state.selectedDate;
      }

      return true;
    },

    tabIndex() {
      return this.shouldBeDisplayed ? "0" : "-1";
    },
  },
  methods: {
    ...mapActions(["selectTask", "removeTask", "resetTaskDetails"]),
    selectCard(taskId) {
      this.selectTask(taskId);
    },
    handleMouseEnter() {
      this.showDeleteButton = true;
    },
    handleMouseLeave() {
      this.showDeleteButton = false;
    },
    goBackToCards() {
      this.$store.dispatch("resetTaskDetails");
    },
  },
};
</script>
