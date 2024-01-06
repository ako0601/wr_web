// main.js
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { firebaseApp, auth } from '@/firebase'; // 여기서 auth를 import합니다.

const app = createApp(App);

app.use(router);

app.provide('auth', auth);

app.mount('#app');

console.log(firebaseApp);
