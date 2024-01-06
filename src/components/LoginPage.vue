<template>
  <div>
    <div>
      <img class="loginlogo" alt="loginlogo" src="../assets/mainlogo.png" />
    </div>
    <div>
      <img class="greenjack" alt="greenjack" src="../assets/greenjack.png" />
    </div>
    <div>
      <img class="wwwlr" alt="wwwlr" src="../assets/wwwlr.png" />
    </div>
    <div>
      <div>
        <img
          class="lookaround"
          alt="lookaround"
          src="../assets/lookaround.png"
        />
      </div>
      <div>
        <img
          class="googlelogin"
          alt="googlelogin"
          src="../assets/googlelogin.png"
        />
      </div>
      <div>
        <img
          class="applelogin"
          alt="applelogin"
          src="../assets/applelogin.png"
        />
      </div>
      <div>
        <p>
          로그인 시 개인정보 처리방침과 서비스 이용약관에 동의한 것으로
          간주합니다
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String,
  },
};
</script>

<style></style>
