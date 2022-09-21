import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const options = {
  confirmButtonColor: "#555",
  cancelButtonColor: "#d9d9d9",
};

const app = createApp(App);

app.use(router);

app.use(VueSweetalert2, options);

app.mount("#app");
