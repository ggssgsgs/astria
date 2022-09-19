import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import LoadScript from "vue-plugin-load-script";
import store from "./store";

import "./assets/main.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(LoadScript);

app.mount("#app");
