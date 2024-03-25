import { createStore } from "vuex";

const localStoragePlugin = (store) => {
  store.commit("initializeTasks");
  store.subscribe((mutation, state) => {
    const taskMutations = ["addTask", "removeTask", "setSelectedTaskId"];
    if (taskMutations.includes(mutation.type)) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  });
};

export default createStore({
  state() {
    return {
      tasks: [],
      selectedTaskId: null,
      selectedDate: null,
    };
  },
  getters: {
    tasksByDate: (state) => (date) =>
      state.tasks.filter((task) => task.date === date),
    allTasks: (state) => state.tasks,
  },
  mutations: {
    setSelectedTaskId(state, taskId) {
      state.selectedTaskId = taskId;
    },
    setSelectedDate(state, selectedDate) {
      state.selectedDate = selectedDate;
    },
    initializeTasks(state) {
      const tasks = localStorage.getItem("tasks");
      state.tasks = tasks ? JSON.parse(tasks) : [];
    },
    addTask(state, task) {
      const nextId =
        state.tasks.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;
      state.tasks.push({ ...task, id: nextId });
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    initializeTasks({ commit }) {
      commit("initializeTasks");
    },
    addTask({ commit }, task) {
      commit("addTask", task);
    },
    removeTask({ commit }, taskId) {
      commit("removeTask", taskId);
    },
    toggleTaskDetails({ commit, state }, taskId) {
      const newId = state.selectedTaskId === taskId ? null : taskId;
      commit("setSelectedTaskId", newId);
    },
    resetTaskDetails({ commit }) {
      commit("setSelectedTaskId", null);
    },
    resetSelectedDate({ commit }) {
      commit("setSelectedDate", null);
    },
    setSelectedDate({ commit }, selectedDate) {
      commit("setSelectedDate", selectedDate);
    },
    selectTask({ commit, state }, taskId) {
      commit("setSelectedTaskId", taskId);
    },
  },
  plugins: [localStoragePlugin],
});
