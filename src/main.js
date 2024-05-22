import { createApp } from "vue";
import App from "./App.vue";

// import boostrapp css
import "bootstrap/dist/css/bootstrap.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { 
    faHtml5,
    faCss3Alt,
    faJs,
    faPhp,
    faGit,
    faLaravel
 } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
    faHtml5,
    faCss3Alt,
    faDatabase,
    faJs,
    faPhp,
    faGit,
    faLaravel
);

// import { createApp } from "vue";
// import App from "./App.vue";
// createApp(App).mount("#app");
// app.component("font-awesome-icon", FontAwesomeIcon);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
// app.use(router);
app.mount("#app");