<template>
  <div>
    <h2>Login</h2>
    <button @click="signInWithGoogle">
      <img :src="require('@/assets/googlelogin.png')" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { signInWithGoogle, getGoogleSignInResult } from '@/firebase';

export default {
  name: 'LoginView',
  methods: {
    ...mapMutations(['setLoggedIn']),
    async signInWithGoogle() {
      try {
        // Google 로그인 시작
        await signInWithGoogle();
        console.log('로그인 시작');
        // 로그인 결과를 가져와서 처리
        await getGoogleSignInResult();
        console.log('로그인 성공');
        // 성공 시에 다른 처리 수행...
      } catch (error) {
        console.error('로그인 에러:', error.message);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: aliceblue;
}

button {
  color: rgb(0, 136, 255);
  cursor: pointer; /* 버튼에 커서를 변경하여 클릭 가능함을 나타냄 */
  border: none; /* 기본 버튼 스타일 제거 */
  background: none; /* 기본 버튼 스타일 제거 */
}
</style>
