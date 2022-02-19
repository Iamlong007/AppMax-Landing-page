import { createApp } from 'vue'
import App from './App.vue'
require("typeface-fira-sans");
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).mount('#app')
AOS.init();
