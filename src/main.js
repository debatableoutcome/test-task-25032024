import { createApp } from "vue";
import App from "@/App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "@/assets/main.css";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Wind from "@/presets/wind";
import router from "@/router";
import store from "@/store";

const app = createApp(App);
app
  .directive("tooltip", Tooltip)
  .use(ToastService)
  .use(store)
  .use(router)
  .component("Toast", Toast)
  .use(PrimeVue, {
    unstyled: true,
    pt: Wind,
  })
  .mount("#app");
