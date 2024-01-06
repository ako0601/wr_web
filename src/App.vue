<!-- App.vue -->
<template>
  <div id="app">
    <router-link to="/login">Go to Login</router-link>
    <router-view />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { getGoogleSignInResult } from '@/firebase';
import { provide } from 'vue';
import { auth } from './firebase';

export default {
  name: 'App',

  setup() {
    // auth를 provide
    provide('auth', auth);

    // isLoggedIn을 reactive 변수로 만듦
    const isLoggedIn = ref(false);

    // isLoggedIn이 변경될 때의 로직
    watch(isLoggedIn, (newValue) => {
      console.log('isLoggedIn changed to:', newValue);
    });

    // beforeRouteLeave 훅을 이용한 라우트 변경 감지
    const beforeRouteLeave = (to, from, next) => {
      if (!from || !from.path) {
        console.log('Initial route. No redirection.');
        next();
        return;
      }

      console.log('Previous route name:', from.name || 'None');

      if (to.meta.requiresAuth && !isLoggedIn.value) {
        console.log('Redirecting to LoginView');
        next({ name: 'LoginView' });
      } else if (to.name === 'LoginView' && isLoggedIn.value) {
        // 로그인 성공 시의 처리를 호출
        getGoogleSignInResult();
        console.log('Redirecting to DashboardView');
        next({ name: 'DashboardView' });
      } else {
        next();
      }
    };

    // setup 함수에서 반환해야 하는 객체
    return {
      beforeRouteLeave,
      isLoggedIn,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
