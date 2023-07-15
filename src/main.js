import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/style.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App).use(router);
app.use(VueAxios, { $request: axios });
app.use(VueSweetalert2);
app.mount("#app");
