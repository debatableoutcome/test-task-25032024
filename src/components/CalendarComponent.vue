<template>
  <div class="card flex justify-center">
    <Calendar
      v-model="selectedDate"
      dateFormat="dd MM yy"
      showIcon
      @update:modelValue="onDateSelect"
    />
  </div>
</template>

<script>
import Calendar from "primevue/calendar";
import { mapActions } from "vuex";
import { formatDate } from "@/utils/utils.js";

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      selectedDate: null,
    };
  },

  methods: {
    ...mapActions(["setSelectedDate"]),
    onDateSelect(date) {
      const formattedDate = formatDate(date);

      this.setSelectedDate(formattedDate);
    },
  },
};
</script>
